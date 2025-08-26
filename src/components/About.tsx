import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2, Code, BookOpenText } from "lucide-react";
import { addMilliseconds } from "date-fns";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Cursando Análise e Desenvolvimento de Sistemas",
      color: "text-primary"
    },
    {
      icon: Building2,
      title: "SAP MM",
      description: "Estagiária na Stefanini",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Experiência em Design",
      color: "text-primary"
    },
    {
      icon: BookOpenText,
      title: "Administração",
      description: "Conhecimento em processos administrativos",
      color: "text-accent"
    }
  ];

  const technologies = [
    "JavaScript", "Java", "CSS", "HTML", "Docker", "MySQL", "Git",
    "SAP", "Microsoft Office", "TOTVS", "Canva", "Adobe", "Figma" 
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estudante dedicada com paixão por tecnologia e design, 
              sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in">
              <Card className="bg-gradient-card border-border/50 shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Minha Jornada</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Minha jornada na tecnologia começou com o ensino médio técnico em Administração na ETEC Zona Leste, 
                    onde desenvolvi uma base sólida em gestão e processos administrativos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Atualmente cursando Análise e Desenvolvimento de Sistemas na São Paulo Tech School e estagiando na Stefanini, 
                    desenvolvo competências em SAP MM e sempre focada no aprendizado contínuo.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                    <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Tecnologias & Ferramentas</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;