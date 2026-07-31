import {
  FaLaptopCode,
  FaIndustry,
  FaHospital,
  FaCar,
  FaFlask,
  FaBuilding,
  FaLeaf,
  FaMicrochip,
} from "react-icons/fa";
import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp";

const industries = [
  { title: "Information Technology", icon: <FaLaptopCode /> },
  { title: "Manufacturing", icon: <FaIndustry /> },
  { title: "Healthcare", icon: <FaHospital /> },
  { title: "Automobile", icon: <FaCar /> },
  { title: "Chemical", icon: <FaFlask /> },
  { title: "Construction", icon: <FaBuilding /> },
  { title: "Agriculture", icon: <FaLeaf /> },
  { title: "Electronics", icon: <FaMicrochip /> },
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-100">
      <FadeUp>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-yellow-500 uppercase tracking-[4px]">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
            Corporate Travel Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-yellow-500 flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F4D]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
      </FadeUp>
    </section>
  );
}