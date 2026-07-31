import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Industries from "../components/home/Industries";
import Exhibitions from "../components/home/Exhibitions";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Clients from "../components/home/Clients";
import Contact from "../components/home/Contact";
//import GoogleMap from "../components/home/GoogleMap";
import Gallery from "../components/home/Gallery";

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <About />

      <Services />

      <WhyChooseUs />

      <Industries />

      <Clients />

      <Gallery />

      <Exhibitions />

      <Testimonials />

      <Contact/>
      {/*<GoogleMap />*/}

      <CTA />
    </>
  );
}