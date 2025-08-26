import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layers, Palette, Cloud, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Desenvolvimento",
      color: "text-accent",
      skills: ["HTML/CSS", "JavaScript", "Java", "Python"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      color: "text-primary",
      skills: ["MySQL"]
    },
    {
      icon: Layers,
      title: "DevOps & Ferramentas",
      color: "text-accent",
      skills: ["Git", "Docker", "Docker Compose"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infraestrutura",
      color: "text-primary",
      skills: ["AWS Básico"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      color: "text-accent",
      skills: ["Figma"]
    }
  ];


  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecnologias que estou aprendendo na faculdade e desenvolvendo através de projetos práticos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-sm font-medium text-foreground/80 bg-muted/50 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border/50 shadow-elegant inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Sempre Em Evolução</h3>
                <p className="text-muted-foreground max-w-2xl">
                  Cada projeto é uma oportunidade de aprender algo novo. Estou constantemente 
                  expandindo meus conhecimentos e aplicando-os em soluções práticas e inovadoras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;