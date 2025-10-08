import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoPurple from "@/assets/logoPurple.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Texto + Logo juntos */}
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </div>
          <img
            src={isScrolled ? logoPurple : logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["sobre", "experiência", "habilidades", "projetos"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors capitalize relative group ${
                  isScrolled ? "text-purple" : "text-white"
                } hover:text-primary`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
        </div>

        {/* Botão Contato */}
        <Button
          onClick={() => scrollToSection("contato")}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          Contato
        </Button>
      </nav>
    </header>
  );
};

export default Header;
