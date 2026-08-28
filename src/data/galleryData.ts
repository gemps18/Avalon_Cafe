export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: `${import.meta.env.BASE_URL}gallery/1.jpg`, alt: "Outdoor seating" },
  { src: `${import.meta.env.BASE_URL}gallery/2.jpg`, alt: "Latte art" },
  { src: `${import.meta.env.BASE_URL}gallery/3.jpg`, alt: "Brunch plate" },
  { src: `${import.meta.env.BASE_URL}gallery/4.jpg`, alt: "Cafe interior" },
];