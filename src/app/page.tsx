"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Award, 
  Briefcase, 
  Code, 
  Target, 
  Zap, 
  CheckCircle, 
  Linkedin, 
  FileText, 
  Globe,
  Menu,
  Languages
} from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { translations, Lang } from '@/i18n/translations';

// Constants
const INTERSECTION_THRESHOLD = 0.1;
const PARTICLE_COUNT = 20;


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');
  const [isVisible, setIsVisible] = useState({} as Record<string, boolean>);
  const [lang, setLang] = useState(Lang.KO);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; animationDelay: string; animationDuration: string }>>([]);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const t = useMemo(() => translations[lang], [lang]);

  // Project detail data
  const projectData = {
    moloco: {
      projectName: lang === Lang.EN 
        ? 'Internal Tool Integration & E2E Automation'
        : '내부 툴 통합 및 E2E 자동화 프로젝트',
      problem: lang === Lang.EN 
        ? 'Internal customers (especially technical writers) had to manage two systems - Zendesk and Portal - separately, leading to high work fatigue and reduced operational efficiency.'
        : '내부 고객(특히 테크니컬 라이터)들이 Zendesk와 Portal 두 개의 시스템을 이중으로 관리해야 해서 업무 피로도가 높고 운영 효율이 떨어지는 문제가 있었습니다.',
      solution: lang === Lang.EN
        ? 'Developed a "1-Pager" page that integrates Zendesk and Portal functions to manage everything on a single page. Also built E2E test automation scenarios based on Cypress + Cucumber.'
        : '내부 고객의 페인 포인트를 해소하고자 Zendesk와 Portal의 기능을 통합하여 한 페이지에서 모든 것을 관리할 수 있는 \'1-Pager\' 페이지를 개발했습니다. 또한, Cypress + Cucumber 기반으로 E2E 테스트 자동화 시나리오를 구축하여 테스트 프로세스를 효율화했습니다.',
      result: lang === Lang.EN
        ? 'Reduced operational resources by 50% through integrated management page development and maximized QA efficiency with test automation.'
        : '통합 관리 페이지 개발로 운영 리소스를 50% 절감했으며, 테스트 자동화 도입으로 QA 효율을 극대화했습니다. 최신 웹 기술(React, Typescript, Golang)을 활용하여 기능 개발 및 고객 이슈 대응 능력을 증명했습니다.'
    },
    woowa: {
      projectName: lang === Lang.EN
        ? 'Commerce/Settlement System Test Strategy'
        : '커머스/정산 시스템 테스트 전략 수립',
      problem: lang === Lang.EN
        ? 'Project resource prediction was inaccurate as it depended on individual experience, causing difficulties in schedule estimation and resource allocation.'
        : '프로젝트 리소스 예측이 개별 담당자의 경험에 의존해 부정확했고, 이로 인해 일정 산출 및 리소스 투입에 어려움이 있었습니다.',
      solution: lang === Lang.EN
        ? 'Established logic to precisely estimate test resources based on data using ARIMA prediction model. Created technical guides to strengthen outsourced testers\' capabilities.'
        : 'ARIMA 예측 모델을 활용하여 테스트 소요 리소스를 데이터 기반으로 정교하게 추산하는 로직을 수립했습니다. 또한, 외주 테스터들의 역량 강화를 위한 기술 가이드를 작성하여 테스트 품질의 표준화를 이끌었습니다.',
      result: lang === Lang.EN
        ? 'Achieved 30% efficiency improvement through data-based resource prediction model, enabling more precise resource allocation.'
        : '데이터 기반 리소스 예측 모델 적용으로 효율성이 30% 상승했으며, 보다 정교한 리소스 투입이 가능해졌습니다. 전체 QA 프로세스의 체계화를 통해 프로젝트의 안정성을 높였습니다.'
    },
    groundx: {
      projectName: lang === Lang.EN
        ? 'Klip Wallet & NFT Marketplace Test Automation'
        : 'Klip Wallet & NFT 마켓플레이스 테스트 자동화',
      problem: lang === Lang.EN
        ? 'Had to manually generate dozens to hundreds of test data for NFT/token testing, consuming significant resources.'
        : 'NFT/토큰 테스트를 위해 수십에서 수백 개의 테스트 데이터를 수동으로 생성해야 했고, 이 과정에 상당한 리소스가 소모되었습니다.',
      solution: lang === Lang.EN
        ? 'Developed and implemented scripts to automatically generate KIP/ERC tokens and NFTs using Python and Solidity.'
        : 'Python 및 Solidity 언어를 활용하여 KIP/ERC 토큰 및 NFT를 자동으로 생성하는 스크립트를 개발하고 구현했습니다. 이를 통해 테스트 데이터 준비 과정을 자동화했습니다.',
      result: lang === Lang.EN
        ? 'Reduced test data preparation resources by 98% through automation, significantly improving product stability.'
        : '자동화 도입으로 테스트 데이터 준비 리소스를 98% 절감했으며, 복합 및 예외 케이스 테스트를 효율적으로 수행하여 제품 안정성을 크게 향상시켰습니다.'
    },
    nhn: {
      projectName: lang === Lang.EN
        ? 'Cloud Platform Billing Logic Automation'
        : '클라우드 플랫폼 과금 로직 자동화',
      problem: lang === Lang.EN
        ? 'Manual testing of complex SaaS billing logic was time-consuming and difficult to verify all change logic.'
        : 'SaaS 서비스의 복잡한 과금 로직 테스트를 수동으로 진행해 시간 소모가 컸고, 모든 변경점 로직을 검증하기 어려웠습니다.',
      solution: lang === Lang.EN
        ? 'Built E2E test automation system for SaaS billing logic using Docker and Jenkins, enabling automatic verification of all related logic.'
        : 'Docker와 Jenkins를 활용하여 SaaS 과금 로직을 위한 E2E 테스트 자동화 시스템을 구축했습니다. 이를 통해 요금제 변경 시 모든 관련 로직을 자동으로 검증할 수 있게 되었습니다.',
      result: lang === Lang.EN
        ? 'Reduced test execution time from 1MD to 0.2MD through test automation and significantly expanded test coverage.'
        : '테스트 자동화 적용으로 테스트 수행 시간을 1MD에서 0.2MD로 단축했으며, 테스트 커버리지를 대폭 확대하여 요금제 관련 이슈를 사전에 검출할 수 있었습니다.'
    },
    lg: {
      projectName: lang === Lang.EN
        ? 'Global SW Infrastructure & Requirements Management'
        : '글로벌 SW 인프라 및 요구사항 관리 체계 구축',
      problem: lang === Lang.EN
        ? 'Build failure rate reached 90% due to lack of code review system, and frequent claims (15 per year) occurred due to lack of customer requirement traceability.'
        : '코드 리뷰 시스템 부재로 빌드 실패율이 90%에 달했고, 고객사 요구사항에 대한 추적성 부족으로 잦은 클레임(연간 15건)이 발생했습니다.',
      solution: lang === Lang.EN
        ? 'Built code management and review system based on Git/Gerrit, and established systematic customer requirement tracking using DOORS.'
        : 'Git, Gerrit 기반의 코드 관리 및 리뷰 시스템을 구축하고, 요구공학 도구(DOORS)를 활용해 고객사 요구사항을 체계적으로 추적하는 시스템을 구축했습니다.',
      result: lang === Lang.EN
        ? 'Reduced build failure rate from 90% to 10% and customer claims from 15 to 3 cases per year.'
        : '빌드 실패율을 90%에서 10%로 감소시켰고, 고객 클레임 건수를 15건에서 3건으로 대폭 감소시키는 데 기여했습니다. 이는 품질 및 프로세스 개선을 주도한 경험을 보여줍니다.'
    }
  };


  // Generate particles on client side only
  useEffect(() => {
    const generatedParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 20}s`
    }));
    setParticles(generatedParticles);
  }, []);

  // Intersection observer for animations
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
      { threshold: INTERSECTION_THRESHOLD }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handlers
  const handleLangToggle = useCallback(() => {
    setLang(prev => prev === Lang.KO ? Lang.EN : Lang.KO);
  }, []);



  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const experiences = [
    {
      id: 'moloco',
      company: "Moloco",
      role: lang === Lang.EN ? "QA Engineer II | FE Engineer" : "QA Engineer II | FE Engineer",
      period: "2024.08 ~ Present",
      description: t.companies.moloco,
      highlights: lang === Lang.EN
        ? ["CI/CD pipeline improvement", "Cypress BDD test framework", "React component development", "Firestore version management"]
        : ["CI/CD 파이프라인 개선", "Cypress BDD 테스트 프레임워크 구축", "React 컴포넌트 개발", "Firestore 버전 관리 시스템"],
      impact: lang === Lang.EN ? "E2E test environment improvement" : "E2E 테스트 환경 개선",
      tech: ["Cypress", "React.js", "styled-components", "BDD", "Firestore"]
    },
    {
      id: 'woowa',
      company: lang === Lang.EN ? "Woowa Bros." : "우아한형제들",
      role: "Quality Engineer",
      period: "2023.03 ~ 2024.01",
      description: t.companies.woowa,
      highlights: lang === Lang.EN
        ? ["Test strategy establishment", "ARIMA resource prediction model", "External agent technical guide"]
        : ["테스트 전략 수립", "리소스 예측 모델(ARIMA) 구축", "외부 에이전트 기술 가이드 작성"],
      impact: lang === Lang.EN ? "30% resource efficiency improvement" : "리소스 효율성 30% 향상",
      tech: ["E2E Testing", "API Testing", "TypeScript", "Data Analysis"]
    },
    {
      id: 'groundx',
      company: "Ground X",
      role: "Senior Quality Engineer",
      period: "2022.02 ~ 2023.02",
      description: t.companies.groundx,
      highlights: lang === Lang.EN
        ? ["KIP-17 NFT automation", "ERC-721A technical guide", "Web3.0 token module QA"]
        : ["KIP-17 NFT 자동화 개발", "ERC-721A 기술 가이드 작성", "Web3.0 토큰 모듈 QA"],
      impact: lang === Lang.EN ? "98% test efficiency improvement" : "테스트 효율성 98% 향상",
      tech: ["Blockchain", "Python", "Solidity", "Web3", "Klaytn"]
    },
    {
      id: 'nhn',
      company: "NHN",
      role: "Senior Quality Engineer",
      period: "2020.07 ~ 2022.02",
      description: t.companies.nhn,
      highlights: lang === Lang.EN
        ? ["SaaS billing automation", "OpenStack tempest testing", "GOSS VM validation"]
        : ["SaaS 빌링 로직 자동화", "OpenStack tempest 기반 테스트", "GOSS VM 서버 검증"],
      impact: lang === Lang.EN ? "Billing test 1MD → 0.2MD" : "빌링 테스트 1MD → 0.2MD",
      tech: ["Cloud", "Docker", "Jenkins", "Python", "OpenStack"]
    },
    {
      id: 'lg',
      company: lang === Lang.EN ? "LG Electronics" : "LG전자",
      role: lang === Lang.EN ? "Requirement Engineer | QA Engineer" : "요구사항 엔지니어 | QA 엔지니어",
      period: "2012.04 ~ 2020.07",
      description: t.companies.lg,
      highlights: lang === Lang.EN
        ? ["Git/Gerrit infrastructure", "ISO 16750-2 Stress Test", "German customer requirement tracking"]
        : ["Git/Gerrit 인프라 구축", "ISO 16750-2 Stress Test", "독일 고객사 요구사항 추적 시스템"],
      impact: lang === Lang.EN ? "Build failure 90% → 10%" : "빌드 실패율 90% → 10%",
      tech: ["Git/Gerrit", "Jenkins CI", "Python", "ISO 16750"]
    }
  ];

  const projects = [
    {
      title: lang === Lang.EN ? "AI-based Test Case Generation" : "AI 기반 테스트 케이스 생성 시스템",
      company: lang === Lang.EN ? "Patent Filed" : "특허 출원",
      impact: "LLM",
      metric: lang === Lang.EN ? "Automation" : "활용 자동화",
      description: lang === Lang.EN
        ? "Patent for automatic test case generation system using Large Language Model"
        : "Large Language Model을 활용한 테스트 케이스 자동 생성 시스템 특허",
      highlights: lang === Lang.EN
        ? ["Prompt engineering optimization", "Test coverage improvement"]
        : ["프롬프트 엔지니어링 최적화", "테스트 커버리지 향상"],
      tech: ["AI", "LLM", "Prompt Engineering", "Patent"]
    },
    {
      title: lang === Lang.EN ? "NFT Marketplace Automation" : "NFT Marketplace 자동화",
      company: "Ground X",
      impact: "98%",
      metric: lang === Lang.EN ? "Efficiency Gain" : "효율성 향상",
      description: lang === Lang.EN
        ? "300x faster NFT generation automation compared to manual process"
        : "수동 생성 대비 300배 빠른 NFT 생성 자동화 구현",
      highlights: lang === Lang.EN
        ? ["KIP-17 standard validation", "Concurrent NFT generation", "Solidity script development"]
        : ["KIP-17 표준 검증", "수백 개 NFT 동시 생성", "Solidity 스크립트 개발"],
      tech: ["Python", "Solidity", "Web3", "Blockchain"]
    },
    {
      title: lang === Lang.EN ? "Data-driven Resource Prediction" : "데이터 기반 리소스 예측 모델",
      company: lang === Lang.EN ? "Woowa Bros." : "우아한형제들",
      impact: "30%",
      metric: lang === Lang.EN ? "Accuracy Improvement" : "예측 정확도 향상",
      description: lang === Lang.EN
        ? "QA resource prediction system using ARIMA model"
        : "ARIMA 모델 활용 QA 리소스 예측 시스템 구축",
      highlights: lang === Lang.EN
        ? ["Time series data analysis", "Resource scheduling optimization"]
        : ["시계열 데이터 분석", "리소스 스케줄링 최적화"],
      tech: ["Python", "ARIMA", "Data Analysis", "Pandas"]
    },
    {
      title: lang === Lang.EN ? "Cloud Billing Test Automation" : "클라우드 빌링 테스트 자동화",
      company: "NHN",
      impact: "80%",
      metric: lang === Lang.EN ? "Resource Reduction" : "리소스 절감",
      description: lang === Lang.EN
        ? "Complex SaaS billing logic E2E automation replacing manual tests"
        : "복잡한 SaaS 빌링 로직 E2E 자동화로 수동 테스트 대체",
      highlights: lang === Lang.EN
        ? ["Billing plan change validation", "Docker-based test environment"]
        : ["요금제 변경 로직 검증", "Docker 기반 테스트 환경"],
      tech: ["Docker", "Jenkins", "TypeScript", "API Testing"]
    }
  ];

  const skills = {
    testing: [
      { name: lang === Lang.EN ? "E2E Test Automation" : "E2E 테스트 자동화", level: 95 },
      { name: lang === Lang.EN ? "API Testing" : "API 테스팅", level: 90 },
      { name: lang === Lang.EN ? "Destructive Testing" : "파괴적 테스팅", level: 85 },
      { name: lang === Lang.EN ? "Test Strategy & Planning" : "테스트 전략 및 계획", level: 95 }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-black text-2xl text-gray-900 dark:text-white">
              I<span className="text-indigo-500">.</span>QA<span className="text-teal-500">.</span>ALL
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors font-medium">{t.nav.home}</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors font-medium">{t.nav.about}</a>
              <a href="#work" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors font-medium">{t.nav.work}</a>
              <a href="#skills" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors font-medium">{t.nav.skills}</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors font-medium">{t.nav.contact}</a>

              {/* Language Toggle */}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                <button
                  onClick={handleLangToggle}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle language"
                  title={`Switch to ${lang === Lang.KO ? 'English' : '한국어'}`}
                >
                  <Globe className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{lang.toUpperCase()}</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={handleLangToggle}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={t.nav}
        lang={lang}
        isDark={false}
        onLangToggle={handleLangToggle}
        onThemeToggle={() => { }}
      />

      {/* Hero Section - Refined Color Palette */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Softer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-600 to-teal-700 dark:from-gray-900 dark:via-indigo-900 dark:to-teal-950"></div>

        {/* Mesh Gradient Overlay - Softer opacity */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 via-transparent to-teal-500/20"></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full border border-white/5 animate-spin-slow"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full border border-white/5 animate-spin-slow-reverse"></div>

          <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-teal-400/10 rotate-45 animate-float"></div>
          <div className="absolute top-40 right-[15%] w-16 h-16 border-2 border-cyan-400/10 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-40 left-[20%] w-24 h-24 border-2 border-indigo-400/10 animate-float-delay-4"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse-slow-delay"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow-delay-2"></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-up"
              style={{
                left: particle.left,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative text-center text-white z-10 px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90">{t.hero.currentlyAt}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="inline-block animate-fade-in">I</span>
            <span className="text-cyan-400 inline-block animate-fade-in animation-delay-100">.</span>
            <span className="inline-block animate-fade-in animation-delay-200">QA</span>
            <span className="text-teal-400 inline-block animate-fade-in animation-delay-300">.</span>
            <span className="inline-block animate-fade-in animation-delay-400">ALL</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-light mb-2 animate-fade-in-up animation-delay-500">
            Jane Kim ({lang === Lang.EN ? 'Doeun Kim' : '김도은'})
          </h2>
          <p className="text-xl md:text-2xl text-indigo-200 mb-8 animate-fade-in-up animation-delay-600">{t.hero.role}</p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animation-delay-700">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              {t.hero.yearsExpert}
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              {t.hero.projects}
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default">
              {t.hero.patents}
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="animate-bounce text-white/70 hover:text-white cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t.about.title}</h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-colors duration-300">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  J
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Jane Kim ({lang === Lang.EN ? 'Doeun Kim' : '김도은'})
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{t.hero.role}</p>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-400">
                  <a href="mailto:lucykatz58@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 font-medium">
                    <Mail size={14} />
                    <span className="hidden sm:inline">lucykatz58@gmail.com</span>
                  </a>
                </div>

                {/* Certifications & Patents - Focus on Professional Achievement */}
                <div className="mt-6 space-y-4">
                                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-indigo-700 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 text-left">
                        <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 mb-2 text-left">{t.about.certifications}</h4>
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-block bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded font-medium">ISTQB Advanced</span>
                          <span className="inline-block bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded font-medium">IREB (CPRE)</span>
                          <span className="inline-block bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded font-medium">IATF 16949</span>
                          <span className="inline-block bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded font-medium">Prompt Eng.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 text-left">
                        <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">{t.about.patentsField}</h4>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-left">AI/LLM Test Gen</p>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-left">Voice Visualization</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-indigo-700 to-teal-700 bg-clip-text text-transparent">
                  {t.about.headline}
                </h3>

                <div className="space-y-4 text-gray-800 dark:text-gray-300">
                  {t.about.description.map((paragraph, index) => {
                    // Bold important numbers and key terms
                    const boldedParagraph = paragraph
                      .replace(/Moloco/g, '<strong>Moloco</strong>')
                      .replace(/15년/g, '<strong>15년</strong>')
                      .replace(/15 years/g, '<strong>15 years</strong>')
                      .replace(/8년/g, '<strong>8년</strong>')
                      .replace(/8 years/g, '<strong>8 years</strong>')
                      .replace(/90%에서 10%/g, '<strong>90%에서 10%</strong>')
                      .replace(/90% to 10%/g, '<strong>90% to 10%</strong>')
                      .replace(/98%/g, '<strong>98%</strong>')
                      .replace(/30%/g, '<strong>30%</strong>')
                      .replace(/LG전자/g, '<strong>LG전자</strong>')
                      .replace(/LG Electronics/g, '<strong>LG Electronics</strong>')
                      .replace(/Ground X/g, '<strong>Ground X</strong>')
                      .replace(/우아한형제들/g, '<strong>우아한형제들</strong>')
                      .replace(/Woowa Bros\./g, '<strong>Woowa Bros.</strong>')
                      .replace(/ARIMA/g, '<strong>ARIMA</strong>')
                      .replace(/LLM/g, '<strong>LLM</strong>')
                      .replace(/Cypress/g, '<strong>Cypress</strong>')
                      .replace(/BDD/g, '<strong>BDD</strong>')
                      .replace(/React\.js/g, '<strong>React.js</strong>')
                      .replace(/E2E/g, '<strong>E2E</strong>')
                      .replace(/NFT/g, '<strong>NFT</strong>');

                    return (
                      <p
                        key={index}
                        className="leading-relaxed text-base font-medium"
                        dangerouslySetInnerHTML={{ __html: boldedParagraph }}
                      />
                    );
                  })}
                </div>

                {/* Key Achievements - Single Row */}
                <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-indigo-800 dark:text-indigo-400">15+</div>
                      <div className="text-xs text-gray-800 dark:text-gray-400 font-bold">{t.about.metrics.experience}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-teal-800 dark:text-teal-400">5</div>
                      <div className="text-xs text-gray-800 dark:text-gray-400 font-bold">{t.about.metrics.companies}</div>
                  </div>
                    <div>
                      <div className="text-2xl font-black text-cyan-800 dark:text-cyan-400">98%</div>
                      <div className="text-xs text-gray-800 dark:text-gray-400 font-bold">{t.about.metrics.efficiency}</div>
                  </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-800 dark:text-emerald-400">2</div>
                      <div className="text-xs text-gray-800 dark:text-gray-400 font-bold">{t.about.metrics.patents}</div>
                  </div>
                  </div>
                </div>

                {/* Core Competencies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Test Automation', 'Frontend Development', 'CI/CD', 'Data Analysis', 'Blockchain', 'AI/LLM'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-bold">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Tech Stack Used */}
                <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    {lang === Lang.EN ? 'This portfolio was crafted with these technologies' : '이 포트폴리오는 이런 기술들로 만들어졌어요'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Next.js 15</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Vercel</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">React Hooks</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Lucide React</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Cursor IDE</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Git/GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t.work.title}</h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2 rounded-full transition-all ${activeTab === 'experience'
                    ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <Briefcase className="inline-block w-4 h-4 mr-2" />
                {t.work.keyExperiences}
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 rounded-full transition-all ${activeTab === 'projects'
                    ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <Zap className="inline-block w-4 h-4 mr-2" />
                {t.work.keyProjects}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'experience' ? (
              <div className="space-y-4">
                {/* Timeline Header */}
                <div className="relative mb-8 h-20">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-teal-400 to-cyan-200 rounded-full transform -translate-y-1/2"></div>

                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="relative z-10">
                      <div className="bg-white dark:bg-gray-800 border-4 border-indigo-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">2012</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.work.timeline.start}</div>
                    </div>

                    <div className="flex-1 flex justify-around items-center px-8">
                      {[2016, 2020, 2023].map((year) => (
                        <div key={year} className="relative">
                          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                          <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">{year}</span>
                      </div>
                      ))}
                    </div>

                    <div className="relative z-10">
                      <div className="bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
                        <span className="text-sm font-bold text-white">2025</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.work.timeline.present}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-100 to-teal-100 dark:from-indigo-900/30 dark:to-teal-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold shadow-md inline-flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    <span>{t.work.timeline.journey}</span>
                  </div>
                </div>

                {/* Experience Cards - Project Style */}
                <div className="grid md:grid-cols-2 gap-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{exp.company}</h3>
                            <p className="text-sm text-indigo-700 dark:text-indigo-400 font-semibold">{exp.role}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">{exp.period}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-700 dark:text-gray-400 font-medium mb-1">{t.work.keyAchievement}</div>
                            <div className={`font-bold text-indigo-700 dark:text-indigo-400 ${lang === Lang.EN ? 'text-sm' : 'text-xl'}`}>{exp.impact}</div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-medium">{exp.description}</p>

                        <div className="space-y-1 mb-4">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 font-medium">
                              <CheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                      </div>

                        <div className="flex gap-2 flex-wrap mb-4">
                        {exp.tech.map((tech, i) => (
                            <span key={i} className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors font-medium">
                            {tech}
                          </span>
                        ))}
                        </div>
                        
                        {/* Compact Expand/Collapse Button */}
                        <div className="flex justify-end">
                          <button
                            onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
                          >
                            <span>{expandedExperience === exp.id ? (lang === Lang.EN ? 'Hide Details' : '상세 내용 숨기기') : (lang === Lang.EN ? 'View Details' : '상세 내용 보기')}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        {/* Expandable Detail Section */}
                        {expandedExperience === exp.id && projectData[exp.id as keyof typeof projectData] && (
                          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                            {/* Project Name Header */}
                            <div className="mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Briefcase size={14} className="text-indigo-600 dark:text-indigo-400" />
                                {projectData[exp.id as keyof typeof projectData].projectName}
                              </h3>
                            </div>
                            
                            <div className="space-y-3">
                              {/* Problem */}
                              <div>
                                <h4 className="text-xs font-bold text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                                  <Target size={14} />
                                  {lang === Lang.EN ? 'Problem' : '문제점'}
                                </h4>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {projectData[exp.id as keyof typeof projectData].problem}
                                </p>
                              </div>
                              
                              {/* Solution */}
                              <div>
                                <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1">
                                  <Zap size={14} />
                                  {lang === Lang.EN ? 'Solution' : '해결책'}
                                </h4>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {projectData[exp.id as keyof typeof projectData].solution}
                                </p>
                              </div>
                              
                              {/* Result */}
                              <div>
                                <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1">
                                  <Award size={14} />
                                  {lang === Lang.EN ? 'Result & Contribution' : '결과 및 기여'}
                                </h4>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {projectData[exp.id as keyof typeof projectData].result}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{project.company}</p>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold text-indigo-700 dark:text-indigo-400 ${lang === Lang.EN ? 'text-lg' : 'text-2xl'}`}>{project.impact}</div>
                          <div className="text-xs text-gray-700 dark:text-gray-400 font-medium">{project.metric}</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-medium">{project.description}</p>

                      <div className="space-y-1 mb-4">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 font-medium">
                            <CheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors font-medium">
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

          {/* Summary Stats - Single Row */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl p-4 text-white">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold">15+</div>
                <div className="text-xs md:text-sm opacity-90">{t.work.summaryStats.experience}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">5</div>
                <div className="text-xs md:text-sm opacity-90">{t.work.summaryStats.companies}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-xs md:text-sm opacity-90">{t.work.summaryStats.projects}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">80%</div>
                <div className="text-xs md:text-sm opacity-90">{t.work.summaryStats.automation}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t.skills.title}</h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <Target size={20} />
                  {t.skills.testing}
                </h3>
                <div className="space-y-3">
                  {skills.testing.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-teal-600 dark:text-teal-400">
                  <Code size={20} />
                  {t.skills.development}
                </h3>
                <div className="space-y-3">
                  {skills.technical.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">{t.skills.additional}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Cypress', 'Selenium', 'Postman', 'JIRA', 'Confluence', 'styled-components', 'Redux', 'Redis', 'Cursor IDE', 'AWS'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 ${tech.includes('Cypress') || tech.includes('Selenium') || tech.includes('Postman') || tech.includes('JIRA') || tech.includes('Confluence') ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' : 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'} rounded-full text-xs font-medium`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications & Languages - Single Row */}
            <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{t.about.certifications}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">ISTQB • IREB • IATF</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Languages className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{t.skills.languages}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{t.skills.languageDetails}</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-teal-700 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.contact.title}
          </h2>

          <p className={`mb-10 text-indigo-100 max-w-2xl mx-auto leading-relaxed ${lang === Lang.EN ? 'text-lg' : 'text-xl'}`}>
            {t.contact.subtitle}
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a
              href="mailto:lucykatz58@gmail.com"
              className="group bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-110 flex items-center gap-3 hover:bg-gradient-to-r hover:from-white hover:to-indigo-50"
            >
              <Mail size={22} className="group-hover:rotate-12 transition-transform" />
              <span>{lang === Lang.EN ? "Let's Talk" : "대화하기"}</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>

            
            <a
              href="https://www.linkedin.com/in/janekim8928"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-indigo-700/80 backdrop-blur-sm text-white px-6 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all flex items-center gap-2 hover:shadow-xl hover:scale-105"
            >
              <Linkedin size={22} className="group-hover:rotate-12 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90">
              {lang === Lang.EN ? 'Usually responds within 24 hours' : '보통 24시간 내 답변'}
            </span>
          </div>

          {/* Quick Stats - No emojis */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="hover:scale-110 transition-transform cursor-default">
                <div className="text-2xl md:text-3xl font-bold">@Moloco</div>
                <div className="text-xs md:text-sm opacity-80">{lang === Lang.EN ? 'Current' : '현재'}</div>
              </div>
              <div className="hover:scale-110 transition-transform cursor-default">
                <div className="text-2xl md:text-3xl font-bold">QA + FE</div>
                <div className="text-xs md:text-sm opacity-80">{lang === Lang.EN ? 'Dual Role' : '듀얼 롤'}</div>
              </div>
              <div className="hover:scale-110 transition-transform cursor-default">
                <div className="text-2xl md:text-3xl font-bold">15+ Years</div>
                <div className="text-xs md:text-sm opacity-80">{lang === Lang.EN ? 'Experience' : '경력'}</div>
              </div>
              <div className="hover:scale-110 transition-transform cursor-default">
                <div className="text-2xl md:text-3xl font-bold">2 Patents</div>
                <div className="text-xs md:text-sm opacity-80">{lang === Lang.EN ? 'Innovation' : '혁신'}</div>
              </div>
            </div>
          </div>

          {/* Final CTA Message - No emoji */}
          <div className="mt-10 text-sm text-indigo-200">
            {lang === Lang.EN
              ? "Whether it's about quality engineering, frontend development, or innovative tech solutions - I'd love to hear from you!"
              : "품질 엔지니어링, 프론트엔드 개발, 혁신적인 기술 솔루션 - 무엇이든 편하게 연락주세요!"
            }
          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}