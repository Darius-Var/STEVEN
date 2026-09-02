import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  FileText, 
  X,
  Phone
} from 'lucide-react';
import { RESOURCE_ARTICLES, FAQ_ITEMS, COMPANY_INFO } from '../data/siteData';
import { ResourceArticle } from '../types';

interface ResourcesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>('All');

  const faqCategories = ['All', 'General & Service', 'Installation & Equipment', 'Preventive Maintenance', 'Energy & Rebates'];

  const filteredFaqs = faqCategoryFilter === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(faq => faq.category.includes(faqCategoryFilter));

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'Maintenance':
        return <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">Maintenance Tips</span>;
      case 'Troubleshooting':
        return <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Diagnostic Guide</span>;
      case 'Energy & Rebates':
        return <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">CleanBC Rebates</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">Guide</span>;
    }
  };

  return (
    <section id="resources" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
            <span>Commercial Refrigeration Knowledge Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Helpful Resources & Expert Guides
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical maintenance advice, early failure warning signs, and government energy rebate information to keep your cooling equipment running at peak performance.
          </p>
        </div>

        {/* 3 Featured Resource Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {RESOURCE_ARTICLES.map((article) => (
            <div
              key={article.id}
              id={`article-card-${article.id}`}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {getCategoryBadge(article.category)}
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {article.summary}
                </p>

                {/* Key Takeaways preview */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Highlights:
                  </span>
                  {article.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  id={`read-article-${article.id}`}
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-cyan-600 hover:text-white border border-slate-200 hover:border-cyan-600 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Refrigeration FAQs Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Refrigeration Questions
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Common questions about emergency response times, equipment sizing, warranties, and maintenance in BC.
            </p>
          </div>

          {/* FAQ Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  faqCategoryFilter === cat
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-950/80 rounded-xl border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-toggle-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help CTA */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Have a specific technical question about your system?
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call (604) 555-0199</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Ask a Technician
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryBadge(selectedArticle.category)}
                  <span className="text-xs text-slate-400">• {selectedArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                id="close-article-modal"
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-700">
              <p className="text-sm font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                {selectedArticle.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  Detailed Operational Guidance
                </h4>
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                  Key Recommendations
                </h5>
                <ul className="space-y-1.5">
                  {selectedArticle.keyTakeaways.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-xs text-cyan-950">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500">Need professional refrigeration support?</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenQuoteModal();
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors cursor-pointer"
                >
                  Schedule Service
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
