import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Snowflake, ArrowUp, ArrowRight, Award } from 'lucide-react';
import { COMPANY_INFO, MEDIA_ASSETS, SERVICE_AREAS } from '../data/siteData';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Company Info', href: '#about' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Resources & FAQs', href: '#resources' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative">
      
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8">
        <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 rounded-2xl p-6 sm:p-10 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-950/40 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Commercial Refrigeration Red Seal Team</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Protect Your Cold Chain With BC Freezer
            </h3>
            <p className="text-sm sm:text-base text-cyan-100 max-w-xl">
              24/7 priority emergency repair, custom walk-in installations, and preventive maintenance across BC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              id="footer-banner-call-btn"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              id="footer-banner-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-cyan-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 text-cyan-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={MEDIA_ASSETS.logo}
                alt="BC Freezer Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tight text-lg leading-tight flex items-center gap-1.5">
                  BC FREEZER
                  <Snowflake className="w-4 h-4 text-cyan-400" />
                </span>
                <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                  Commercial Refrigeration
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              British Columbia's trusted commercial refrigeration partner. Specializing in walk-in cooler installations, emergency compressor repairs, preventive maintenance agreements, and CleanBC energy retrofits.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Technical Safety BC Licensed • WorkSafeBC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7/365 Emergency Dispatch On-Call</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Communities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Communities Served
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
              {SERVICE_AREAS.map((area) => (
                <a
                  key={area.name}
                  href="#service-area"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                  <span>{area.name}</span>
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Plus Fraser Canyon & Thompson-Nicola Corridor
            </p>
          </div>

          {/* Col 4: Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                id="footer-phone-link"
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-bottom-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Online Quote Request →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} BC Freezer ({COMPANY_INFO.domain}). All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Smart Commercial Refrigeration Solutions – Done Right the First Time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
