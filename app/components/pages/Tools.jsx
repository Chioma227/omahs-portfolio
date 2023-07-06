"use client";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import { v4 } from "uuid";
import Image from "next/image";

const Tools = () => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    fetch("/api/imgs")
      .then((resp) => resp.json())
      .then((data) => setImgs(data))
      .catch((err) => console.error(err));
  });
  return (
    <Container variant="normal" className="margin-lg">
      <div>
        <h2 className="uppercase">my frontend tools</h2>
      </div>
      <section className="skills flex justify-between w-full items-center margin-lg">
        {imgs.map((img) => (
          <div key={img.icon.src}>
            <Image src={img.icon.src} width={70} height={70} alt="tools" />
          </div>
        ))}
      </section>
    </Container>
  );
};
export default Tools;
