import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "../components/About";
import Gallery from "../components/Gallery";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative overflow-hidden bg-primary text-cream px-6 py-24 md:py-32">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary/90"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-teal/25 blur-sm"
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block -rotate-2 bg-secondary text-primary font-mono text-xs uppercase tracking-widest px-4 py-1 rounded-full mb-6">
            Port de Badalona · Aussie-Style Brunch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            {t("home.welcome")}
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-10">{t("home.tagline")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/reservation"
              className="bg-cream text-primary font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              {t("home.reserveCta")}
            </Link>
            <Link
              to="/menu"
              className="border border-cream/60 text-cream font-semibold px-6 py-3 rounded-full hover:bg-cream/10 transition"
            >
              {t("home.menuCta")}
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Gallery />
    </div>
  );
}

export default Home;