"use client"
import Image from "next/image";
import {GoArrowDownRight, GoArrowUpRight} from "react-icons/go";
import {useState} from "react";




export default function Mens() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center px-20 space-x-5 ">
            <div className="">
                <Image src={'/man.png'} alt={'mens'} width={621} height={566} className=""/>
            </div>
            <div>
                <h1 className="text-[48px] font-semibold">MEN COLLECTION</h1>
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
        </div>
    )
}