import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Motor elétrico WEG"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-weg-dark via-weg-dark/90 to-weg-dark/70"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-weg-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-weg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-weg-yellow/10 border border-weg-yellow/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-weg-yellow rounded-full animate-pulse"></span>
              <span className="text-weg-yellow text-sm font-medium">Assistência Técnica Autorizada WEG</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Seus Negócios em{' '}
              <span className="gradient-text">Potência Máxima</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Especializados em comércio, locação e manutenção de motores elétricos, transformadores, máquinas de solda e geradores de energia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2 group">
                Solicitar Orçamento Grátis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="btn-secondary flex items-center justify-center gap-2">
                Conhecer Serviços
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-weg-yellow">25+</p>
                <p className="text-sm text-gray-400">Anos de Experiência</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-weg-yellow">500+</p>
                <p className="text-sm text-gray-400">Clientes Atendidos</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-weg-yellow">100%</p>
                <p className="text-sm text-gray-400">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-weg-yellow/20 to-weg-accent/20 rounded-3xl blur-xl"></div>
              <img
                src="/motor-weg.jpg"
                alt="Manutenção de Motores Macias"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-gray-400 hover:text-weg-yellow transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
