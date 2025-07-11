import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, CircuitBoard, Layers, Palette, Award } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import fotoSobre from './img/fotoSobre.jpg';
import TextoAnimado from "./components/ui/TextoAnimado.jsx";


function App() {

  const handleContactClick = () => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenWhatsApp = () => {
    window.open("https://wa.me/5515996415201?text=Oi%2C%20Ana!%20Encontrei%20seu%20perfil%20e%20queria%20conversar%20sobre%20oportunidades.%20", "_blank");
  };


  const handleOpenGithub = () => {
    window.open("https://github.com/AnaBeCosta", "_blank");
  };

  const handleOpenLinkedin = () => {
    window.open("https://www.linkedin.com/in/ana-beatriz-costa-99a44717a/", "_blank");
  };

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1CJfxmYVyClbeb6mXaFztSp9fJmxCYGIr';
  link.download = 'AnaBeatrizCostaCV.pdf'; // nome que será salvo no download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const projects = [
    {
      title: "Plataforma de Análise Preditiva",
      description: "Solução de IA que analisa dados de mercado para prever tendências de consumo futuras.",
      tech: ["React", "Python", "TensorFlow", "Next.js"],
    },
    {
      title: "Assistente Virtual Inteligente",
      description: "Chatbot com processamento de linguagem natural para automação de atendimento ao cliente.",
      tech: ["Node.js", "Dialogflow", "GraphQL", "Firebase"],
    },
    {
      title: "Sistema de Design Criativo",
      description: "Ferramenta colaborativa para criação e gerenciamento de sistemas de design (Design Systems).",
      tech: ["Vue.js", "TypeScript", "Figma API", "Storybook"],
    }
  ];

  const skills = [
    { name: "Backend", icon: Layers, items: ["Java, Spring Boot, JPA", "Python", "REST APIs, Microsserviços", "JUnit, Wiremock"] },
    { name: "Frontend", icon: Code, items: ["React", "Web Components", "UX/UI"] },
  //  { name: "Inteligência Artificial", icon: BrainCircuit, items: ["TensorFlow", "PyTorch", "NLP"] },
    { name: "Metodologias e Soft Skills", icon: Palette, items: ["Scrum", "Kanban", "Confluence", "Jira", "Inglês intermediário"] },
    { name: "Ferramentas e DevOps", icon: CircuitBoard, items: ["Docker", "Git e GitHub Actions", "AWS e Google Cloud (básico)", "SonarQube", "DBeaver, PostgreSQL, NoSQL"] }
  ];

    const certifications = [
    {
      title: "Curso Java",
      issuer: "Rocketseat",
      year: "2023",
      link: "https://app.rocketseat.com.br/certificates/84b5e99a-b8ea-43da-bff3-ab07f64d2f4c",
    },
    {
      title: "Devops",
      issuer: "Alura",
      year: "2025",
    },
    {
      title: "Workshop Python Básico",
      issuer: "WoMarkers Code",
      year: "2025",
    }
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <Helmet>
        <title>DEV Ana Beatriz</title>
        <meta name="description" content="Portfólio de uma desenvolvedora criativa, especializada em interfaces inteligentes e experiências digitais inovadoras." />
      </Helmet>
      
      <motion.div 
        className="min-h-screen bg-black text-gray-300 font-sans relative overflow-hidden"
        style={{
          '--spotlight-x': `${smoothMouseX}px`,
          '--spotlight-y': `${smoothMouseY}px`,
        }}
      >
        <div className="spotlight-effect"></div>
        
        <div className="relative z-10">
            {/* Header/Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden md:flex space-x-8"
                  >
                    <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
                    <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
{/*                 <a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</a>**/}
                    <a href="#habilidades" className="text-gray-400 hover:text-white transition-colors">Habilidades</a>
                    <a href="#cursos" className="text-gray-400 hover:text-white transition-colors">Cursos</a>
                    <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
                  </motion.div>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="pt-20 min-h-screen flex items-center justify-center px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
                    <TextoAnimado className="text-white"texto=" Hello, I'm" />
                    <TextoAnimado className="text-gray-400" texto=" Ana Costa" />
                  </h1>

                  <p className="text-x md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Engenheira de software que transita entre código, design e produto.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={handleContactClick}
                      className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg rounded-full"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Vamos Conversar
                    </Button>
                    <Button 
                      onClick={handleDownloadCV}
                      variant="outline" 
                      className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8 py-3 text-lg rounded-full"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="sobre" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Sobre Mim</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      className="rounded-2xl shadow-xl w-full"
                      alt="Desenvolvedora trabalhando em um ambiente criativo"
                      src={fotoSobre} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Sou uma desenvolvedora apaixonada pela interseção entre design, planejamento e tecnologia. Minha missão é criar produtos que não apenas funcionem de forma eficiente, mas que também encantem e engajem seus usuários.                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Tenho experiência prática em design, atuando em estágio na Foursys e evoluindo do estágio à posição de desenvolvedora júnior na Sankhya. Além disso, adquiri conhecimentos em análise de requisitos e gestão de projetos durante meu trabalho na Viasoft.                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Atualmente, estou estudando inteligência artificial e aberta a novas oportunidades, inclusive em outras linguagens e áreas da tecnologia.                              </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="habilidades" className="py-20 px-4 bg-black/30">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Minhas Habilidades</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-gray-800 mr-4">
                            <skill.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {skill.items.map((item) => (
                          <li key={item} className="text-gray-400">{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section 
            <section id="projetos" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projetos Recentes</h2>
                  <p className="text-lg text-gray-400">Uma seleção dos meus trabalhos favoritos</p>
                </motion.div>
                
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300 group flex flex-col"
                    >
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3 mt-auto">
                          <Button 
                            onClick={handleContactClick}
                            size="sm" 
                            className="bg-white text-black hover:bg-gray-200 flex-1 rounded-full"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Projeto
                          </Button>
                          <Button 
                            onClick={handleContactClick}
                            size="sm" 
                            variant="outline" 
                            className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-full"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>*/}

            {/* Cursos Section */}
            <section id="cursos" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Cursos e Certificados</h2>
                  <p className="text-lg text-gray-400">Minha jornada de aprendizado.</p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300 flex items-center"
                    >
                      <div className="p-4 rounded-full bg-gray-800 mr-6">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                        <p className="text-gray-400 mb-2">{cert.issuer} - {cert.year}</p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white p-0 h-auto hover:text-gray-300 flex items-center"
                        >
                          Ver Certificado <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="py-20 px-4 bg-black/30">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Vamos Criar?</h2>
                  <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Adoraria ouvir sobre suas ideias e colaborar em novos projetos.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button 
                      onClick=''
                      className="bg-white text-black font-bold hover:bg-gray-200 px-8 py-4 text-lg rounded-full shadow-lg"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      anacost.a@outlook.com
                    </Button>
                    
                    <div className="flex gap-4">
                      <Button 
                        onClick={handleOpenWhatsApp}
                        size="lg" 
                        variant="outline" 
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 p-4 rounded-full"
                      >
                        <FaWhatsapp className="h-6 w-6" 
                        />
                      </Button>
                      <Button 
                        onClick={handleOpenGithub}
                        size="lg" 
                        variant="outline" 
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 p-4 rounded-full"
                      >
                        <Github className="h-6 w-6" 
                        />
                      </Button>
                      <Button 
                        onClick={handleOpenLinkedin}
                        size="lg" 
                        variant="outline" 
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 p-4 rounded-full"
                      >
                        <Linkedin className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-gray-800">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-500">
                  © 2025 Ana Beatriz. Desenhado com carinho e codificado com React.
                </p>
              </div>
            </footer>
        </div>
        
        <Toaster />
      </motion.div>
    </>
  );
}

export default App;