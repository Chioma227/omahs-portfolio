import React from "react";
import Hero from "../pages/Hero";
import Header from "../pages/Header";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Tools from "../pages/Tools";
import Container from "../atoms/Container";

const Root = () => {
  return (
    <div>
      <Header />
      <Container variant="wrapper" className="">
        <Hero />
        <About />
        <Experience />
        <Tools />
      </Container>
    </div>
  );
};

export default Root;
