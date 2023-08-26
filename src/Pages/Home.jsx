import React from "react";
import Hero from "../Components/Hero";
import Horizontal from "../Components/Horizontal";
import WorkCard from "../Components/WorkCard";
import data from "../data";

function Home() {
  const WorkCards = data.map((item) => {
    return (
      <WorkCard
        key={item.id}
        image={item.image}
        altText={item.altText}
        title={item.title}
        description={item.description}
        link={item.link}
        hasArrow={item.hasArrow}
        path={item.path}
      />
    );
  });
  return (
    <>
      <Hero />
      {WorkCards}
      <Horizontal />
    </>
  );
}

export default Home;
