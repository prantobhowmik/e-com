"use client"
import Image from "next/image";
import {GoArrowDownRight, GoArrowUpRight} from "react-icons/go";
import {useState} from "react";


export default function Banner()  {

      const [isHovered, setIsHovered] = useState(false);


    return(
        <div className="mt-10 bg-purple-100  mx-20 px-20 h-[445px] flex flex-row items-center justify-between ">
            <div className="flex flex-col  justify-center w-full space-y-3 ">
                <h1 style={{fontFamily: "cursive"}} className="text-3xl text-purple-600">Big Deal</h1>
                <h1 style={{fontFamily: "-moz-initial", fontWeight: 50}} className="text-5xl font-bold"><span
                    className="text-purple-600">30%</span> Off for New Customers</h1>
                <button
                    className="flex flex-row items-center pt-3 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <span
                        className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white py-3 px-7 rounded-full">Shop Now</span>
                    {isHovered ? (
                        <GoArrowDownRight
                            className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white w-[48px] h-[48px] rounded-full"
                            size={14}/>
                    ) : (
                        <GoArrowUpRight
                            className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white w-[48px] h-[48px] rounded-full"
                            size={14}/>
                    )}
                </button>
            </div>
            <div className="flex w-full items-end justify-end">
                <Image src={'/image 2.png'} alt={"bannerimage"} className="flex " width={390} height={438} />
            </div>
        </div>
    )
}