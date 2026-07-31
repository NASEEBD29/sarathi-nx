import { motion } from "framer-motion";

import img1 from "../../assets/images/exhibition1.jpg";
import img2 from "../../assets/images/exhibition2.jpg";
import img3 from "../../assets/images/exhibition3.jpg";
import img4 from "../../assets/images/exhibition4.jpg";
import img5 from "../../assets/images/exhibition5.jpg";
import img6 from "../../assets/images/exhibition6.jpg";

const gallery = [
  {
    image: img1,
    country: "🇩🇪 Germany",
    event: "Hannover Messe",
    date: "15-20 April 2026",
  },
  {
    image: img2,
    country: "🇦🇪 Dubai",
    event: "Arab Health",
    date: "10-14 Jan 2026",
  },
  {
    image: img3,
    country: "🇸🇬 Singapore",
    event: "ITB Asia",
    date: "22-25 Oct 2026",
  },
  {
    image: img4,
    country: "🇯🇵 Japan",
    event: "Food Expo",
    date: "12-15 May 2026",
  },
  {
    image: img5,
    country: "🇫🇷 France",
    event: "Paris Trade Fair",
    date: "18-22 June 2026",
  },
  {
    image: img6,
    country: "🇺🇸 USA",
    event: "CES Las Vegas",
    date: "05-09 Jan 2026",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-yellow-500">
            Exhibition Gallery
          </span>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
            International Exhibitions
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >

              <div className="relative">

                <img
                  src={item.image}
                  className="h-72 w-full object-cover"
                  alt={item.event}
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex items-end">

                  <div className="p-6 text-white">

                    <h3 className="text-2xl font-bold">
                      {item.event}
                    </h3>

                    <p>{item.country}</p>

                    <p>{item.date}</p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}