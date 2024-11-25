interface ProductData {
    title: string,
    price: number,
    image: string,
    key?: number
}

export default function Product({title, price, image}: ProductData) {
    return (
        <div className=" flex items-center flex-col w-[286] md:w-auto lg:w-[286px] space-y-3 py-2 mx-4 ">
            <img src={image} alt={title} width={286} height={287} className="flex rounded-lg"/>
            <div className="flex flex-row w-full justify-between px-1">
                <h1 className="font-thin">{title}</h1>
                <h1 className="font-semibold">BDT {price}</h1>
            </div>
            <button className="border border-purple-600 text-purple-600 rounded-lg w-full py-1 hover:bg-purple-600 transition duration-500 hover:text-white">Add to Cart</button>
        </div>
    )
}