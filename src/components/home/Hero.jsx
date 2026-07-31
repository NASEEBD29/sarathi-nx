import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <section   id="hero"
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[6px] text-yellow-400"
          >
            International Travel Experts
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-6xl md:text-7xl font-extrabold mt-6 leading-tight"
          >
            WE PLAN.
            <br />
            YOU TRAVEL.
            <br />
            WE CARE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 mt-8 max-w-xl text-xl"
          >
            International Exhibition Travel, Business Travel,
            Corporate Tours, Visa Assistance and Worldwide Tourism
            Solutions.
          </motion.p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-lg font-bold">
              Explore Services
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}