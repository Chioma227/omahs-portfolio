"use client";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Image from "next/image";
import motion from "../assets/icons/f-motion.png";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import git from "../assets/icons/Git-logo.png";
import gitHub from "../assets/icons/github.png";
import tailwind from "../assets/icons/tailwind.png";
import javascript from "../assets/icons/Javascript.png";
import react from "../assets/icons/react.png";
import next from "../assets/icons/nextjs.png";
import scss from "../assets/icons/scss.png";

const Tools = () => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    fetch("/api/imgs")
      .then((resp) => resp.json())
      .then((data) => setImgs(data))
      .catch((err) => console.error(err));
  });
  return (
    <Container variant="normal" className="md:mt-[8rem] mt-[4.5rem]">
      <div className=" text-white mb-7">
        <h2 className="uppercase w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">
          my frontend tools
        </h2>
      </div>
      <section className="skills md:flex hidden justify-between w-full items-center mb-[30px]">
        {imgs.map((img) => (
          <div key={img.icon.src} className=" ml-[15px]">
            <Image src={img.icon.src} width={70} height={70} alt="tools" />
          </div>
        ))}
      </section>
      <section className="md:hidden flex flex-col items-center justify-center">
        <aside className="flex justify-between items-center gap-[40px]  mb-[20px]">
          <div>
            <Image src={html} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={css} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={javascript} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={tailwind} width={70} height={70} alt="tools" />
          </div>
        </aside>
        <aside className="flex justify-between items-center gap-[40px]  mb-[20px]">
          <div>
            <Image src={scss} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={react} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={next} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={motion} width={70} height={70} alt="tools" />
          </div>
        </aside>
        <aside className="flex justify-between items-center gap-[40px]">
          <div>
            <Image src={git} width={70} height={70} alt="tools" />
          </div>
          <div>
            <Image src={gitHub} width={50} height={50} alt="tools" />
          </div>
        </aside>
      </section>
    </Container>
  );
};
export default Tools;
