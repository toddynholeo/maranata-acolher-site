import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Funerária Maranata
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#estrutura" className="text-foreground hover:text-primary transition-colors">
              Estrutura
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Trabalhe Conosco
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Atendimento 24H
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;