import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block -rotate-2 font-mono text-xs uppercase tracking-widest text-primary/60 mb-3">
          Our Story
        </span>
        <h2 className="font-display text-3xl text-primary mb-4">{t("about.title")}</h2>
        <p className="text-ink/80 leading-relaxed">{t("about.text")}</p>
      </div>
      <div className="aspect-4/3 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center bg-secondary/20">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/50">
          Photo coming soon
        </span>
      </div>
    </section>
  );
}

export default About;