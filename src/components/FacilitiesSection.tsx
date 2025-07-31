import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Users, Shield, Flower, Music } from "lucide-react";
import churchImage from "@/assets/church-interior.jpg";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Users,
      title: "Salas de velório",
      description: "Ambientes acolhedores e reservados para despedidas em família"
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas amplas e seguras para acomodar familiares e convidados"
    },
    {
      icon: Shield,
      title: "Segurança 24h",
      description: "Monitoramento constante para tranquilidade da família"
    },
    {
      icon: Flower,
      title: "Ornamentação",
      description: "Decoração floral e ornamentos adequados para cada cerimônia"
    },
    {
      icon: Music,
      title: "Som ambiente",
      description: "Sistema de áudio para músicas e cerimônias religiosas"
    },
    {
      icon: MapPin,
      title: "Localização central",
      description: "Fácil acesso para familiares vindos de diferentes regiões"
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Espaços arquitetônicos para cada momento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa estrutura foi pensada para proporcionar conforto, serenidade e acolhimento 
            em todos os detalhes, respeitando suas tradições e necessidades.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={churchImage}
              alt="Interior da capela - ambiente sereno e acolhedor"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-light text-foreground mb-6">
              Nossa missão é <span className="text-primary font-medium">acolher com amor</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada ambiente foi cuidadosamente planejado para oferecer paz e tranquilidade. 
              Nossas instalações proporcionam o ambiente adequado para que famílias possam 
              se despedir com dignidade e amor.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Ambientes climatizados e confortáveis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Salas reservadas para famílias</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Capela ecumênica para cerimônias</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Estrutura completa de apoio</span>
              </div>
            </div>
            
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Conhecer nossa estrutura
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="p-6 bg-background/80 border-border/50">
              <facility.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {facility.title}
              </h4>
              <p className="text-muted-foreground">
                {facility.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;