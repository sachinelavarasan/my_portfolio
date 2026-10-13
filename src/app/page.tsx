import { Home, About, Experience, Projects, GitHub, TechStack, Achievements, Contact } from "../components";

import { Layout } from "../components/Layout";
import Theme from "../styles/theme";

export default function Portfolio() {
    return (
        <Theme>
            <Layout>
                <Home />
                <About />
                <Experience />
                <Projects />
                <GitHub />
                <TechStack />
                <Achievements />
                <Contact />
            </Layout>
        </Theme>
    );
}
