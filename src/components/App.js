import Hero from "./Hero";
import Aboutus from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Work from "./Work";
function App() {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>

      <div id="aboutus">
        <Aboutus />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <Work />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
