import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  UtensilsCrossed, 
  Store, 
  Warehouse, 
  Beef, 
  Beer, 
  Flower2, 
  Phone, 
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Check
} from 'lucide-react';
import { COMPANY_INFO, CLIENT_INDUSTRIES, MEDIA_ASSETS } from '../data/siteData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-cyan-600" />;
      case 'Store':
        return <Store className="w-5 h-5 text-cyan-600" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-cyan-600" />;
      case 'Beef':
        return <Beef className="w-5 h-5 text-cyan-600" />;
      case 'Beer':
        return <Beer className="w-5 h-5 text-cyan-600" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-cyan-600" />;
      default:
        return <Building2 className="w-5 h-5 text-cyan-600" />;
    }
  };

  const whyChooseUs = [
    { title: '100% Red Seal Certified', desc: 'Every service technician is licensed under Technical Safety BC with rigorous commercial refrigeration training.' },
    { title: 'Fully-Stocked Mobile Fleet', desc: 'Over $30,000 in OEM parts on every service truck ensures 88% of repairs are solved in a single visit.' },
    { title: 'Rapid 24/7 Dispatch', desc: 'Direct emergency telephone response with live dispatchers across the Lower Mainland and Interior corridors.' },
    { title: 'Energy Rebate Champions', desc: 'We help you design and submit CleanBC & FortisBC efficiency rebate claims that offset equipment costs.' },
    { title: 'Transparent Upfront Pricing', desc: 'Detailed quotes before work commences—no hidden travel fees, surcharges, or surprise equipment markups.' },
    { title: 'Rock-Solid Warranties', desc: 'We stand behind our work with comprehensive parts and labor warranties on all installations and overhauls.' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid (Left Text, Right Photo Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>About BC Freezer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Commercial Refrigeration Built on Trust, Reliability, and Craftsmanship
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              At <strong>BC Freezer</strong>, commercial refrigeration isn’t just one of many trades we do—it is our sole dedication. From local Fraser Valley farm produce packing houses to high-volume commercial kitchens and cold storage distribution centers, we engineer, install, and service the critical thermal systems that keep British Columbia businesses running.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              We founded BC Freezer on three non-negotiable principles:
            </p>

            {/* 3 Pillars List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Smart Value</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Engineered energy efficiency and fair, transparent pricing that protects your operational margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Done Right the First Time</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Red Seal precision diagnostics and proper mechanical commissioning to prevent recurring failures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Trusted and Stands Behind Our Work</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Direct warranty backing, prompt response, and lasting long-term client relationships.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src={MEDIA_ASSETS.serviceRepair}
                alt="BC Freezer Red Seal technician working on refrigeration compressor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Serving BC Since Day One</p>
                  <p className="text-sm font-semibold text-white">Licensed & Insured Refrigeration Contractor</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">Class A Contractor</span>
                  <p className="text-xs font-bold text-cyan-300">Technical Safety BC</p>
                </div>
              </div>
            </div>

            {/* Overlapping Trust Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-cyan-600 text-white p-4 rounded-2xl shadow-xl flex-col items-center justify-center border-4 border-white max-w-[140px] text-center">
              <Award className="w-8 h-8 mb-1 text-cyan-100" />
              <span className="text-xs font-bold leading-tight">100% Red Seal Certified</span>
            </div>
          </div>

        </div>

        {/* Client Industries Grid */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Specialized Solutions for Every Commercial Facility
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We understand that a restaurant line cooler has different demands than an agricultural berry blast freezer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                  {getIndustryIcon(ind.icon)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {ind.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* "Why Choose Us" Multi-Point Grid */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              The BC Freezer Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Why BC Businesses Rely On Our Refrigeration Team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-300 text-center sm:text-left">
              Ready to experience refrigeration service done right the first time?
            </p>
            <div className="flex items-center gap-3">
              <button
                id="about-request-quote-btn"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow cursor-pointer"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
