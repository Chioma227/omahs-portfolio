import clsx from "clsx";

const Button = ({ variant, className, children }) => {
  switch (variant) {
    case "primary":
      className = clsx(
        "bg-purple-300 text-white border-purple-200 border-[1px]",
        "px-[30px] py-[4px] rounded-lg"
      );
  }
  return <button className={className}>{children}</button>;
};

export default Button;
