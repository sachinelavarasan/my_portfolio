import { Metadata } from "next";

import notesData from "./notes.json";
import { Note } from "../../types";
import {
  CardList,
  Divider,
  Intro,
  Main,
  NoteCard,
  NoteDescription,
  NoteFooter,
  NoteTitle,
  PageTitle,
} from "../../components/Notes/elements";

export const metadata: Metadata = {
  title: { absolute: "Notes" },
};

// "2026-10-15" -> "15 Oct 2026" (UTC so the day never shifts)
const formatDate = (iso: string) => {
  const date = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(date.getTime())
    ? iso
    : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
};

// Newest first; same day falls back to title order.
const notes = [...(notesData as Note[])].sort(
  (a, b) => b.added.localeCompare(a.added) || a.title.localeCompare(b.title)
);

export default function NotesPage() {
  return (
    <Main>
      <Divider aria-hidden="true" />
      <PageTitle>Notes</PageTitle>
      <Intro>Personal study notes.</Intro>

      {notes.length === 0 ? (
        <Intro>No notes yet.</Intro>
      ) : (
        <CardList>
          {notes.map((note) => (
            <li key={note.slug}>
              <NoteCard href={`/notes/${note.slug}`}>
                <NoteTitle>{note.title}</NoteTitle>
                {note.description && <NoteDescription>{note.description}</NoteDescription>}
                <NoteFooter>
                  <time dateTime={note.added}>Added {formatDate(note.added)}</time>
                  <span className="arrow" aria-hidden="true">→</span>
                </NoteFooter>
              </NoteCard>
            </li>
          ))}
        </CardList>
      )}
    </Main>
  );
}
