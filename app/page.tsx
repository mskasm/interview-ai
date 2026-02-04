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
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <span className="text-lg font-bold text-gray-900">Interview Copilot</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          {/* CTA */}
          <a
            href="#pricing"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Start Free Trial
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Live Stats Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-gray-900 tabular-nums">{activeUsers.toLocaleString()}</span>
                <span className="text-sm text-gray-600">preparing now</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-green-600 tabular-nums">{offersToday}</span> offers today
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
              Never freeze in an
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                interview again
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Real-time AI that sees your screen, hears the questions, and gives you
              <span className="font-semibold text-gray-900"> perfect answers instantly</span>—completely undetectable.
            </p>

            {/* Urgency Banner */}
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-900">
                Early access ends in <span className="font-bold tabular-nums">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#pricing"
                className="group relative px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Start 3 Free Sessions</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button className="group px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Demo</span>
                <span className="text-sm text-gray-500">(2:15)</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>100% undetectable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Instant setup</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
              {/* Mock Browser Window */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-500 font-medium">
                  Zoom Interview • Recording in Progress
                </div>
              </div>
              
              {/* Mock Interview Screen */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative">
                {/* Interviewer Video */}
                <div className="absolute top-4 left-4 w-48 h-36 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700 overflow-hidden">
                  <div className="p-4">
                    <div className="w-16 h-16 rounded-full bg-blue-700 mb-2"></div>
                    <div className="h-2 w-24 bg-blue-700/50 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-blue-700/30 rounded"></div>
                  </div>
                </div>

                {/* Your Video (Smaller) */}
                <div className="absolute top-4 right-4 w-32 h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600"></div>

                {/* Question Bubble */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl w-full px-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Interview Question</p>
                        <p className="text-sm text-gray-700">"Tell me about a time you handled a difficult stakeholder."</p>
                      </div>
                    </div>

                    {/* AI Answer */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-blue-900">AI Answer Ready</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        "At my previous company, I worked with a marketing VP who initially resisted our product roadmap..."
                      </p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-gray-700 shadow-sm hover:shadow transition-all">
                          Copy Answer
                        </button>
                        <button className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-gray-700 shadow-sm hover:shadow transition-all">
                          Refine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Undetectable Indicator */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-green-500/90 backdrop-blur rounded-lg border border-green-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm font-bold text-white">Undetectable Mode: ON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Element */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 w-64">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900">Follow-up Ready</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  "Can you expand on how you measured success?"
                </p>
                <div className="text-xs text-gray-400">Contextual • Smart • Natural</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <section className="py-4 border-y border-gray-200 bg-gray-50 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 px-6 whitespace-nowrap">
              {[
                { name: "Sarah L.", outcome: "Product Manager @ Google", time: "1h ago" },
                { name: "Michael C.", outcome: "$180K @ Meta", time: "2h ago" },
                { name: "Priya K.", outcome: "Senior SWE @ Amazon", time: "4h ago" },
                { name: "James D.", outcome: "Data Lead @ Netflix", time: "6h ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-600">{item.name} landed</span>
                  <span className="font-semibold text-gray-900">{item.outcome}</span>
                  <span className="text-gray-400">• {item.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION - Cluely Style */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Four ways we make your<br />interviews better
            </h2>
          </div>

          {/* Feature 1: Real-Time Answers */}
          <div className="mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-12">
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-12 md:p-16">
                  {/* Mock UI Window */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-full">
                    {/* Window Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Interview Copilot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-600">LIVE</span>
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-8 h-full flex flex-col justify-center">
                      <div className="max-w-2xl">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Interview Question</p>
                            <p className="text-xl font-medium text-gray-900">"Walk me through your approach to system design."</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-bold text-blue-900">Perfect Answer Ready</span>
                          </div>
                          <p className="text-base text-gray-800 leading-relaxed">
                            "I start by clarifying requirements and constraints. Then I break down the problem into core components—data storage, API design, and scalability considerations..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  AI that answers questions for you, real‑time
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Interview Copilot sees your screen, listens to every question, and generates perfect answers based on your resume, the job description, and conversation context—all in milliseconds.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Follow-up Emails */}
          <div className="mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Instant follow-up emails
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Send perfectly drafted follow-up emails within seconds after every call. References specific conversation moments and reinforces your key strengths.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="aspect-[4/3] bg-gradient-to-br from-green-50 via-white to-green-50/50 p-8">
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                          <span className="text-sm font-bold text-gray-900">Follow-up Email</span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs text-green-600 font-semibold">Ready</span>
                          </div>
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-11/12"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-10/12"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-9/12"></div>
                        </div>
                        <div className="pt-4 border-t border-gray-200 mt-4">
                          <button className="w-full py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors">
                            Copy & Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Pre-Interview Research */}
          <div className="mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 via-white to-purple-50/50 p-8">
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 h-full">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Sarah Chen</div>
                            <div className="text-xs text-gray-500">Hiring Manager @ Google</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Background</span>
                            <span className="font-semibold text-gray-900">Stanford CS</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Role</span>
                            <span className="font-semibold text-gray-900">8 years @ Google</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Focus</span>
                            <span className="font-semibold text-gray-900">Cloud Infrastructure</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Who are you really talking to?
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Learn everything about your interviewer before the call starts—where they work, what they do, their background, and interests. Walk in prepared.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Beautiful Notes */}
          <div>
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-12">
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 via-white to-indigo-50/50 p-12 md:p-16">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 h-full p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-2xl font-bold text-gray-900">Interview Notes</h4>
                      <span className="text-sm text-gray-500">Generated in 0.3s</span>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-3">Key Discussion Points</div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-3">Your Answers</div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-11/12"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-10/12"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-3">Next Steps</div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Beautiful meeting notes
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Instant shareable meeting notes generated by AI. Review your performance, share with mentors, or use for follow-up preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Cluely Style */}
      <section id="how-it-works" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Interview notes in 3 steps
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              The easiest way to get real-time help and beautiful,<br />shareable interview notes.
            </p>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-8">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col items-center justify-center p-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6 shadow-xl">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">
                            One-Click Install
                          </div>
                          <div className="text-6xl font-black text-gray-900 mb-4">⌘</div>
                          <p className="text-lg text-gray-600">Download and launch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[120px] md:text-[160px] font-black text-blue-50 leading-none mb-4">1</div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    Download Interview<br />Copilot
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Simply download the app and launch it before your<br />interview begins. No setup, no configuration, no hassle.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="text-[120px] md:text-[160px] font-black text-green-50 leading-none mb-4">2</div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    Join your interview<br />as normal
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Start your Zoom, Teams, or Google Meet call.<br />Interview Copilot listens and watches—completely<br />invisible to everyone but you.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="aspect-[4/3] bg-gradient-to-br from-green-50 via-white to-green-50/50 p-8">
                      <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 h-full relative overflow-hidden">
                        {/* Mock Video Call Interface */}
                        <div className="absolute top-4 right-4 w-32 h-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600"></div>
                        <div className="absolute top-4 left-4 w-48 h-36 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg border border-blue-700">
                          <div className="p-4">
                            <div className="w-16 h-16 rounded-full bg-blue-700 mb-2"></div>
                            <div className="h-2 w-24 bg-blue-700/50 rounded"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20"></div>
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20"></div>
                          <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur"></div>
                        </div>
                        {/* Undetectable Badge */}
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-green-500 rounded-lg">
                          <span className="text-xs font-bold text-white">✓ Undetectable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 via-white to-purple-50/50 p-8">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-lg font-bold text-gray-900">Interview Complete</span>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm font-semibold text-green-600">Notes Ready</span>
                          </div>
                        </div>
                        <div className="space-y-4 flex-1">
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <div className="text-sm font-bold text-blue-900 mb-2">Key Highlights</div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-blue-200 rounded-full w-full"></div>
                              <div className="h-2 bg-blue-200 rounded-full w-5/6"></div>
                              <div className="h-2 bg-blue-200 rounded-full w-4/6"></div>
                            </div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                            <div className="text-sm font-bold text-green-900 mb-2">Your Strengths</div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-green-200 rounded-full w-full"></div>
                              <div className="h-2 bg-green-200 rounded-full w-4/6"></div>
                            </div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <div className="text-sm font-bold text-purple-900 mb-2">Follow-up Actions</div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-purple-200 rounded-full w-5/6"></div>
                              <div className="h-2 bg-purple-200 rounded-full w-3/6"></div>
                            </div>
                          </div>
                        </div>
                        <button className="mt-6 w-full py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                          Download Notes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[120px] md:text-[160px] font-black text-purple-50 leading-none mb-4">3</div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    Get instant, beautiful<br />notes
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Interview Copilot uses what it heard and what it saw<br />on your screen to generate comprehensive notes,<br />follow-up emails, and action items.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-gray-800 hover:shadow-xl transition-all"
            >
              <span>Start Your First Interview</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              100% undetectable. Always.
            </h2>
            <p className="text-xl text-gray-600">
              No meeting bots. No suspicious browser extensions. Just you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Other Tools */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Other AI Tools</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Joins meeting as visible bot",
                  "Everyone sees it recording",
                  "Requires meeting host permission",
                  "Often banned in interviews",
                  "Obvious and distracting"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interview Copilot */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-300 relative">
              <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                YOUR ADVANTAGE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interview Copilot</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Runs privately on your computer",
                  "Completely invisible to others",
                  "No permissions needed",
                  "Works on all platforms",
                  "Only you can see it"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Platform Logos */}
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Works With Every Platform
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {["Zoom", "Teams", "Google Meet", "Webex", "Slack"].map((platform, idx) => (
                <div key={idx} className="text-2xl font-bold text-gray-400">{platform}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full mb-6">
              ⭐ 4.9/5 from 12,847 users
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              They walked in different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I went from bombing every behavioral question to getting 3 competing offers. This is my secret weapon now.",
                name: "Alex Chen",
                role: "Senior SWE @ Google",
                outcome: "$310K total comp"
              },
              {
                quote: "The interviewer literally asked how I prepared so well. I just smiled. Interview Copilot made me sound like a pro.",
                name: "Priya Sharma",
                role: "PM @ Meta",
                outcome: "Promoted 2 levels"
              },
              {
                quote: "I used to freeze on technical questions. Now I close every interview strong. Game changer for my career.",
                name: "Marcus Williams",
                role: "Data Lead @ Netflix",
                outcome: "$280K + equity"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600 font-semibold">✓ {testimonial.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-300 rounded-xl">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">
                  ⚡ Early Access Ends: <span className="tabular-nums">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                </div>
                <div className="text-xs text-gray-600">Next price: 3x higher • Lock in now</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Choose your advantage
            </h2>
            <p className="text-xl text-gray-600">
              All plans include undetectable mode and real-time answers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Trial */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Trial</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-gray-900">$0</span>
              </div>
              
              <div className="mb-6 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="text-xs font-bold text-orange-900 mb-1">⚡ 147 Sessions Left Today</div>
                <div className="text-xs text-orange-700">Resets in 4h 18m</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "3 free practice sessions",
                  "Full AI assistance",
                  "Real-time answers",
                  "Undetectable mode"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-900 font-bold hover:bg-gray-50 transition-all">
                Start Free Trial
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">No credit card required</p>
            </div>

            {/* Monthly Pro - Most Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl transform md:scale-105 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-yellow-400 text-yellow-900 text-xs font-black rounded-full shadow-lg uppercase tracking-wide">
                ⭐ 83% Choose This
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Monthly Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">$3</span>
                <span className="text-white/80 text-lg ml-2">/ week</span>
              </div>

              <div className="mb-6 p-3 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                <div className="text-xs font-bold text-white">💎 Less than a coffee • More than a career</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited interviews",
                  "Real-time AI assistance",
                  "Follow-up email generator",
                  "Question bank access",
                  "Priority support"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white font-medium">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-blue-600 font-black hover:shadow-2xl transition-all">
                Get Pro Access
              </button>
              <p className="text-xs text-center text-white/80 mt-3">Cancel anytime • 14-day guarantee</p>
            </div>

            {/* Lifetime */}
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-300 hover:border-orange-400 hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-red-600 text-white text-xs font-black rounded-full shadow-lg uppercase tracking-wide">
                37 LEFT
              </div>

              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-xs font-bold text-red-900">
                  ⏰ Price locks in {timeLeft.hours}h {timeLeft.minutes}m
                </div>
                <div className="text-xs text-red-700">Then $29 forever</div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Pro</h3>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-gray-900">$10</span>
                <span className="text-xl text-gray-400 line-through">$99</span>
              </div>
              <div className="text-sm font-bold text-green-600 mb-6">💰 Pay once. Own forever.</div>

              <ul className="space-y-3 mb-8">
                <li className="text-sm font-bold text-gray-900">Everything in Pro, plus:</li>
                {[
                  "Lifetime access",
                  "Priority GPU processing",
                  "Exclusive updates",
                  "Founders badge",
                  "Price locked forever"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-black hover:shadow-2xl transition-all">
                Secure License
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">🔥 31 claimed in last 24h</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-16 max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Zero-Risk Guarantee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Don't get the offer? Full refund. No questions asked. We're that confident Interview Copilot will transform your interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your next interview is coming.
            <br />
            Don't walk in alone.
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 47,000+ candidates who refuse to freeze, fumble, or fail another interview.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl mb-10">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <div className="text-left">
              <div className="text-sm font-bold text-white">
                Early Access Expires: <span className="tabular-nums">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group px-10 py-5 bg-white text-blue-600 text-lg font-black rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Start Free Trial Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button className="px-10 py-5 bg-white/10 backdrop-blur border border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all">
              Watch Demo First
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Live Stats */}
          <div className="text-center mb-12 pb-12 border-b border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-500 font-semibold">Live Activity</span>
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2 tabular-nums">{activeUsers.toLocaleString()}</div>
            <div className="text-gray-600">candidates preparing right now</div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-900">Interview Copilot</span>
              </div>
              <p className="text-sm text-gray-600">
                Never freeze in an interview again.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Status</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Interview Copilot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}