import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

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

  if (params.card == "Syltherine") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/Images.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Syltherine</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 250,000.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 250,000.00</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">
                Rs. 250,000.00
              </span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Leviosa") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 2.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Leviosa</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 250,000.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 250,000.00</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">
                Rs. 250,000.00
              </span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Lolito") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 3.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Lolito</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 7.000.000</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 7.000.000</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 7.000.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 7.000.000</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Respira") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 4.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Respira</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 500.000</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 500.000</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 500.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 500.000</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Grifo") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/Image 5.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Grifo</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 1.500.000</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 1.500.000</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 1.500.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 1.500.000</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Muggo") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 6.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Muggo</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 1.500.0</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 1.500.0</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 1.500.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 1.500.0</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Pingky") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 7.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Pingky</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 7.000.000</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 7.000.000</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 7.000.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 7.000.000</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
  } else if (params.card == "Potty") {
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

        <div className="p-4 space-y-6">
          {/* Cart Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-beige-light">
                  <th className="text-left p-3 text-gray-700">Product</th>
                  <th className="text-left p-3 text-gray-700">Price</th>
                  <th className="text-left p-3 text-gray-700">Quantity</th>
                  <th className="text-left p-3 text-gray-700">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center space-x-4">
                    <Image
                      src="/picture/image 8.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-gray-800 text-sm">Potty</span>
                  </td>
                  <td className="p-3 text-gray-700">Rs. 5.000.000</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="p-3 text-gray-700">Rs. 5.000.000</td>
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
          <div className="w-full bg-beige-light p-4 rounded shadow-md space-y-4">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-800 text-sm">Rs. 5.000.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold text-sm">Total</span>
              <span className="text-gold font-bold text-sm">Rs. 5.000.000</span>
            </div>

            <button className="w-full bg-gold text-white py-2 px-4 rounded">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-beige-100 py-8 bg-[#F9F1E7] mb-9">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
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
}

export default Card;
