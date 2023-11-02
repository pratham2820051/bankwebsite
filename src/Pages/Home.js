import React from "react";
import HeroSlider from "../Components/Homepage/HeroSlider";
import Scheme from "../Components/Homepage/Scheme";
import Loans from "../Components/Homepage/Loans";
import Banner from "../Components/Homepage/Banner";
import Banner2 from "../Components/Homepage/Banner2";

function Home() {
  return (
    <div className="">
      <HeroSlider />
      <div className="max-w-[1440px] px-2 mx-auto">
        <Banner />
        <Scheme />
        <Loans />
        <Banner2 />
      </div>
    </div>
  );
}

export default Home;
