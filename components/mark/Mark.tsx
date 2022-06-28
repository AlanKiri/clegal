import React, { FC } from "react";
import { IconType } from "react-icons";

interface IMark {
  Icon: IconType;
  title: string;
  description: string;
}

const Mark: FC<IMark> = ({ Icon, title, description }: IMark) => {
  return (
    <div className="flex flex-row p-5 bg-white gap-4 rounded-sm w-full lg:rounded-none">
      <Icon className="w-12 h-12 text-yellow-500" />
      <div className="text-left ">
        <h4 className="font-martel font-bold text-2xl tracking-widest">
          {title}
        </h4>
        <p className="font-opensans font-bold text-sm tracking-widest whitespace-nowrap ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Mark;
