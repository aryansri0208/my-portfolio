import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#tabla", label: "Music" },
  { href: "#beyond", label: "Beyond" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(e, hash) {
    if (isHome) {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push("/" + hash);
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-[#0a0a0a]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-[#e8e0d4] hover:text-[#c9a96e] transition-colors"
        >
          AS
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5450] hover:text-[#c9a96e] transition-colors"
          >
            Home
          </Link>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={isHome ? href : "/" + href}
              onClick={(e) => handleNavClick(e, href)}
              className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5450] hover:text-[#c9a96e] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
