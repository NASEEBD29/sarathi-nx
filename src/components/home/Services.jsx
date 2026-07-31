import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp";
import {
  FaPassport,
  FaPlane,
  FaHotel,
  FaBriefcase,
  FaGlobeAsia,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    title: "Visa Assistance",
    icon: <FaPassport />,
  },
  {
    title: "International Flights",
    icon: <FaPlane />,
  },
  {
    title: "Hotel Booking",
    icon: <FaHotel />,
  },
  {
    title: "Business Travel",
    icon: <FaBriefcase />,
  },
  {
    title: "Exhibition Tours",
    icon: <FaGlobeAsia />,
  },
  {
    title: "Group Tours",
    icon: <FaUsers />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-100">
      <FadeUp>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-yellow-500 uppercase tracking-[4px]">

            Our Services

          </span>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">

            Complete Travel Solutions

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition"
            >

              <div className="text-5xl text-yellow-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6 text-[#0B1F4D]">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600">

                Professional travel management with personalized support.

              </p>

            </div>

          ))}

        </div>

      </div>
    </FadeUp>
    </section>
  );
}