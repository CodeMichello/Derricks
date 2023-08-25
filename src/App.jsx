import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Horizontal from "./Components/Horizontal";
import Navbar from "./Components/Navbar";
import WorkCard from "./Components/WorkCard";
import works from "./works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section>{WorkCards}</section>
      <Horizontal />
      <Footer />
    </>
  );
}
export default App;
