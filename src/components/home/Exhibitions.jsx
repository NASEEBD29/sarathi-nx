const exhibitions = [
  {
    city: "Dubai",
    event: "Arab Health",
    year: "2026",
  },
  {
    city: "Germany",
    event: "Hannover Messe",
    year: "2026",
  },
  {
    city: "Singapore",
    event: "ITB Asia",
    year: "2026",
  },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-24 bg-[#0B1F4D]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-yellow-500 uppercase tracking-[4px]">
            International Exhibitions
          </p>

          <h2 className="text-5xl text-white font-bold mt-4">
            Upcoming Global Events
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {exhibitions.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-xl"
            >

              <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold">
                {item.year}
              </span>

              <h3 className="text-3xl font-bold mt-8">
                {item.city}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.event}
              </p>

              <button className="mt-8 bg-[#0B1F4D] text-white px-6 py-3 rounded-lg">
                View Details
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}