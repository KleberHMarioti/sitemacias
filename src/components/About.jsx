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
    <section id="sobre" className="py-12 bg-weg-gray relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-weg-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Coverage area */}
          <div className="bg-gradient-to-br from-weg-dark to-weg-gray rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-weg-yellow rounded-xl flex items-center justify-center">
                <CheckCircle size={24} className="text-weg-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Áreas de Atendimento</h3>
                <p className="text-gray-400 text-sm">Atendemos em todo o Brasil</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-weg-yellow font-semibold mb-3 uppercase tracking-wide">Nossa Região:</p>
              <div className="flex flex-wrap gap-2">
                {regions.map((region, idx) => (
                  <span key={idx} className="text-sm bg-gray-800/80 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 hover:border-weg-yellow/50 transition-colors">
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-weg-yellow font-semibold mb-3 uppercase tracking-wide">Estados:</p>
              <div className="grid grid-cols-2 gap-2">
                {states.map((state, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-200 text-sm bg-weg-yellow/5 px-3 py-2 rounded-lg border border-weg-yellow/20">
                    <span className="w-2 h-2 bg-weg-yellow rounded-full flex-shrink-0"></span>
                    {state}
                  </div>
                ))}
              </div>
            </div>
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
            <p className="text-gray-300 mb-4 leading-relaxed">
              Atuamos também com locação de equipamentos para serviços industriais, tais como máquinas de solda e geradores de energia.
            </p>

            {/* Logistics highlight */}
            <div className="bg-weg-yellow/10 border border-weg-yellow/30 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-weg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-weg-dark" />
                </div>
                <div>
                  <p className="text-weg-yellow font-bold">Logística Própria - Leva e Traz!</p>
                  <p className="text-gray-300 text-sm">Coletamos e entregamos os equipamentos no local da cliente.</p>
                </div>
              </div>
            </div>

            {/* Services list */}
            <div className="space-y-3">
              {[
                'Manutenção de motores elétricos WEG e outras marcas',
                'Revisão e reparo de transformadores',
                'Comércio de motores, peças e acessórios',
                'Locação de equipamentos industriais',
                'Assistência técnica autorizada WEG, Bosch, Makita'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-weg-yellow flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
