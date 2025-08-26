import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// 1. ÍCONES CORRIGIDOS: Adicionei todos os ícones que estavam faltando
import { Github, ExternalLink, Heart, Sparkles, Code, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Importando imagens
import leakgas from "@/assets/leak.png";
import vida from "@/assets/vida.png";
import itsourglow from "@/assets/itsourglow.png";

const Projects = () => {
  // 2. DADOS ORGANIZADOS: Mantive os nomes originais para clareza
  const personalProjects = [
    {
      id: "personal-1",
      title: "Galeria de Logos e Designs",
      description:
        "Uma coleção de logos e projetos de design que criei por paixão, unindo minha criatividade com a prática. Mostra meu lado empreendedor e a evolução como designer.",
      images: [itsourglow, leakgas, vida], 
      technologies: ["Figma", "Canva", "Illustrator", "Photoshop"],
      github: "", 
      behance: "https://www.behance.net/palomasantosdias", 
      category: "design",
    },
  ];

  const academicProjects = [
    {
      id: "academic-1",
      title: "LeakGas - Monitoramento de Vazamento de Gás",
      description: "Solução inovadora para monitorar vazamentos de gás GLP em cozinhas industriais, com sensores IoT que enviam dados em tempo real, garantindo segurança contra incêndios e explosões.",
      image: leakgas,
      technologies: ["Arduino", "MySQL", "HTML", "CSS", "Figma", "API"],
      features: [
        "Monitoramento em tempo real de vazamentos de gás GLP",
        "Dashboard com visualização dos dados dos sensores",
        "Alertas instantâneos via e-mail e notificações",
        "Análise histórica para prevenção de acidentes",
      ],
      github: "https://github.com/felipecalace/leakgas",
      post: "https://www.linkedin.com/posts/paloma-santos-dias_sptech-tecnologia-sprint2-activity-7259712422465196032-J5vv?utm_source=share&utm_medium=member_desktop",
      category: "fullstack",
    },
    {
      id: "academic-2",
      title: "Projeto Vida - Dashboard de Crimes de São Paulo",
      description: "Dashboard interativo para análise e previsão de crimes em São Paulo, auxiliando a tomada de decisões policiais com KPIs, mapas de calor e gestão de usuários.",
      image: vida,
      technologies: ["HTML", "CSS", "APIs públicas", "Figma", "AWS", "MySQL"],
      features: [
        "Visualização de dados criminais por região e tipo de crime",
        "Indicadores e mapas de calor para apoio estratégico",
        "Gestão de usuários administrativos e notificações personalizadas",
        "Interface responsiva e acessível para diversos perfis de usuário",
      ],
      github: "https://github.com/guilherme-paiva1/vigi-data",
      post: "https://www.linkedin.com/posts/paloma-santos-dias_retrospectiva-estaergio-sptech-activity-7345809663818366976-q40k?utm_source=share&utm_medium=member_desktop",
      category: "fullstack",
    },
  ];

  // 3. FUNÇÕES CORRIGIDAS: Adicionei o 'case' para "design"
  const getCategoryIcon = (category) => {
    switch (category) {
      case "fullstack": return Code;
      case "design": return Palette; // Adicionado
      default: return Code;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "fullstack": return "text-accent";
      case "design": return "text-primary"; // Adicionado
      default: return "text-accent";
    }
  };
  
  // 4. COMPONENTE RESTAURADO: A definição do ProjectCard foi adicionada de volta
  const ProjectCard = ({ project, delay }) => {
    const Icon = getCategoryIcon(project.category);
    const colorClass = getCategoryColor(project.category);

    const openLink = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      if (!project.images || project.images.length <= 1) return;
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = () => {
      if (!project.images || project.images.length <= 1) return;
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
      );
    };

    const displayImage = project.images ? project.images[currentImageIndex] : project.image;
    const hasMultipleImages = project.images && project.images.length > 1;

    return (
      <Card
        key={project.id}
        className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-in overflow-hidden flex flex-col max-w-lg"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="aspect-video bg-muted/50 relative overflow-hidden">
          {displayImage ? (
            <img src={displayImage} alt={project.title} className="w-full h-full object-cover"/>
          ) : (
            <div className="text-center p-8 flex items-center justify-center h-full">
              <Icon className="w-16 h-16 text-primary mx-auto opacity-50" />
            </div>
          )}

          {hasMultipleImages && (
            <>
              <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 z-10" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 z-10" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}

          <div className="absolute top-4 left-4">
            <div className={`p-2 rounded-lg bg-background/80 backdrop-blur-sm ${colorClass}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>
          
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Principais Funcionalidades:</h4>
              <ul className="space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 my-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto pt-4">
            {project.github && (
              <Button variant="outline" size="sm" className="flex-1" onClick={() => openLink(project.github)}>
                <Github className="w-4 h-4 mr-2" />Código
              </Button>
            )}
            {project.post && (
              <Button size="sm" className="flex-1 bg-gradient-primary" onClick={() => openLink(project.post)}>
                <ExternalLink className="w-4 h-4 mr-2" />Ver Projeto
              </Button>
            )}
            {project.behance && (
              <Button size="sm" className="flex-1 bg-gradient-primary" onClick={() => openLink(project.behance)}>
                <ExternalLink className="w-4 h-4 mr-2" />Ver no Behance
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Seção de Projetos Pessoais */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-7 h-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Projetos Pessoais
                </h2>
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Minha paixão por design e tecnologia vai além do ambiente acadêmico. Desde a escola, 
                sempre me destaquei pela criatividade e capricho, características que agora se unem 
                ao meu instinto empreendedor de criar e idealizar soluções do zero.
              </p>
            </div>
            
            <div className="flex justify-center gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.2} />
              ))}
            </div>
          </div>

          {/* Seção de Projetos Acadêmicos */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projetos Acadêmicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projetos desenvolvidos durante o curso, focados em soluções reais e aplicação prática dos conhecimentos adquiridos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 5. LOOP CORRIGIDO: Agora mapeia o array 'academicProjects' */}
            {academicProjects.map((project, index) => (
               <ProjectCard key={project.id} project={project} delay={index * 0.2} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;