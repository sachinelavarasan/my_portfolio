import { Home, About, TechStack, Projects, Achievements, Certifications, GitHub, Contact } from "../components";

import { Layout } from "../components/Layout";
import Theme from "../styles/theme";

export default function Portfolio() {
    return (
        <Theme>
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
        </Theme>
    );
}
