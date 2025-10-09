import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  subsections?: string[];
}

const sections: Section[] = [
  {
    title: "Fundamentos de Programação",
    subsections: ["Lógica", "Estruturas de Dados", "POO", "Boas Práticas"],
  },
  {
    title: "Desenvolvimento Web",
    subsections: ["HTML & CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Banco de Dados",
    subsections: ["SQL", "Modelagem", "ORM", "Consultas Avançadas"],
  },
  {
    title: "Infraestrutura e DevOps",
    subsections: ["Docker", "CI/CD", "Cloud", "Monitoramento"],
  },
  {
    title: "Soft Skills e Carreira",
    subsections: ["Comunicação", "Trabalho em Equipe", "Gestão de Tempo"],
  },
];

export default function Aprendizados() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const toggleSection = (title: string) =>
    setOpenSection(openSection === title ? null : title);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="w-72 bg-card border-r border-border shadow-elegant sticky top-30 h-[calc(200vh-8rem)] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Aprendizados
            </h2>
            
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left text-foreground font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
                  >
                    <span className="text-sm">{section.title}</span>
                    {openSection === section.title ? (
                      <ChevronDown size={18} className="text-primary" />
                    ) : (
                      <ChevronRight size={18} className="text-muted-foreground" />
                    )}
                  </button>
                  {openSection === section.title && (
                    <ul className="mt-2 ml-4 border-l-2 border-primary/30 pl-3 space-y-1">
                      {section.subsections?.map((sub) => (
                        <li
                          key={sub}
                          className="text-sm cursor-pointer text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded hover:bg-muted/30"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Conteúdo */}
        <main className="flex-1 p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Meus Aprendizados
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Bem-vindo à seção de aprendizados! Aqui você encontrará documentação organizada
                sobre diversos tópicos relacionados à tecnologia e desenvolvimento.
              </p>
              
              <div className="bg-gradient-card p-6 rounded-lg border border-border shadow-elegant mt-8 animate-slide-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Em breve</h2>
                <p className="text-muted-foreground">
                  Esta seção está em construção. Em breve você encontrará conteúdo detalhado
                  sobre cada um dos tópicos listados na barra lateral.
                </p>
                <p className="text-muted-foreground mt-4">
                  Use o menu lateral para navegar entre as diferentes categorias de aprendizado. 😊
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}