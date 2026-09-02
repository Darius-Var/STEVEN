import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialLocation?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialLocation,
}) => {
  const getInitialService = (id?: string) => {
    if (!id) return 'Service & Emergency Repairs';
    const found = SERVICES_DATA.find((s) => s.id === id);
    return found ? found.title : 'Service & Emergency Repairs';
  };

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: initialLocation || '',
    serviceType: getInitialService(initialServiceId),
    equipmentType: 'Walk-In Cooler / Freezer',
    urgency: 'Standard (within 24-48 hrs)',
    message: '',
  });

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({
        ...prev,
        serviceType: getInitialService(initialServiceId),
      }));
    }
    if (initialLocation) {
      setFormData((prev) => ({
        ...prev,
        city: initialLocation,
      }));
    }
  }, [initialServiceId, initialLocation]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleCloseAndReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-950 rounded-2xl max-w-xl w-full border border-slate-800 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              BC Freezer • Rapid Quote System
            </span>
            <h3 className="text-xl font-extrabold text-white mt-0.5">
              Request a Commercial Quote
            </h3>
          </div>
          <button
            id="close-quote-modal-btn"
            onClick={handleCloseAndReset}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Quote Request Dispatched!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Our commercial refrigeration estimator has received your details and will contact you promptly at <strong>{formData.email}</strong>.
              </p>
              <div className="pt-3">
                <button
                  id="modal-done-btn"
                  onClick={handleCloseAndReset}
                  className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-sm font-bold text-white transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Fraser Valley Foods"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="info@yourcompany.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(604) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Municipality *
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select Municipality</option>
                    <option value="Langley Township">Langley Township</option>
                    <option value="Abbotsford">Abbotsford</option>
                    <option value="Maple Ridge">Maple Ridge</option>
                    <option value="Mission">Mission</option>
                    <option value="Chilliwack">Chilliwack</option>
                    <option value="Hope">Hope</option>
                    <option value="Princeton">Princeton</option>
                    <option value="Merritt">Merritt</option>
                    <option value="Kamloops">Kamloops</option>
                    <option value="Other BC Location">Other BC Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service *
                  </label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Commercial Installation">Commercial Installation</option>
                    <option value="Service & Emergency Repairs">Service & Emergency Repairs</option>
                    <option value="Preventive Maintenance">Preventive Maintenance</option>
                    <option value="Retrofits & Upgrades">Retrofits & Upgrades</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Brief Description of Scope or Breakdown
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Walk-in freezer temperature fluctuating, or requesting quote for new 12x14 box..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Submit Free Quote Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span>Emergency direct line:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
