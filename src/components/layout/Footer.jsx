import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            Sarathi NX
          </h2>

          <p className="mt-5 text-gray-400 leading-8">
            We Plan. You Travel. We Care.
          </p>
        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Contact
          </h3>

          <p className="flex items-center gap-3">
            <FaPhone />
            +91 7666984626
          </p>

          <p className="flex items-center gap-3 mt-3">
            <FaEnvelope />
            sajid@sarathinx.com
          </p>

          <p className="flex items-center gap-3 mt-3">
            <FaMapMarkerAlt />
            Crystal Plaza, Mira Road (E), Thane
          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaFacebook className="hover:text-yellow-500 cursor-pointer" />

            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />

            <FaLinkedin className="hover:text-yellow-500 cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-5 text-gray-500">
        © 2026 Sarathi NX Pvt Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}