import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-[4px] text-yellow-500">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-[#0B1F4D] mt-4">
            Let's Plan Your Next Journey
          </h2>

          <p className="mt-5 text-gray-600">
            Fill the form below and our travel experts will contact you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <form className="bg-white rounded-3xl shadow-xl p-10">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:border-[#0B1F4D]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:border-[#0B1F4D]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:border-[#0B1F4D]"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:border-[#0B1F4D]"
            />

            <textarea
              rows="5"
              placeholder="Tell us your travel requirement..."
              className="w-full border rounded-xl p-4 outline-none focus:border-[#0B1F4D]"
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full bg-[#0B1F4D] text-white py-4 rounded-xl hover:bg-blue-900 transition"
            >
              Send Inquiry
            </button>

          </form>

          {/* Contact Details */}

          <div className="bg-[#0B1F4D] rounded-3xl text-white p-10">

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">
                <FaPhoneAlt className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+91 7666984626</p>
                  <p>+91 8657867181</p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>sajid@sarathinx.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">Office</h4>
                  <p>
                    Office No.026, Crystal Plaza,
                    Mira Road (E),
                    Thane - 401107
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    
  );
}

