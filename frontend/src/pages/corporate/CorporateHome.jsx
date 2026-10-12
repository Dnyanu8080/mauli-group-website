import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import AboutSection from "../../components/AboutSection";
import Services from "../../components/Services";
import ProjectsSection from "../../components/ProjectsSection";

function CorporateHome() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <Stats />

        <AboutSection />

        <Services />

        <ProjectsSection />

      </main>

      <Footer />
    </>
  );
}

export default CorporateHome;