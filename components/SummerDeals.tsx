"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Product from "@/components/Product";
import { useEffect,  useState } from "react";
import Image from "next/image";

// Define the ProductData interface
interface ProductData {
  id: number;
  title: string;
  price: number;
  images: string[]; // Adjust to match the actual API response
}

export default function SummerDeals() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=8") // Fetching only 10 products for better performance
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data: ProductData[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);



  if (loading)
    return (
      <div className="w-screen p-5 flex items-center justify-center">
        <div className="spinner border-purple-600" /> {/* Replace with a spinner */}
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="px-20 my-16">
      {/* Header */}
      <div className="flex flex-row justify-between mb-5">
        <div>
          <h1 className="text-purple-600 uppercase tracking-wide">SUMMER</h1>
          <h1 className="font-bold text-2xl">Big Deal</h1>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <button >
            <IoIosArrowRoundBack
              className="hover:bg-purple-600 hover:text-white border border-purple-600 rounded-full text-purple-600"
              size={30}
            />
          </button>
          <button >
            <IoIosArrowRoundForward
              className="hover:bg-purple-600 hover:text-white border border-purple-600 rounded-full text-purple-600"
              size={30}
            />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3" // Horizontal scroll container
      >

        {products.map((product) => (
            <div
                key={product.id}
                className="shrink-0  bg-white" // Control card width
            >
                <div className="flex justify-end">
                    <Image src={'/Frame 67.png'} alt={'disxount'} width={50} height={50} className="absolute m-2 mr-10"/>
                </div>
                <Product
                    image={product.images[1]} // Assuming the API returns an array of images
                    title={product.title?.substring(0, 21) as string}
                    price={Number((product.price * 119.44).toFixed())}
                />
            </div>
        ))}
      </div>
        <div className=" flex items-center justify-center">
            <button>
                <h1 className="text-white border rounded-lg bg-purple-600 px-5 py-2 mt-5"> See More</h1>
        </button>
      </div>
    </div>
  );
}
