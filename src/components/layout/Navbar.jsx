import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Exhibitions", link: "#exhibitions" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scroll
          ? "bg-[#0B1F4D] shadow-xl"
          : "bg-black/30 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Sarathi NX"
            className="h-12"
          />

          <div>
            <h1 className="text-white text-xl font-bold">
              Sarathi NX
            </h1>

            <p className="text-xs text-yellow-400">
              We Plan. You Travel. We Care.
            </p>
          </div>

        </div>

        <ul className="hidden md:flex gap-8 text-white">
          {menu.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="hover:text-yellow-400 transition"
            >
              {item.name}
            </a>
          ))}
        </ul>

        <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold">
          Book Consultation
        </button>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#0B1F4D] text-white">

          {menu.map((item) => (
            <div
              key={item}
              className="px-6 py-4 border-b border-blue-800"
            >
              {item}
            </div>
          ))}

        </div>
      )}
    </nav>
  );
}