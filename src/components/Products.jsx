import { useState } from 'react';
import { Star, Shield } from 'lucide-react';
import motorWeg from '../assets/motor-weg.jpg';
import transformador from '../assets/transformador.jpg';
import pecas from '../assets/pecas.jpg';
import heroBg from '../assets/hero-bg.png';

const products = [
  {
    id: 1,
    category: 'motores',
    name: 'Motor Elétrico WEG W22',
    description: 'Motor de indução trifásico de alta eficiência. Ideal para aplicações industriais.',
    image: motorWeg,
    specs: ['Potência: 1 a 500 CV', 'Tensão: 220/380V', 'Alta Eficiência'],
    badge: 'Mais Vendido'
  },
  {
    id: 2,
    category: 'motores',
    name: 'Motor WEG Monofásico',
    description: 'Motor compacto para uso residencial e comercial. Baixo consumo de energia.',
    image: motorWeg,
    specs: ['Potência: 0,5 a 5 CV', 'Monofásico 127/220V', 'Silencioso'],
    badge: 'Econômico'
  },
  {
    id: 3,
    category: 'transformadores',
    name: 'Transformador de Potência',
    description: 'Transformador para distribuição industrial. Alta confiabilidade e durabilidade.',
    image: transformador,
    specs: ['Potência: 10 a 2000 kVA', 'Alta Tensão', 'Isolamento Total'],
    badge: 'Industrial'
  },
  {
    id: 4,
    category: 'solda',
    name: 'Máquina de Solda Inversora',
    description: 'Máquina de solda profissional para diversos tipos de eletrodos.',
    image: pecas,
    specs: ['Corrente: 200A a 500A', 'Multi-tensão', 'Portátil'],
    badge: 'Profissional'
  },
  {
    id: 5,
    category: 'geradores',
    name: 'Gerador de Energia Diesel',
    description: 'Gerador para emergência e suprimento contínuo de energia.',
    image: heroBg,
    specs: ['Potência: 10 a 500 kVA', 'Motor Diesel', 'Automático'],
    badge: 'Emergência'
  },
  {
    id: 6,
    category: 'pecas',
    name: 'Rolamentos e Peças',
    description: 'Rolamentos, ventiladores, terminais e peças originais para manutenção.',
    image: pecas,
    specs: ['Peças Originais', 'Diversas Marcas', 'Entrega Imediata'],
    badge: 'Original'
  }
];

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'motores', name: 'Motores' },
  { id: 'transformadores', name: 'Transformadores' },
  { id: 'solda', name: 'Máquinas de Solda' },
  { id: 'geradores', name: 'Geradores' },
  { id: 'pecas', name: 'Peças' }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="produtos" className="py-12 bg-gradient-to-b from-weg-dark to-weg-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-weg-yellow font-semibold text-sm tracking-wider uppercase mb-4">
            Nossos Produtos
          </span>
          <h2 className="section-title">
            Equipamentos de{' '}
            <span className="gradient-text">Alta Performance</span>
          </h2>
          <p className="section-subtitle">
            Trabalhamos com as melhores marcas do mercado, garantindo qualidade e confiabilidade.
          </p>
        </div>

        {/* Partner badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 py-6 border-y border-gray-800">
          <div className="flex items-center gap-2 text-gray-400">
            <Shield size={24} className="text-weg-yellow" />
            <span className="font-semibold">WEG</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield size={24} className="text-weg-yellow" />
            <span className="font-semibold">BOSCH</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield size={24} className="text-weg-yellow" />
            <span className="font-semibold">MAKITA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield size={24} className="text-weg-yellow" />
            <span className="font-semibold">BAMBOZZI</span>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-weg-yellow text-weg-dark'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-hover group">
              <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-weg-yellow text-weg-dark text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-weg-yellow transition-colors">
                {product.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <Star size={12} className="text-weg-yellow" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
