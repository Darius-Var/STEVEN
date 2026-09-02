import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { BRANDS_DATA } from '../data/siteData';

export const BrandsSection: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  return (
    <section id="brands" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Authorized Parts & Factory Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Brands We Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We work with leading manufacturers to deliver reliable, energy-efficient solutions.
          </p>
        </div>

        {/* Brand Badges / Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {BRANDS_DATA.map((brand, idx) => {
            const isSelected = activeBrand === brand.name;
            return (
              <div
                key={idx}
                id={`brand-card-${brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onMouseEnter={() => setActiveBrand(brand.name)}
                onClick={() => setActiveBrand(isSelected ? null : brand.name)}
                className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer text-left ${
                  isSelected
                    ? 'bg-slate-850 border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  {/* Brand Display Logo with Crisp Clean Background for Perfect Contrast */}
                  <div className="h-20 w-full flex items-center justify-center p-3 rounded-xl bg-white shadow-sm border border-slate-200/40 relative overflow-hidden transition-all duration-200 group-hover:shadow-md">
                    {brand.logoUrl ? (
                      <img
                        src={brand.logoUrl}
                        alt={`${brand.name} logo`}
                        className="max-h-14 max-w-[90%] w-auto object-contain select-none"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-base font-extrabold tracking-wider text-slate-800 font-mono uppercase">
                        {brand.logoText}
                      </span>
                    )}
                    <span className={`absolute top-2.5 right-2.5 h-2 w-2 rounded-full transition-all ${
                      isSelected ? 'bg-cyan-500 scale-125' : 'bg-slate-300 group-hover:bg-cyan-400'
                    }`} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {brand.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="group-hover:text-slate-300 transition-colors">Factory Direct OEM</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Active Brand Spec Showcase Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Genuine OEM Parts & Factory Warranty Protection
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Our technicians carry factory-approved compressors, TXVs, defrost sensors, and coils for all major commercial systems.
              </p>
            </div>
          </div>
          <div className="text-xs text-slate-400 shrink-0">
            <span className="font-semibold text-cyan-400">Need specific parts?</span> Call <span className="text-white font-bold">(604) 555-0199</span>
          </div>
        </div>

      </div>
    </section>
  );
};
