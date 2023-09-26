import React from "react";
import img from "../components/assets/imgs/resume.jpeg";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-background-900">
      <div>
        <img src={img} alt="resume" />
      </div>
    </div>
  );
};

export default page;
