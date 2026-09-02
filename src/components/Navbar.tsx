import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, Shield, ArrowRight, Snowflake } from 'lucide-react';
import { COMPANY_INFO, MEDIA_ASSETS } from '../data/siteData';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Company Info', href: '#about' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-100 text-slate-700 text-xs py-2 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-cyan-700 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
              </span>
              <span>24/7 Emergency Dispatch</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>Fraser Valley & BC Interior</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-600">
              <Shield className="w-3.5 h-3.5 text-cyan-600" />
              <span>Red Seal Certified Mechanics</span>
            </div>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              id="top-bar-email"
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-600 hover:text-cyan-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
            </a>
            <a
              id="top-bar-phone"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-white bg-cyan-600 hover:bg-cyan-500 px-3 py-1 rounded-md transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="h-10 sm:h-12 flex items-center">
              <img
                src={MEDIA_ASSETS.logo}
                alt="BC Freezer - Commercial Refrigeration Solutions"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-slate-950 font-bold tracking-tight text-lg leading-tight flex items-center gap-1.5">
                BC FREEZER
                <Snowflake className="w-4 h-4 text-cyan-600 inline" />
              </span>
              <span className="text-cyan-700 text-xs tracking-wider uppercase font-semibold">
                Commercial Refrigeration
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-700 bg-cyan-50 font-semibold border border-cyan-200/80 shadow-sm'
                      : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-cta"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-cyan-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call Dispatch</span>
            </a>

            <button
              id="header-request-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-mobile-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-cyan-600 rounded-md sm:hidden"
            >
              Quote
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="mobile-drawer-phone-btn"
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call Dispatch: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
