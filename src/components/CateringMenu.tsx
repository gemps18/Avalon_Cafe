import { useTranslation } from "react-i18next";
import type { MenuItem } from "../data/menuData";
import type { CateringSubSection, CateringGroup } from "../data/cateringData";
import MenuRow from "./MenuRow";

function CateringMenu() {
  const { t } = useTranslation();

  const breakfastSubSections = t("catering.breakfastTreats.sections", {
    returnObjects: true,
  }) as CateringSubSection[];

  const salads = t("catering.salads.items", { returnObjects: true }) as MenuItem[];
  const wraps = t("catering.wraps.items", { returnObjects: true }) as MenuItem[];
  const feastItems = t("catering.feast.items", { returnObjects: true }) as CateringGroup["items"];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-primary/80 leading-relaxed mb-14 text-center max-w-xl mx-auto">
        {t("catering.intro")}
      </p>

      {/* Breakfast Treats */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-6 -rotate-2 inline-block">
          {t("catering.breakfastTreats.title")}
        </h2>
        <div className="space-y-8">
          {breakfastSubSections.map((sub) => (
            <div key={sub.title} className="border border-primary/30 rounded-lg p-6">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-semibold text-primary">{sub.title}</h3>
                <span className="text-sm text-primary/60 font-mono">{sub.price} {t("catering.each")}</span>
              </div>
              {sub.items.map((item) => (
                <div key={item.name} className="text-sm text-primary/80 py-1">
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Salads */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-2 -rotate-2 inline-block">
          {t("catering.salads.title")}
        </h2>
        <p className="text-sm text-primary/60 mb-4">{t("catering.salads.subtitle")}</p>
        <div className="border border-primary/30 rounded-lg p-6">
          {salads.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
        <p className="text-sm text-primary/60 mt-3">{t("catering.salads.trayNote")}</p>
      </section>

      {/* Wraps */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-4 -rotate-2 inline-block">
          {t("catering.wraps.title")}
        </h2>
        <div className="border border-primary/30 rounded-lg p-6">
          {wraps.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* The Big Avalon Feast */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-2 -rotate-2 inline-block">
          {t("catering.feast.title")}
        </h2>
        <p className="text-primary/70 text-sm mb-4">{t("catering.feast.description")}</p>
        <div className="border border-primary/30 rounded-lg p-6">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
            {feastItems.map((item) => (
              <p key={item.name} className="text-sm text-primary/80 py-1">
                {item.name}
              </p>
            ))}
          </div>
          <p className="text-sm text-primary/60 italic mt-4">{t("catering.feast.moreOptionsNote")}</p>
          <p className="text-primary font-semibold mt-4">{t("catering.feast.priceNote")}</p>
        </div>
      </section>

      {/* Delivery & Pricing Info */}
      <section className="mt-14 text-center text-sm text-primary/60 space-y-1">
        <p>{t("catering.delivery.note1")}</p>
        <p>{t("catering.delivery.note2")}</p>
        <p>{t("catering.delivery.note3")}</p>
      </section>
    </div>
  );
}

export default CateringMenu;