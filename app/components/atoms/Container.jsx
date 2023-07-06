import clsx from "clsx";

const Container = ({ variant, className, children }) => {
  let style = clsx("text-white");
  switch (variant) {
    case "normal":
      style = clsx("w-full");
      break;
      //  xs:w-[80%] s:w-[92%]
    case "wrapper":
      style = clsx("lg:w-[65%] md:w-[75%] sm:w-[85%] s:w-[90%]  mx-auto");
      break;
    case "flexed":
      style = clsx(style,"flex items-center justify-between");
      break;
    case "flex-gapped":
      style = clsx(style,"flex items-center gap-[20px]");
      break;
    case "flex-contain":
      style = clsx(style,"sm:flex sm:items-center sm:flex-row flex-col-reverse");
      break;
    case "flex-center":
      style = clsx(style,"flex items-center justify-center");
      break;
    case "blocked":
      style = clsx(style,"block items-left");
  }
  return <div className={clsx(style, className)}>{children}</div>;
};

export default Container;
