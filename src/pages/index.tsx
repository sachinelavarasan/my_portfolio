import { Home, About, TechStack, Projects, Achievements, Certifications, GitHub, Contact } from "../components";

import { Layout } from "../layout/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <Home />
      <About />
      <TechStack />
      <Achievements />
      <Certifications />
      <Projects />
      <GitHub />
      <Contact />
    </Layout>
  );
}
