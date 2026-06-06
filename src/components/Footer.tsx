const Footer = () => (
  <footer className="border-t border-border py-8 bg-card">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#home" className="font-display text-xl font-bold text-foreground">
        Illia<span className="text-primary">.</span>
      </a>
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        © 2026 Illia Volobuiev
      </p>
    </div>
  </footer>
);

export default Footer;
