"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// make new  page

function Product({ params }: { params: { product: string } }) {
  type Slide = {
    id: number;
    name: string;
    image: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    price: number;
    discribtion: string;
    Sku: string;
    Category: string;
  };

  const manageProduct: Record<string, Slide> = {
    Syltherine: {
      id: 1,
      name: "Syltherine",
      image: "/picture/Images.png",
      image1: "/picture/image 7.png",
      image2: "/picture/images (23).png",
      image3: "/picture/images (21).png",
      image4: "/picture/images (17).png",
      price: 2500,
      discribtion:
        "A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest. It may be made of wood, metal, or synthetic materials.",
      Sku: "SS001",
      Category: "Table",
    },
    Leviosa: {
      id: 2,
      name: "Leviosa",
      image: "/picture/image 2.png",
      image1: "/picture/images (2).png",
      image2: "/picture/images (3).png",
      image3: "/picture/imagescard.png",
      image4: "/picture/image 2.png",
      price: 2500,
      discribtion:
        "A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest. It may be made of wood, metal, or synthetic materials.",
      Sku: "SS002",
      Category: "Chair",
    },
    Lolito: {
      id: 3,
      name: "Lolito",
      image: "/picture/image 3.png",
      image1: "/picture/images (4).png",
      image2: "/picture/images (5).png",
      image3: "/picture/images (6).png",
      image4: "/picture/images (7).png",
      price: 7000,
      discribtion:
        "A sofa is a piece of furniture that a few people can comfortably sit on together. On a rainy weekend, you and your friends might pile on the sofa to watch scary movies and eat popcorn.",
      Sku: "SS003",
      Category: "Sofa",
    },
    Respira: {
      id: 4,
      name: "Respira",
      image: "/picture/image 4.png",
      image1: "/picture/images (8).png",
      image2: "/picture/images (9).png",
      image3: "/picture/images (10).png",
      image4: "/picture/images (11).png",
      price: 500,
      discribtion:
        "Unsourced material may be challenged and removed. Bar stools are a type of tall stool, often with a foot rest to support the feet.",
      Sku: "SS004",
      Category: "table and stool",
    },
    Grifo: {
      id: 5,
      name: "Grifo",
      image: "/picture/Image 5.png",
      image1: "/picture/images (12).png",
      image2: "/picture/images (13).png",
      image3: "/picture/images (14).png",
      image4: "/picture/images (15).png",
      price: 1500,
      discribtion:
        "A nightlight is a small light fixture, usually electrical, placed for comfort or convenience in dark areas or areas that may become dark at certain times.",
      Sku: "SS005",
      Category: "Night lamp",
    },
    Muggo: {
      id: 6,
      name: "Muggo",
      image: "/picture/image 6.png",
      image1: "/picture/images (16).png",
      image2: "/picture/images (17).png",
      image3: "/picture/images (18).png",
      image4: "/picture/images (19).png",
      price: 150,
      discribtion:
        "a drinking cup, usually cylindrical in shape, having a handle, and often of a heavy substance, as earthenware.",
      Sku: "SS006",
      Category: "Small mug",
    },
    Pingky: {
      id: 7,
      name: "Pingky",
      image: "/picture/image 7.png",
      image1: "/picture/images (20).png",
      image2: "/picture/images (21).png",
      image3: "/picture/images (22).png",
      image4: "/picture/images (23).png",
      price: 7000,
      discribtion:
        "A set of bedding generally consists of at least flat or fitted bed sheet that covers the mattress; a flat top sheet; either a blanket, a quilt, or a duvet.",
      Sku: "SS007",
      Category: "Cute bed set",
    },
    Potty: {
      id: 8,
      name: "Potty",
      image: "/picture/image 8.png",
      image1: "/picture/images (24).png",
      image2: "/picture/images (25).png",
      image3: "/picture/images (26).png",
      image4: "/picture/images (27).png",
      price: 500,
      discribtion:
        "A flowerpot, planter, planterette or plant pot, is a container in which flowers and other plants are cultivated and displayed. Historically, and still to a significant extent today.",
      Sku: "SS008",
      Category: "Sofa",
    },
  };

  let get: string =params.product;
    
  let [incre, setincre] = useState<number>(1);

  let plus = () => {
    setincre(incre + 1);
  };

  let minus = () => {
    setincre(incre - 1);
  };

  let [cha,setcha]=useState<string>(manageProduct[get].image)
  console.log(cha)

  return (
    <>
      <Header />
      {/* ye top nab hai */}
      <div className="h-[100px] w-full flex items-center bg-[#F9F1E7] [@media(max-width:768px)]:h-[70px] ">
        <div className="h-6 w-[26%] border- flex justify-between items-center ml-[99px] [@media(max-width:1124px)]:w-[36%] [@media(max-width:1124px)]:ml-[35px] [@media(max-width:768px)]:w-[80%] ">
          <div className="h-6 w-[21%] border- flex justify-between items-center ">
            <h3 className="text-[#9F9F9F] font-normal text-base cursor-pointer">
              Home
            </h3>
            <Image
              src={"/picture/dashicons_arrow-up-alt2.png"}
              alt={"arrow"}
              height={17}
              width={17}
            />
          </div>
          <div className="h-6 w-[21%] border- flex justify-between items-center ">
            <h3 className="text-[#9F9F9F] font-normal text-base cursor-pointer">
              Show
            </h3>
            <Image
              src={"/picture/dashicons_arrow-up-alt2.png"}
              alt={"arrow"}
              height={17}
              width={17}
            />
          </div>

          <div className="h-8 w-[35%]  flex justify-end items-center border-l-2 border-[#9F9F9F] [@media(max-width:1124px)]:w-[40%]">
            <h3 className=" font-normal text-base cursor-pointer">
              {/* Asgaard sofa */}
              {manageProduct[get].name}
            </h3>
          </div>
        </div>
      </div>

      {/* ye iamge selection hai jo chenge hoga */}

      <div className=" w-full h-[780px] px-24 pt-9  [@media(max-width:1124px)]:px-8 [@media(max-width:768px)]:h-[1330px] [@media(max-width:550px)]:px-2">
        <div className=" w-full h-[770px] flex justify-between  [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:h-[1250px] ">
          <div className=" w-[46%] h-[490px] flex justify-between  [@media(max-width:1124px)]:w-[48%] [@media(max-width:768px)]:w-full [@media(max-width:550px)]:flex-col">
            <div className=" w-[22%] h-[392px] space-y-6 [@media(max-width:550px)]:flex [@media(max-width:550px)]:w-full [@media(max-width:550px)]:space-y-0 [@media(max-width:550px)]:space-x-2 [@media(max-width:550px)]:h-[150px]">
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div className="w-full h-[79px]  rounded bg-[#F9F1E7] " onClick={()=>{setcha(cha=manageProduct[get].image1)}}>
                <Image
                  src={manageProduct[get].image1}
                  alt={manageProduct[get].name}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div className="w-full h-[79px]  rounded bg-[#F9F1E7]" onClick={()=>{setcha(cha=manageProduct[get].image2)}}>
                <Image
                  src={manageProduct[get].image2}
                  alt={manageProduct[get].name}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div className="w-full h-[79px]  rounded bg-[#F9F1E7]" onClick={()=>{setcha(cha=manageProduct[get].image3)}}>
                <Image
                  src={manageProduct[get].image3}
                  alt={manageProduct[get].name}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
               {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div className="w-full h-[79px]  rounded bg-[#F9F1E7]" onClick={()=>{setcha(cha=manageProduct[get].image4)}}>
                <Image
                  src={manageProduct[get].image4}
                  alt={manageProduct[get].name}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className=" w-[70%] h-[488px] bg-[#F9F1E7] rounded-lg [@media(max-width:550px)]:w-full  [@media(max-width:550px)]:h-[390px]">
              <Image
              // is main usestate ky zayeya image a rahe hai
                src={cha}
                alt={manageProduct[get].name}
                width={900}
                height={960}
                className="h-full rounded-lg"
              />
            </div>
          </div>

          <div className=" w-[46%] h-[710px]  [@media(max-width:1124px)]:w-[49%] [@media(max-width:768px)]:w-full ">
            <h3 className="font-normal text-[42px]">
              {manageProduct[get].name}
            </h3>
            <h4 className="font-medium text-2xl text-[#9F9F9F]">
              Rs. {manageProduct[get].price}.00
            </h4>
            <div className=" w-[51%] h-10 flex justify-between [@media(max-width:1124px)]:w-[79%] ">
              <div className="w-[45%] h-10 flex items-center ">
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/carbon_star-half.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
              </div>
              <div className="border-l-2 border-[#9F9F9F] h-10 flex items-center justify-end w-[50%]">
                <h4 className="text-[#9F9F9F] text-sm ">5 Customer Review</h4>
              </div>
            </div>
            <div className=" w-[80%] h-[80px] mt-4  [@media(max-width:1124px)]:w-[93%]">
              <h1 className="text-sm">{manageProduct[get].discribtion}</h1>
            </div>
            <div className=" w-[30%] h-16 mt-5  [@media(max-width:1124px)]:w-[45%]  [@media(max-width:1124px)]:mt-7">
              <h3 className="text-[#9F9F9F]">Size</h3>
              <div className=" w-full h-[30px] flex justify-between mt-1">
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>L</h3>
                </div>
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>XL</h3>
                </div>
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>XS</h3>
                </div>
              </div>
            </div>

            <div className=" w-[30%] h-16 mt-5  [@media(max-width:1124px)]:w-[45%]">
              <h3 className="text-[#9F9F9F]">Color</h3>
              <div className=" w-full h-[30px] flex justify-between mt-1 ">
                <div className=" h-[30px] w-[22%] rounded-full bg-[#816DFA] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white "></div>
                <div className=" h-[30px] w-[22%] rounded-full bg-[#000000] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white"></div>
                <div className=" h-[30px] w-[22%] rounded-full bg-[#B88E2F] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white"></div>
              </div>
            </div>

            <div className=" w-full h-16 flex justify-between mt-5 [@media(max-width:550px)]:items-center">
              <div className="border border-black w-[23%] h-16 rounded-lg flex justify-around items-center [@media(max-width:550px)]:h-12 [@media(max-width:550px)]:rounded-xl">
                <span className="text-base cursor-pointer" onClick={minus}>
                  -
                </span>
                <span className="text-base">{incre}</span>
                <span className="text-base cursor-pointer" onClick={plus}>
                  +
                </span>
              </div>

              <div className="border border-black w-[35%] h-16 rounded-2xl flex justify-center items-center [@media(max-width:550px)]:h-12">
                <Link href={`/${manageProduct[get].name}`}>
                <h3 className="text-xl  [@media(max-width:1124px)]:text-lg">
                  Add To Cart
                </h3>
                </Link>
              </div>

              <div className="border border-black w-[35%] h-16 rounded-2xl flex justify-center items-center [@media(max-width:550px)]:h-12">
                <div className="flex items-center justify-between w-[90%] ">
                  <span className="text-2xl  [@media(max-width:1124px)]:text-xl  [@media(max-width:1124px)]:mr-3 ">
                    +
                  </span>
                  <h3 className="text-xl  [@media(max-width:1124px)]:text-lg ">
                    Compare
                  </h3>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#9F9F9F] w-full h-44 mt-11 text-[#9F9F9F] pt-9 space-y-3">
              <div className="w-full flex">
                <h3 className="w-[21%]">Sku</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <h3>{manageProduct[get].Sku}</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Category</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <h3>{manageProduct[get].Category}</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Tags</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <h3>Sofa, Chair, Home, Shop</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Share</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <div className="flex justify-between w-[20%]  [@media(max-width:1124px)]:w-[30%]">
                  <Link
                    href={
                      "https://www.facebook.com/people/Sajeel-Khan/pfbid02MqZHPA1iHRTCJMAmZX62R4fWMdSRhGbdb7A17PDPntiGbU1FoYeNfqMoGsRogpGFl/"
                    }
                    target="_blank"
                  >
                    <Image
                      src={"/picture/akar-icons_facebook-fill.png"}
                      alt={"facebook"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"
                    }
                    target="_blank"
                  >
                    <Image
                      src={"/picture/akar-icons_linkedin-box-fill.png"}
                      alt={"facebook"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                  <Link href={""} target="_blank">
                    <Image
                      src={"/picture/ant-design_twitter-circle-filled.png"}
                      alt={"twitter"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* discribtion ka selection hai last wala*/}

      <div className="w-full lg:[604px] px-24  [@media(max-width:1124px)]:px-8 [@media(max-width:639px)]:px-1 md:h-[720px] sm:h-[1130px] [@media(max-width:639px)]:h-[1220px]">
        <div className=" w-full h-[595px] space-y-12 mt-7 md:h-[660px] sm:h-[1058px] [@media(max-width:460px)]: [@media(max-width:639px)]:h-[1160px] [@media(max-width:639px)]:space-y-9">
          <div className="w-full h-9 flex items-center justify-center px-1">
            <div className="w-[60%] h-9 flex justify-between  [@media(max-width:1124px)]:w-full [@media(max-width:639px)]:items-center">
              <h2 className="font-medium md:text-2xl sm:text-xl [@media(max-width:460px)]:text-sm">
                Description
              </h2>
              <h2 className="md:text-2xl text-[#9F9F9F] sm:text-xl [@media(max-width:460px)]:text-sm">
                Additional Information
              </h2>
              <h2 className="md:text-2xl text-[#9F9F9F] sm:text-xl [@media(max-width:460px)]:text-sm">
                Reviews [5]
              </h2>
            </div>
          </div>

          <div className="w-full h-[174px] space-y-7  md:h-[240px] sm:h-[330px] [@media(max-width:639px)]:h-[450px] px-1">
            <p className="text-justify text-[#9F9F9F]">
              Embodying the raw, wayward spirit of rock n roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-justify text-[#9F9F9F]">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="w-full h-[282px] flex space-x-8 [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:h-[590px] [@media(max-width:768px)]:space-x-0 [@media(max-width:768px)]:space-y-6">
            <div className="w-[50%] h-[281px] bg-[#F9F1E7] [@media(max-width:768px)]:w-full flex justify-center">
              <Image
                src={"/picture/Group 106.png"}
                alt={""}
                width={500}
                height={100}
              />
            </div>

            <div className="w-[50%] h-[281px] bg-[#F9F1E7] [@media(max-width:768px)]:w-full flex justify-center">
              <Image
                src={"/picture/Group 107.png"}
                alt={""}
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;
