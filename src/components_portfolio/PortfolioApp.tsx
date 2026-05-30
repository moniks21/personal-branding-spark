import About from "./About";
import Activity from "./Activity";
import Affiliations from "./Affiliations";
import BirthdaySurprise from "./BirthdaySurprise";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Journey from "./Journey";
import Navbar from "./Navbar";
import Philosophy from "./Philosophy";
import Research from "./Research";
import Services from "./Services";
import Stats from "./Stats";

export default function PortfolioApp() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Journey />
        <Philosophy />
        <Research />
        <Activity />
        <Affiliations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BirthdaySurprise />
    </div>
  );
}
