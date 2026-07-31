import FadeUp from "../common/FadeUp";

const clients = [
  "TATA",
  "Reliance",
  "L&T",
  "Mahindra",
  "Siemens",
  "Godrej",
];

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp>

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-yellow-500">
              Trusted By
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
              Companies We Serve
            </h2>

          </div>

        </FadeUp>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {clients.map((client) => (

            <FadeUp key={client}>

              <div className="bg-slate-100 rounded-2xl p-8 text-center hover:bg-[#0B1F4D] hover:text-white transition duration-300 shadow">

                <h3 className="font-bold text-xl">
                  {client}
                </h3>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>
    </section>
  );
}