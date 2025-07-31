import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Church, Flame, Car, FileText, Clock, Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Church,
      title: "Cerimônias e Velórios",
      description: "Organização completa de cerimônias religiosas e velórios com todo cuidado necessário.",
      features: ["Estrutura completa", "Ornamentação", "Som ambiente", "Apoio logístico"]
    },
    {
      icon: Flame,
      title: "Cremação",
      description: "Serviços de cremação com acompanhamento integral e todo suporte à família.",
      features: ["Processo completo", "Documentação", "Acompanhamento", "Entrega das cinzas"]
    },
    {
      icon: Car,
      title: "Traslado",
      description: "Traslado nacional e internacional com segurança e dignidade.",
      features: ["Traslado nacional", "Traslado internacional", "Veículos especializados", "Equipe treinada"]
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Assistência completa com toda documentação necessária e trâmites legais.",
      features: ["Certidões", "Registros", "Trâmites legais", "Orientação familiar"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Assistência completa para você e sua família
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos todos os serviços funerários necessários com agilidade, 
            transparência e humanidade em momentos difíceis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="bg-dark-charcoal text-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">
                Serviços emergenciais com <br />
                <span className="font-medium">humanidade e agilidade</span>
              </h3>
              <p className="text-white/80 mb-6">
                Nossa equipe está disponível 24 horas por dia para atender sua família 
                com rapidez e cuidado humano em momentos de emergência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-dark-charcoal hover:bg-white/90">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar agora
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Clock className="w-4 h-4 mr-2" />
                  Emergencial 24h
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-white/80">Atendimento</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-white/80">Anos experiência</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-white/80">Transparência</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">∞</div>
                <div className="text-sm text-white/80">Cuidado humano</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;