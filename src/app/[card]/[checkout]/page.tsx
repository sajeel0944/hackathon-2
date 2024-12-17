"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// make new page

function Checkout({ params }: { params: { checkout: string } }) {
  type card = {
    id: number;
    name: string;
    price: number;
  };

  const Detail: Record<string, card> = {
    1: {
      id: 1,
      name: "Syltherine",
      price: 2500.0,
    },
    2: {
      id: 2,
      name: "Leviosa",
      price: 2500.0,
    },
    3: {
      id: 3,
      name: "Lolito",
      price: 7000.0,
    },
    4: {
      id: 4,
      name: "Respira",
      price: 500.0,
    },
    5: {
      id: 5,
      name: "Grifo",
      price: 1500.0,
    },
    6: {
      id: 6,
      name: "Muggo",
      price: 150.0,
    },
    7: {
      id: 7,
      name: "Pingky",
      price: 7000.0,
    },
    8: {
      id: 8,
      name: "Potty",
      price: 500.0,
    },
  };

  let get = params.checkout;

  let [checkbox1, setcheckbox1] = useState<boolean>(false);
  let [checkbox2, setcheckbox2] = useState<boolean>(false);

  const features = [
    {
      icon: "/picture/trophy 1.png",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: "/picture/guarantee.png",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: "/picture/shipping.png",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: "/picture/customer-support.png",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  // ye is liye laga hai ky jab place order par click kro ro to
  let [order, setorder] = useState<boolean>(false);

  const playSound = () => {
    const audio = new Audio("/sound/ringtone-193209.mp3"); // Path to your sound file
    audio.play();
  };

  return (
    <>
      <Header />

      <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url('/picture/Rectangle 1.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <Image
            src={"/picture/Meubel House_Logos-05.png"}
            alt={""}
            width={60}
            height={39}
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            Checkout
          </h1>
          <p className="text-sm md:text-base font-medium text-black">
            <span className="hover:underline cursor-pointer ">
              <Link href={"/home"}>Home</Link>
            </span>{" "}
            &gt; Checkout
          </p>
        </div>
      </div>

      <div className=" w-full h-[1690px] flex items-center xl:px-24 lg:px-14 md:px-4  [@media(max-width:767px)]:h-[2600px]">
        <div className=" w-full h-[1590px] flex justify-between [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:h-[2500px]">
          <div className=" w-[49%] h-[1590px] px-12 pt-5 space-y-10 [@media(max-width:767px)]:w-full [@media(max-width:500px)]:px-4">
            <h2 className="font-semibold text-4xl">Billing details</h2>
            <div className=" w-full h-28 flex justify-between">
              <div className=" w-[48%] h-28 space-y-3">
                <h3 className="font-medium text-base">First Name</h3>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                />
              </div>
              <div className=" w-[48%] h-28 space-y-3">
                <h3 className="font-medium text-base">Last Name</h3>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                />
              </div>
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Company Name (Optional)</h1>
              <input
                type="text"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Country / Region</h1>
              <input
                type="text"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Street address</h1>
              <input
                type="text"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Town / City</h1>
              <input
                type="text"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Province</h1>
              <input
                type="text"
                placeholder="Western Province"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">ZIP code</h1>
              <input
                type="text"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Phone</h1>
              <input
                type="number"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <div className=" w-full h-28 space-y-3">
              <h1 className="font-medium">Email address</h1>
              <input
                type="email"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
              />
            </div>

            <input
              type="text"
              placeholder="Additional information"
              className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
            />
          </div>

          <div className=" w-[49%] h-[735px] px-12 py-11 [@media(max-width:1190px)]:h-[800px] [@media(max-width:767px)]:w-full [@media(max-width:500px)]:px-4">
            <div className=" w-full h-[610px] space-y-4 [@media(max-width:1190px)]:h-[710px]">
              <div className=" w-full h-[230px] flex border-b border-[#9F9F9F]">
                <div className=" h-[230px] w-[50%] space-y-8">
                  <h3 className="font-medium text-2xl">Product</h3>
                  <div className="flex">
                    <h5 className="text-[#9F9F9F]">{Detail[get].name}</h5>
                    <span className="px-3">X</span>
                    <span>1</span>
                  </div>
                  <h5>Subtotal</h5>
                  <h5>Total</h5>
                </div>
                <div className=" h-[230px] w-[50%] space-y-8 text-end">
                  <h3 className="font-medium text-2xl">Subtotal</h3>
                  <h5>Rs. {Detail[get].price}.00</h5>
                  <h5>Rs. {Detail[get].price}.00</h5>
                  <h5 className="font-bold text-2xl text-[#B88E2F] [@media(max-width:1190px)]:text-lg">
                    Rs. {Detail[get].price}.00
                  </h5>
                </div>
              </div>
              <div className="flex items-center justify-between  w-48">
                <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                <h3 className="font-normal text-base">Direct Bank Transfer</h3>
              </div>
              <p className="w-full text-sm font-light text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex items-center justify-between  w-48">
                <div
                  className={`h-[14px] w-[14px] rounded-full border border-black cursor-pointer ${
                    checkbox1 ? "bg-black" : ""
                  }`}
                  onClick={() => {
                    setcheckbox1(!checkbox1);
                  }}
                ></div>
                <h3
                  className={`font-medium ${
                    checkbox1 ? "text-black" : "text-[#9F9F9F]"
                  } text-base`}
                >
                  Direct Bank Transfer
                </h3>
              </div>

              <div className="flex items-center justify-between  w-48">
                <div
                  className={`h-[14px] w-[14px] rounded-full border border-black cursor-pointer ${
                    checkbox2 ? "bg-black" : ""
                  }`}
                  onClick={() => {
                    setcheckbox2(!checkbox2);
                  }}
                ></div>
                <h3
                  className={`font-medium ${
                    checkbox2 ? "text-black" : "text-[#9F9F9F]"
                  } text-base pr-7`}
                >
                  Cash On Delivery
                </h3>
              </div>
              <p className="text-sm font-light ">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-semibold"> privacy policy.</span>
              </p>
              <div className="flex justify-center">
                <div
                  className={`border border-black w-[60%] h-16 rounded-2xl flex justify-center items-center cursor-pointer ${
                    order ? "hidden" : "block"
                  }`}
                  onClick={() => {
                    setorder(!order);
                  }}
                >
                  <h5 className="text-xl font-normal">Place order</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* jab place order par click ho ga to ye display block ho jaye ga */}

      <div
        className={`border-2 border-white shadow-lg  h-60 rounded-lg bg-white fixed top-[30%] md:left-[32%] lg:w-[30%] md:w-[40%] sm:w-[50%] sm:left-[20%] [@media(max-width:639px)]:w-[66%] [@media(max-width:639px)]:left-[15%] ${
          order ? "block" : "hidden"
        }`}
      >
        <div className=" w-full h-[180px] flex border-b border-[#9F9F9F] px-2">
          <div className=" h-[230px] w-[50%] space-y-4">
            <h3 className="font-medium text-2xl">Product</h3>
            <div className="flex">
              <h5 className="text-[#9F9F9F]">{Detail[get].name}</h5>
              <span className="px-3">X</span>
              <span>1</span>
            </div>
            <h5>Subtotal</h5>
            <h5>Total</h5>
          </div>
          <div className=" h-[230px] w-[50%] space-y-4 text-end">
            <h3 className="font-medium text-2xl">Subtotal</h3>
            <h5>Rs. {Detail[get].price}.00</h5>
            <h5>Rs. {Detail[get].price}.00</h5>
            <h5 className="font-bold text-2xl text-[#B88E2F] [@media(max-width:1190px)]:text-lg">
              Rs. {Detail[get].price}.00
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-center border-2 h-14">
          <button
            className="border border-black w-24 font-bold rounded-md hover:font-extrabold"
            onClick={() => {
              setorder(!order);
              playSound();
            }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* ye footer ky upper wala hai part hai */}
      <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9 mt-5">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={feature.icon} alt={""} width={40} height={39} />
              <h3 className="font-bold text-sm md:text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
