import React from "react";
import Container from "../app/components/atoms/Container";
import Root from "../app/components/templates/Root";
// import Hero from "../app/components/pages/Hero";

const Index = () => {
  return (
    <Container
      variant="normal"
      className="bg-background-900 h-[100vh] w-[100vw] overflow-y-scroll overflow-x-hidden"
    >
    <Root/>
    </Container>
  );
};

export default Index;