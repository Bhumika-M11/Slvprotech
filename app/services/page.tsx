import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <Services />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
