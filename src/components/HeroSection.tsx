import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-dark-charcoal/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Cuidamos com <span className="font-medium">amor</span><br />
            das suas memórias
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
            Em momentos difíceis, oferecemos acolhimento, estrutura e empatia. 
            Nossa equipe especializada está preparada para cuidar de cada detalhe 
            com o carinho que sua família merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-dark-charcoal hover:bg-white/90 font-medium px-8">
              Falar com Consultor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Nossos Serviços
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Heart className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">Acolhimento 24h</span>
              <span className="text-sm text-white/80 mt-1">Sempre ao seu lado</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">Estrutura Completa</span>
              <span className="text-sm text-white/80 mt-1">Tudo que você precisa</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Clock className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">Emergencial</span>
              <span className="text-sm text-white/80 mt-1">Atendimento imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;