"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import imgOne from "../assets/img/chat.jpg";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const animateVariants = {
  secOne: {
    text: {
      hidden: { opacity: 0, x: -45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
    img: {
      hidden: { opacity: 0, x: 45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
  },
  secTwo: {
    text: {
      hidden: { opacity: 0, x: -45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
    img: {
      hidden: { opacity: 0, x: 45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
  },
  secThree: {
    text: {
      hidden: { opacity: 0, x: -45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
    img: {
      hidden: { opacity: 0, x: 45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
  },
  secFour: {
    text: {
      hidden: { opacity: 0, x: -45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
    img: {
      hidden: { opacity: 0, x: 45 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, type: "tween", duration: 0.8 },
      },
    },
  },
};

const Projects = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secOne.text.visible);
      animation.start(animateVariants.secOne.img.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secTwo.text.visible);
      animation.start(animateVariants.secTwo.img.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secThree.text.visible);
      animation.start(animateVariants.secThree.img.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secFour.text.visible);
      animation.start(animateVariants.secFour.img.visible);
    }
  }, [animation, inView]);

  return (
    <section className="md:mt-[8rem] mt-[4.5rem]">
      <h2 className="uppercase txt-md mb-4 text-gray-200 w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">
        projects
      </h2>
      <main className="relative mb-[3rem]">
        <motion.section
          whileInView={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 2, delay: 1 },
          }}
          className="flex items-center justify-center mx-auto  "
        >
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  mr-[-65px] border-l-4 border-l-[#9759d4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, sint! Minus quibusdam ducimus asperiores consequuntur
            repellat aliquid natus dolores consectetur!
          </div>
          <div
            ref={ref}
            initial={animateVariants.secOne.img.hidden}
            animate={animation}
            variants={animateVariants}
          >
            <Image
              src={imgOne}
              width={300}
              height={200}
              alt="project"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </motion.section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <motion.div>
            <Image
              src={imgOne}
              width={300}
              height={200}
              alt="project"
              loading="lazy"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div className="p-card w-[500px] h-fit px-[18px] py-[25px]  ml-[-65px] border-r-4 border-r-[#c559f7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, sint! Minus quibusdam ducimus asperiores consequuntur
            repellat aliquid natus dolores consectetur!
          </motion.div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <motion.div className="p-card w-[500px] h-fit px-[18px] py-[25px]  mr-[-65px] border-l-4 border-l-[#e536fc]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, sint! Minus quibusdam ducimus asperiores consequuntur
            repellat aliquid natus dolores consectetur!
          </motion.div>
          <motion.div>
            <Image
              src={imgOne}
              width={300}
              height={200}
              alt="project"
              loading="lazy"
              className="rounded-lg"
            />
          </motion.div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div>
            <Image
              src={imgOne}
              width={300}
              height={200}
              alt="project"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  ml-[-65px] border-r-4 border-r-[#cc9ef7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, sint! Minus quibusdam ducimus asperiores consequuntur
            repellat aliquid natus dolores consectetur!
          </div>
        </section>
      </main>
    </section>
  );
};

export default Projects;
