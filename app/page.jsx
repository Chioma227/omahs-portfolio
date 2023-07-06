import React from "react";
import Container from "./components/atoms/Container";
import Root from "./components/templates/Root";

const Page = () => {
  return (
    <Container
      variant="normal"
      className="bg-background-900 h-[100vh] w-[100vw] overflow-y-scroll"
    >
      <Root />
    </Container>
  );
};

export default Page;
