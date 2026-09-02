import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, ArrowRight, Shield, Check, Compass } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/siteData';
import { ServiceAreaLocation } from '../types';

interface ServiceAreaSectionProps {
  onOpenQuoteModal: (serviceId?: string, locationName?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedLocation, setSelectedLocation] = useState<ServiceAreaLocation>(SERVICE_AREAS[1]); // Default Langley

  const regions = [
    'All Regions',
    'Lower Mainland & Fraser Valley',
    'Fraser Canyon & Coquihalla',
    'Okanagan & Interior'
  ];

  const [activeRegionFilter, setActiveRegionFilter] = useState('All Regions');

  const filteredAreas = activeRegionFilter === 'All Regions' 
    ? SERVICE_AREAS 
    : SERVICE_AREAS.filter(area => area.region === activeRegionFilter);

  return (
    <section id="service-area" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-600" />
            <span>British Columbia Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Commercial Service Area
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            BC Freezer proudly serves food service, agricultural, and industrial businesses throughout the Lower Mainland, Fraser Valley, and the Interior Corridor.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegionFilter(region)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeRegionFilter === region
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Interactive Map & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stylized BC Regional Map Graphic */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 text-white relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  BC Corridor Dispatch Map
                </span>
              </div>
              <span className="text-xs text-cyan-400 font-medium bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800">
                Click any city to view dispatch info
              </span>
            </div>

            {/* Stylized Vector Map of BC Southern Corridor */}
            <div className="relative w-full aspect-[4/3] bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              
              {/* Background Topography & Water Aesthetic */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 500 380" fill="none">
                {/* Stylized Pacific Coast / Strait of Georgia */}
                <path d="M 0,380 L 0,220 Q 50,240 100,280 Q 140,320 180,380 Z" fill="#0369a1" opacity="0.4" />
                <path d="M 0,220 Q 70,230 110,210 Q 150,230 130,280 Q 80,260 0,220 Z" fill="#0284c7" opacity="0.3" />
                
                {/* Mountain Ridge Outlines (Coast Mountains & Cascades) */}
                <path d="M 120,60 L 160,110 L 210,80 L 260,140 L 310,90 L 370,150 L 440,80" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 180,160 L 230,200 L 290,170 L 360,220 L 420,180" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Highway 1 & Coquihalla Highway Route Lines */}
                {/* Hwy 1 / Hwy 7 Fraser Valley Corridor */}
                <path d="M 130,295 Q 165,305 190,320 T 240,325 T 290,305" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                
                {/* Coquihalla Hwy 5 (Hope to Kamloops via Merritt) */}
                <path d="M 290,305 Q 320,240 330,200 T 345,120" stroke="#06b6d4" strokeWidth="3" strokeDasharray="6 4" opacity="0.8" />
                
                {/* Hwy 3 Crowsnest (Hope to Princeton) */}
                <path d="M 290,305 Q 330,300 340,280" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5 3" opacity="0.7" />

                {/* River Way (Fraser River Blue Glow) */}
                <path d="M 345,115 Q 310,180 290,305 Q 240,320 180,310 Q 130,290 80,300" stroke="#0369a1" strokeWidth="3" opacity="0.5" />
              </svg>

              {/* Map Highway Legend Overlay */}
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md p-2 rounded-lg border border-slate-800 text-[10px] space-y-1 text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-cyan-400 rounded-full" />
                  <span>Hwy 1 / Fraser Valley Route</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-cyan-200 border-dashed border-cyan-400 rounded-full" />
                  <span>Hwy 5 Coquihalla Interior Route</span>
                </div>
              </div>

              {/* City Hub Pins Positioned Over Map */}
              {SERVICE_AREAS.map((city) => {
                const isSelected = selectedLocation.name === city.name;
                return (
                  <button
                    key={city.name}
                    id={`map-pin-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedLocation(city)}
                    style={{ left: `${city.coords.x}%`, top: `${city.coords.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          isSelected
                            ? 'bg-cyan-400 text-slate-950 ring-4 ring-cyan-500/50 scale-110'
                            : 'bg-slate-900 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span
                        className={`mt-1 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow whitespace-nowrap transition-all ${
                          isSelected
                            ? 'bg-cyan-400 text-slate-950 font-extrabold ring-1 ring-white'
                            : 'bg-slate-950/90 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {city.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Map Footer Info */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>All routes dispatched from central regional depots</span>
              </span>
              <span>Need remote or unlisted service? Call (604) 555-0199</span>
            </div>

          </div>

          {/* Right Column: Selected City Dispatch Details & List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Selected Location Spotlight Card */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-cyan-200 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                    {selectedLocation.region}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                    {selectedLocation.name}, BC
                  </h3>
                </div>
                <div className="text-right bg-cyan-100 px-3 py-1.5 rounded-xl border border-cyan-200">
                  <span className="text-[10px] uppercase font-bold text-cyan-800 block">Est. Response</span>
                  <span className="text-sm font-bold text-cyan-900">{selectedLocation.responseTime}</span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Regional Dispatch Highlight
                  </p>
                  <p className="text-sm text-slate-700">
                    {selectedLocation.highlight}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Client Verticals Served in {selectedLocation.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.typicalClients.map((client, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-800 border border-slate-200 shadow-sm"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    id={`request-quote-${selectedLocation.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => onOpenQuoteModal(undefined, selectedLocation.name)}
                    className="flex-1 py-3 px-4 rounded-xl text-center font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors text-sm shadow cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Service in {selectedLocation.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick List of All 9 Municipalities */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Communities in Service Radius:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {filteredAreas.map((loc) => {
                  const isCur = selectedLocation.name === loc.name;
                  return (
                    <button
                      key={loc.name}
                      id={`list-btn-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border flex items-center justify-between ${
                        isCur
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-cyan-50 hover:border-cyan-300'
                      }`}
                    >
                      <span className="truncate">{loc.name}</span>
                      {isCur && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
