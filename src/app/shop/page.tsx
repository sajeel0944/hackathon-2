import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

function Shop() {
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
    {
      id: 9,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/picture/Image 5.png",
    },
    {
      id: 10,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      new: true,
      image: "/picture/image 6.png",
    },
    {
      id: 11,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "50%",
      image: "/picture/image 7.png",
    },
    {
      id: 12,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      new: true,
      image: "/picture/image 8.png",
    },
    {
      id: 13,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "30%",
      image: "/picture/Images.png",
    },
    {
      id: 13,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/picture/image 2.png",
    },
    {
      id: 14,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      new: true,
      image: "/picture/image 8.png",
    },
    {
      id: 15,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/picture/Image 5.png",
    },
  ];

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
  return (
    <>
      <Header />

      <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url('/picture/Rectangle 1.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            Shop
          </h1>
          <p className="text-sm md:text-base font-medium text-black">
            <span className="hover:underline cursor-pointer ">
              {" "}
              <Link href={"/home"}>Home</Link>
            </span>{" "}
            &gt; Shop
          </p>
        </div>
      </div>

      {/* filter */}

      <div className="bg-beige-100 p-4 border-b border-gray-200 bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
              <span className="mr-2">Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.36 5.36a1 1 0 00-.293.707v4.586a1 1 0 01-.293.707l-1 1A1 1 0 0112 20v-3H8v3a1 1 0 01-1.707.707l-1-1a1 1 0 01-.293-.707v-4.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-200 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <button className="p-2 bg-gray-200 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6h4M6 10h12M10 14h4M6 18h12"
                  />
                </svg>
              </button>
            </div>
            <span>Showing 1-16 of 32 results</span>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <label className="mr-2 text-sm font-medium">Show</label>
              <input
                type="number"
                className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-sm"
                value={16}
                readOnly
              />
            </div>
            <div>
              <label className="mr-2 text-sm font-medium">Sort by</label>
              <select className="px-2 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Default</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div />

      {/* image */}

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <Link href={`/shop/${product.name}`}>
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
                    {/* <Link href={product.name}>  cancel this*/}
                    <button className="bg-white text-black px-4 py-2 mb-2 rounded">


                      {/* Add to Cart cancel this */}
                      Buy Now
                      

                    </button>
                    {/* </Link> cancel this*/}
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
                        {" "}
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
                </Link>
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
          <div className="mt-6 text-center space-x-6">
            <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              1
            </button>
            <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              2
            </button>
            <button className="bg-[#FAF3EA]  hover:text-white  px-4 py-2 rounded hover:bg-yellow-600">
              3
            </button>
            <button className="bg-[#FAF3EA]  hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
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

export default Shop;
