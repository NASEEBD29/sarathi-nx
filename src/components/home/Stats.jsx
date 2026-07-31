import { FaGlobe, FaUsers, FaPlaneDeparture, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaGlobe />,
    number: "25+",
    title: "Countries Covered",
  },
  {
    icon: <FaUsers />,
    number: "1000+",
    title: "Happy Travelers",
  },
  {
    icon: <FaPlaneDeparture />,
    number: "500+",
    title: "Business Tours",
  },
  {
    icon: <FaAward />,
    number: "12+",
    title: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0B1F4D] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 grid-cols-2 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="text-center text-white bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:scale-105 transition"
          >

            <div className="text-5xl text-yellow-400 flex justify-center">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold mt-5">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-300">
              {item.title}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}