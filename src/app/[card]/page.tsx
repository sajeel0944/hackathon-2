import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

// update this page

function Card({ params }: { params: { card: string } }) {
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

  type card = {
    id: number;
    name: string;
    image: string;
    price: number;
  };

  const manageCard: Record<string, card> = {
    Syltherine: {
      id: 1,
      name: "Syltherine",
      image: "/picture/Images.png",
      price: 2500.0,
    },
    Leviosa: {
      id: 2,
      name: "Leviosa",
      image: "/picture/image 2.png",
      price: 2500.0,
    },
    Lolito: {
      id: 3,
      name: "Lolito",
      image: "/picture/image 3.png",
      price: 7000.0,
    },
    Respira: {
      id: 4,
      name: "Respira",
      image: "/picture/image 4.png",
      price: 500.0,
    },
    Grifo: {
      id: 5,
      name: "Grifo",
      image: "/picture/Image 5.png",
      price: 1500.0,
    },
    Muggo: {
      id: 6,
      name: "Muggo",
      image: "/picture/image 6.png",
      price: 150.0,
    },
    Pingky: {
      id: 7,
      name: "Pingky",
      image: "/picture/image 7.png",
      price: 7000.0,
    },
    Potty: {
      id: 8,
      name: "Potty",
      image: "/picture/image 8.png",
      price: 500.0,
    },
  };

  let get=params.card
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
            Card
          </h1>
          <p className="text-sm md:text-base font-medium text-black">
            <span className="hover:underline cursor-pointer ">
              <Link href={"/home"}>Home</Link>
            </span>
            &gt; card
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6 flex [@media(max-width:767px)]:flex-col">
        {/* Cart Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-[94%] border-collapse text-sm">
            <thead>
              <tr className="bg-beige-light bg-[#F9F1E7]">
                <th className="text-left p-3 text-gray-700">Product</th>
                <th className="text-left p-3 text-gray-700">Price</th>
                <th className="text-left p-3 text-gray-700">Quantity</th>
                <th className="text-left p-3 text-gray-700">Subtotal</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3 flex items-center space-x-4 [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:space-y-2 ">
                  <Image
                    src={manageCard[get].image}
                    alt="Asgaard Sofa"
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <span className="text-gray-800 text-sm">{manageCard[get].name}</span>
                </td>
                <td className="p-3 text-gray-700">Rs. {manageCard[get].price}</td>
                <td className="p-3">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-12 border rounded text-center"
                  />
                </td>
                <td className="p-3 text-gray-700">Rs. {manageCard[get].price}</td>
                <td className="p-3">
                  <button className="text-gold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-[30%] bg-[#F9F1E7] p-4 rounded shadow-md space-y-10 h-72  [@media(max-width:767px)]:w-full">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Subtotal</span>
            <span className="text-gray-800 text-sm">Rs. {manageCard[get].price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-800 font-semibold text-sm">Total</span>
            <span className="text-gold font-bold text-sm">Rs. {manageCard[get].price}</span>
          </div>

          <div className="flex justify-center">
           
            <button className="lg:w-[60%] md:w-full bg-gold py-2 px-4 rounded-xl text-black border-[#9F9F9F] border-2 ">
            <Link href={`${manageCard[get].name}/${manageCard[get].id}`}>
              Check Out
              </Link>

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

export default Card;
