'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import {
  GraphFooter,
  GraphHeader,
  GraphLegend,
  GraphScroll,
  GraphSkeleton,
  GraphTotal,
} from "./elements";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT = 28;
const TOP = 18;

const LEVEL_COLORS = [
  "rgba(255, 255, 255, 0.07)",
  "rgba(138, 184, 240, 0.3)",
  "rgba(138, 184, 240, 0.55)",
  "rgba(138, 184, 240, 0.8)",
  "#8AB8F0",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseDate = (date: string) => new Date(`${date}T00:00:00Z`);

export const ContributionGraph = ({ user, onError }: { user: string; onError?: () => void }) => {
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const scrollRef = useRef<HTMLDivElement>(null);
  // Held in a ref so a new callback from the parent doesn't trigger a refetch.
  const onErrorRef = useRef(onError);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!Array.isArray(data?.contributions)) throw new Error("Bad response");
        setDays(data.contributions);
        setTotal(data.total?.lastYear ?? null);
        setStatus("ready");
      })
      .catch(() => {
        setStatus("error");
        onErrorRef.current?.();
      });
  }, [user]);

  // Group days into Sunday-first week columns, padding the first week.
  const weeks = useMemo(() => {
    if (!days.length) return [];
    const result: (ContributionDay | null)[][] = [];
    let week: (ContributionDay | null)[] = Array(parseDate(days[0].date).getUTCDay()).fill(null);
    days.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        result.push(week);
        week = [];
      }
    });
    if (week.length) result.push(week);
    return result;
  }, [days]);

  const monthLabels = useMemo(
    () =>
      weeks.flatMap((week, i) => {
        const first = week.find(Boolean);
        if (!first) return [];
        const d = parseDate(first.date);
        // Label the column containing the 1st of a month (skip a cramped label at the very start).
        if (d.getUTCDate() > 7 || (i === 0 && d.getUTCDate() !== 1)) return [];
        return [{ x: LEFT + i * STEP, label: MONTHS[d.getUTCMonth()] }];
      }),
    [weeks]
  );

  // On narrow screens the graph scrolls; start at the most recent weeks.
  useEffect(() => {
    if (status === "ready" && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [status]);

  if (status === "loading") return <GraphSkeleton />;

  // The parent hides the whole graph block on error; render nothing meanwhile.
  if (status === "error") return null;

  const width = LEFT + weeks.length * STEP;
  const height = TOP + 7 * STEP;

  return (
    <>
      <GraphHeader>
        <GraphTotal>
          <strong>{total ?? days.reduce((sum, d) => sum + d.count, 0)}</strong> contributions in the last year
        </GraphTotal>
      </GraphHeader>

      <GraphScroll ref={scrollRef}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ minWidth: width }}
          role="img"
          aria-label={`GitHub contribution graph for ${user}`}
        >
          {monthLabels.map((m) => (
            <text key={`${m.label}-${m.x}`} x={m.x} y={11} className="label">
              {m.label}
            </text>
          ))}
          {["Mon", "Wed", "Fri"].map((label, i) => (
            <text key={label} x={0} y={TOP + (i * 2 + 1) * STEP + CELL - 2} className="label">
              {label}
            </text>
          ))}
          {weeks.map((week, wi) =>
            week.map((day, di) =>
              day ? (
                <rect
                  key={day.date}
                  x={LEFT + wi * STEP}
                  y={TOP + di * STEP}
                  width={CELL}
                  height={CELL}
                  rx={2.5}
                  fill={LEVEL_COLORS[day.level]}
                >
                  <title>
                    {`${day.count} contribution${day.count === 1 ? "" : "s"} on ${parseDate(day.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}`}
                  </title>
                </rect>
              ) : null
            )
          )}
        </svg>
      </GraphScroll>

      <GraphFooter>
        <GraphLegend>
          Less
          {LEVEL_COLORS.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
          More
        </GraphLegend>
      </GraphFooter>
    </>
  );
};
