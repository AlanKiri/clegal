import React, { FC } from "react";
import { IconType } from "react-icons";
import { Button } from "../../components";

interface ICard {
  Icon: IconType;
  Title: string;
  Description: string;
  ButtonText: string;
  Colored: boolean;
}

const Card: FC<ICard> = ({
  Icon,
  Title,
  Description,
  ButtonText,
  Colored,
}: ICard) => {
  return (
    <div
      className={`flex flex-col mx-16 p-10 text-left lg:mx-8  ${
        Colored ? "bg-blue-900" : "bg-white"
      } `}
    >
      <Icon
        className={`w-12 h-12 ${
          Colored ? "text-yellow-500 " : "text-amber-800 "
        }mb-5`}
      />
      <h4
        className={`font-montserrat font-semibold  mb-5 tracking-wide ${
          Colored ? "text-white " : "text-black "
        }`}
      >
        {Title}
      </h4>
      <p
        className={`font-montserrat font-bold  mb-5 ${
          Colored ? "text-white " : "text-black "
        }`}
      >
        {Description}
      </p>
      <div className="flex mr-auto">
        <Button colored={true} outlined={false} text={ButtonText} />
      </div>
    </div>
  );
};

export default Card;
