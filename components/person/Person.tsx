import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface IPerson {
  Name: string;
  Role: string;
  Rating: number;
  Description: string;
  ImageLink: string;
}

const Person = ({ Name, Role, Rating, Description, ImageLink }: IPerson) => {
  return (
    <div className="bg-white text-left p-8 relative pl-16 mx-6 lg:mx-12 ">
      <h3 className="font-martel font-bold text-2xl">{Name}</h3>
      <h4 className="font-opensans font-bold text-sm mb-4">{Role}</h4>
      <div className="flex mb-4">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <AiFillStar
              key={index}
              className={
                index <= Rating ? "text-yellow-500 w-5 h-5" : "w-5 h-5"
              }
            ></AiFillStar>
          );
        })}
      </div>
      <p className="font-opensans text-sm text-slate-700">{Description}</p>
      <div className="absolute top-7 -left-5 block w-14 h-14 lg:h-20 lg:w-20 lg:-left-8 ">
        <Image
          src={`${ImageLink}`}
          layout="responsive"
          height={100}
          width={100}
          alt="Person face"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Person;
