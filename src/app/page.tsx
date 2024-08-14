import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { MacbookScrollDemo } from "@/components/ui/MacbookScroll/macbook";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <MacbookScrollDemo />
        <LogoGrid />
        <CenteredCTAText />
        <CTA />
        <Features />
        <Stats />
        <FAQs />
        <FooterCTA />
        <Footer />
      </Suspense>
    </>
  );
}
