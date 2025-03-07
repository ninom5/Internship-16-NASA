import React from "react";
import { ButtonProps } from "../../types/buttonPropsType";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  emoji,
  className,
}) => {
  return (
    <button className={`button-navigation ${className}`} onClick={onClick}>
      {emoji} {label}
    </button>
  );
};
