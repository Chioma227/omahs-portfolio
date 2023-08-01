import React from "react";
import Hero from "../pages/Hero";
import Header from "../pages/Header";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Tools from "../pages/Tools";
import Projects from "../pages/Projects";
import Container from "../atoms/Container";
import Contact from "../atoms/Contact";

const Root = () => {
  return (
    <div>
      <Header />
      <Container variant="wrapper" className="">
        <Hero />
        <About />
        <Experience />
        <Contact/>
        <Tools />
        <Projects/>
      </Container>
    </div>
  );
};

export default Root;
