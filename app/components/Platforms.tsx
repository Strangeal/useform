import Image from "next/image";

const Platforms = () => {
  return (
    <section className="px-5 mb-32">
      <h3 className="mb-1 font-bold text-[#2463EB] text-md text-center">
        PLATFORM AGNOSTIC
      </h3>
      <h2 className="mb-5 font-bold text-2xl text-center">
        Embed on any platform
      </h2>
      <p className="mb-5 text-normal text-slate-600 text-center text-md max-w-[90vw] mx-auto xs:w-[480px] md:w-[670px]">
        Embed your form easily on the most popular platforms. If you are using
        something less popular, with 2 lines of HTML you can embed your form to
        any platform!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mx-w-[90vw] md:w-[750px] mx-auto">
        <div className="bg-[#E6F0FE] py-7 px-9 rounded-xl w-full">
          <Image
            className="mx-auto"
            src="/assets/icons/webflow-r.png"
            width={180}
            height={180}
            alt="platform logo"
          />
        </div>
        <div className="bg-[#E6F0FE] py-7 px-9 rounded-xl w-full">
          <Image
            className="mx-auto"
            src="/assets/icons/wordpress-r.png"
            width={180}
            height={150}
            alt="platform logo"
          />
        </div>
        <div className="bg-[#E6F0FE] py-7 px-9 rounded-xl w-full">
          <Image
            className="mx-auto"
            src="/assets/icons/zapier-r.png"
            width={180}
            height={180}
            alt="platform logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Platforms;
