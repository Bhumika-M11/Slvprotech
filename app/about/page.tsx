import Navbar from "../../components/Navbar";
import About from "../../components/About";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
