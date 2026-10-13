import{ ReactNode } from "react";

import { Header, Footer } from "..";
import { Container, SkipLink } from "./elements";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
      <Container>
        <SkipLink href="#main-content">Skip to content</SkipLink>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </Container>
  );
};
