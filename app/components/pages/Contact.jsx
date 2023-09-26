import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <section>
      <h2 className="uppercase txt-md mb-4 text-gray-200 w-fit px-3 py-4 rounded-md border-l-4 border-l-[#a794bb]">
        Contact
      </h2>
       <div className="flex items-center md:gap-[25px] gap-[15px] mt-[20px] mb-[25px]">
       <a href="mailto:chiomamary.o12@gmail.com">
          <FontAwesomeIcon className=" text-white md:text-[25px] text-[19px] transition-all hover:text-gray-500" icon={faEnvelope} />
        </a>
        <a href="tel:+9023124367">
          <FontAwesomeIcon className=" text-white md:text-[25px] text-[19px] transition-all hover:text-gray-500" icon={faPhone} />
        </a>
        <a href="https://twitter.com/_ChiomaOkeke_">
          <FontAwesomeIcon className=" text-white md:text-[25px] text-[19px] transition-all hover:text-gray-500" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/chioma-okeke-a7823b237/">
          <FontAwesomeIcon className=" text-white md:text-[25px] text-[19px] transition-all hover:text-gray-500" icon={faLinkedin} />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100068477616692">
          <FontAwesomeIcon className=" text-white md:text-[25px] text-[19px] transition-all hover:text-gray-500" icon={faFacebook} />
        </a>
       </div>
      </section>
    </>
  );
};

export default Contact;
