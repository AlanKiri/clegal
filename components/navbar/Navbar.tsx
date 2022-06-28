import Image from "next/image";
import React, { FC, MouseEvent, MouseEventHandler, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-20 flex flex-col align-middle p-6 justify-between z-10">
      <div className="w-full h-20 flex flex-row align-middle justify-between">
        <h3 className="text-2xl tracking-widest font-martel ">CLegal</h3>
        <div className="hidden md:flex md:flex-row md:align-middle">
          <p className="font-opensans font-semibold tracking-wide text-sm mr-6 my-auto ">
            Home
          </p>
          <p className="font-opensans font-semibold tracking-wide text-sm mr-6 my-auto ">
            Product
          </p>
          <p className="font-opensans font-semibold tracking-wide text-sm mr-6 my-auto ">
            Pricing
          </p>
          <p className="font-opensans font-semibold tracking-wide text-sm mr-6 my-auto ">
            Contact
          </p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row ">
            <AiOutlineSearch className="w-6 h-6 my-auto mr-8 " />
            <AiOutlineShoppingCart className="w-6 h-6 my-auto mr-8 md:mr-0 " />
          </div>
          <AiOutlineMenu
            className="w-6 h-6 my-auto md:hidden"
            onClick={handleOpen}
          />
        </div>
      </div>
      <div
        className={`${
          isActive ? "flex" : "hidden"
        } flex-col text-center md:hidden my-20`}
      >
        <p className="font-opensans font-regular text-gray-700 tracking-wide mb-7 text-3xl">
          Home
        </p>
        <p className="font-opensans font-regular text-gray-700  tracking-wide mb-7 text-3xl">
          Product
        </p>
        <p className="font-opensans font-regular text-gray-700  tracking-wide mb-7 text-3xl">
          Pricing
        </p>
        <p className="font-opensans font-regular text-gray-700  tracking-wide mb-7 text-3xl">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;
