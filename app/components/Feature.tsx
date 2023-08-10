import { BsPatchCheck } from "react-icons/bs";
import Image from "next/image";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  list: string[];
  img: String;
};

const Feature = ({ title, subtitle, description, list, img }: CardProps) => {
  return (
    <div className="mb-32 px-5 grid grid-cols-1 lg:grid-cols-2 xl:px-10 gap-5 mx-auto lg:even:flex lg:even:flex-row-reverse 2xl:max-w-[80vw] 2xl:px-0">
      <div className="lg:flex-1">
        <h3 className="mb-3 font-bold text-lg text-[#2463EB]">{title}</h3>
        <h2 className="font-medium text-4xl">{subtitle}</h2>
        <p className="my-5 text-slate-600 font-light text-lg">{description}</p>
        <ul>
          <li className="flex_center gap-3 mb-3">
            <BsPatchCheck size={25} className="text-[#2563eb]" />
            <span className="text-slate-700 font-light text-lg">{list[0]}</span>
          </li>
          <li className="flex_center gap-3 mb-3">
            <BsPatchCheck size={25} className="text-[#2563eb]" />
            <span className="text-slate-700 font-light text-lg">{list[1]}</span>
          </li>
          <li className="flex_center gap-3 mb-10">
            <BsPatchCheck size={25} className="text-[#2563eb]" />
            <span className="text-slate-700 font-light text-lg">{list[2]}</span>
          </li>
        </ul>
      </div>
      <div className="lg:flex-1">
        <Image
          className="rounded-xl lg:flex-1"
          src={`${img}`}
          width={500}
          height={500}
          layout="responsive"
          alt="service image"
        />
      </div>
    </div>
  );
};

export default Feature;
