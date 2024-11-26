import React from "react";
import Landing from "../components/Landing";
import AdBoard from "../components/AdBoard";
import LatestProjects from "../components/LatestProjects";
import NeedUs from "../components/NeedUs";
import WeAre from "./WeAre";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Landing />
      <AdBoard />
      <LatestProjects />
      <NeedUs />
      <WeAre />
      <FAQ />
    </div>
  );
};

export default Home;
