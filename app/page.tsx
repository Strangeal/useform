import Hero from "./components/Hero";
import FeatureList from "./components/FeatureList";
import ServiceList from "./components/service/ServiceList";
import ServiceAd from "./components/service/ServiceAd";
import Platforms from "./components/Platforms";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureList />
      <ServiceList />
      <ServiceAd />
      <Platforms />
      <Waitlist />
      <Footer />
    </>
  );
}
