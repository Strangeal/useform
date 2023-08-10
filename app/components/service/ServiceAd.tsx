import React from "react";
import { ads } from "@/public/db";

const ServiceAd = () => {
  return (
    <section className="px-5 md:max-w-[95vw] 2xl:max-w-[80vw] mx-auto mb-32">
      <h2 className="mb-5 font-medium text-2xl text-center max-w-[90vw] w-[300px] mx-auto sm:text-4xl sm:w-[480px]">
        Save development time, focus on your business
      </h2>
      <p className="mb-5 text-slate-600 font-light text-md text-center max-w-[90vw] sm:w-[420px] sm:mx-auto">
        Scale your form development time with Useform. Let us handle the form
        creation, so you focus on what matters most.
      </p>

      <ul className="bg-[#E6F0FE] rounded-xl py-14 px-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {ads.map((ad) => (
          <li className="text-center sm:last:col-span-2 md:last:col-span-1">
            {React.createElement(ad.icon, {
              size: 38,
              className:
                "text-[#2563eb] bg-[#DBE9FE] p-2 rounded-full mb-5 mx-auto",
            })}
            <h3 className="text-3xl font-semibold text-[#2463EB] mb-2">
              {ad.title}
            </h3>
            <p className="font-medium text-md">{ad.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceAd;
