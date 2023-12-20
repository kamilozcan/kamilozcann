import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
// import Navbar from "./components/Navbar/Navbar";
// import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TextShpere from "./components/TextShpere/TextShpere";
import Timeline from "./components/TimeLine/TimeLine";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/portfolio" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/text" element={<TextShpere />} />
          {/* <Route path="/timeline" element={<Timeline />} /> */}
        </Routes>
        <Footer />
      </Router>

      {/* <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
