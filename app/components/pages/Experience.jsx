"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/dummy")
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
       
  return (
    <div className=" relative-area md:mt-[8rem] mt-[4.5rem]">
      <h1 className="text-gray-200 txt-md mb-7 w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">
        WORK EXPERIENCE
      </h1>
      <main className=" sm:grid sm:grid-cols-2  sm:gap-[20px] block">
        {data.map((item) => {
          return (
            <div
              key={item.id}
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
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Experience;
