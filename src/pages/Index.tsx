import { Link } from "react-router-dom";
import { ArrowRight, Check, Download, Film, RefreshCw, Scale, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingCalculator from "@/components/PricingCalculator";
import { videos } from "@/lib/mock-data";
import { toast } from "@/hooks/use-toast";

const handleComingSoon = () => {
  toast({ title: "Coming soon", description: "This feature is not available yet." });
};

const Index = () => {
  const previewVideos = videos.slice(0, 6);
  const watermarkVideo1 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2001.mp4";
  const watermarkVideo2 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2002.mp4";
  const watermarkVideo3 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2003.mp4";
  const watermarkVideo4 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2004.mp4";
  const watermarkVideo5 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2005.mp4";
  const watermarkVideo6 = "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2006.mp4";

  const videoTags = ["forests", "mountains", "deserts", "forest", "desert", "forest"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection onComingSoon={handleComingSoon} />

      {/* Social proof */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:gap-6 sm:py-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Film className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
            AI-Powered by Veo 3.1
          </div>
          <Badge variant="secondary" className="text-[10px] sm:text-xs">4K Quality</Badge>
          <Badge variant="secondary" className="text-[10px] sm:text-xs">No Watermarks</Badge>
          <Badge variant="secondary" className="text-[10px] sm:text-xs">Commercial License</Badge>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">From Search to Final Cut in 60 Seconds</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground sm:mt-3 sm:text-base">No subscriptions to juggle, no per-clip fees. Just grab and go.</p>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
          {[
            { icon: Search, step: "01", label: "Browse", desc: "Explore our curated nature footage library" },
            { icon: Download, step: "02", label: "Download", desc: "Grab the clips you need, instantly" },
            { icon: Film, step: "03", label: "Create", desc: "Drop them into your edits and publish" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 sm:h-14 sm:w-14">
                <item.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <span className="mt-3 block text-xs font-semibold text-primary sm:mt-4">{item.step}</span>
              <h3 className="mt-1 text-base font-bold text-foreground sm:text-lg">{item.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video preview grid */}
      <section className="bg-muted/30 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">Browse by Category</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground sm:mt-3 sm:text-base">Explore our curated nature footage library</p>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {previewVideos.map((v, index) => (
              <div
                key={v.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/40"
              >
                <div className="aspect-[9/16] overflow-hidden bg-muted">
                  {index === 0 ? (
                    <video
                      src={watermarkVideo1}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : index === 1 ? (
                    <video
                      src={watermarkVideo2}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : index === 2 ? (
                    <video
                      src={watermarkVideo3}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : index === 3 ? (
                    <video
                      src={watermarkVideo4}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : index === 4 ? (
                    <video
                      src={watermarkVideo5}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : index === 5 ? (
                    <video
                      src={watermarkVideo6}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Film className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4">
                  <div>
                    <Badge variant="secondary" className="text-[10px]">{index < 6 ? videoTags[index] : v.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/explore">
                See More Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Tru Stock */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">Why Creators Switch to Tru Stock</h2>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {[
            { icon: Sparkles, label: "AI-Generated Quality", desc: "Powered by Veo 3.1 for cinematic realism" },
            { icon: Download, label: "Unlimited Downloads", desc: "No per-clip fees, download as much as you need" },
            { icon: Scale, label: "Commercial License", desc: "Use in YouTube, TikTok, client work, anywhere" },
            { icon: RefreshCw, label: "Fresh Content Weekly", desc: "New nature clips added every week" },
          ].map((f) => (
            <Card key={f.label} className="border-border bg-card text-center transition-shadow hover:shadow-md">
              <CardContent className="pt-6 pb-4 sm:pt-8 sm:pb-6">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                  <f.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground sm:mt-4">{f.label}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted/30 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">Simple Pricing</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground sm:mt-3 sm:text-base">Cancel anytime. No hidden fees.</p>
          <PricingCalculator />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {[
              { title: "Monthly", price: "$9.99", suffix: "/mo", highlight: false, badge: null },
              { title: "Yearly", price: "$92", suffix: "/yr", highlight: true, badge: "Save 23%" },
            ].map((plan) => (
              <Card key={plan.title} className={plan.highlight ? "relative border-primary shadow-lg" : "border-border"}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-[10px] px-2.5 py-0.5 sm:text-xs sm:px-3">{plan.badge}</Badge>
                  </div>
                )}
                <CardContent className="flex flex-col items-center pt-6 pb-6 sm:pt-8 sm:pb-8">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">{plan.title}</h3>
                  <p className="mt-3 text-3xl font-extrabold text-foreground sm:mt-4 sm:text-4xl">
                    {plan.price}<span className="text-sm font-normal text-muted-foreground sm:text-base">{plan.suffix}</span>
                  </p>
                  {plan.highlight && <p className="text-xs text-primary font-medium sm:text-sm">~$7.67/mo</p>}
                  <ul className="mt-4 w-full space-y-2 text-xs text-muted-foreground sm:mt-6 sm:space-y-2.5 sm:text-sm">
                    {[
                      "Unlimited downloads",
                      "Full commercial rights",
                      "Watermark-free AI-generated footage",
                      "Access to our entire library",
                      "New scenes added weekly",
                      "7-day free trial",
                      "Cancel anytime",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full sm:mt-8" onClick={handleComingSoon}>Start Free Trial</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/60">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYyaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
            Join thousands of creators
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Stop overpaying for stock footage.
          </h2>
          <p className="mt-3 text-sm text-white/80 sm:mt-4 sm:text-base">Thousands of creators already made the switch. Your wallet will thank you.</p>
          <Button size="lg" className="mt-6 w-full px-6 py-5 text-base bg-white text-primary hover:bg-white/90 sm:mt-8 sm:w-auto sm:px-10 sm:py-6" onClick={handleComingSoon}>
            Start Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
