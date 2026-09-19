import { useState } from "react";
import logo from "../assets/KM.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(5,11,24,0.90)] text-[var(--text-primary)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Krushna Mhaske Logo"
            className="h-10 w-auto transition-transform duration-300 hover:animate-wiggle"
          />

          <span className="whitespace-nowrap text-base font-bold sm:text-lg md:text-xl">
            Krushna{" "}
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              Mhaske
            </span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  relative
                  block
                  py-2
                  text-sm
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                  hover:text-[var(--primary-light)]

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[image:var(--gradient-text)]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-[var(--border)]
            bg-[var(--bg-secondary)]
            text-xl
            text-white
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:text-[var(--primary-light)]
            lg:hidden
          "
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden
          border-t
          border-[var(--border)]
          bg-[var(--bg-secondary)]
          transition-all
          duration-300
          lg:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >
        <ul className="flex flex-col px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="
                  block
                  border-b
                  border-[var(--border)]
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-[var(--text-secondary)]
                  transition-all
                  duration-300
                  hover:bg-[var(--bg-card)]
                  hover:pl-5
                  hover:text-[var(--primary-light)]
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;