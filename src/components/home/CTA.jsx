import FadeUp from "../common/FadeUp";
export default function CTA() {
  return (
    <section className="py-24 bg-[#0B1F4D] text-center text-white">
      <FadeUp>
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold">
          Ready To Plan Your Next Journey?
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Whether it is an International Exhibition, Business Tour,
          or Leisure Holiday, Sarathi NX is here to make your
          journey seamless.
        </p>

        <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-xl text-lg font-bold">
          Contact Us Today
        </button>

      </div>
      </FadeUp>
    </section>
  );
}