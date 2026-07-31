import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp";
const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "ABC Engineering",
    text: "Sarathi NX managed our Germany exhibition trip perfectly. Flights, hotels and visas were handled professionally.",
  },
  {
    name: "Priya Shah",
    company: "Global Pharma",
    text: "Excellent support throughout our Dubai business tour. Highly recommended for corporate travel.",
  },
  {
    name: "Mohammed Khan",
    company: "Tech Solutions",
    text: "Professional team with great planning. We never had to worry about travel arrangements.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <FadeUp>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-yellow-500">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
            >
              <FaQuoteLeft className="text-4xl text-yellow-500" />

              <p className="mt-6 text-gray-600 leading-8">
                {item.text}
              </p>

              <div className="flex mt-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <h3 className="mt-6 font-bold text-xl text-[#0B1F4D]">
                {item.name}
              </h3>

              <p className="text-gray-500">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
      </FadeUp>
    </section>
  );
}