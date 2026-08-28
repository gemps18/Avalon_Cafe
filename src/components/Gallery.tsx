import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Camera } from "lucide-react";
import { galleryImages, type GalleryImage } from "../data/galleryData";

function GalleryTile({ image }: { image: GalleryImage }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/15 bg-secondary/25 group">
      {!error ? (
        <img
          src={image.src}
          alt={image.alt}
          onError={() => setError(true)}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-primary/50">
          <Camera size={26} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-center px-2">
            {image.alt}
          </span>
        </div>
      )}
    </div>
  );
}

function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary/15 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-block -rotate-2 font-mono text-xs uppercase tracking-widest text-primary/60 mb-3">
          A Peek Inside
        </span>
        <h2 className="font-display text-3xl text-primary mb-8">{t("gallery.title")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <GalleryTile key={i} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;