import Hero from "../Components/Hero";
import Offer from "../UI/Offer";
import Gear from "../Components/Gear";
import Features from "../Components/Features";
import Solution from "../Components/Solution";
import Sales from "../Components/Sales";
import Journal from "../Components/Journal";
import Card from "../Components/Card";
import Explore from "../Components/Explore";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

export default function HomePage() {
  return (
    <>
      <Offer />
      <Navigation />
      <Hero />
      <Gear />
      <Features />
      <Solution />
      <Sales />
      <Journal />
      <Card />
      <Explore />
      <CTA />
      <Footer />
    </>
  );
}
