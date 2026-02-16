import Head from "next/head";
import React, { ReactNode } from "react";

import { Header, Footer } from "../components";
import { Container } from "./LayoutStyles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Elavarasan M</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
