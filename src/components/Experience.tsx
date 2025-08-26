import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Estagiário SAP MM",
      company: "Stefanini",
      location: "São Paulo, SP",
      period: "Fev 2025 - Presente",
      description: [
        "Participação em treinamentos internos com foco no módulo SAP MM (Materials Management)",
        "Aprendizado prático em processos de compras, gestão de materiais",
        "Dedicação contínua aos estudos para a certificação SAP MM",
        "Desenvolvimento através de simulados, revisões e aulas especializadas"
      ],
      skills: ["SAP MM", "Materials Management", "Processos de Compras", "Gestão de Materiais", "Fornecedores"]
    },
    {
      type: "work",
      title: "Assistente Administrativo",
      company: "Grupo Drummond",
      location: "São Paulo, SP",
      period: "Mai 2023 - Ago 2024",
      description: [
        "Atendimento telefônico e presencial, com foco em organização e comunicação",
        "Gerenciamento de matrículas no sistema TOTVS e suporte às metas do departamento",
        "Organização de documentos e elaboração de planilhas",
        "Suporte em secretaria, incluindo emissão de certificados e declarações",
        "Desenvolvimento de habilidades no Pacote Office e no sistema TOTVS"
      ],
      skills: ["TOTVS", "Microsoft Office", "Atendimento ao Cliente", "Organização", "Secretaria"]
    },
    {
      type: "education",
      title: "Análise e Desenvolvimento de Sistemas",
      company: "São Paulo Tech School - SPTech",
      location: "São Paulo, SP",
      period: "Jul 2024 - Dez 2026",
      description: [
        "Curso superior focado em desenvolvimento de software e análise de sistemas",
        "Aprendizado de linguagens de programação e metodologias de desenvolvimento",
        "Projetos práticos envolvendo desenvolvimento web",
        "Estudo de banco de dados, estruturas de dados e algoritmos",
        "Preparação para o mercado de tecnologia com foco em soluções empresariais"
      ],
      skills: ["Programação", "Análise de Sistemas", "Desenvolvimento Web", "Banco de Dados", "Cloud", "Scrum"]
    },
    {
      type: "education",
      title: "Ensino Médio Integrado ao Técnico em Administração",
      company: "ETEC Zona Leste",
      location: "São Paulo, SP",
      period: "Fev 2019 - Dez 2021",
      description: [
        "Formação técnica em administração integrada ao ensino médio",
        "Aprendizado de processos administrativos e gestão empresarial",
        "Desenvolvimento de habilidades em organização e planejamento",
        "Base sólida em administração que complementa a formação em tecnologia",
        "Preparação para o mercado de trabalho com foco em gestão e projetos"
      ],
      skills: ["Administração", "Gestão", "Organização", "Planejamento", "Processos Administrativos"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experiência & Educação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Minha trajetória acadêmica e profissional, com foco em tecnologia e sistemas empresariais.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                      {exp.type === 'work' ? <Building2 className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                        
                        <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;