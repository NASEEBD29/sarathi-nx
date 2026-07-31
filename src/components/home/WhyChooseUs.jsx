import { FaShieldAlt, FaGlobeAsia, FaClock, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted & Reliable",
    desc: "Over a decade of experience in international and corporate travel."
  },
  {
    icon: <FaGlobeAsia />,
    title: "Worldwide Network",
    desc: "Strong global partnerships for exhibitions, visas and travel."
  },
  {
    icon: <FaClock />,
    title: "24×7 Support",
    desc: "Dedicated travel assistance before, during and after your journey."
  },
  {
    icon: <FaHandshake />,
    title: "Personalized Service",
    desc: "Every itinerary is tailored according to your business needs."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-yellow-500 uppercase tracking-[4px]">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
            Experience Travel Like Never Before
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl shadow-lg p-8 hover:bg-[#0B1F4D] hover:text-white transition duration-300"
            >
              <div className="text-5xl text-yellow-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}