import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-soft-blue/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Cuidamos com <span className="text-primary font-medium">amor</span> das suas memórias
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 font-light">
            Em momentos difíceis, oferecemos acolhimento, estrutura e empatia. 
            Nossa equipe especializada está preparada para cuidar de cada detalhe 
            com o carinho que sua família merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Falar com nossa equipe
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Conhecer nossos serviços
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Acolhimento humano</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Estrutura completa</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Emergencial 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;