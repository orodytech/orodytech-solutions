import React from "react";
import Brands from "../components/Brands/Brands";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Why from "../components/Why/Why";

function Home() {
  return (
    <>
      <Hero />
      <div className="section__margin">
        <Brands />
        <Services />
        <Why />
      </div>
    </>
  );
}

export default Home;
