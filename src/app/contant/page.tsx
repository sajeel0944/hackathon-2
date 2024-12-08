"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Contact() {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  let [sub, setsub] = useState<boolean>(false);
  console.log(sub);

  useEffect(() => {
    if (sub == true) {
      alert("From has been submitted");
    }
  }, [sub]);
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
            Contant
          </h1>
          <p className="text-sm md:text-base font-medium text-black">
            <span className="hover:underline cursor-pointer ">
              <Link href={"/home"}>Home</Link>
            </span>{" "}
            &gt; Contant
          </p>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full ">
          {/* Header Section */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Get In Touch With Us
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="md:flex md:justify-around">
            {/* Information Section */}
            <div className="grid grid-cols-1  gap-6 mb-8 md:w-[22%]">
              <div>
                <Image
                  src={"/picture/location.png"}
                  alt={"location"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Address</div>
                <p className="text-gray-600 text-sm pl-6">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <Image
                  src={"/picture/bxs_phone.png"}
                  alt={"phone"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Phone</div>
                <p className="text-gray-600 text-sm pl-6">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-gray-600 text-sm pl-6">
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <Image
                  src={"/picture/bi_clock-fill.png"}
                  alt={"clock"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Working Time</div>
                <p className="text-gray-600 text-sm pl-6">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-gray-600 text-sm pl-6">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6  md:w-[50%]">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-">
                <button
                  type="submit"
                  className="w-[40%] bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => {
                    setsub(!sub);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* last section */}

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

export default Contact;
