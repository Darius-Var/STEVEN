import React, { useState } from 'react';
import { 
  Boxes, 
  Wrench, 
  ShieldAlert, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  X,
  Phone,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Boxes className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Complete Commercial Refrigeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Commercial Refrigeration Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From emergency repairs protecting perishable inventory to custom walk-in installations, BC Freezer delivers engineered reliability for food service, logistics, and retail businesses.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Service Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {service.badge || 'Commercial Grade'}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-lg group-hover:bg-cyan-500 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Tags */}
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Common Applications:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="text-xs sm:text-sm font-bold text-slate-700 hover:text-cyan-700 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <span>Full Specifications</span>
                    <ChevronRight className="w-4 h-4 text-cyan-600" />
                  </button>

                  <button
                    id={`service-request-cta-${service.id}`}
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-cyan-600 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Not sure which refrigeration system or repair protocol you need?
            </h4>
            <p className="text-sm text-slate-600">
              Our Red Seal technicians can provide an on-site thermal diagnostic or sizing assessment.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a
              id="services-speak-tech-call"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Talk to a Technician</span>
            </a>
            <button
              id="services-get-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm flex items-center gap-2 shadow-md shadow-cyan-900/20 transition-all cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header with Image */}
            <div className="relative h-48 bg-slate-900 shrink-0">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-cyan-600 text-white">
                  {selectedService.badge || 'Commercial Service'}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">
                  Service Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-3">
                  Scope of Work & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">
                  Recommended For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.idealFor.map((app, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-900 border border-cyan-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-cyan-300">BC Freezer Workmanship Guarantee</p>
                    <p className="text-xs text-slate-300">Red Seal certified mechanics, direct manufacturer warranties, and emergency on-call support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                id="modal-request-this-service-btn"
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenQuoteModal(sId);
                }}
                className="px-6 py-2.5 text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow"
              >
                <span>Request {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
