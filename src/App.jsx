import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import Messages from "./components/Messages";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

function HomePage({ refresh, setRefresh }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact setRefresh={setRefresh} />
      {/* <Messages refresh={refresh} /> */}
      <Footer />
    </>
  );
}

function App() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              refresh={refresh}
              setRefresh={setRefresh}
            />
          }
        />

        <Route
          path="/admin"
          element={<AdminLogin />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;