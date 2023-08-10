import { BsCheckLg, BsStars } from "react-icons/bs";

const Waitlist = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 px-5 py-32">
      <div className="text-center">
        <h4 className="mb-5 text-blue-200 text-lg font-medium">
          Ready to collect submissions?
        </h4>
        <h3 className="mb-5 text-4xl font-semibold text-white max-w-[90vw] w-[420px] mx-auto leading-normal">
          Create your first form{" "}
          <span className="bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            in just 5 minutes
          </span>
          .
        </h3>
        <button className="flex_center gap-4 mx-auto text-white text-xl font-light mb-7 py-4 px-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 transition-transform duration-200">
          Join the waitlist
          <BsStars size={30} className="-rotate-90" />
        </button>
        <ul className="flex_center justify-center flex-wrap gap-3 max-w-[90vw] w-[600px] mx-auto">
          <li className="flex_center">
            <BsCheckLg
              size={18}
              className="rounded-full text-blue-500 bg-blue-600/50 p-1 mr-2"
            />
            <span className="text-blue-200/80 text-xs flex-shrink-0">
              Free early-access
            </span>
          </li>
          <li className="flex_center">
            <BsCheckLg
              size={18}
              className="rounded-full text-blue-500 bg-blue-600/50 p-1 mr-2"
            />
            <span className="text-blue-200/80 text-xs flex-shrink-0">
              No credit-card required
            </span>
          </li>
          <li className="flex_center">
            <BsCheckLg
              size={18}
              className="rounded-full text-blue-500 bg-blue-600/50 p-1 mr-2"
            />
            <span className="text-blue-200/80 text-xs flex-shrink-0">
              Embed in any website
            </span>
          </li>
          <li className="flex_center">
            <BsCheckLg
              size={18}
              className="rounded-full text-blue-500 bg-blue-600/50 p-1 mr-2"
            />
            <span className="text-blue-200/80 text-xs flex-shrink-0">
              Includes pre-built templates
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Waitlist;
