import { useState } from "react";
import { useTranslation } from "react-i18next";
import CafeMenu from "../components/CafeMenu";
import CateringMenu from "../components/CateringMenu";

type MenuTab = "cafe" | "catering";

function Menu() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<MenuTab>("cafe");

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="flex gap-3 justify-center">
          {(["cafe", "catering"] as MenuTab[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTab(option)}
              className={`px-6 py-2 rounded-full font-medium border transition ${
                tab === option
                  ? "bg-primary text-cream border-primary"
                  : "border-primary/30 text-primary hover:bg-primary/5"
              }`}
            >
              {t(`menu.tabs.${option}`)}
            </button>
          ))}
        </div>
      </div>

      {tab === "cafe" ? <CafeMenu /> : <CateringMenu />}
    </div>
  );
}

export default Menu;