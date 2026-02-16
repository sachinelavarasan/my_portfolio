import { Home, About, TechStack, Projects } from "../components";

import { Layout } from "../layout/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <Home />
      <About />
      <TechStack />
      <Projects />
    </Layout>
  );
}
