interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
}

function VideoHero({ videoSrc, title, subtitle }: VideoHeroProps) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-3xl md:text-4xl text-cream mb-2">{title}</h1>
        {subtitle && <p className="text-cream/90 max-w-md">{subtitle}</p>}
      </div>
    </div>
  );
}

export default VideoHero;