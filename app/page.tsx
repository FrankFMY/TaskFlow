import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
