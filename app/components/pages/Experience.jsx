"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const animateVariants = {
  secOne: {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, type: "tween", duration: 1 },
    },
  },
  secTwo: {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, type: "tween", duration: 1 },
    },
  },
  secThree: {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, type: "tween", duration: 1 },
    },
  },
  secFour: {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.1, type: "tween", duration: 1 },
    },
  },
};

const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/dummy")
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secOne.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secTwo.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secThree.visible);
    }
  }, [animation, inView]);
  useEffect(() => {
    if (inView) {
      animation.start(animateVariants.secFour.visible);
    }
  }, [animation, inView]);

  return (
    <div className=" relative-area md:mt-[8rem] mt-[4.5rem]">
      <h1 className="text-gray-200 txt-md mb-7 w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">WORK EXPERIENCE</h1>
      <main className=" sm:grid sm:grid-cols-2  sm:gap-[20px] block">
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              {...(item.class === "radial"
                ? {
                    // ref: { ref },
                    // initial: { ...(animateVariants.secOne.hidden) },
                    // animate: { animation },
                    // variants: { animateVariants },
                    transition: { duration: 2, delay: 0.8, type: "tween" },
                  }
                : item.class === "linear-to-b"
                ? {
                    initial: { opacity: 0, y: 38 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 1 },
                  }
                : "")}
              className={clsx(
                `xs:flex block items-center gap-[15px] bs sm:mb-0 mb-[15px] border-purple-100 border-t-2 rounded-lg shadow-sm px-[20px] py-[15px]`
              )}
            >
              <div>
                <Image
                  src={item.icon}
                  width={item.width}
                  height={item.height}
                  alt="icon"
                  className=" object-cover"
                />
              </div>
              <div>
                <h3 className="mb-[6px] text-gray-200">{item.header}</h3>
                <p className="txt-sm text-gray-400">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </main>
    </div>
  );
};

export default Experience;
