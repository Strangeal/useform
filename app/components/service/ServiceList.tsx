import Service from "./Service";
import { serviceList } from "@/public/db";

const ServiceList = () => {
  return (
    <section className="px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:px-10 2xl:max-w-[80vw] 2xl:px-0 mx-auto mb-20">
      {serviceList &&
        serviceList.map((item, index) => <Service key={index} {...item} />)}
    </section>
  );
};

export default ServiceList;
