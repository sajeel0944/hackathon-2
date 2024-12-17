"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  let [display, setdisplay] = useState<boolean>(false);
  console.log(display);

  return (
    <header className={`${display? "[@media(max-width:768px)]:h-[220px] ":"h-[100px] items-center"} flex justify-between  px-16 py-4 shadow-md [@media(max-width:640px)]:px-2 bg-[#FFFFFF]`}>
      {/* Logo */}
      <div className={`flex  space-x-2 ${display ? "":"items-center"}`}>
        <div className="text-yellow-500 text-2xl ">
          <Image
            src={"/picture/Meubel House_Logos-05.png"}
            alt={"logo"}
            width={40}
            height={26}
          />
        </div>
        <span className="text-2xl font-bold">Furniro</span>
      </div>

      {/* Navigation */}
      <nav
        className={`flex space-x-6  "[@media(max-width:768px)]:border-2 ${
          display ? "block" : "[@media(max-width:768px)]:hidden"
        } [@media(max-width:768px)]:absolute [@media(max-width:768px)]:top-[60px] [@media(max-width:768px)]:left-[35%] [@media(max-width:768px)]:h-40 [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:space-x-0 [@media(max-width:768px)]:w-[35%] [@media(max-width:768px)]:items-center [@media(max-width:768px)]:space-y-3 [@media(max-width:768px)]:text-xl [@media(max-width:768px)]:pt-2 [@media(max-width:768px)]:font-extrabold [@media(max-width:768px)]:rounded-lg `}
      >
        <Link href="/home" className="text-gray-700 hover:text-black ">
          Home
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-black">
          Shop
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-black">
          Blog
        </Link>
        <Link href="/contant" className="text-gray-700 hover:text-black">
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className={`flex ${display ? "":"items-center"} space-x-7 [@media(max-width:480px)]:space-x-5 [@media(max-width:400px)]:w-[40%] [@media(max-width:380px)]:ml-5 `}>
        <Link href={"contant"}>
          <Image
            src={"/picture/mdi_account-alert-outline.png"}
            alt={"logo"}
            width={28}
            height={28}
            className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6 "
          />
        </Link>

        <Link href={"/404/search"}>
          <Image
            src={"/picture/akar-icons_search.png"}
            alt={"logo"}
            width={28}
            height={28}
            className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6"
          />
        </Link>
        <Link href={"/404/heart"}>
          <Image
            src={"/picture/akar-icons_heart.png"}
            alt={"logo"}
            width={28}
            height={28}
            className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6"
          />
        </Link>
        <Link href={"shop"}>
          <Image
            src={"/picture/ant-design_shopping-cart-outlined.png"}
            alt={"logo"}
            width={28}
            height={28}
            className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden "
        onClick={() => {
          setdisplay(!display);
        }}
      >
        <Image
          src={"/picture/three-row-icon.png"}
          alt={"logo"}
          width={28}
          height={28}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
