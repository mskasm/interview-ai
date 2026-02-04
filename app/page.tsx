"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 37 });
  const [spotsLeft, setSpotsLeft] = useState(47);
  const [activeUsers, setActiveUsers] = useState(1247);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30">
      
      {/* ENHANCED LAYERED BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[55%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] bg-cyan-600/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-violet-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* PREMIUM STICKY HEADER */}
        <header className="sticky top-0 z-50 px-6 py-4 backdrop-blur-xl bg-[#050505]/90 border-b border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.02)]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* LOGO - Enhanced with gradient and icon */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 via-violet-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all group-hover:scale-105">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                <div className="relative flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Interview Copilot</span>
                <span className="text-[9px] font-bold text-violet-400 tracking-[0.2em] uppercase">Neural AI</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Live Activity Indicator */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all group cursor-pointer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                </span>
                <span className="text-green-400 font-bold text-sm tabular-nums">{activeUsers.toLocaleString()}</span>
                <span className="text-slate-500 text-xs">live</span>
              </div>
              
              {/* Trust Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all group cursor-default">
                <svg className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Secured</span>
              </div>
            </div>
          </div>
        </header>

        {/* HERO SECTION - Enhanced */}
        <section className="px-6 py-24 md:py-32 text-center relative">
          {/* Spotlight effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full" />
          
          <div className="relative">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-violet-400 shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all cursor-default group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400"></span>
              </span>
              <span className="group-hover:text-violet-300 transition-colors">🔴 LIVE: 47,283 Members Landing Offers This Month</span>
            </div>
            
            {/* Main Headline with enhanced gradient */}
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Your Next Interview <br />
              <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 animate-gradient-x">
                Is Closer Than You Think.
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-600 opacity-30 blur-sm"></span>
              </span>
            </h1>
            
            {/* Enhanced Subheadline */}
            <p className={`mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Join <span className="text-white font-bold">47,000+</span> candidates who refused to walk in unprepared. 
              <span className="text-white font-medium block mt-3">
                <span className="inline-block mr-2">⚡</span>
                The AI that thinks 10 steps ahead—invisibly.
              </span>
            </p>
            
            {/* Premium Urgency Alert */}
            <div className={`mt-10 max-w-md mx-auto p-5 bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-rose-500/10 border border-rose-500/30 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-rose-500/50 transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3 text-sm">
                <svg className="w-5 h-5 text-rose-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="text-rose-300 font-bold">
                    Founder Pricing Ends in <span className="tabular-nums text-white">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                  </div>
                  <div className="text-xs text-rose-400/70 mt-1">
                    Only <span className="font-bold text-rose-300">{spotsLeft}</span> early access spots remaining
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons - Enhanced */}
            <div className={`mt-12 flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <a
                href="#pricing"
                className="group relative px-12 py-5 bg-white text-black rounded-full font-bold overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  <span>Claim 3 Free Sessions</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <button className="group px-12 py-5 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:border-white/20">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-md group-hover:bg-violet-500/40 transition-all"></div>
                  <svg className="relative w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Watch Demo</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">(2:47)</span>
              </button>
            </div>

            {/* Trusted By Logos - Enhanced */}
            <div className={`mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="text-xs font-bold tracking-wider text-slate-600 mb-8 uppercase">Trusted By Talent From</div>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
                
                {/* Google Logo */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm">G</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Google</span>
                </div>

                {/* Meta Logo */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Meta</span>
                </div>

                {/* Amazon Logo */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm">a</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Amazon</span>
                </div>

                {/* Netflix Logo */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm">N</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Netflix</span>
                </div>

                {/* Y Combinator Logo */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">Y</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Y Combinator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS TICKER - Enhanced */}
        <section className="py-8 border-y border-white/5 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent backdrop-blur overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-violet-600/5"></div>
          <div className="relative flex animate-scroll">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-16 px-8 whitespace-nowrap">
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">Sarah M. landed</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">Senior PM @ Stripe</span>
                  <span className="text-slate-600">• 2h ago</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">James K. accepted</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">$245K @ Tesla</span>
                  <span className="text-slate-600">• 4h ago</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">Maria L. got</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">ML Lead @ OpenAI</span>
                  <span className="text-slate-600">• 7h ago</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">David R. secured</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">Staff Eng @ Airbnb</span>
                  <span className="text-slate-600">• 12h ago</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAIN SECTION - Enhanced */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center backdrop-blur-3xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-violet-500/10 blur-[100px] group-hover:bg-violet-500/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-xs font-bold text-rose-300 mb-6 uppercase tracking-wider hover:bg-rose-500/20 transition-all cursor-default">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <span>Last Week: 1,847 Failed Without This</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight">
                Why Qualified Candidates Still Bomb Interviews
              </h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    num: "01",
                    title: "The Freeze",
                    desc: "Your brain shuts down mid-answer. You know the answer—but it won't come out.",
                    color: "violet",
                    icon: "❄️"
                  },
                  {
                    num: "02",
                    title: "Robotic Answers",
                    desc: "ChatGPT scripts get detected instantly. Interviewers smell generic fluff a mile away.",
                    color: "cyan",
                    icon: "🤖"
                  },
                  {
                    num: "03",
                    title: "No Safety Net",
                    desc: "One curveball question and your entire narrative collapses. Game over.",
                    color: "blue",
                    icon: "🎯"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group/card relative p-8 rounded-2xl bg-[#0a0a0a]/50 border border-white/5 hover:border-white/10 hover:bg-[#0a0a0a]/80 transition-all cursor-default">
                    <div className={`absolute -top-2 -right-2 w-16 h-16 bg-${item.color}-500/5 blur-2xl group-hover/card:bg-${item.color}-500/10 transition-all`}></div>
                    <div className="text-4xl mb-4 group-hover/card:scale-110 transition-transform">{item.icon}</div>
                    <div className={`text-${item.color}-500 font-mono text-xl mb-4 group-hover/card:translate-x-1 transition-transform tracking-widest`}>{item.num}//</div>
                    <div className="text-white font-bold text-lg mb-3">{item.title}</div>
                    <p className="text-slate-400 leading-relaxed text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CURIOSITY REVEAL - Enhanced */}
        <section className="px-6 py-24 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-bold text-violet-400 mb-8 uppercase tracking-wider hover:bg-violet-500/20 transition-all cursor-default group">
            <div className="relative w-4 h-4">
              <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-md group-hover:bg-violet-500/40 transition-all"></div>
              <span className="relative">💡</span>
            </div>
            <span>The Missing Piece</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
            What If Your Brain Had <br />
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 animate-gradient-x">
              A Second Processor?
              <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M1 6C50 2 100 10 150 6C200 2 250 10 299 6" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(167, 139, 250)" />
                    <stop offset="50%" stopColor="rgb(34, 211, 238)" />
                    <stop offset="100%" stopColor="rgb(96, 165, 250)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Interview Copilot doesn't just answer questions. It reads context, predicts follow-ups, 
            and feeds you <span className="relative inline-block text-white font-bold">
              tactical intelligence
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500"></span>
            </span> in real-time—
            like having a FAANG interviewer whispering in your ear.
          </p>
        </section>

        {/* ARCHITECTURE - Same structure, keep existing code */}
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
             <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-slate-500">Neural Architecture</h2>
             <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                label: "CAPTURE", 
                title: "Live Recognition", 
                desc: "Detects technical jargon, behavioral cues, and interviewer patterns in milliseconds.",
                stat: "99.7% accuracy",
                icon: "🎯",
                gradient: "from-violet-500/10 to-purple-500/10"
              },
              { 
                label: "MAP", 
                title: "Neural Context", 
                desc: "Cross-references your resume, the job description, and 10M+ interview transcripts.",
                stat: "10M+ data points",
                icon: "🧠",
                gradient: "from-cyan-500/10 to-blue-500/10"
              },
              { 
                label: "EXECUTE", 
                title: "Tactical HUD", 
                desc: "Delivers personalized, non-robotic responses that sound authentically YOU.",
                stat: "0.3s response",
                icon: "⚡",
                gradient: "from-blue-500/10 to-indigo-500/10"
              }
            ].map((step, idx) => (
              <div key={idx} className={`group relative p-10 rounded-[2rem] bg-gradient-to-br ${step.gradient} border border-white/5 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] transition-all cursor-default overflow-hidden`}>
                <div className="absolute inset-0 bg-[#0a0a0a] opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.2em]">{step.label}</span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4 group-hover:text-violet-300 transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">{step.desc}</p>
                  <div className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">{step.stat}</div>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_10px_currentColor]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keep remaining sections (TESTIMONIALS, COMMUNITY, PRICING, etc.) with original structure */}
        {/* ... rest of the code continues ... */}

        {/* FOOTER */}
        <footer className="px-10 py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 pb-10 border-b border-white/5">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <span className="text-sm text-slate-500 font-semibold">Live Activity</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{activeUsers.toLocaleString()}</div>
              <div className="text-sm text-slate-400">candidates preparing right now</div>
              <div className="text-xs text-slate-600 mt-3">Next cohort opens in {timeLeft.hours}h {timeLeft.minutes}m</div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span>© 2026 Interview Copilot</span>
                <div className="flex items-center gap-2 justify-center md:justify-start text-violet-900 font-sans normal-case tracking-normal opacity-50">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                  <span className="italic text-xs">All systems operational</span>
                </div>
              </div>
              
              <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors relative group">
                  Privacy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
                </a>
                <a href="#" className="hover:text-white transition-colors relative group">
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
                </a>
                <a href="#" className="hover:text-white transition-colors relative group">
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  );
}