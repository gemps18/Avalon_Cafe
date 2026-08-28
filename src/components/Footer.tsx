import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-cream mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Address */}
        <div>
          <div className="inline-flex items-center justify-center bg-cream rounded-full w-16 h-16 mb-4">
            <img src={`${import.meta.env.BASE_URL}avalon-logo.png`} alt="Avalon Cafe" className="h-9 w-auto block" />
          </div>
          <p className="flex items-start gap-2 text-sm text-cream/80">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            Carrer d'Eduard Maristany, 227, 08912 Badalona, Barcelona, Spain
          </p>
          <p className="flex items-center gap-2 text-sm text-cream/80 mt-2">
            <Phone size={18} className="shrink-0" />
            +34 687 14 89 28
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Clock size={18} />
            {t("footer.hours")}
          </h3>
          <ul className="text-sm text-cream/80 space-y-1">
            <li>{t("footer.openDays")}: 9:00 – 16:00</li>
            <li>{t("footer.closedDays")}: {t("footer.closed")}</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer.followUs")}</h3>
          
          <a href="https://www.instagram.com/avaloncafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cream/80 hover:text-secondary transition-colors"
          >
            <FaInstagram size={18} />
            @avaloncafe_
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-cream/50 py-4 border-t border-cream/10">
        © {new Date().getFullYear()} Avalon Cafe. {t("footer.rights")}
      </div>
    </footer>
  );
}

export default Footer;