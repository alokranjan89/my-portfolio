import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">

        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
