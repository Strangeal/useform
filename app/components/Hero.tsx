import Image from "next/image";
import { BsStars } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mb-32 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pt-40 border-b">
      <div className="max-w-[90vw] w-[667px] mx-auto px-6">
        <div>
          <h1 className="mb-5 font-medium text-4xl text-center max-w-[90vw] xs:w-[365px] sm:text-6xl sm:w-[510px] mx-auto">
            Create an online form{" "}
            <span className="text-[#2563eb]">in minutes</span>.
          </h1>
          <p className="mb-5 text-slate-500 font-normal text-center text-lg">
            Forms are{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text font-medium text-transparent">
              complex and time-consuming
            </span>{" "}
            to create and integrate. We make it{" "}
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text font-medium text-transparent">
              easy
            </span>{" "}
            to create them and
            <span className="text-sky-500"> embed it</span> into your website in
            minutes.
          </p>

          <p className="mb-2 text-center">
            Get notified when we launch and get a free early access. 🐥
          </p>
        </div>

        <div className="flex-col flex_center justify-center gap-3 mb-20 sm:flex-row sm:w-[470px] mx-auto">
          <input
            type="text"
            className="border h-12 rounded px-3 w-full"
            placeholder="Enter your email"
          />
          <button className="flex_center justify-center mx-auto w-full font-medium py-3 rounded-md bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-blue-50">
            Join the wishlist
            <BsStars size={30} className="-rotate-90" />
          </button>
        </div>
      </div>
      <Image
        className="px-5 max-w-[80vw] w-[667px] mx-auto 2xl:px-0 border-x border-t rounded-lg"
        src="/assets/images/field.jpg"
        width={500}
        height={500}
        alt="hero image"
        layout="responsive"
      />
    </section>
  );
};

export default Hero;
