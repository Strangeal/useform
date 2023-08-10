import React from "react";
import { IconType } from "react-icons";

type serviceProps = {
  icon: IconType;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: serviceProps) => {
  return (
    <div>
      <span className="">
        {React.createElement(icon, {
          size: 38,
          className: "text-sky-500 bg-[#EBF4FE] p-1 rounded-full",
        })}
      </span>
      <h3 className="my-3 font-normal text-xl">{title}</h3>
      <p className="mb-5 text-slate-600 font-light text-l">{description}</p>
    </div>
  );
};

export default Service;
