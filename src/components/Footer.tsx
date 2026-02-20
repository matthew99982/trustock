import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-2 text-sm font-bold text-foreground">
        <img src={logo} alt="Tru Stock" className="h-6 w-6" />
        Tru Stock
      </Link>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link to="/explore" className="hover:text-foreground transition-colors">Explore</Link>
        <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <span className="cursor-default">Terms</span>
        <span className="cursor-default">Privacy</span>
      </div>
      <span className="text-xs text-muted-foreground">© 2026 Tru Stock</span>
    </div>
  </footer>
);

export default Footer;
