import React from 'react';
import { Phone, ArrowRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface EmergencyBannerProps {
  onOpenQuoteModal: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <aside aria-label="Quick contact toolbar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
          className="flex-1 py-3 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Dispatch</span>
        </a>

        <button
          id="mobile-sticky-quote-btn"
          onClick={onOpenQuoteModal}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all active:scale-95 cursor-pointer"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </aside>
  );
};
