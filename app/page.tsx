import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustBar />
      <AboutUs />
      <Testimonials />
      <Team />
      <CallToAction />
    </>
  );
}
