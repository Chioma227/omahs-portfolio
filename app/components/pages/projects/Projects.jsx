"use client";
import Image from "next/image";
import dictionary from "../../assets/imgs/dictionary.png";
import gallery from "../../assets/imgs/gallery.png";
import movie from "../../assets/imgs/movie.png";
import calc from "../../assets/imgs/calc.png";
import tts from "../../assets/imgs/tts.png";

const Projects = () => {
  return (
    <section className="md:mt-[8rem] mt-[4.5rem]">
      <h2 className="uppercase txt-md mb-4 text-gray-200 w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">
        projects
      </h2>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  md:mr-[-65px] border-l-4 border-l-[#9759d4]">
            <div className="text-gray-400">
              <h3 className="text-gray-200 text-[19px] uppercase mb-[9px]">
                dictionary webapp
              </h3>
              <p>
                A mini dictionary app that enables users look up words and get
                meanings. It is built with the Next.js library and uses the
                dictionary api.
              </p>
            </div>
            <div className="flex gap-[10px] items-center justify-end mt-[9px] ">
              <a
                href="https://dictionary-pcn7w0vy6-chioma227.vercel.app/"
                className="text-gray-500 underline"
              >
                live link
              </a>
              <a
                href="https://github.com/Chioma227/dictionary"
                className="text-gray-500 underline"
              >
                github
              </a>
            </div>
          </div>
          <div>
            <Image
              src={dictionary}
              width={500}
              height={500}
              alt="project"
              loading="lazy"
              className="rounded-lg md:block hidden"
            />
          </div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div>
            <Image
              src={tts}
              width={500}
              height={500}
              alt="project"
              loading="lazy"
              className="rounded-lg md:block hidden"
            />
          </div>
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  md:ml-[-65px] border-r-4 border-r-[#c559f7]">
            <div className="text-gray-400">
              <h3 className="text-gray-200 text-[19px] uppercase mb-[9px]">
                text-to-speech webapp
              </h3>
              <p>
                A web application that translates texts to speech. is is built
                with HTML, CSS and Javascript and uses the javascript
                speechsynthesis web api.
              </p>
            </div>
            <div className="flex gap-[10px] items-center justify-end mt-[9px] ">
              <a
                href="https://text-to-speech-vert.vercel.app/"
                className="text-gray-600 underline"
              >
                live link
              </a>
              <a
                href="https://github.com/Chioma227/text-to-speech"
                className="text-gray-600 underline"
              >
                github
              </a>
            </div>
          </div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  md:mr-[-65px] border-l-4 border-l-[#e536fc]">
            <div className="text-gray-400">
              <h3 className="text-gray-200 text-[19px] uppercase mb-[9px]">
                movie db
              </h3>
              <p>
                A movie webapp that displays a list of movies from the moviedb
                api and allows users to search through the list of movies. it
                was built with the javascrip react framework.
              </p>
            </div>
            <div className="flex gap-[10px] items-center justify-end mt-[9px] ">
              <a
                href="https://stage-two-movie-db.vercel.app/"
                className="text-gray-600 underline"
              >
                live link
              </a>
              <a
                href="https://github.com/Chioma227/moviedb"
                className="text-gray-600 underline"
              >
                github
              </a>
            </div>
          </div>
          <div>
            <Image
              src={movie}
              width={500}
              height={500}
              alt="project"
              loading="lazy"
              className="rounded-lg md:block hidden"
            />
          </div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div >
            <Image
              src={gallery}
              width={500}
              height={500}
              alt="project"
              loading="lazy"
              className="rounded-lg md:block hidden"
            />
          </div>
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  md:ml-[-65px] border-r-4 border-r-[#cc9ef7]">
            <div className="text-gray-400">
              <h3 className="text-gray-200 text-[19px] uppercase mb-[9px]">
                gallery webapp
              </h3>
              <p>
                A gallery webapp that displays a list of movies from unsplash
                api and allows users to re-arrange images on desktop using the
                drag-and-drop feature. It was built with the react framework.
              </p>
            </div>
            <div className="flex gap-[10px] items-center justify-end mt-[9px] ">
              <a
                href="https://unsplash-gallery-kappa.vercel.app/"
                className="text-gray-600 underline"
              >
                live link
              </a>
              <a
                href="https://github.com/Chioma227/Unsplash-gallery"
                className="text-gray-600 underline"
              >
                github
              </a>
            </div>
          </div>
        </section>
      </main>
      <main className="relative mb-[3rem]">
        <section className="flex items-center justify-center mx-auto  ">
          <div className="p-card w-[500px] h-fit px-[18px] py-[25px]  md:mr-[-65px] border-l-4 border-l-[#e536fc]">
            <div className="text-gray-400">
              <h3 className="text-gray-200 text-[19px] uppercase mb-[9px]">
                calculator
              </h3>
              <p>
                A mini calculator webapp that performs simple mathematical
                operations. It was built using the react framework.
              </p>
            </div>
            <div className="flex gap-[10px] items-center justify-end mt-[9px] ">
              <a
                href="https://web-calc-qyuy.vercel.app/"
                className="text-gray-600 underline"
              >
                live link
              </a>
              <a
                href="https://github.com/Chioma227/webCalc"
                className="text-gray-600 underline"
              >
                github
              </a>
            </div>
          </div>
          <div>
            <Image
              src={calc}
              width={500}
              height={500}
              alt="project"
              loading="lazy"
              className="rounded-lg md:block hidden"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Projects;
