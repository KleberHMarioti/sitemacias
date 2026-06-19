import { Phone, Mail, MapPin } from 'lucide-react';
import logoMacias from '../assets/logo-macias.png';

const Footer = () => {
  return (
    <footer className="bg-weg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src={logoMacias}
                alt="Macias Eletrotécnica"
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas em comércio, locação e manutenção de equipamentos elétricos industriais.
            </p>
            <a href="https://www.instagram.com/maciaseletrotecnica/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="text-sm font-medium">@maciaseletrotecnica</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {['Manutenção de Motores', 'Transformadores', 'Máquinas de Solda', 'Geradores', 'Locação de Equipamentos'].map((item, idx) => (
                <li key={idx}>
                  <a href="#servicos" className="text-gray-400 text-sm hover:text-weg-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Produtos</h4>
            <ul className="space-y-3">
              {['Motores WEG', 'Motores Bosch', 'Ferramentas Makita', 'Peças e Acessórios', 'Rolamentos'].map((item, idx) => (
                <li key={idx}>
                  <a href="#produtos" className="text-gray-400 text-sm hover:text-weg-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+551735249700" className="flex items-center gap-3 text-gray-400 hover:text-weg-yellow transition-colors">
                  <Phone size={16} />
                  <span>(17) 3524-9700 (Matriz)</span>
                </a>
              </li>
              <li>
                <a href="tel:+551735223312" className="flex items-center gap-3 text-gray-400 hover:text-weg-yellow transition-colors">
                  <Phone size={16} />
                  <span>(17) 3522-3312 (Filial)</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@maciaseletro.com.br" className="flex items-center gap-3 text-gray-400 hover:text-weg-yellow transition-colors">
                  <Mail size={16} />
                  <span>contato@maciaseletro.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p><strong className="text-white">Matriz:</strong> Rua Rosa Cruz, 130 - Jd Caparroz</p>
                  <p className="text-xs">Catanduva/SP - CEP 15.805-160</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p><strong className="text-white">Filial:</strong> Rua Sete de Setembro, 1274</p>
                  <p className="text-xs">Alto Higienópolis - CEP 15.805-070</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <span className="text-gray-500 text-sm">Parceiros Autorizados:</span>
            <span className="text-gray-400 font-semibold">WEG</span>
            <span className="text-gray-400 font-semibold">BOSCH</span>
            <span className="text-gray-400 font-semibold">MAKITA</span>
            <span className="text-gray-400 font-semibold">BAMBOZZI</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Macias Eletrotécnica. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Sediada em Catanduva/SP - Atendemos TODO O BRASIL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
