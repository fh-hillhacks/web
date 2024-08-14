import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Footer from "../components/ui/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { MacbookScrollDemo } from "@/components/ui/MacbookScroll/macbook";
import { GlobeDemo } from "@/components/ui/globe/globe_comp";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
        <GlobeDemo />
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
