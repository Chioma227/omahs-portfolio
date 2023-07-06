import Image from "next/image";

const Icon = ({
  alt = "icon",
  type = "icon",
  width = 12,
  height = 12,
  src,
  ...restProps
}) => {
  return (
    src && (
      <>
        <Image
          alt={alt}
          width={width}
          height={height}
          src={type === "icon" ? "/assets/icons/" + src + ".svg"  : src}
          {...restProps}
        />
      </>
    )
  );
};

export default Icon;