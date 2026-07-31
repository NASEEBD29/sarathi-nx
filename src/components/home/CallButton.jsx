import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+917666984626"
      className="fixed bottom-24 right-6 bg-blue-700 p-4 rounded-full text-white text-2xl shadow-2xl hover:scale-110 transition"
    >
      <FaPhoneAlt />
    </a>
  );
}