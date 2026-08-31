import type { MenuItem } from "../data/menuData";

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2 border-b border-primary/10">
      <div>
        <p className="font-semibold text-primary">{item.name}</p>
        {item.description && (
          <p className="text-sm text-primary/70 mt-0.5">{item.description}</p>
        )}
      </div>
      {item.price && (
        <span className="text-primary font-medium whitespace-nowrap">{item.price}</span>
      )}
    </div>
  );
}

export default MenuRow;