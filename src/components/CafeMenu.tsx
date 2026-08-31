import { useTranslation } from "react-i18next";
import type { MenuItem, WineCategory } from "../data/menuData";
import MenuRow from "./MenuRow";

function CafeMenu() {
  const { t } = useTranslation();

  const brunchYourWay = t("menu.brunchYourWay.items", { returnObjects: true }) as MenuItem[];
  const addOns = t("menu.brunchYourWay.addOns", { returnObjects: true }) as MenuItem[];
  const brunch = t("menu.brunch.items", { returnObjects: true }) as MenuItem[];
  const sandwiches = t("menu.sandwiches.items", { returnObjects: true }) as MenuItem[];
  const hotDrinks = t("menu.hotDrinks.items", { returnObjects: true }) as MenuItem[];
  const refreshments = t("menu.refreshments.items", { returnObjects: true }) as MenuItem[];
  const wineCategories = t("menu.wine.categories", { returnObjects: true }) as WineCategory[];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-4 -rotate-2 inline-block">
          {t("menu.brunchYourWay.title")}
        </h2>
        <div className="border border-primary/30 rounded-lg p-6">
          {brunchYourWay.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
          <p className="text-sm font-semibold text-primary mt-4">
            {t("menu.brunchYourWay.addOnLabel")}
          </p>
          <div className="mt-1">
            {addOns.map((item) => (
              <div key={item.name} className="flex justify-between text-sm text-primary/80 py-1">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-4 -rotate-2 inline-block">
          {t("menu.brunch.title")}
        </h2>
        <div className="border border-primary/30 rounded-lg p-6">
          {brunch.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary mb-4 -rotate-2 inline-block">
          {t("menu.sandwiches.title")}
        </h2>
        <div className="border border-primary/30 rounded-lg p-6">
          {sandwiches.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold text-primary mb-4">{t("menu.hotDrinks.title")}</h2>
          {hotDrinks.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary mb-4">{t("menu.refreshments.title")}</h2>
          {refreshments.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">{t("menu.wine.title")}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {wineCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-primary mb-2">{category.title}</h3>
              {category.items.map((item) => (
                <MenuRow key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CafeMenu;