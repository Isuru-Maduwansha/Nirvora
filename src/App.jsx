import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import CtaOne from "./sections/CtaOne";
import Packeges from "./sections/Packages";
import Features from "./sections/Features";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <CtaOne />
      <Packeges />
      <Features />
      <Footer />
    </>
  );
};

export default App;
