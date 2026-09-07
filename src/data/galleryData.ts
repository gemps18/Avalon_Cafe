import counterImg from "../assets/Counter-1.jpeg";
import entrance1Img from "../assets/Entrance-1.jpeg";
import entrance2Img from "../assets/Entrance-2.jpeg";
import kitchenImg from "../assets/Kitchen-1.jpeg";
import outdoorSeatingImg from "../assets/Outdoor_Seating-1.jpeg";
import windowSeating1Img from "../assets/Window_Seating-1.jpeg";
import windowSeating2Img from "../assets/Window_Seating-2.jpeg";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: counterImg, alt: "Cafe counter and bar" },
  { src: entrance1Img, alt: "Guest enjoying a drink by the entrance" },
  { src: entrance2Img, alt: "View toward the marina from the entrance" },
  { src: kitchenImg, alt: "Open kitchen" },
  { src: outdoorSeatingImg, alt: "Outdoor seating by the marina" },
  { src: windowSeating1Img, alt: "Friends at the window bar" },
  { src: windowSeating2Img, alt: "Guests sharing food together" },
];