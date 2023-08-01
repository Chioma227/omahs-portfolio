"use client";
import Container from "../atoms/Container";
import Image from "next/image";
import Img from "../assets/icons/Me.svg";
import arrow from "../assets/img/Arrow.png";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.main
      initial={{ y: 35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className="relative "
    >
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, type: "tween" }}
        n
        className="flex items-center text-white absolute lg:top-[10px] md:top-[7px] top-[2px] lg:left-[15rem] md:left-[12rem] sm:left-[9rem] left-[6rem]"
      >
        <div className="bg-center bg-cover">
          <Image src={arrow} alt="arrow" width={100} height={100} />
        </div>          
        <p>
          Hello! I Am <span className="text-purple-100">Chioma Okeke</span>
        </p>
      </motion.div>
      <Container variant="flex-contain" className="mt-[7rem]">
        <div>
          <Image src={Img} alt="hero" width={500} height={500} />
        </div>
        <section className=" lg:w-[29rem] w-fit select-none">
          <p className=" text-gray-400">A frontend developer who</p>
          <h2 className=" lg:text-[35px] md:text-[30px] text-[25px] text-gray-200">
            Harnesses the web with the power of{" "}
            <span className=" text-purple-100">code</span>.
          </h2>
          <aside className="mt-[20px]">
            <Button variant="primary">
              <Link href="/">Download Resume</Link>
            </Button>
          </aside>
        </section>
      </Container>
    </motion.main>
  );
};

export default Hero;
