import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap, Snowflake, ThumbsUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ValuesBanner: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Smart Value':
        return <Zap className="w-7 h-7 text-cyan-500" />;
      case 'Done right the first time':
        return <CheckCircle2 className="w-7 h-7 text-cyan-500" />;
      case 'Trusted & Stands Behind Our Work':
        return <ShieldCheck className="w-7 h-7 text-cyan-500" />;
      default:
        return <Award className="w-7 h-7 text-cyan-500" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 3 Core Brand Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {COMPANY_INFO.values.map((val, idx) => (
          <div
            key={idx}
            id={`value-card-${idx}`}
            className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-cyan-100 transition-all">
                {getIcon(val.title)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                {val.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                {val.description}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-cyan-700">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span>BC Freezer Promise</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {COMPANY_INFO.stats.map((stat, index) => (
            <div key={index} className={`pt-4 md:pt-0 ${index > 0 ? 'md:pl-6' : ''}`}>
              <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
