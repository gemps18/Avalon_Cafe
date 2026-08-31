export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface WineCategory {
  title: string;
  items: MenuItem[];
}