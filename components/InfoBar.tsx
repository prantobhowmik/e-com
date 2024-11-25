import { FaTruck, FaSyncAlt, FaLock } from "react-icons/fa";

export default function InfoBar() {
  return (
    <section className=" text-white h-[82px] -mt-2 flex" style={{ backgroundImage: "url('/option.png')" }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Free Shipping */}
        <div className="flex items-center space-x-4">
          <FaTruck className="text-2xl" />
          <div>
            <h3 className="font-semibold">FREE SHIPPING</h3>
            <p className="text-sm">Buy BDT 3000+ & Get Free Delivery</p>
          </div>
        </div>
        {/* 7 Days Exchange */}
        <div className="flex items-center space-x-4">
          <FaSyncAlt className="text-2xl" />
          <div>
            <h3 className="font-semibold">7 DAYS EXCHANGE</h3>
            <p className="text-sm">Exchange within 7 days with similar products</p>
          </div>
        </div>
        {/* 100% Payment Secure */}
        <div className="flex items-center space-x-4">
          <FaLock className="text-2xl" />
          <div>
            <h3 className="font-semibold">100% PAYMENT SECURE</h3>
            <p className="text-sm">Cash on delivery and secured online payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
