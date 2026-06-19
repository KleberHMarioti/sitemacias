import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Mensagem enviada com entraremos em contato!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone Matriz',
      content: '(17) 3524-9700',
      link: 'tel:+551735249700'
    },
    {
      icon: Phone,
      title: 'Telefone Filial',
      content: '(17) 3522-3312',
      link: 'tel:+551735223312'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@maciaseletro.com.br',
      link: 'mailto:contato@maciaseletro.com.br'
    },
    {
      icon: MapPin,
      title: 'Matriz',
      content: 'Rua Rosa Cruz, 130 - Jd Caparroz - Catanduva/SP - CEP 15.805-160',
      link: '#'
    },
    {
      icon: MapPin,
      title: 'Filial',
      content: 'Rua Sete de Setembro, 1274 - Alto Higienópolis - CEP 15.805-070',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 8h às 18h',
      link: '#'
    }
  ];

  return (
    <section id="contato" className="py-12 bg-weg-dark relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-weg-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-weg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-weg-yellow font-semibold text-sm tracking-wider uppercase mb-4">
            Fale Conosco
          </span>
          <h2 className="section-title">
            Solicite seu{' '}
            <span className="gradient-text">Orçamento Grátis</span>
          </h2>
          <p className="section-subtitle">
            Entre em contato conosco e receba uma proposta personalizada para sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="flex items-start gap-4 p-4 bg-weg-gray/50 rounded-xl border border-gray-700 hover:border-weg-yellow/30 transition-all group"
              >
                <div className="w-12 h-12 bg-weg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-weg-yellow/20 transition-colors">
                  <info.icon size={20} className="text-weg-yellow" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.title}</p>
                  <p className="text-white font-medium">{info.content}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/551735249700"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-green-600/20 rounded-xl border border-green-500/30 hover:bg-green-600/30 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium">Clique para conversar</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-weg-gray/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Envie sua Mensagem</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-weg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-weg-yellow focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-weg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-weg-yellow focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-weg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-weg-yellow focus:outline-none transition-colors"
                    placeholder="(17) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Assunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-weg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-weg-yellow focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="locacao">Locação</option>
                    <option value="compra">Compra de Equipamentos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-weg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-weg-yellow focus:outline-none transition-colors resize-none"
                  placeholder="Descreva sua necessidade..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
