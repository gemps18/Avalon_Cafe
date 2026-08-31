import type { MenuItem } from "./menuData";

export interface CateringSubSection {
  title: string;
  price: string;
  items: MenuItem[];
}

export interface CateringGroup {
  title: string;
  items: MenuItem[];
}