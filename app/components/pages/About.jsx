"use client";
import Container from "../atoms/Container";
import Link from "next/link";

const About = () => {
  return (
    <main>
      <Container variant="blocked">
        <section className="mb-[20px] sm:mt-[40px] mt-[50px] text-gray-400">
          <h2 className="lg:text-[35px] md:text-[30px] text-[25px]">
            Im a <span className="text-purple-100">Frontend Developer</span>
          </h2>
          <p className="txt-md">
            With a passion for creating immersive and <span>user-friendly</span>{" "}
            web experiences.
          </p>
        </section>
        <section className="txt-md mb-[20px] text-gray-400 lg:w-[45rem] md:w-fit ">
          <h3>
            A passionate and skilled frontend developer who has a deep
            understanding of modern web technologies and best practices, with a
            keen eye for detail and a strong desire to create exceptional user
            experiences. I excel at transforming complex ideas into elegant and
            intuitive interfaces with the help of frontend frameworks such as
            React, which enables me to build scalable and efficient web
            applications.
          </h3>
          <Link href="/bout">read more</Link>
        </section>
      </Container>
    </main>
  );
};

export default About;
