import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Funerária Maranata</div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Cuidamos com amor e dedicação de cada família em momentos delicados. 
              Nossa missão é oferecer acolhimento, estrutura e empatia quando você mais precisa.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Feito com amor e cuidado</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>Cerimônias e Velórios</li>
              <li>Cremação</li>
              <li>Traslado Nacional</li>
              <li>Traslado Internacional</li>
              <li>Documentação</li>
              <li>Emergencial 24h</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@funerariamaranata.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rua das Flores, 123<br />Centro, São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-background/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-background/60">
          <div className="text-sm">
            © 2024 Funerária Maranata. Todos os direitos reservados.
          </div>
          <div className="text-sm mt-4 md:mt-0">
            Atendimento 24 horas por dia, 7 dias por semana
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;