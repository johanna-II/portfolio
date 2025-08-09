import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Award, Briefcase, Code, Users, Target, Zap, CheckCircle, ArrowRight, Linkedin, FileText, Brain } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Moloco",
      role: "QA Engineer II | FE Engineer",
      period: "2024.08 ~ Present",
      description: "글로벌 애드테크 유니콘, DSP Cloud Web Service 품질 보증 및 FE 개발",
      highlights: ["CI/CD 파이프라인 개선", "Cypress BDD 테스트 프레임워크 구축", "React 컴포넌트 개발", "Firestore 버전 관리 시스템"],
      impact: "E2E 테스트 환경 개선",
      tech: ["Cypress", "React.js", "styled-components", "BDD", "Firestore"]
    },
    {
      company: "우아한형제들",
      role: "Quality Engineer",
      period: "2023.03 ~ 2024.01",
      description: "국내 1위 배달 플랫폼의 커머스/정산 시스템 품질 보증",
      highlights: ["테스트 전략 수립", "리소스 예측 모델(ARIMA) 구축", "외부 에이전트 기술 가이드 작성"],
      impact: "리소스 효율성 30% 향상",
      tech: ["E2E Testing", "API Testing", "TypeScript", "Data Analysis"]
    },
    {
      company: "Ground X",
      role: "Senior Quality Engineer", 
      period: "2022.02 ~ 2023.02",
      description: "카카오 블록체인 자회사, Klip Wallet 및 NFT Marketplace QA",
      highlights: ["KIP-17 NFT 자동화 개발", "ERC-721A 기술 가이드 작성", "Web3.0 토큰 모듈 QA"],
      impact: "테스트 효율성 98% 향상",
      tech: ["Blockchain", "Python", "Solidity", "Web3", "Klaytn"]
    },
    {
      company: "NHN",
      role: "Senior Quality Engineer",
      period: "2020.07 ~ 2022.02",
      description: "NHN 클라우드 플랫폼(Toast) IaaS/DBaaS 품질 관리",
      highlights: ["SaaS 빌링 로직 자동화", "OpenStack tempest 기반 테스트", "GOSS VM 서버 검증"],
      impact: "빌링 테스트 1MD → 0.2MD",
      tech: ["Cloud", "Docker", "Jenkins", "Python", "OpenStack"]
    },
    {
      company: "LG Electronics",
      role: "Requirement Engineer | QA Engineer",
      period: "2012.04 ~ 2020.07",
      description: "글로벌 가전 1위 기업의 SW 인프라 구축 및 품질 관리",
      highlights: ["Git/Gerrit 인프라 구축", "ISO 16750-2 Stress Test", "독일 고객사 요구사항 추적 시스템"],
      impact: "빌드 실패율 90% → 10%",
      tech: ["Git/Gerrit", "Jenkins CI", "Python", "ISO 16750"]
    }
  ];

  const projects = [
    {
      title: "AI 기반 테스트 케이스 생성 시스템",
      company: "특허 출원",
      impact: "LLM",
      metric: "활용 자동화",
      description: "Large Language Model을 활용한 테스트 케이스 자동 생성 시스템 특허",
      highlights: ["프롬프트 엔지니어링 최적화", "테스트 커버리지 향상"],
      tech: ["AI", "LLM", "Prompt Engineering", "Patent"]
    },
    {
      title: "NFT Marketplace 자동화",
      company: "Ground X",
      impact: "98%",
      metric: "효율성 향상",
      description: "수동 생성 대비 300배 빠른 NFT 생성 자동화 구현",
      highlights: ["KIP-17 표준 검증", "수백 개 NFT 동시 생성", "Solidity 스크립트 개발"],
      tech: ["Python", "Solidity", "Web3", "Blockchain"]
    },
    {
      title: "데이터 기반 리소스 예측 모델", 
      company: "우아한형제들",
      impact: "30%",
      metric: "예측 정확도 향상",
      description: "ARIMA 모델 활용 QA 리소스 예측 시스템 구축",
      highlights: ["시계열 데이터 분석", "리소스 스케줄링 최적화"],
      tech: ["Python", "ARIMA", "Data Analysis", "Pandas"]
    },
    {
      title: "클라우드 빌링 테스트 자동화",
      company: "NHN",
      impact: "80%",
      metric: "리소스 절감", 
      description: "복잡한 SaaS 빌링 로직 E2E 자동화로 수동 테스트 대체",
      highlights: ["요금제 변경 로직 검증", "Docker 기반 테스트 환경"],
      tech: ["Docker", "Jenkins", "TypeScript", "API Testing"]
    }
  ];

  const skills = {
    testing: [
      { name: "E2E Test Automation", level: 95 },
      { name: "API Testing", level: 90 },
      { name: "Destructive Testing", level: 85 },
      { name: "Test Strategy & Planning", level: 95 }
    ],
    technical: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "CI/CD (Jenkins, Docker)", level: 85 },
      { name: "Node.js", level: 75 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-black text-2xl">
              I<span className="text-red-500">.</span>QA<span className="text-blue-500">.</span>ALL
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#work" className="hover:text-purple-600 transition-colors">Work</a>
              <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium Design */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900"></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-blue-500/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 via-transparent to-purple-500/20"></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full border border-white/10 animate-spin-slow"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full border border-white/10 animate-spin-slow-reverse"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-purple-400/20 rotate-45 animate-float"></div>
          <div className="absolute top-40 right-[15%] w-16 h-16 border-2 border-pink-400/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-40 left-[20%] w-24 h-24 border-2 border-indigo-400/20 animate-float-delay-4"></div>
          
          {/* Premium Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          {/* Gradient Orbs - More Sophisticated */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse-slow-delay"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-slow-delay-2"></div>
        </div>
        
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative text-center text-white z-10 px-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90">Currently @ Moloco</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="inline-block animate-fade-in">I</span>
            <span className="text-red-400 inline-block animate-fade-in animation-delay-100">.</span>
            <span className="inline-block animate-fade-in animation-delay-200">QA</span>
            <span className="text-blue-400 inline-block animate-fade-in animation-delay-300">.</span>
            <span className="inline-block animate-fade-in animation-delay-400">ALL</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light mb-2 animate-fade-in-up animation-delay-500">Jane Kim (김명지)</h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-fade-in-up animation-delay-600">QA Engineer | FE Engineer</p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animation-delay-700">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              15년차 전문가
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              50+ Projects
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              2 Patents
            </span>
          </div>
        </div>
        
        {/* Scroll Indicator - Enhanced */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="animate-bounce text-white/70 hover:text-white cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with LinkedIn info */}
      <section id="about" className={`py-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  J
                </div>
                <h3 className="text-xl font-bold mb-2">Jane Kim (김명지)</h3>
                <p className="text-gray-600 mb-4">QA Engineer | FE Engineer</p>
                
                {/* Contact Info - Single Line */}
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <a href="mailto:lucykatz58@gmail.com" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                    <Mail size={14} />
                    lucykatz58@gmail.com
                  </a>
                </div>

                {/* Certifications & Education - Enhanced Layout */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      <h4 className="text-sm font-semibold text-purple-700">Certifications</h4>
                    </div>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p>• ISTQB Advanced</p>
                      <p>• IREB (CPRE)</p>
                      <p>• IATF 16949:2016</p>
                      <p>• Prompt Engineering</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <h4 className="text-sm font-semibold text-blue-700">Education</h4>
                    </div>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p>• Master's in IT</p>
                      <p className="text-gray-500 text-[10px]">&nbsp;&nbsp;(In Progress)</p>
                      <p>• Bachelor's in ICE</p>
                      <p className="text-gray-500 text-[10px]">&nbsp;&nbsp;(Completed)</p>
                    </div>
                  </div>
                </div>

                {/* Patents - Enhanced */}
                <div className="mt-4 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <p className="text-sm font-semibold text-amber-700">2 Patents Filed</p>
                  </div>
                  <p className="text-[10px] text-center text-gray-600 mt-1">AI/LLM Test Generation & Voice Visualization</p>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  데이터 기반 품질 혁신을 주도하는 QA/FE 엔지니어
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    현재 <span className="font-semibold text-purple-600">글로벌 애드테크 유니콘 Moloco</span>에서 DSP 클라우드 웹 서비스의 품질 보증과 프론트엔드 개발을 담당하고 있습니다. <span className="font-semibold">Cypress와 BDD 프레임워크</span>를 활용한 E2E 테스트 자동화와 <span className="font-semibold">React.js, styled-components, Tailwind CSS</span>를 사용한 컴포넌트 개발을 통해 제품 품질과 개발 효율성을 동시에 향상시키고 있습니다.
                  </p>
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold text-purple-600">15년 이상의 QA 경험</span>을 바탕으로 대기업부터 스타트업까지 다양한 환경에서 품질 프로세스를 혁신해왔습니다. LG전자에서 8년간 글로벌 SW 인프라를 구축하며 <span className="font-semibold">빌드 실패율을 90%에서 10%로 감소</span>시켰고, Ground X에서는 <span className="font-semibold">NFT 생성 자동화로 98%의 효율성 향상</span>을 달성했습니다.
                  </p>
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold text-purple-600">기술적 전문성과 비즈니스 임팩트</span>를 동시에 추구합니다. 우아한형제들에서 ARIMA 모델 기반 리소스 예측 시스템을 구축하여 <span className="font-semibold">효율성을 30% 향상</span>시켰으며, 개인적으로 <span className="font-semibold">LLM을 활용한 테스트 케이스 생성 시스템</span> 특허를 출원하는 등 혁신적인 솔루션 개발에도 적극적으로 참여하고 있습니다.
                  </p>
                </div>
                
                {/* Key Achievements */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">15+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-pink-600">5</div>
                    <div className="text-xs text-gray-600">Major Companies</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Max Efficiency</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">2</div>
                    <div className="text-xs text-gray-600">Patents</div>
                  </div>
                </div>

                {/* Core Competencies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Test Automation</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Frontend Development</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">CI/CD</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Data Analysis</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Blockchain</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI/LLM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Enhanced Compact Design */}
      <section id="work" className={`py-20 bg-white transition-all duration-1000 ${isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Work & Projects</h2>
          
          {/* Tab Navigation - Enhanced */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'experience' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="inline-block w-4 h-4 mr-2" />
                Key Experiences
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'projects' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Zap className="inline-block w-4 h-4 mr-2" />
                Key Projects
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'experience' ? (
              <div className="space-y-4">
                {/* Enhanced Timeline Header */}
                <div className="relative mb-8 h-20">
                  {/* Timeline Bar - centered vertically */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-pink-200 rounded-full transform -translate-y-1/2"></div>
                  
                  {/* Timeline Points */}
                  <div className="absolute inset-0 flex justify-between items-center">
                    {/* Start Point */}
                    <div className="relative z-10">
                      <div className="bg-white border-4 border-purple-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-purple-600">2012</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">Start</div>
                    </div>
                    
                    {/* Journey Milestones */}
                    <div className="flex-1 flex justify-around items-center px-8">
                      <div className="relative">
                        <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">2016</span>
                      </div>
                      <div className="relative">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">2020</span>
                      </div>
                      <div className="relative">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">2023</span>
                      </div>
                    </div>
                    
                    {/* Current Point */}
                    <div className="relative z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
                        <span className="text-sm font-bold text-white">2025</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">Present</div>
                    </div>
                  </div>
                </div>
                
                {/* Experience Years Badge - Moved below timeline */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md inline-flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    <span>15+ Years Journey</span>
                  </div>
                </div>
                
                {/* Experience Cards - Compact */}
                <div className="grid gap-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="group bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        {/* Company Info */}
                        <div className="flex-1 min-w-[300px]">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{exp.company}</h3>
                            <span className="text-sm text-gray-500">{exp.period}</span>
                          </div>
                          <p className="text-purple-600 font-medium mb-2">{exp.role}</p>
                          <p className="text-sm text-gray-600 mb-3">{exp.description}</p>
                          
                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {exp.highlights.map((item, i) => (
                              <span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Impact Badge */}
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-4 text-center min-w-[150px]">
                          <div className="text-xs opacity-90">Key Achievement</div>
                          <div className="text-lg font-bold mt-1">{exp.impact}</div>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="group relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                          <p className="text-sm text-gray-500">{project.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">{project.impact}</div>
                          <div className="text-xs text-gray-600">{project.metric}</div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-1 mb-4">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded group-hover:bg-purple-200 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm opacity-90">Major Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">80%</div>
                <div className="text-sm opacity-90">Test Automation Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Compact */}
      <section id="skills" className={`py-20 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Testing & QA Skills */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-purple-600">
                  <Target size={20} />
                  Testing & QA Skills
                </h3>
                <div className="space-y-3">
                  {skills.testing.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Technical Skills */}
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-blue-600">
                  <Code size={20} />
                  Development & Tools
                </h3>
                <div className="space-y-3">
                  {skills.technical.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Skills Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Additional Expertise</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Cypress</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Selenium</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Postman</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">JIRA</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">Confluence</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">styled-components</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Redux</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Redis</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Cursor IDE</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">AWS</span>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-yellow-50 rounded-lg p-4">
                <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-700 mb-2">Certifications</h4>
                <p className="text-xs text-gray-600">ISTQB Advanced • IREB CPRE • IATF 16949</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <Brain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-700 mb-2">Languages</h4>
                <p className="text-xs text-gray-600">Korean (Native) • English (Professional)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
          <p className="text-xl mb-8 text-purple-100">
            품질과 혁신의 교차점에서 함께 성장할 기회를 찾고 있습니다
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:lucykatz58@gmail.com" className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://github.com/myeongji-kim" target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition-all flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/janekim8928" target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition-all flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">@Moloco</div>
                <div className="text-sm opacity-80">Current</div>
              </div>
              <div>
                <div className="text-3xl font-bold">QA + FE</div>
                <div className="text-sm opacity-80">Dual Role</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15+ Years</div>
                <div className="text-sm opacity-80">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2 Patents</div>
                <div className="text-sm opacity-80">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-delay-4 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }
        .animate-float-up {
          animation: float-up 20s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow 4s ease-in-out infinite;
          animation-delay: 1.3s;
        }
        .animate-pulse-slow-delay-2 {
          animation: pulse-slow 4s ease-in-out infinite;
          animation-delay: 2.6s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}