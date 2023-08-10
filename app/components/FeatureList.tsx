import Image from "next/legacy/image";
import Feature from "./Feature";
import { featureList } from "@/public/db";

const FeatureList = () => {
  return (
    <section>
      {featureList &&
        featureList.map((card, index) => <Feature key={index} {...card} />)}
    </section>
  );
};

export default FeatureList;
