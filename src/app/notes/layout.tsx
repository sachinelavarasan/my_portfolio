import { Metadata } from "next";
import { ReactNode } from "react";

import Theme from "../../styles/theme";
import { NotesShell } from "../../components/Notes/NotesShell";

// Hidden section: not linked from the site and kept out of search engines.
export const metadata: Metadata = {
  title: {
    default: "Notes",
    template: "%s | Notes",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <Theme>
      <NotesShell>{children}</NotesShell>
    </Theme>
  );
}
