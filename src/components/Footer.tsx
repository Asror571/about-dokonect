const Footer = () => {
  return (
    <footer className="bg-hero border-t border-hero-muted/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-sm">D</span>
            </div>
            <span className="font-heading font-bold text-lg text-hero-foreground">Dokonect</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-hero-muted">
            <a href="#" className="hover:text-hero-foreground transition-colors">Biz haqimizda</a>
            <a href="#" className="hover:text-hero-foreground transition-colors">Narxlar</a>
            <a href="#" className="hover:text-hero-foreground transition-colors">Aloqa</a>
          </div>
          <p className="text-sm text-hero-muted">
            © 2026 Dokonect. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
