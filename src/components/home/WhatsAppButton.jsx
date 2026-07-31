import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917666984626"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-3xl shadow-2xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
}