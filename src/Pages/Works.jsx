import WorkCard from "../Components/WorkCard";
import data from "../data";

function Works() {
  const WorkCards = data.map((item) => (
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
  ));

  return (
    <>
      <div className="text-white text-4xl md:text-5xl font-bold container mx-auto pt-[2rem] md:mt-6  w-[300px] md:w-[700px] lg:w-[1090px]">
        <h1>
          I work with startups & founders to build their ideas into functional
          digital products.
        </h1>
        <h3 className="text-yellowish text-2xl pt-14">Selected Works</h3>
      </div>
      <div>{WorkCards}</div>
    </>
  );
}

export default Works;
