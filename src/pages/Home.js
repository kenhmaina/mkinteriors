import React from "react";
import Landing from "../components/Landing";
import AdBoard from "../components/AdBoard";
import LatestProjects from "../components/LatestProjects";
import NeedUs from "../components/NeedUs";

const Home = () => {
  return (
    <div>
      <Landing />
      <AdBoard />
      <LatestProjects />
      <NeedUs />
    </div>
  );
};

export default Home;
