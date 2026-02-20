import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/video-mountains.mp4";
import heroPoster from "@/assets/nature-mountains.jpg";

interface HeroSectionProps {
  onComingSoon: () => void;
}

const HeroSection = ({ onComingSoon }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Hero video background with fallback image */}
      <div className="absolute inset-0 bg-black">
        <video
          src={heroVideo}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload"
          poster={heroPoster}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backgroundColor: '#000' }}
        />
        {/* Fallback image for when video fails to load */}
        <img
          src={heroPoster}
          alt="Nature mountains"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ display: 'none' }}
          onError={(e) => {
            e.currentTarget.style.display = 'block';
            e.currentTarget.previousElementSibling?.remove();
          }}
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 md:py-40 lg:px-8 lg:py-64">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Premium nature footage.
            <br />
            <span className="text-primary">Without the premium price.</span>
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg md:text-xl">
            Unlimited 4K nature stock videos for less than a coffee a month — just download, drop in, and publish.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button size="lg" className="w-full text-base px-6 py-5 sm:w-auto sm:px-8 sm:py-6" onClick={onComingSoon}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="w-full text-base px-6 py-5 border-foreground/30 text-foreground bg-white hover:bg-white/90 sm:w-auto sm:px-8 sm:py-6" asChild>
              <Link to="/explore">
                <Search className="mr-2 h-4 w-4" />
                Explore Videos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
