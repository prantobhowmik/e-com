import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="bg-black/90 items-center text-white flex flex-col ">
      <div className="container px-20 py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo and Description */}
          <div className="flex w-1/2 flex-col">
            <img src="/logo2.png" alt="We5ive Logo" width={197} height={49} className=""/>
            <p className="mt-4 text-sm text-gray-400">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="w-1/2 flex flex-col">
            <h4 className="text-lg font-semibold">Sign Up For Our Newsletter!</h4>
            <p className="mt-2 text-sm text-gray-400">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-200 text-gray-900 outline-none border border-gray-700"
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>


        {/* Footer Bottom
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 | We5ive</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <RxTwitterLogo className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>*/}
      </div>
      {/* Links Section */}
      <div className="w-screen flex items-center justify-between flex-col md:flex-row lg:flex-row px-40">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="mt-2 text-sm text-gray-400">
            support@we5ive.com
          </p>
        </div>

        <div className="flex flex-col">
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Social Links</h1>
          <ul className="flex flex-row justify-between mt-2">
            <li>
              <FaFacebookF size={20} className="cursor-pointer hover:text-white" />

            </li>
            <li>
              <RxTwitterLogo size={20} className="cursor-pointer hover:text-white" />
            </li>
            <li>
              <FaLinkedinIn size={20} className="cursor-pointer hover:text-white" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 h-[58px] bg-purple-600 w-screen items-center justify-center flex">
        <p style={{fontWeight:200}}>© 2024 | We5ive</p>
      </div>
    </footer>
  );
}
