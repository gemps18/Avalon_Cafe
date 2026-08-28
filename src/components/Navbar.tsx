import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ca", label: "Català" },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/reservation", label: t("nav.reservation") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center" onClick={() => setOpen(false)}>
          <img src="/avalon-logo.png" alt="Avalon Cafe" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="relative py-1"
            >
              {({ isActive }) => (
                <span className={isActive ? "text-primary font-medium" : "text-primary/60 font-medium hover:text-primary transition-colors"}>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Language + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Globe
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-cream pointer-events-none"
            />
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="appearance-none bg-primary text-cream text-sm font-medium rounded-full pl-9 pr-8 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 border-b border-primary/10 font-medium ${
                  isActive ? "text-primary" : "text-primary/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="relative mt-3 sm:hidden">
            <Globe
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-cream pointer-events-none"
            />
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="w-full appearance-none bg-primary text-cream text-sm font-medium rounded-full pl-9 pr-8 py-2"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;