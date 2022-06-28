import Image from "next/image";
import React from "react";

interface IAttorneys {
  ImageLink: string;
  Role: string;
  Name: string;
  Description: string;
}

const Attorneys = ({ ImageLink, Role, Name, Description }: IAttorneys) => {
  return (
    <div className="flex flex-col bg-white text-center justify-center px-10 py-10 ">
      <div className="block w-24 h-24 mx-auto mb-1 ">
        <Image
          src={ImageLink}
          height={100}
          width={100}
          layout="responsive"
          className="rounded-full"
          alt="Attorney avatar"
        />
      </div>
      <h4 className="font-opensans font-bold text-sm text-yellow-600 mb-1">
        {Role}
      </h4>
      <h5 className="font-martel font-bold text-base mb-1">{Name}</h5>
      <p className="font-opensans text-sm  text-slate-700 ">{Description}</p>
    </div>
  );
};

export default Attorneys;
