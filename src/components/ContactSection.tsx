import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Precisa de ajuda agora?
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está pronta para atender sua família com cuidado e dedicação.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-foreground mb-8">
              Entre em contato
            </h3>
            
            <div className="space-y-6 mb-8">
              <Card className="p-4 bg-soft-blue border-border/50">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Emergencial 24 horas</div>
                    <div className="text-muted-foreground">(11) 99999-9999</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 border-border/50">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">E-mail</div>
                    <div className="text-muted-foreground">contato@funerariamaranata.com.br</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 border-border/50">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Endereço</div>
                    <div className="text-muted-foreground">Rua das Flores, 123 - Centro, São Paulo - SP</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 border-border/50">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Horário de atendimento</div>
                    <div className="text-muted-foreground">24 horas por dia, 7 dias por semana</div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="bg-gentle-lavender rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">Emergências</h4>
              <p className="text-muted-foreground mb-4">
                Para emergências, nossa equipe está disponível 24 horas por dia. 
                Ligue para nossa central de atendimento.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Ligar para emergência
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">
                Deixe sua mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo
                    </label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Como podemos ajudar?
                  </label>
                  <Textarea 
                    placeholder="Descreva sua necessidade ou dúvida..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;