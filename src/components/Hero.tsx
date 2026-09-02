import React, { useState, useRef } from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { COMPANY_INFO, MEDIA_ASSETS } from '../data/siteData';

interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white text-slate-900">
      {/* Background Video with Clean Light Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={MEDIA_ASSETS.heroFallbackImage}
          className="w-full h-full object-cover object-center opacity-15 scale-105 transform filter brightness-105"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
          <img
            src={MEDIA_ASSETS.heroFallbackImage}
            alt="Commercial refrigeration installation in BC"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Multi-layered radial and linear gradients for maximum legibility and clean white aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c712_1px,transparent_1px),linear-gradient(to_bottom,#0284c712_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge: Red Seal Certified & Fraser Valley */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-600 animate-ping" />
              <span>Commercial Refrigeration Across British Columbia</span>
              <span className="hidden sm:inline text-cyan-300">|</span>
              <span className="hidden sm:inline text-slate-600 font-medium">Red Seal Licensed</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
              Smart Commercial Refrigeration Solutions –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
                Done Right the First Time
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Trusted installation, service, and preventive maintenance for walk-in coolers, freezers, and industrial cooling systems for businesses across BC.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-quote-cta"
                onClick={() => onOpenQuoteModal()}
                className="flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-600/25 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-secondary-call-cta"
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-3 px-7 py-4 text-base sm:text-lg font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl transition-all shadow-sm group"
              >
                <Phone className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Red Seal Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Service Dispatch Box */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60">
              
              {/* Box Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Direct Dispatch</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Need Refrigeration Support?</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Avg. Response Time</span>
                  <p className="text-sm font-bold text-cyan-700">30 - 45 Mins</p>
                </div>
              </div>

              {/* Service Selection Quick Launcher */}
              <p className="text-xs text-slate-500 mb-3 font-medium">Select your refrigeration requirement:</p>
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {[
                  { id: 'installation', label: 'New Walk-in / Install', icon: '❄️' },
                  { id: 'repairs', label: 'Emergency Repair', icon: '⚡' },
                  { id: 'maintenance', label: 'Preventive Plan', icon: '🛡️' },
                  { id: 'retrofits', label: 'Energy Retrofit', icon: '🌱' },
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`hero-quick-${item.id}`}
                    onClick={() => onOpenQuoteModal(item.id)}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-cyan-50/80 border border-slate-200 hover:border-cyan-300 text-left transition-all group cursor-pointer shadow-xs"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-medium text-slate-700 group-hover:text-cyan-900 leading-tight">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Emergency Call Box */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4 mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Critical Inventory At Risk?</p>
                  <p className="text-sm text-slate-700 font-medium mt-0.5">24/7 Immediate Phone Dispatch</p>
                </div>
                <a
                  id="hero-quick-emergency-call"
                  href={`tel:${COMPANY_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
                  className="px-3.5 py-2 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Serving BC Hubs list snippet */}
              <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                <span>📍 Serving Langley, Abbotsford, Maple Ridge, Chilliwack & Kamloops</span>
              </div>

              {/* Video Controls Toggle */}
              <div className="absolute -bottom-9 right-2 flex items-center gap-2">
                <button
                  onClick={toggleVideoPlayback}
                  className="p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-500 hover:text-slate-800 text-xs border border-slate-200 shadow-sm transition-colors flex items-center gap-1"
                  title={isVideoPlaying ? "Pause background video" : "Play background video"}
                >
                  {isVideoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span className="text-[10px] hidden sm:inline">{isVideoPlaying ? 'Pause Video' : 'Play Video'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
