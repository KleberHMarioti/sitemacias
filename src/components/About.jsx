import { CheckCircle } from 'lucide-react';

const About = () => {

  const regions = [
    'Catanduva', 'São José do Rio Preto', 'Bebedouro', 'Novo Horizonte',
    'Mirassol', 'Votuporanga', 'Fernandópolis', 'Jales'
  ];

  const states = [
    'São Paulo', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Paraná'
  ];

  return (
    <section id="sobre" className="py-24 bg-weg-gray relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-weg-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-weg-yellow/20 to-weg-accent/20 rounded-3xl blur-xl"></div>
            <img
              src="/hero-bg.png"
              alt="Macias Eletrotécnica"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="inline-block text-weg-yellow font-semibold text-sm tracking-wider uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="section-title text-left">
              Excelência em{' '}
              <span className="gradient-text">Soluções Elétricas</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A <strong className="text-white">MACIAS ELETROTÉCNICA</strong> é uma empresa especializada no comércio de peças e ferramentas elétricas, com assistência técnica autorizada WEG, Bosch, Makita e Bambozzi.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Atuamos também com locação de equipamentos para serviços industriais, tais como máquinas de solda e geradores de energia, com logística própria (leva e traz).
            </p>

            {/* Services list */}
            <div className="space-y-4 mb-8">
              {[
                'Manutenção de motores elétricos WEG e outras marcas',
                'Revisão e reparo de transformadores',
                'Comércio de motores, peças e acessórios',
                'Locação de equipamentos industriais',
                'Assistência técnica autorizada'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-weg-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn-primary inline-flex items-center gap-2">
              Conheça Nossa História
            </a>
          </div>

          {/* Regions */}
          <div className="mt-12 lg:mt-0">
            {/* Coverage area */}
            <div className="bg-weg-dark/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-weg-yellow rounded-full"></span>
                Áreas de Atendimento
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2 font-medium">Nossa Região:</p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2 font-medium">Estados:</p>
                <div className="flex flex-wrap gap-2">
                  {states.map((state, idx) => (
                    <span key={idx} className="text-xs bg-weg-yellow/10 text-weg-yellow px-3 py-1 rounded-full border border-weg-yellow/20">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
