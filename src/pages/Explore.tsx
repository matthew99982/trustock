import { useState, useMemo } from "react";
import { Download, Film, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { videos, categories, type VideoCategory } from "@/lib/mock-data";
import { toast } from "@/hooks/use-toast";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "All">("All");
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchesCat = activeCategory === "All" || v.category === activeCategory;
      const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleDownload = () => {
    // TODO: Replace with actual sign-up page URL
    const signUpUrl = "https://your-signup-page.com";
    window.location.href = signUpUrl;
  };

  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">Explore Videos</h1>
        <div className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search nature footage..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:overflow-x-auto sm:pb-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${activeCategory === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${activeCategory === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No videos found.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((v) => (
              <div
                key={v.id}
                onClick={() => handleVideoClick(v)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/40 cursor-pointer"
              >
                <div className="aspect-[9/16] overflow-hidden bg-muted">
                  <video
                    src={v.video}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Film className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">{v.category}</Badge>
                  </div>
                  <Button onClick={handleDownload} className="gap-2 bg-green-600 hover:bg-green-700 text-xs w-full">
                    <Download className="h-3 w-3" />
                    Sign up to download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 sm:p-8 lg:p-12">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
              Ready to Download Unlimited Videos?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
              Get instant access to our entire library of stunning nature footage. Sign up today and start creating.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Button
                onClick={handleDownload}
                size="lg"
                className="w-full gap-2 bg-green-600 hover:bg-green-700 text-base px-6 py-5 sm:w-auto sm:px-8 sm:py-6"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md w-full sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="space-y-4">
              <div className="aspect-[9/16] overflow-hidden rounded-lg bg-muted">
                <video
                  src={selectedVideo.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  controlsList="nodownload"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{selectedVideo.category}</Badge>
                </div>
                <Button onClick={handleDownload} className="w-full gap-2 bg-green-600 hover:bg-green-700 sm:w-auto">
                  <Download className="h-4 w-4" />
                  Sign up to download
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Explore;
