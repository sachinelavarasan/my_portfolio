import{ ReactNode } from "react";

import { Header, Footer } from "..";
import { Container } from "./elements";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
  );
};
