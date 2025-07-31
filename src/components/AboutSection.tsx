import { Card } from "@/components/ui/card";
import { History, Heart, Users } from "lucide-react";
import natureImage from "@/assets/nature-peaceful.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-foreground mb-6">
              Tradição, Cuidado e <br />
              <span className="text-primary font-medium">Amor ao Próximo</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com anos de experiência no cuidado e acolhimento de famílias em momentos delicados, 
              a Funerária Maranata se dedica a oferecer serviços funerários com excelência, 
              respeito e dignidade.
            </p>
            
            <div className="grid gap-6">
              <Card className="p-6 bg-background/50 border-border/50">
                <div className="flex items-start gap-4">
                  <History className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tradição e Experiência</h3>
                    <p className="text-muted-foreground">
                      Anos de experiência cuidando de famílias com dedicação e profissionalismo.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-background/50 border-border/50">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cuidado Humanizado</h3>
                    <p className="text-muted-foreground">
                      Cada família é acolhida com empatia e respeito em momentos tão delicados.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-background/50 border-border/50">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Equipe Especializada</h3>
                    <p className="text-muted-foreground">
                      Profissionais qualificados para cuidar de todos os detalhes com excelência.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={natureImage}
              alt="Ambiente sereno e tranquilo"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;