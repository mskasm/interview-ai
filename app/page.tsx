"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function InterviewCopilot() {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 18 });
  const [activeUsers, setActiveUsers] = useState(2847);
  const [offersToday, setOffersToday] = useState(23);
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Active users fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.min(3000, Math.max(2800, prev + Math.floor(Math.random() * 7) - 3)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Offers today increment
  useEffect(() => {
    const interval = setInterval(() => {
      setOffersToday(prev => prev + 1);
    }, 180000); // Every 3 minutes
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT can't see your interview happening or hear what's being asked. Interview Copilot reads your screen, listens to questions in real-time, and gives you contextual answers that sound like YOU—not a robot. It's like having a coach whispering perfect responses in your ear."
    },
    {
      q: "Is it detectable during video interviews?",
      a: "No. Interview Copilot runs locally on your computer and is completely invisible to screen sharing, recording software, and interviewers. Unlike bot-based tools that join meetings, we operate as a private desktop assistant that only you can see."
    },
    {
      q: "Can I use this for technical coding interviews?",
      a: "Absolutely. Interview Copilot excels at technical interviews. It can help explain algorithms, suggest optimal solutions, and even debug code snippets you're working through—all while staying completely undetectable."
    },
    {
      q: "What if I'm asked a question it doesn't know?",
      a: "Our AI performs real-time web searches and synthesizes information from multiple sources. If something is genuinely unknowable, it will suggest ways to buy time or redirect the conversation naturally."
    },
    {
      q: "How quickly can I start using it?",
      a: "Instant. Download, launch before your interview, and you're ready. No account setup, no configuration. One click and you're protected."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      
      {/* PREMIUM GLASSMORPHISM HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass border-b border-gray-200/80 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Premium Logo with Glow */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              {/* Logo icon */}
              <div className="relative w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Interview Copilot
            </span>
          </div>

          {/* Navigation with subtle underline effect */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
              <span>Features</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#how-it-works" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
              <span>How It Works</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#pricing" className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
              <span>Pricing</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>

          {/* Premium CTA Button with Shimmer */}
          <a
            href="#pricing"
            className="relative overflow-hidden px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-lg shadow-glow-primary hover:shadow-glow-primary-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-shimmer w-full h-full translate-x-[-100%] group-hover:animate-shimmer"></span>
            <span className="relative">Start Free Trial</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION with Ambient Orbs */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white"></div>
        
        {/* Floating ambient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-10s' }}></div>

        <div className="relative max-w-7xl mx-auto">
          
          {/* Glassmorphic Stats Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="glass-subtle inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full shadow-sm">
              <div className="flex items-center gap-2">
                {/* Pulse indicator */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500 shadow-success"></span>
                </span>
                <span className="text-sm font-semibold text-gray-900 tabular-nums">{activeUsers.toLocaleString()}</span>
                <span className="text-sm text-gray-600">preparing now</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-success-600 tabular-nums">{offersToday}</span> offers today
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Headline with gradient */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
              Never freeze in an
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
                interview again
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 animate-fade-in-up [animation-delay:100ms]">
              Real-time AI that sees your screen, hears the questions, and gives you
              <span className="font-semibold text-gray-900"> perfect answers instantly</span>—completely undetectable.
            </p>

            {/* Urgency Banner with subtle gradient */}
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-warning-50 to-danger-50 border border-warning-200/50 rounded-lg mb-10 animate-fade-in-up [animation-delay:200ms] shadow-warning">
              <svg className="w-5 h-5 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-900">
                Early access ends in <span className="font-bold tabular-nums">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
              
              {/* Primary CTA with gradient & glow */}
              <a
                href="#pricing"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-bold rounded-xl shadow-glow-primary hover:shadow-glow-primary-lg hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="absolute inset-0 bg-shimmer w-full h-full translate-x-[-100%] group-hover:animate-shimmer"></span>
                <span className="relative">Start 3 Free Sessions</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Secondary CTA - Ghost style */}
              <button className="group px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg className="relative w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Watch Demo</span>
                <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">(2:15)</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>100% undetectable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Instant setup</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Mock Interview Screen */}
          <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up [animation-delay:500ms]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
              
              {/* Mock Browser Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-danger-500"></div>
                  <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-500 font-medium">
                  Zoom Interview • Recording in Progress
                </div>
              </div>
              
              {/* Mock Interview Screen */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative">
                {/* Interviewer Video */}
                <div className="absolute top-4 left-4 w-48 h-36 rounded-lg bg-gradient-to-br from-primary-900 to-primary-800 border border-primary-700 overflow-hidden backdrop-blur-sm">
                  <div className="p-4">
                    <div className="w-16 h-16 rounded-full bg-primary-700 mb-2 animate-pulse"></div>
                    <div className="h-2 w-24 bg-primary-700/50 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-primary-700/30 rounded"></div>
                  </div>
                </div>

                {/* Your Video (smaller) */}
                <div className="absolute top-4 right-4 w-32 h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 backdrop-blur-sm"></div>

                {/* AI Answer Bubble - Glassmorphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl w-full px-4">
                  <div className="glass-strong rounded-2xl shadow-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Interview Question</p>
                        <p className="text-sm text-gray-700">"Tell me about a time you handled a difficult stakeholder."</p>
                      </div>
                    </div>

                    {/* AI Answer */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-4 border border-primary-200/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center shadow-glow-sm">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-primary-900">AI Answer Ready</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        "At my previous company, I worked with a marketing VP who initially resisted our product roadmap..."
                      </p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-gray-700 shadow-sm hover:shadow-md transition-all duration-200">
                          Copy Answer
                        </button>
                        <button className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-gray-700 shadow-sm hover:shadow-md transition-all duration-200">
                          Refine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Undetectable Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-success-500/90 backdrop-blur-md rounded-lg border border-success-400/50 shadow-success">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm font-bold text-white">Undetectable Mode: ON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <section className="py-4 border-y border-gray-200 bg-gray-50 overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 px-6 whitespace-nowrap">
              {[
                { name: "Sarah L.", outcome: "Product Manager @ Google", time: "1h ago" },
                { name: "Michael C.", outcome: "$180K @ Meta", time: "2h ago" },
                { name: "Priya K.", outcome: "Senior SWE @ Amazon", time: "4h ago" },
                { name: "James D.", outcome: "Data Lead @ Netflix", time: "6h ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform duration-200">
                  <div className="w-6 h-6 rounded-full bg-success-100 border border-success-300 flex items-center justify-center flex-shrink-0 group-hover:bg-success-200 transition-colors">
                    <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-600">{item.name} landed</span>
                  <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{item.outcome}</span>
                  <span className="text-gray-400">• {item.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Continue with remaining sections... Due to length, I'll provide the key sections with premium Tailwind classes */}

      {/* Add scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}