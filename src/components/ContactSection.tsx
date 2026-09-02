import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles,
  Building,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  prefilledLocation?: string;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledLocation = '', 
  prefilledService = '' 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: prefilledLocation || '',
    serviceType: prefilledService || 'Service & Emergency Repairs',
    equipmentType: 'Walk-In Freezer / Cooler',
    urgency: 'Standard (within 24-48 hrs)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate instantaneous dispatch ticket generation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      city: '',
      serviceType: 'Service & Emergency Repairs',
      equipmentType: 'Walk-In Freezer / Cooler',
      urgency: 'Standard (within 24-48 hrs)',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c710_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect with BC Freezer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request a Free Quote or Service Call
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Fill out the form below for rapid response, or call our 24/7 direct dispatch line for immediate emergency assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Emergency Alert */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Dispatch Box */}
            <div className="bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 p-6 sm:p-7 rounded-2xl border border-cyan-500/40 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Immediate Assistance</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Commercial Breakdown Emergency?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                If your freezer temperature is rising or perishable inventory is in immediate jeopardy, skip the web form and call our emergency line directly.
              </p>

              <a
                id="contact-emergency-call-btn"
                href={`tel:${COMPANY_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
                className="mt-5 w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-colors shadow-lg group"
              >
                <Phone className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Call {COMPANY_INFO.emergencyPhone}</span>
              </a>
            </div>

            {/* General Contact Info Cards */}
            <div className="bg-slate-950/80 rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                  <a
                    id="contact-email-link"
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Quotes & general inquiries: avg 2-hr reply</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hours of Operation</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    24/7 Emergency Dispatch
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Regular Service: Mon – Fri 7:00 AM – 5:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Corridor</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Langley, Abbotsford, Maple Ridge, Chilliwack, Hope & Kamloops
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Central parts depots across Fraser Valley</p>
                </div>
              </div>

            </div>

            {/* Trust Assurance Badge */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>All quotes are 100% free and confidential with zero obligation.</span>
            </div>

          </div>

          {/* Right Column: Interactive Quote / Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your request for <strong>{formData.serviceType}</strong> in <strong>{formData.city || 'BC'}</strong> has been assigned directly to our dispatch supervisor.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confirmation Sent To:</span>
                    <span className="font-semibold text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Company:</span>
                    <span className="font-semibold text-white">{formData.companyName || 'Commercial Client'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Response:</span>
                    <span className="font-bold text-cyan-400">{formData.urgency.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    id="submit-another-quote-btn"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-colors"
                  >
                    Call Dispatch Now
                  </a>
                </div>
              </div>
            ) : (
              <form id="bc-freezer-contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">
                    Tell Us About Your Commercial Refrigeration Needs
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete this quick form to receive an itemized quote or book a service technician.
                  </p>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-companyName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Business Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-companyName"
                      type="text"
                      required
                      placeholder="e.g. Fraser Gourmet Foods"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. info@yourbusiness.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. (604) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* City & Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Location / Municipality <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contact-city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
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
                    <label htmlFor="contact-serviceType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Needed <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contact-serviceType"
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Commercial Installation">Commercial Installation (Walk-in, Freezers)</option>
                      <option value="Service & Emergency Repairs">Service & Emergency Repairs</option>
                      <option value="Preventive Maintenance">Preventive Maintenance Plan</option>
                      <option value="Retrofits & Upgrades">Retrofits & CleanBC Rebates</option>
                      <option value="General Consultation">General Sizing / Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Urgency Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'Emergency (within 2-4 hrs)', label: 'Emergency (2-4 hrs)', color: 'border-red-500/50 text-red-300 bg-red-950/20' },
                      { id: 'Standard (within 24-48 hrs)', label: 'Standard (24-48 hrs)', color: 'border-cyan-500/50 text-cyan-300 bg-cyan-950/20' },
                      { id: 'Planning & Quote', label: 'Planning & Quote', color: 'border-slate-700 text-slate-300 bg-slate-900' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFormData({ ...formData, urgency: item.id as any })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                          formData.urgency === item.id
                            ? 'ring-2 ring-cyan-400 font-bold bg-cyan-950 border-cyan-400 text-white'
                            : `${item.color} hover:border-slate-500`
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Equipment Details / Symptoms / Scope
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Provide details such as equipment brand (Copeland, Bohn, KeepRite), temperature setpoint, symptoms (frost buildup, compressor noise), or approximate room dimensions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Quote / Service Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Information sent directly to info@bcfreezer.ca. We respect your confidentiality.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
