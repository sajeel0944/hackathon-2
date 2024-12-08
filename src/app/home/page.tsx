"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "30%",
      image: "/picture/Images.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/picture/image 2.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "50%",
      image: "/picture/image 3.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      new: true,
      image: "/picture/image 4.png",
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/picture/Image 5.png",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      new: true,
      image: "/picture/image 6.png",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "50%",
      image: "/picture/image 7.png",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      new: true,
      image: "/picture/image 8.png",
    },
  ];

  // ye slider ky liye hai

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  interface Slide {
    id: number;
    title: string;
    subtitle: string;
    img: string;
  }

  // Sample images for the slider
  const slides: Slide[] = [
    {
      id: 1,
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
      img: "/picture/Rectangle 24.png",
    },
    {
      id: 2,
      title: "Browse The Range",
      subtitle: "02 — Potty",
      img: "/picture/image 8.png",
    },
    {
      id: 3,
      title: "Muggo",
      subtitle: "03 — Small mug",
      img: "/picture/image 6.png",
    },
    {
      id: 4,
      title: "Outdoor bar table and stool",
      subtitle: "04 — Respira",
      img: "/picture/image 4.png",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev: number) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <Header />

      <section className="relative bg-gray-50 py-16 px-6 md:py-24 md:px-12 xl:flex xl:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/picture/scandinavian-interior-mockup-wall-decal-background 1.png"
            alt="Background Image"
            width={1100}
            height={549}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-lg md:max-w-lg xl:ml-auto xl:p-12">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
            BUY NOW
          </button>
        </div>
      </section>

      {/* Browse The Range */}

      <div className="min-h-screen bg-gray-100 p-6  pt-16 [@media(max-width:767px)]:h-[1670px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            Browse The Range
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7  md:h-[500px] [@media(max-width:767px)]:h-[1400px]">
            {/* Dining */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/Mask Group (1).png"
                alt="Dining"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Dining</h2>
              </div>
            </div>
            {/* Living */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/Mask Group.png"
                alt="Living"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Living</h2>
              </div>
            </div>
            {/* Bedroom */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/image 100.png"
                alt="Bedroom"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Bedroom</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={170}
                    height={150}
                    className="w-full h-48 object-cover"
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{product.discount}
                    </span>
                  )}
                  {product.new && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={product.name}>
                      <button className="bg-white text-black px-4 py-2 mb-2 rounded">
                        Add to Cart
                      </button>
                    </Link>
                    <div className="flex space-x-4 text-white">
                      <button className="hover:text-yellow-500 flex items-center">
                        <Image
                          src={"/picture/gridicons_share.png"}
                          alt={"share"}
                          width={12}
                          height={12}
                          className="mr-1 "
                        />
                        Share
                      </button>
                      <button className="hover:text-yellow-500  flex items-center">
                        <Image
                          src={"/picture/compare-svgrepo-com 1.png"}
                          alt={"share"}
                          width={12}
                          height={12}
                          className="mr-1 "
                        />
                        Compare
                      </button>
                      <button className="hover:text-yellow-500  flex items-center">
                        <Image
                          src={"/picture/Heart.png"}
                          alt={"share"}
                          width={12}
                          height={12}
                          className="mr-1 "
                        />
                        Like
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-gray-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-gray-500 ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Show More
            </button>
          </div>
        </div>
      </div>

      {/* slider */}

      <div className="min-h-screen bg-gray-50 flex items-center justify-center md:py-16 [@media(max-width:767px)]:h-[900px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="text-gray-600 text-lg">
                Our designer already made a lot of beautiful prototypes of rooms
                that inspire you.
              </p>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
                Explore More
              </button>
            </div>

            {/* Image Carousel Section */}
            <div className="relative">
              {/* Slide */}
              <div className="relative">
                <Image
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg [@media(max-width:767px)]:h-[490px] "
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-500">
                    {slides[currentSlide].subtitle}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800">
                    {slides[currentSlide].title}
                  </h2>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <Image
                    src={"/picture/Right 24px.png"}
                    alt={"arrow"}
                    width={80}
                    height={30}
                    className="rotate-180"
                  />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <Image
                    src={"/picture/Right 24px.png"}
                    alt={"arrow"}
                    width={80}
                    height={30}
                    className=""
                  />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {slides.map((slide, index) => (
                  <span
                    key={slide.id}
                    className={`w-3 h-3 cursor-pointer rounded-full ${
                      currentSlide === index ? "bg-yellow-600" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last image part */}

      <div className="p-4 bg-gray-100  [@media(max-width:500px)]:-mt-7 mb-20">
        <h1 className="text-center text-2xl font-bold mb-4">
          #FuniroFurniture
        </h1>
        <Image
          src={"/picture/last-image.png"}
          alt={""}
          width={1800}
          height={400}
          className="w-full mt-9"
        />
      </div>

      <Footer />
    </>
  );
}
