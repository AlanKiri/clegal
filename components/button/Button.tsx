import React, { FC } from "react";

interface IButton {
  text: string;
  outlined: boolean;
  colored: boolean;
}

const Button: FC<IButton> = ({ text, outlined, colored }: IButton) => {
  return (
    <div
      className={`flex w-max ${colored ? "bg-yellow-500" : "bg-transparent"} ${
        outlined ? "border-2 border-white" : "border-none"
      }  m-auto md:m-0 py-3 px-8 rounded-3xl font-opensans text-sm font-bold my-5`}
    >
      <span className="text-white">{text}</span>
    </div>
  );
};

export default Button;
