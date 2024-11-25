"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Product from "@/components/Product";
import { useEffect, useRef, useState } from "react";
import { truncate } from "lodash";

// Define the ProductData interface
interface ProductData {
  id: number;
  title: string;
  price: number;
  images: string[]; // Adjust to match the actual API response
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10") // Fetching only 10 products for better performance
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 1280; // Adjust the scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading)
    return (
      <div className="w-screen p-5 flex items-center justify-center">
        <div className="spinner border-purple-600" /> {/* Replace with a spinner */}
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="px-20 mt-5">
      {/* Header */}
      <div className="flex flex-row justify-between mb-5">
        <div>
          <h1 className="text-purple-600 uppercase tracking-wide">Featured Products</h1>
          <h1 className="font-bold text-2xl">New Arrivals</h1>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <button onClick={() => scroll("left")}>
            <IoIosArrowRoundBack
              className="hover:bg-purple-600 hover:text-white border border-purple-600 rounded-full text-purple-600"
              size={30}
            />
          </button>
          <button onClick={() => scroll("right")}>
            <IoIosArrowRoundForward
              className="hover:bg-purple-600 hover:text-white border border-purple-600 rounded-full text-purple-600"
              size={30}
            />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        ref={scrollContainerRef}
        className="bg-white flex  items-center justify-center space-x-20 overflow-x-auto scrollbar-hide" // Horizontal scroll container
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="shrink-0 w-60" // Control card width
          >
            <Product
              image={product.images[1]} // Assuming the API returns an array of images
              title={truncate(product.title, { length: 21, omission: "" })}
              price={Number((product.price * 119.44).toFixed())}
            />
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <button onClick={() => scroll("right")}>
          <h1 className="text-white border rounded-lg bg-purple-600 px-5 py-2 mt-5"> See More</h1>
        </button>
      </div>
    </div>
  );
}
