import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#000000ff',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 bg-background/10 text-white border-white/20">
              ✨ Entusismada em aprender!
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Paloma Santos Dias
            </h1>

            <div className="text-xl md:text-2xl text-white/90 mb-8 space-y-2">
              <p>
                Estudante de <span className="text-primary-glow font-semibold">Análise e Desenvolvimento de Sistemas</span> na{' '}
                <a
                  href="https://sptech.school/" target="_blank" rel="noopener noreferrer"
                  className="text-primary-glow no-underline hover:underline"
                >
                  <span className="text-primary-glow font-semibold"> @SPTech </span>
                </a>
              </p>
              <p>
                Estagiária SAP MM | <span className="text-accent-glow font-semibold">Stefanini</span>
              </p>
            </div>


            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Estudante comprometida com o aprendizado, almejo crescer profissionalmente e agregar valor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projetos")}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              >
                Ver Projetos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gradient-primary hover:bg-white hover:text-foreground transition-all duration-300 px-8"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/palomaincode", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/paloma-santos-dias/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:palomasdias04@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-foreground transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;