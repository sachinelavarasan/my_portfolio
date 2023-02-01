import Head from "next/head";
import React from "react";

import { Header, Footer } from "../components";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
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
