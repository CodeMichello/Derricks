import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import WorkCard from "./Components/WorkCard";
import works from "./works";

function App() {
  const WorkCards = works.map((item) => {
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
      <Navbar />
      <Hero />
      <section className="bg-dark">{WorkCards}</section>
      <Footer />
    </>
  );
}
export default App;
