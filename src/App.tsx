import React, { useState, useEffect } from 'react'; // Rebuild trigger for LFS video
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Factory, Settings, Cpu, Package, ArrowRight, Phone, Mail, MapPin, Menu, X, Play, Truck, Map, Users, CheckCircle2, ShieldCheck, Globe, Instagram } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for hero text - moving slightly UP for a more natural feel
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Empresa', href: '#sobre' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Customização', href: '#customizacao' },
    { name: 'Logística', href: '#logistica' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-primary selection:text-white">
      {/* Navbar - Glassmorphism style */}
      {/* Navbar - Premium Glassmorphism */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen 
            ? 'py-3 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-brand-primary/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="Injetech Logo" 
              className={`h-9 md:h-11 w-auto transition-all duration-500 scale-110 ${
                isScrolled || mobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'
              }`}
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all hover:bg-brand-primary/10 ${
                  isScrolled || mobileMenuOpen ? 'text-slate-700' : 'text-white/90'
                } hover:text-brand-primary`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contato"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`ml-4 px-7 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg active:scale-95 ${
                isScrolled || mobileMenuOpen
                  ? 'bg-brand-primary text-white hover:bg-brand-primary-dark shadow-brand-primary/20' 
                  : 'bg-white text-brand-dark hover:bg-brand-accent shadow-white/10'
              }`}
            >
              Fale Conosco
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled || mobileMenuOpen ? 'bg-slate-100 text-brand-dark' : 'bg-white/10 text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-brand-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-[95vh] min-h-[850px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-950">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
          >
            <source src="https://github.com/jjulioCsar/site-injetech/raw/main/public/video.mp4" type="video/mp4" />
          </video>
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-transparent to-brand-primary-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark-alt" />
          
          {/* Noise effect */}
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-40"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
              <Cpu className="w-4 h-4" /> Indústria 4.0
            </span>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Alta Performance em<br/>
              <span className="relative">
                <span className="relative z-10 text-gradient">Injeção Plástica</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-brand-primary/20 blur-sm rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Transformamos polímeros em inovação com precisão milimétrica e tecnologia de ponta para projetos de alta exigência.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#customizacao"
                className="group w-full sm:w-auto px-10 py-5 rounded-full bg-brand-primary text-brand-dark-alt font-extrabold flex items-center justify-center gap-3 transition-all hover:bg-brand-accent hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(128,185,60,0.5)]"
              >
                Explorar Soluções <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sobre"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold transition-all hover:bg-white/10 hover:border-white/20"
              >
                Conheça a Empresa
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Mouse/Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-brand-accent rounded-full"
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Desça para Explorar</span>
        </motion.div>
      </section>

      {/* 2. Pilares (Stats) - Modern Clean Cards */}
      <section id="pilares" className="py-48 bg-brand-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Nossa Magnitude
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter"
            >
              A força da nossa operação
            </motion.h2>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "+600", label: "Clientes Atendidos", sub: "Parcerias de confiança", icon: <Users className="w-6 h-6" /> },
              { num: "200M", label: "Peças Ao Ano", sub: "Capacidade produtiva", icon: <Package className="w-6 h-6" /> },
              { num: "+300", label: "Cidades Atendidas", sub: "Logística integrada", icon: <MapPin className="w-6 h-6" /> },
              { num: "+18", label: "Estados Atendidos", sub: "Cobertura nacional", icon: <Globe className="w-6 h-6" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, shadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,10,0.03)] border border-slate-100 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-muted flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-brand-dark mb-2 tracking-tighter">{stat.num}</div>
                <div className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Customização de Projetos - Alternating Luxury Sections */}
      <section id="customizacao" className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section 1: Integração */}
          <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block py-1.5 px-4 rounded-full bg-brand-muted text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
                Ecosistema 360°
              </div>
              <h2 className="text-5xl font-black text-brand-dark-alt mb-8 tracking-tighter leading-[1.1]">
                Soluções Integradas para<br/> sua Indústria
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                Oferecemos um ciclo completo de injeção plástica. Desde a concepção técnica e engenharia do molde até a produção escalada com rigoroso controle de qualidade e logística ágil.
              </p>
              <ul className="space-y-4 mb-10">
                {['Design & Engenharia', 'Fabricação de Moldes', 'Injeção de Peças Técnicas'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 rounded-full border-2 border-brand-dark text-brand-dark font-extrabold hover:bg-brand-dark hover:text-white transition-all">
                Ver Portfólio de Peças
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[3rem] blur-2xl -z-10" />
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1580983546130-348f36544081?q=80&w=2070&auto=format&fit=crop" 
                  alt="Integração" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </motion.div>
          </div>

          {/* Section 2: Desenvolvimento */}
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:order-1 order-2"
            >
              <div className="absolute -inset-4 bg-brand-accent/5 rounded-[3rem] blur-2xl -z-10" />
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2136&auto=format&fit=crop" 
                  alt="Desenvolvimento" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 order-1"
            >
              <div className="inline-block py-1.5 px-4 rounded-full bg-brand-muted text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
                Engenharia de Ponta
              </div>
              <h2 className="text-5xl font-black text-brand-dark-alt mb-8 tracking-tighter leading-[1.1]">
                Engenharia de Moldes de Alta Precisão
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                Utilizamos tecnologias CAD/CAE e simulações reológicas para garantir que cada molde seja otimizado para performance máxima, garantindo ciclos rápidos e desperdício zero de matéria-prima.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Cpu className="w-8 h-8 text-brand-primary mb-4" />
                  <div className="font-bold text-brand-dark">Simulação 3D</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-brand-primary mb-4" />
                  <div className="font-bold text-brand-dark">Tolerância Zero</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Logística - High End Section */}
      <section id="logistica" className="py-48 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
              >
                Logística Avançada
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-tight"
              >
                Cobertura Nacional,<br/> Entrega Pontual.
              </motion.h2>
              
              <div className="space-y-10">
                {[
                  { title: "Frota Própria", desc: "Controle total e agilidade no escoamento da produção sem dependência de terceiros.", icon: <Truck className="w-7 h-7" /> },
                  { title: "Rastreamento 24h", desc: "Tecnologia de ponta para acompanhamento em tempo real de cada carga.", icon: <ShieldCheck className="w-7 h-7" /> },
                  { title: "Distribuição Inteligente", desc: "Localização estratégica para atender os principais polos industriais do país.", icon: <Map className="w-7 h-7" /> }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 max-w-lg"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8ed7c508c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Frota" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-[2rem] border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-brand-dark">Status: Em Trânsito</span>
                </div>
                <div className="text-brand-dark font-bold">Monitoramento de frota ativo para todo o território nacional.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Localização - Minimalist & Interactive */}
      <section id="localizacao" className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-end justify-between mb-32">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Presença Física</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark-alt tracking-tighter">Venha Conhecer Nossa Estrutura</h2>
            </div>
            <p className="text-slate-500 font-medium text-lg lg:max-w-xs mb-2">
              Tecnologia, processos otimizados e uma equipe pronta para seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-brand-muted border border-brand-primary/10">
                <MapPin className="w-10 h-10 text-brand-primary mb-6" />
                <h4 className="text-xl font-extrabold text-brand-dark mb-2">Unidade Fabril</h4>
                <p className="text-slate-600 font-medium mb-6">V. Secundaria 3, N:57 - Galpão 08 W, Qd 05 - Tabuleiro do Martins, Maceió - AL, 57062-415</p>
                <a href="https://maps.app.goo.gl/7ETQvJJ1ZzDQsen58" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                  Ver no Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <Mail className="w-10 h-10 text-brand-dark mb-6" />
                <h4 className="text-xl font-extrabold text-brand-dark mb-2">Contato Direto</h4>
                <p className="text-slate-600 font-medium">comercial@injetech.com.br</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.9103348633!2d-35.8016463!3d-9.5636048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70149021e102941%3A0x6b774612b774640!2sTabuleiro%20do%20Martins%2C%20Macei%C3%B3%20-%20AL!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="grayscale transition-all duration-700 group-hover:grayscale-0"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mural da Equipe */}
      <section className="py-24 bg-brand-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-brand-dark font-bold tracking-widest uppercase text-sm mb-4 block">Nosso Time</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
            As pessoas por trás da tecnologia
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Máquinas não funcionam sozinhas. Nosso maior ativo é a equipe de especialistas dedicados a entregar excelência todos os dias.
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-muted to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-muted to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-6 w-max px-6"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-72 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white flex-shrink-0 relative group">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop`} 
                  alt="Equipe" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">Especialista {i}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
        <motion.a 
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/5582993412854"
          target="_blank"
          className="w-16 h-16 bg-[#25D366] rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center text-white"
        >
          <Phone className="w-8 h-8" />
        </motion.a>
        <motion.button 
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-brand-dark"
        >
          <ArrowRight className="w-8 h-8 -rotate-90" />
        </motion.button>
      </div>

      {/* 7. Enhanced Footer */}
      <footer className="bg-brand-dark-alt text-white pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <img 
                src="/logo.png" 
                alt="Injetech Logo" 
                className="h-12 w-auto brightness-0 invert opacity-100 mb-8"
              />
              <p className="text-white/50 leading-relaxed mb-8 font-medium">
                Elevando o padrão da indústria plástica nacional através de inovação tecnológica e processos de alta performance.
              </p>
              <div className="flex gap-4">
                {[Globe, Instagram, Users].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs mb-8">Empresa</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-brand-primary transition-colors font-bold text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="contato">
              <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs mb-8">Nossa Unidade</h4>
              <ul className="space-y-6 text-white/50 text-sm font-medium">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>Unidade Fabril<br/><span className="text-white/30">Maceió, AL</span></span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs mb-8">Contato Direto</h4>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-brand-accent font-black text-2xl mb-2">(82) 99341-2854</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Atendimento via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Injetech Soluções Industriais. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
