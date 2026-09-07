import { useTranslation } from "react-i18next";
import accentImg from "../assets/Accent-1.jpeg";

function AccentBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
      <img
        src={accentImg}
        alt="Architectural detail at Avalon Cafe"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <span className="inline-block -rotate-2 bg-secondary text-primary font-mono text-xs uppercase tracking-widest px-4 py-1 rounded-full mb-4">
          {t("accent.eyebrow")}
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-cream max-w-lg">
          {t("accent.title")}
        </h2>
      </div>
    </section>
  );
}

export default AccentBanner;