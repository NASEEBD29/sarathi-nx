import about from "../../assets/images/about.jpg";
import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <FadeUp>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src={about}
          alt="About Sarathi NX"
          className="rounded-3xl shadow-2xl"
        />

        <div>

          <span className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-5 text-[#0B1F4D]">
            Sarathi NX Pvt Ltd
          </h2>

          <p className="mt-8 text-gray-600 leading-8">

            With a travel legacy dating back to 2012,
            Sarathi NX Private Limited delivers premium
            International Exhibition Travel,
            Corporate Tours,
            Business Travel,
            Visa Assistance and
            Worldwide Tourism Solutions.

          </p>

          <button className="mt-10 bg-[#0B1F4D] text-white px-8 py-4 rounded-lg hover:bg-blue-900">

            Read More

          </button>

        </div>

      </div>

      </FadeUp>

    </section>
  );
}