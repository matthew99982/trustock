import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleComingSoon = () => {
    toast({ title: "Coming soon", description: "This feature is not available yet." });
  };

  const scrollToPricing = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#pricing";
      return;
    }
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

   return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`flex items-center gap-2 text-xl font-bold transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
          <img src={logo} alt="Tru Stock" className="h-7 w-7" />
          Tru Stock
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Home
          </Link>
          <Link to="/explore" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Explore
          </Link>
          <button onClick={scrollToPricing} className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Pricing
          </button>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" onClick={handleComingSoon} className={`text-sm ${scrolled ? "" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
            Sign In
          </Button>
          <Button onClick={handleComingSoon}>Start Free Trial</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">Home</Link>
            <Link to="/explore" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">Explore</Link>
            <button onClick={scrollToPricing} className="py-2 text-left text-sm font-medium">Pricing</button>
            <hr className="border-border" />
            <Button variant="ghost" onClick={handleComingSoon} className="justify-start">Sign In</Button>
            <Button onClick={handleComingSoon} className="w-full">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
