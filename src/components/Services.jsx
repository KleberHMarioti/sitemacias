import { Wrench, Zap, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Manutenção de Motores',
    description: 'Revisão, manutenção preventiva e corretiva de motores elétricos WEG e outras marcas. Troca de rolamentos, rebobinamento, usinagem e mais.',
    image: '/motor-weg.jpg',
    features: ['Revisão Completa', 'Troca de Rolamentos', 'Rebobinamento', 'Usinagem']
  },
  {
    icon: Settings,
    title: 'Manutenção de Transformadores',
    description: 'Análise preventiva, preditiva e de óleo. Serviços de reparo com garantia e agilidade. Leva e traz inclusos.',
    image: '/transformador.jpg',
    features: ['Análise de Óleo', 'Preventiva/Preditiva', 'Reparo com Garantia', 'Leva e Traz']
  },
  {
    icon: Zap,
    title: 'Comércio de Equipamentos',
    description: 'Motores novos, ventiladores, rolamentos, terminais e peças para motores. Consulte preços e condições de pagamento.',
    image: '/pecas.jpg',
    features: ['Motores Novos', 'Peças Originais', 'Melhores Preços', 'Entrega Rápida']
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-weg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-weg-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-weg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-weg-yellow font-semibold text-sm tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="section-title">
            Soluções Completas em{' '}
            <span className="gradient-text">Equipamentos Elétricos</span>
          </h2>
          <p className="section-subtitle">
            Da manutenção ao comércio, oferecemos tudo que sua empresa precisa em equipamentos elétricos de alta performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover group">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-weg-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-weg-yellow rounded-xl flex items-center justify-center">
                    <service.icon size={24} className="text-weg-dark" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-weg-yellow transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-weg-yellow rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contato" className="inline-flex items-center gap-2 text-weg-yellow font-medium text-sm group-hover:gap-3 transition-all">
                Saiba mais
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
