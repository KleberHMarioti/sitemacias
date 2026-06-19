import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoMacias from '../assets/logo-macias.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-weg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar - removed */}

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={logoMacias}
                alt="Macias Eletrotécnica"
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-weg-yellow px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weg-yellow transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="#contato" className="btn-primary text-sm">
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-weg-yellow p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-weg-dark/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-weg-yellow hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="#contato" className="block w-full btn-primary text-center mt-4">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
