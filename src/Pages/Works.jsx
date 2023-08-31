import WorkCard from "../Components/WorkCard";

function Works() {
  return (
    <>
      <div className="text-white text-4xl md:text-5xl font-bold container mx-auto pt-[2rem] lg:[4.5rem] w-[300px] md:w-[700px] lg:w-[1200px]">
        <h1>
          I work with startups & founders to build their ideas into functional
          digital products.
        </h1>
        <h3 className="text-yellowish text-2xl pt-14">Selected Works</h3>
      </div>
      <WorkCard />
    </>
  );
}

export default Works;
