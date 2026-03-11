import "./App.css";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Info from "./Component/Info/Info";
import Navbar from "./Component/Navbar/Navbar";
import Proyect from "./Component/Proyect/Project";
import Skill from "./Component/Skill/Skill";

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Info />
        <Proyect />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;