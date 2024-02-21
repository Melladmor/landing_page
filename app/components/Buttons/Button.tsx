import { FaArrowRight } from "react-icons/fa";
import React, { useMemo } from "react";

type Props = {
  variant: "colored" | "normal";
  bg?: string;
  color?: string;
  children?: React.ReactNode;
  withIcon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { variant, bg, color, children, withIcon, ...rest } = props;

  const buttonStyleDependOnType = useMemo(() => {
    return variant === "colored" ? "coloredButton" : "normalButton";
  }, [variant]);

  return (
    <button className={`button ${buttonStyleDependOnType}`} {...rest}>
      <div>{children}</div>
      {!!withIcon && <FaArrowRight height={20} width={20} fontWeight={400} />}
    </button>
  );
};

export default Button;
