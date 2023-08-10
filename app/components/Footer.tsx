import Link from "next/link";
import React from "react";
import { GiFlatPlatform } from "react-icons/gi";

type FooterheaderProps = {
  title: string;
};

const Footerheader = ({ title }: FooterheaderProps) => {
  return <h3 className="mb-5 font-semibold text-md">{title}</h3>;
};

const Footer = () => {
  const footContent = {
    products: ["About", "Pricing", "Features", "Integrations", "Embeds"],
    updates: ["Changelog", "Blog"],
    embed: ["React Embed", "Vue Embed", "HTML Embed"],
    integrations: [
      "Zapier integrations",
      "Slack integrations",
      "Webhooks integrations",
    ],
  };
  return (
    <footer className="px-5 max-w-[95vw] 2xl:max-w-[85vw] mx-auto">
      <div className="py-10 flex flex-col md:flex-row md:gap-20">
        <div className="brand mb-3">
          <Link href="" className="flex_center gap-3">
            <GiFlatPlatform size={30} />
            <span className="text-xl font-medium">UseForm</span>
          </Link>
          <p className="py-4 text-sm text-slate-500">
            Create beautiful professional forms in minutes.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <Footerheader title="Product" />
            {footContent.products.map((item) => (
              <li className="mb-2 text-slate-500 text-base font-light hover:text-gray-600 transition-all ease-linear">
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </div>

          <div>
            <Footerheader title="Updates" />
            {footContent.updates.map((item) => (
              <li className="mb-2 text-slate-500 text-base font-light hover:text-gray-600 transition-all ease-linear">
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </div>

          <div>
            <Footerheader title="Embeds" />
            {footContent.embed.map((item) => (
              <li className="mb-2 text-slate-500 text-base font-light hover:text-gray-600 transition-all ease-linear">
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </div>

          <div>
            <Footerheader title="Integrations" />
            {footContent.integrations.map((item) => (
              <li className="mb-2 text-slate-500 text-base font-light hover:text-gray-600 transition-all ease-linear">
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <hr />
      <div className="py-8 flex_center">
        <div className="flex_center">
          <p className="text-slate-500 text-sm">© 2023 Useform</p>
          <span className="mx-2 text-xs text-slate-500">/</span>
        </div>
        <div>
          <Link href="#privacy" className="mr-2 text-slate-500 text-sm">
            Privacy
          </Link>
          <Link href="#terms" className="text-slate-500 text-sm">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
