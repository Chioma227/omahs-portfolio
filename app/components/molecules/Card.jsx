import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Container from "../atoms/Container";

import React from "react";
import clsx from "clsx";

const Card = ({ variant = "primary", className, children, icon = {} }) => {
  let style;
  switch (variant) {
    case "primary":
      style = clsx(style, "");
      break;

    default:
      break;
  }
  return (
    <Container variant="flex-gapped" className={clsx(style, className)}>
      <Icon {...icon} />
      <Container variant="blocked">{children}</Container>
    </Container>
  );
};

export default Card;
