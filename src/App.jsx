import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Messages from "./components/Messages";
import { useState } from "react";


function App() {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact setRefresh={setRefresh} />
      <Messages refresh={refresh} />
      <Footer />
    </div>
  );
}

export default App;