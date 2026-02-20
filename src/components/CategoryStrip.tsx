import { Link } from "react-router-dom";
import { categories, categoryVideos } from "@/lib/mock-data";
import { Play } from "lucide-react";

const CategoryStrip = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">Browse by Category</h2>
      <p className="mt-2 text-center text-sm text-muted-foreground sm:mt-3 sm:text-base">Explore our curated collections of nature footage.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/explore?category=${cat}`}
            className="group relative overflow-hidden rounded-xl aspect-[3/4] touch-manipulation"
          >
            <video
              src={categoryVideos[cat]}
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-2 left-2 text-xs font-bold text-white sm:bottom-3 sm:left-3 sm:text-sm">{cat}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryStrip;
