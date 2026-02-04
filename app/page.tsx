"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 37 });
  const [spotsLeft, setSpotsLeft] = useState(47);
  const [activeUsers, setActiveUsers] = useState(1247);
  const [scrollY, setScrollY] = useState(0);

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

  // Simulate active users fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30">
      
      {/* ENHANCED LAYERED BACKGROUND with Particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[55%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] bg-cyan-600/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
        {/* PREMIUM HEADER with Enhanced Logo */}
        <header className="sticky top-0 z-50 px-6 py-4 backdrop-blur-xl bg-[#050505]/90 border-b border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.02)]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* PREMIUM LOGO - Cluely/Interview Coder Style */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                {/* Logo container */}
                <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 via-violet-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all group-hover:scale-105">
                  {/* Layered icon effect */}
                  <svg className="w-6 h-6 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.1)" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-300 group-hover:from-violet-400 group-hover:to-blue-400 transition-all">
                  Interview Copilot
                </span>
                <span className="text-[9px] font-bold text-violet-400 tracking-[0.2em] uppercase">Neural AI</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Enhanced Live Counter */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all group cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                </span>
                <span className="text-green-400 font-bold text-sm tabular-nums">{activeUsers.toLocaleString()}</span>
                <span className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">live</span>
              </div>
              
              {/* Enhanced Trust Badge */}
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" style={{ transform: `translate(-50%, ${scrollY * 0.2}px)` }} />
          
          <div className="relative">
            {/* Enhanced Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-violet-400 shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all animate-fade-in group cursor-default">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400"></span>
              </span>
              <span className="group-hover:text-violet-300 transition-colors">🔴 LIVE: 47,283 Members Landing Offers This Month</span>
            </div>
            
            {/* Enhanced Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 animate-slide-up">
              Your Next Interview <br />
              <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 animate-gradient">
                Is Closer Than You Think.
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-600 opacity-30 blur-sm animate-pulse"></span>
              </span>
            </h1>
            
            {/* Enhanced Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join <span className="text-white font-bold">47,000+</span> candidates who refused to walk in unprepared. 
              <span className="text-white font-medium block mt-3">
                <span className="inline-block mr-2 animate-bounce" style={{ animationDuration: '2s' }}>⚡</span>
                The AI that thinks 10 steps ahead—invisibly.
              </span>
            </p>
            
            {/* Enhanced Scarcity Alert */}
            <div className="mt-8 max-w-md mx-auto p-4 bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/30 rounded-2xl backdrop-blur-sm animate-pulse-glow relative overflow-hidden group hover:border-rose-500/50 transition-all" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <svg className="w-4 h-4 text-rose-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="text-rose-300 font-medium">
                  Founder Pricing Ends in <span className="font-black tabular-nums text-white">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                </span>
              </div>
              <p className="text-xs text-rose-400/70 mt-1">Only <span className="font-bold text-rose-300">{spotsLeft}</span> early access spots remaining</p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#pricing"
                className="group relative px-10 py-4 bg-white text-black rounded-full font-bold overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  <span>Claim 3 Free Sessions</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <button className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:border-white/20">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-md group-hover:bg-violet-500/40 transition-all"></div>
                  <svg className="relative w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Watch Demo</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">(2:47)</span>
              </button>
            </div>

            {/* PREMIUM COMPANY LOGOS - Google, Amazon, Y Combinator Style */}
            <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-xs font-bold tracking-wider text-slate-600 mb-8 uppercase">Trusted By Talent From</div>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                
                {/* Google */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                      <span className="text-white font-black text-lg drop-shadow-md">G</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Google</span>
                </div>

                {/* Meta */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                      <svg className="w-5 h-5 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Meta</span>
                </div>

                {/* Amazon */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-9 h-9 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                      <span className="text-white font-black text-lg drop-shadow-md">a</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Amazon</span>
                </div>

                {/* Netflix */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-9 h-9 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                      <span className="text-white font-black text-lg drop-shadow-md">N</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Netflix</span>
                </div>

                {/* Y Combinator */}
                <div className="group flex items-center gap-3 cursor-default hover:scale-110 transition-transform">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-9 h-9 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                      <span className="text-white font-black text-xl drop-shadow-md">Y</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">Y Combinator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS TICKER - Enhanced with hover effects */}
        <section className="py-8 border-y border-white/5 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent backdrop-blur overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-violet-600/5"></div>
          <div className="relative flex animate-scroll hover:animation-paused">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-16 px-8 whitespace-nowrap">
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">Sarah M. landed</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">Senior PM @ Stripe</span>
                  <span className="text-slate-600">• 2h ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">James K. accepted</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">$245K @ Tesla</span>
                  <span className="text-slate-600">• 4h ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-slate-500">Maria L. got</span>
                  <span className="text-white font-bold group-hover:text-violet-400 transition-colors">ML Lead @ OpenAI</span>
                  <span className="text-slate-600">• 7h ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm group hover:scale-105 transition-transform cursor-default">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all">
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

        {/* PAIN SECTION - Same as original, keeping all content */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-12 text-center backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/10 blur-[80px] group-hover:bg-violet-500/20 transition-all duration-500" />
            
            <div className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-full text-xs font-bold text-rose-300 mb-4 uppercase tracking-wider">
              ⚠️ Last Week: 1,847 Failed Without This
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">
              Why Qualified Candidates Still Bomb Interviews
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-sm">
              <div className="space-y-4 group/card">
                <div className="text-violet-500 font-mono text-xl group-hover/card:translate-x-1 transition-transform tracking-widest">01//</div>
                <div className="text-white font-bold text-base mb-2">"The Freeze"</div>
                <p className="text-slate-400 leading-relaxed font-light">
                  Your brain shuts down mid-answer. You <em>know</em> the answer—but it won't come out.
                </p>
              </div>
              <div className="space-y-4 group/card">
                <div className="text-cyan-500 font-mono text-xl group-hover/card:translate-x-1 transition-transform tracking-widest">02//</div>
                <div className="text-white font-bold text-base mb-2">"Robotic Answers"</div>
                <p className="text-slate-400 leading-relaxed font-light">
                  ChatGPT scripts get detected instantly. Interviewers smell generic fluff a mile away.
                </p>
              </div>
              <div className="space-y-4 group/card">
                <div className="text-blue-500 font-mono text-xl group-hover/card:translate-x-1 transition-transform tracking-widest">03//</div>
                <div className="text-white font-bold text-base mb-2">"No Safety Net"</div>
                <p className="text-slate-400 leading-relaxed font-light">
                  One curveball question and your entire narrative collapses. Game over.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CURIOSITY REVEAL - Same content */}
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-bold text-violet-400 mb-6 uppercase tracking-wider">
            💡 The Missing Piece
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            What If Your Brain Had <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">A Second Processor?</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Interview Copilot doesn't just answer questions. It reads context, predicts follow-ups, 
            and feeds you <span className="text-white font-bold">tactical intelligence</span> in real-time—
            like having a FAANG interviewer whispering in your ear.
          </p>
        </section>

        {/* ARCHITECTURE - Same content */}
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-[1px] flex-1 bg-white/10" />
             <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-slate-500">Neural Architecture</h2>
             <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                label: "CAPTURE", 
                title: "Live Recognition", 
                desc: "Detects technical jargon, behavioral cues, and interviewer patterns in milliseconds.",
                stat: "99.7% accuracy",
                icon: "🎯"
              },
              { 
                label: "MAP", 
                title: "Neural Context", 
                desc: "Cross-references your resume, the job description, and 10M+ interview transcripts.",
                stat: "10M+ data points",
                icon: "🧠"
              },
              { 
                label: "EXECUTE", 
                title: "Tactical HUD", 
                desc: "Delivers personalized, non-robotic responses that sound authentically YOU.",
                stat: "0.3s response",
                icon: "⚡"
              }
            ].map((step, idx) => (
              <div key={idx} className="group relative p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-violet-500/40 hover:bg-violet-500/[0.02] transition-all cursor-default">
                <div className="text-3xl mb-4">{step.icon}</div>
                <span className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.2em]">{step.label}</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">{step.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">{step.desc}</p>
                <div className="text-xs font-bold text-cyan-400">{step.stat}</div>
                <div className="mt-6 h-1 w-0 bg-violet-500/50 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS - Same content */}
        <section className="px-6 py-20 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-bold text-green-400 mb-4">
                <span>⭐ 4.9/5</span>
                <span className="text-slate-500">from</span>
                <span>47,283 members</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">They Walked In Different</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I went from freezing mid-answer to closing with 3 competing offers. This literally changed my career trajectory.",
                  name: "Alex Chen",
                  role: "Senior SWE @ Google",
                  outcome: "$310K total comp",
                  avatar: "AC"
                },
                {
                  quote: "The interviewers asked me how I was so prepared. I just smiled. This is my secret weapon now.",
                  name: "Priya Sharma",
                  role: "PM @ Meta",
                  outcome: "2 levels up",
                  avatar: "PS"
                },
                {
                  quote: "I used to dread behavioral rounds. Now I dominate them. It's like having the answer key before the test.",
                  name: "Marcus Williams",
                  role: "Data Lead @ Netflix",
                  outcome: "$280K + equity",
                  avatar: "MW"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-violet-500/20 transition-all hover:scale-[1.02] cursor-default">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic text-sm">"{testimonial.quote}"</p>
                  <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                      <div className="text-xs text-green-400 font-bold mt-1">✓ {testimonial.outcome}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY - Same content */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-bold text-blue-400 mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <span>47,283 Members Strong</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              You're Not Just Getting Software.<br />
              You're Joining a <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">Movement</span>.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Private Slack community • Weekly live prep sessions • Direct access to ex-FAANG interviewers • 
              Real interview questions database updated daily
            </p>
          </div>
        </section>

        {/* PRICING - EXACT SAME CONTENT, NO CHANGES */}
        <section id="pricing" className="px-6 py-24 bg-gradient-to-b from-transparent to-violet-500/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl backdrop-blur">
                <svg className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-bold text-rose-300">⚡ Founder Pricing Ends Feb 15th</div>
                  <div className="text-xs text-rose-400/70">Next cohort pays 3x more • Lock in now</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic uppercase">Select Your Edge</h2>
              <p className="text-slate-500 text-sm max-w-[280px] md:text-right">
                All tiers include our 2026 neural-matching engine + community access
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* FREE TRIAL */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col">
                <h3 className="text-lg font-medium text-slate-400">Free Trial</h3>
                <div className="my-8">
                  <span className="text-5xl font-bold text-white tracking-tight">$0</span>
                </div>
                
                <div className="mb-6 p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                  <div className="text-xs font-bold text-orange-400 mb-1">⚡ 247 Sessions Left Today</div>
                  <div className="text-[10px] text-orange-300/70">Resets in 5h 23m</div>
                </div>
                
                <ul className="space-y-4 text-sm text-slate-400 mb-10 flex-1">
                  <li className="flex items-center gap-2">✓ 3 AI-powered prep sessions</li>
                  <li className="flex items-center gap-2">✓ Access to community Slack</li>
                  <li className="flex items-center gap-2">✓ Basic interview question bank</li>
                </ul>
                <button className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-all font-bold">
                  Start Free Now
                </button>
                <div className="mt-3 text-center text-xs text-slate-600">No credit card • Instant access</div>
              </div>

              {/* MONTHLY PRO */}
              <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_20px_80px_rgba(79,70,229,0.3)] transform md:-translate-y-4 transition-all hover:scale-[1.02]">
                <div className="absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest">
                  <div className="bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                    ⭐ 83% Choose This
                  </div>
                </div>
                
                <h3 className="text-lg font-bold">Monthly Pro</h3>
                <div className="my-8">
                  <span className="text-6xl font-black tracking-tighter">$3</span>
                  <span className="text-sm font-medium opacity-70 ml-2">/ Week</span>
                </div>
                
                <div className="mb-6 p-3 bg-black/20 rounded-xl border border-white/10">
                  <div className="text-xs font-bold">💎 Less than a coffee. More than a career.</div>
                </div>
                
                <ul className="space-y-5 text-sm mb-12 flex-1">
                  <li className="flex items-center gap-3">✦ Unlimited AI prep sessions</li>
                  <li className="flex items-center gap-3">✦ Real-time interview assistant</li>
                  <li className="flex items-center gap-3">✦ Weekly expert coaching calls</li>
                  <li className="flex items-center gap-3">✦ Priority community support</li>
                  <li className="flex items-center gap-3">✦ Resume + LinkedIn optimization</li>
                </ul>
                <button className="w-full py-5 rounded-2xl bg-black text-white hover:shadow-2xl transition-all font-black tracking-widest uppercase text-xs">
                  Join 9,421 Pro Members
                </button>
                <div className="mt-3 text-center text-xs opacity-70">Cancel anytime • 14-day guarantee</div>
              </div>

              {/* LIFETIME PRO */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-rose-500/30 relative overflow-hidden flex flex-col">
                <div className="absolute -right-12 top-6 rotate-45 bg-rose-500 text-white px-12 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {spotsLeft} LEFT
                </div>
                
                <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                  <div className="text-xs font-bold text-rose-300">
                    ⏰ Price locks in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                  </div>
                  <div className="text-[10px] text-rose-400/70">Then increases to $29 forever</div>
                </div>
                
                <h3 className="text-lg font-medium text-slate-400">Lifetime Pro</h3>
                <div className="my-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-white tracking-tight">$10</span>
                    <span className="text-lg text-slate-500 line-through">$99</span>
                  </div>
                  <div className="text-sm text-green-400 font-bold mt-2">💰 Pay once. Own forever.</div>
                </div>
                
                <ul className="space-y-4 text-sm text-slate-300 mb-10 flex-1">
                  <li className="font-bold text-white">Everything in Pro, plus:</li>
                  <li>— Lifetime access (never pay again)</li>
                  <li>— Private GPU node (priority speed)</li>
                  <li>— Exclusive "Founders" badge</li>
                  <li>— Early access to new features</li>
                  <li>— Locked-in price (no increases ever)</li>
                </ul>
                
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-rose-600 text-white hover:shadow-2xl transition-all font-black tracking-widest uppercase text-xs">
                  Secure 1 of {spotsLeft} Licenses
                </button>
                
                <div className="mt-4 text-center text-xs text-slate-500">
                  🔥 {Math.floor(spotsLeft * 0.87)} claimed in last 24h
                </div>
              </div>
            </div>

            {/* Trust Badge - Guarantee */}
            <div className="mt-16 p-8 bg-white/[0.02] border border-white/5 rounded-2xl max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-6">
                <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div className="text-left">
                  <div className="text-xl font-bold text-white mb-1">Zero-Risk Guarantee</div>
                  <div className="text-sm text-slate-400 mb-2">Don't get an offer? Full refund. No questions asked.</div>
                  <p className="text-xs text-slate-500 max-w-xl">
                    We're so confident you'll land better offers, we'll refund 100% if you don't see results in 30 days. 
                    Plus, keep all the prep materials anyway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANTICIPATION - Same content */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              What Happens The Second You Join
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { time: "Minute 1", action: "Account activated", desc: "Instant dashboard access", icon: "⚡" },
                { time: "Minute 5", action: "First AI session", desc: "Practice your pitch", icon: "🎯" },
                { time: "Hour 1", action: "Slack invite sent", desc: "Meet 47K+ members", icon: "💬" },
                { time: "Day 1", action: "Resume reviewed", desc: "Expert feedback", icon: "✨" }
              ].map((step, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-violet-500/30 transition-all group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <div className="text-xs font-bold text-violet-400 mb-2 uppercase tracking-wider">{step.time}</div>
                  <div className="text-base font-bold text-white mb-2">{step.action}</div>
                  <div className="text-sm text-slate-500">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - Same content */}
        <section className="px-6 py-32 md:py-40 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-600/[0.05] via-rose-600/[0.03] to-transparent" />
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-sm text-slate-400 mb-6">
              You've studied. You've practiced. You know you're qualified.
            </div>
            
            <h2 className="text-3xl md:text-7xl font-black text-white mb-6 leading-none italic uppercase tracking-tighter">
              Don't Let Nerves <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-violet-400 to-blue-400">
                Cost You The Job.
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your dream company is watching 100 other candidates. 
              They only remember the ones who sound <em className="text-white font-semibold">unshakeable</em>.
            </p>
            
            <div className="inline-block mb-8 p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl backdrop-blur">
              <div className="text-sm font-bold text-rose-300 mb-2">⏰ Founder Pricing Expires:</div>
              <div className="text-3xl font-black text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-rose-600 text-white px-12 md:px-16 py-5 md:py-6 rounded-full font-black tracking-widest uppercase text-sm hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-all hover:scale-110"
              >
                <span className="group-hover:translate-x-1 transition-transform">Claim Your Advantage Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button className="px-10 md:px-12 py-5 md:py-6 border border-white/20 rounded-full font-bold text-white hover:bg-white/5 transition-all">
                Start Free Trial Instead
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>100% money-back guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - Same content */}
        <footer className="px-6 md:px-10 py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 pb-8 border-b border-white/5">
              <div className="text-sm text-slate-500 mb-2 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                Live Activity
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">{activeUsers.toLocaleString()} candidates preparing right now</div>
              <div className="text-xs text-slate-600 mt-2">Next cohort opens in {timeLeft.hours}h {timeLeft.minutes}m</div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <span>© 2026 Interview Copilot</span>
                <span className="text-violet-900 font-sans italic tracking-normal lowercase opacity-50 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  All systems operational
                </span>
              </div>
              
              <div className="flex gap-8 md:gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Testimonials</a>
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.1); }
          50% { box-shadow: 0 0 40px rgba(244, 63, 94, 0.3); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
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