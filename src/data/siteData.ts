import { ServiceItem, BrandPartner, ServiceAreaLocation, Testimonial, ResourceArticle, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'BC Freezer',
  tagline: 'Smart Commercial Refrigeration Solutions – Done Right the First Time',
  domain: 'bcfreezer.ca',
  email: 'info@bcfreezer.ca',
  phone: '(604) 555-0199',
  emergencyPhone: '(604) 555-0199',
  hours: '24/7 Emergency Dispatch • Regular Hours: Mon - Fri 7:00 AM - 5:30 PM',
  address: 'Headquarters: 20488 Langley Bypass, Langley, BC V3A 5N8',
  serviceCoverage: 'Fraser Valley, Lower Mainland, and BC Interior Corridor',
  values: [
    {
      title: 'Smart Value',
      description: 'Transparent pricing, energy-smart solutions, and honest diagnostic assessments with no hidden equipment markups.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Done Right the First Time',
      description: 'Red Seal certified commercial refrigeration technicians with fully equipped service trucks for one-trip solutions.',
      icon: 'CheckCircle2'
    },
    {
      title: 'Trusted & Stands Behind Our Work',
      description: 'Comprehensive warranty on all parts and labor, guaranteed satisfaction, and proactive post-install support.',
      icon: 'Award'
    }
  ],
  stats: [
    { label: 'Uptime Reliability', value: '99.9%' },
    { label: 'Communities Served', value: '9+ Hubs' },
    { label: 'Emergency Response', value: '< 2 Hours' },
    { label: 'Certified Technicians', value: '100% Red Seal' }
  ]
};

export const MEDIA_ASSETS = {
  logo: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975dcc28f06327142b7442.svg',
  heroVideo: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975df228f06327142b7676.mp4',
  heroFallbackImage: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975fd8fac7854efe16c939.png',
  serviceInstallation: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975fd8fac7854efe16c939.png',
  serviceRepair: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975e592ae01952f749983d.png',
  serviceMaintenance: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975df29019a6088a73e3b8.png',
  serviceRetrofit: 'https://assets.cdn.filesafe.space/r86zGJDpZ05iebvBWRHn/media/6a975fd8fac7854efe16c939.png',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'installation',
    title: 'Commercial Installation',
    shortDesc: 'Custom design and precision installation of walk-in coolers, blast freezers, and multi-compressor systems.',
    fullDesc: 'From initial heat-load calculations and sizing to certified mechanical commissioning, BC Freezer delivers engineered refrigeration installations tailored to your facility footprint and budget.',
    iconName: 'Boxes',
    badge: 'Custom Engineered',
    imageUrl: MEDIA_ASSETS.serviceInstallation,
    features: [
      'Walk-In Coolers & Blast Freezers',
      'Remote Condensing Units & Evaporators',
      'Parallel Rack Systems & Multi-Zone Loops',
      'CleanBC Energy Incentive Compliance',
      'Complete Mechanical & Electrical Commissioning'
    ],
    idealFor: ['Grocery Stores', 'Cold Storage Logistics', 'Restaurants', 'Food Processors']
  },
  {
    id: 'repairs',
    title: 'Service & Emergency Repairs',
    shortDesc: 'Rapid 24/7 diagnostic troubleshooting and repair to eliminate downtime and protect valuable inventory.',
    fullDesc: 'When refrigeration fails, every minute counts. Our fleet of fully-stocked mobile service vehicles brings Red Seal expertise directly to your facility for rapid, permanent repairs.',
    iconName: 'Wrench',
    badge: '24/7 Rapid Response',
    imageUrl: MEDIA_ASSETS.serviceRepair,
    features: [
      '24/7 Priority Emergency Dispatch',
      'Semi-Hermetic & Scroll Compressor Overhauls',
      'Electronic Leak Detection & Refrigerant Recovery',
      'Defrost Timer, Contactor & Microprocessor Fixes',
      'Factory Parts Sourcing for Major Brands'
    ],
    idealFor: ['Bistros & Dining', 'Butcher Shops', 'Breweries', 'Floral Distribution']
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    shortDesc: 'Custom scheduled maintenance programs designed to extend equipment lifespan and slash utility bills.',
    fullDesc: 'Avoid catastrophic summer breakdowns with scheduled coil sanitization, refrigerant charge calibration, electrical tightness inspections, and digital temperature data logging.',
    iconName: 'ShieldAlert',
    badge: 'Zero-Downtime Focus',
    imageUrl: MEDIA_ASSETS.serviceMaintenance,
    features: [
      'Comprehensive Multi-Point Safety Inspections',
      'Condenser & Evaporator Coil Chemical Cleaning',
      'Door Gasket, Latch & Thermal Barrier Checks',
      'Superheat & Subcooling System Optimization',
      'Detailed Compliance Reports for Health Authorities'
    ],
    idealFor: ['Franchise Chains', 'Agricultural Pack Houses', 'Supermarkets', 'Bakeries']
  },
  {
    id: 'retrofits',
    title: 'Retrofits & Upgrades',
    shortDesc: 'High-efficiency modernization, smart temperature monitoring, and low-GWP refrigerant conversions.',
    fullDesc: 'Modernize aging cooling infrastructure with electronically commutated (EC) fan motors, variable speed digital controllers, and automated defrost management that pay for themselves.',
    iconName: 'Cpu',
    badge: 'Save up to 35% Energy',
    imageUrl: MEDIA_ASSETS.serviceRetrofit,
    features: [
      'High-Efficiency EC Motor Conversions',
      'Smart Cloud-Connected Temperature Logging & Alarms',
      'Digital Scroll Compressor Upgrades',
      'Low-GWP & Eco-Refrigerant Retrofits',
      'Assistance with CleanBC & FortisBC Rebate Claims'
    ],
    idealFor: ['Warehouses', 'Wineries', 'Distribution Hubs', 'Older Facilities']
  }
];

export const BRANDS_DATA: BrandPartner[] = [
  {
    name: 'Bohn',
    category: 'Commercial Unit Coolers & Condensers',
    description: 'Industry-standard commercial walk-in evaporator coils and air-cooled condensing units.',
    logoText: 'BOHN',
    logoUrl: '/logos/bohn.png'
  },
  {
    name: 'KeepRite',
    category: 'Refrigeration Systems & Coils',
    description: 'Rugged, high-capacity commercial condensing units and engineered unit coolers.',
    logoText: 'KeepRite',
    logoUrl: '/logos/keeprite.png'
  },
  {
    name: 'Heatcraft',
    category: 'Worldwide Refrigeration Solutions',
    description: 'Advanced refrigeration systems with intelligent defrost control and high energy savings.',
    logoText: 'Heatcraft',
    logoUrl: '/logos/heatcraft.png'
  },
  {
    name: 'Danfoss',
    category: 'Valves, Controls & Compressors',
    description: 'Precision electronic expansion valves, pressure switches, and digital system controllers.',
    logoText: 'Danfoss',
    logoUrl: '/logos/danfoss.png'
  },
  {
    name: 'Copeland',
    category: 'Scroll & Semi-Hermetic Compressors',
    description: 'The global benchmark for reliable, high-efficiency commercial cooling compressors.',
    logoText: 'Copeland',
    logoUrl: '/logos/copeland.png'
  },
  {
    name: 'Goodman / Amana',
    category: 'HVAC & Packaged Thermal Systems',
    description: 'Durable packaged and split climate control units for commercial back-of-house utility.',
    logoText: 'Goodman / Amana',
    logoUrl: '/logos/goodman-amana.png'
  },
  {
    name: 'Daikin',
    category: 'Advanced Inverter Climate Systems',
    description: 'Cutting-edge variable refrigerant flow and heavy-duty cold climate technology.',
    logoText: 'DAIKIN',
    logoUrl: '/logos/daikin.png'
  },
  {
    name: 'Gree / Tosot',
    category: 'Commercial Cooling & Ductless Systems',
    description: 'High-efficiency commercial split refrigeration and targeted temperature zones.',
    logoText: 'GREE',
    logoUrl: '/logos/gree.png'
  }
];

export const SERVICE_AREAS: ServiceAreaLocation[] = [
  {
    name: 'Maple Ridge',
    region: 'Lower Mainland & Fraser Valley',
    responseTime: '30-45 mins',
    typicalClients: ['Restaurants', 'Berry & Produce Farms', 'Grocery Markets'],
    highlight: 'Dedicated technicians stationed along Lougheed Hwy corridor.',
    coords: { x: 26, y: 78 }
  },
  {
    name: 'Langley Township',
    region: 'Lower Mainland & Fraser Valley',
    responseTime: '20-35 mins',
    typicalClients: ['Commercial Warehouses', 'Bakeries', 'Food Processing Hubs'],
    highlight: 'Central dispatch operations and comprehensive parts depot.',
    coords: { x: 29, y: 84 }
  },
  {
    name: 'Mission',
    region: 'Lower Mainland & Fraser Valley',
    responseTime: '35-50 mins',
    typicalClients: ['Pubs & Breweries', 'Agricultural Cold Storage', 'Convenience'],
    highlight: 'Fast transit access via Highway 7 and Highway 11.',
    coords: { x: 34, y: 76 }
  },
  {
    name: 'Abbotsford',
    region: 'Lower Mainland & Fraser Valley',
    responseTime: '25-40 mins',
    typicalClients: ['Poultry & Dairy Processors', 'Supermarkets', 'Floriculture'],
    highlight: 'Hub for industrial cold chain and agricultural refrigeration.',
    coords: { x: 38, y: 86 }
  },
  {
    name: 'Chilliwack',
    region: 'Lower Mainland & Fraser Valley',
    responseTime: '30-45 mins',
    typicalClients: ['Food Distribution', 'Hospitality', 'Dairy Producers'],
    highlight: 'Equipped for large-capacity agricultural cooling plants.',
    coords: { x: 48, y: 84 }
  },
  {
    name: 'Hope',
    region: 'Fraser Canyon & Coquihalla',
    responseTime: '45-60 mins',
    typicalClients: ['Highway Travel Centers', 'Restaurants', 'Local Grocers'],
    highlight: 'Strategic gateway for mountain pass freight and commercial services.',
    coords: { x: 58, y: 80 }
  },
  {
    name: 'Princeton',
    region: 'Fraser Canyon & Coquihalla',
    responseTime: 'Scheduled & Priority Dispatch',
    typicalClients: ['Hospitality', 'Butcher Shops', 'Institutional Facilities'],
    highlight: 'Routine maintenance runs and emergency mountain response.',
    coords: { x: 67, y: 74 }
  },
  {
    name: 'Merritt',
    region: 'Fraser Canyon & Coquihalla',
    responseTime: 'Scheduled & Rapid On-Call',
    typicalClients: ['Truck Stops', 'Logistics Depots', 'Food Service Venues'],
    highlight: 'Coquihalla junction coverage for commercial transport cold storage.',
    coords: { x: 65, y: 52 }
  },
  {
    name: 'Kamloops',
    region: 'Okanagan & Interior',
    responseTime: 'Scheduled & Emergency Service',
    typicalClients: ['Industrial Warehouses', 'Grocery Supercentres', 'Breweries'],
    highlight: 'Expanded Interior fleet servicing Thompson-Nicola region.',
    coords: { x: 68, y: 32 }
  }
];

export const CLIENT_INDUSTRIES = [
  {
    title: 'Restaurants & Hospitality',
    desc: 'Line reach-ins, prep tables, walk-in coolers, and bar draft systems kept in precise temperature balance.',
    icon: 'UtensilsCrossed'
  },
  {
    title: 'Supermarkets & Grocery',
    desc: 'Display cases, multi-deck chillers, frozen food merchandisers, and backroom storage freezers.',
    icon: 'Store'
  },
  {
    title: 'Warehousing & Cold Storage',
    desc: 'High-cube cold logistics, blast freezers, dock temperature seals, and parallel rack machinery.',
    icon: 'Warehouse'
  },
  {
    title: 'Food & Beverage Processors',
    desc: 'Custom chilling tunnels, dairy holding tanks, meat aging rooms, and sanitary food-safe cooling.',
    icon: 'Beef'
  },
  {
    title: 'Craft Breweries & Wineries',
    desc: 'Glycol chiller units, fermentation jacket cooling, and controlled barrel room climate systems.',
    icon: 'Beer'
  },
  {
    title: 'Floral & Pharmaceutical',
    desc: 'High-humidity delicate flower chillers and ultra-reliable pharmaceutical temperature preservation.',
    icon: 'Flower2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Our main walk-in freezer compressor failed on a Friday afternoon before a holiday long weekend with $45,000 in meat inventory at risk. BC Freezer was on-site in Langley within 35 minutes, had the exact Copeland replacement on their truck, and got our temp back to -18°C before any product was compromised.',
    author: 'Marcus Vance',
    role: 'Executive Operations Director',
    company: 'Fraser Valley Gourmet Foods',
    location: 'Langley, BC',
    rating: 5,
    serviceType: 'Emergency Compressor Replacement'
  },
  {
    id: '2',
    quote: 'BC Freezer designed and installed a brand new 2,400 sq ft dual-temp walk-in cooler/freezer combo for our Abbotsford berry processing plant. Their quote was fair, the craftsmanship was spotless, and they handled the CleanBC efficiency paperwork for our rebate smoothly. Done right the first time is not just a slogan for them.',
    author: 'Elena Rostova',
    role: 'Facility Manager',
    company: 'Pacific Rim Berry Growers',
    location: 'Abbotsford, BC',
    rating: 5,
    serviceType: 'Turnkey Commercial Installation'
  },
  {
    id: '3',
    quote: 'We operate 4 restaurant locations across Maple Ridge and Mission. We signed up for their semi-annual Preventive Maintenance contract 2 years ago, and we have had zero emergency breakdowns during peak summer rush. Their technicians are polite, tidy, and provide clear inspection logs.',
    author: 'David Chen',
    role: 'Managing Partner',
    company: 'The Timber Bistro Group',
    location: 'Maple Ridge & Mission, BC',
    rating: 5,
    serviceType: 'Preventive Maintenance Agreement'
  },
  {
    id: '4',
    quote: 'Finding reliable commercial refrigeration in Kamloops and the Interior used to be a nightmare until we partnered with BC Freezer. They recently completed an EC motor and smart controller retrofit on our warehouse coils that reduced our power consumption by nearly 28%.',
    author: 'Greg Sutherland',
    role: 'Logistics Supervisor',
    company: 'Interior Freight & Cold Logistics',
    location: 'Kamloops, BC',
    rating: 5,
    serviceType: 'Energy Efficiency Retrofit'
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'maintenance-checklist',
    title: 'Commercial Freezer & Cooler Preventive Maintenance Checklist',
    category: 'Maintenance',
    readTime: '4 min read',
    summary: 'A step-by-step operational guide for restaurant managers and facility operators to prevent unexpected refrigeration breakdowns.',
    content: [
      'Clean Condenser Coils Monthly: Dust and grease accumulation forces compressors to run hotter and 40% longer, accelerating mechanical wear.',
      'Inspect Door Gaskets for Tight Seals: A damaged seal allows warm, humid ambient air to enter, causing frost build-up on evaporator coils and skyrocketing electricity bills.',
      'Check Drain Lines and Pans: Clear debris from condensate drain pans to prevent freezing, ice overflows, and slippery walk-in floors.',
      'Calibrate Thermometers: Verify digital displays against an independent probe to guarantee compliance with Canadian Food Inspection Agency (CFIA) standards.'
    ],
    keyTakeaways: [
      'Monthly coil vacuuming reduces compressor failure risk by 60%',
      'Damaged gaskets can spike commercial hydro bills by $150+/month',
      'Scheduled maintenance keeps manufacturer warranties valid'
    ]
  },
  {
    id: 'warning-signs',
    title: '7 Warning Signs You Need Urgent Commercial Refrigeration Service',
    category: 'Troubleshooting',
    readTime: '5 min read',
    summary: 'Recognize subtle failure symptoms before catastrophic compressor burnout ruins thousands of dollars in perishable stock.',
    content: [
      '1. Sudden Frost or Ice Accumulation on Evaporator Fans: Indicates defrost termination failure, low refrigerant, or restricted airflow.',
      '2. Strange Clicking, Rattling or High-Pitched Hissing: Signs of failing bearings, loose fan blades, or thermal expansion valve malfunction.',
      '3. Temperature Fluctuations Greater than 3°C: Warning sign of refrigerant leak, weak compressor valves, or failing thermostat control.',
      '4. Constant Cycling Without Reaching Setpoint: The unit runs non-stop without shutting off, leading to rapid electrical overheat.',
      '5. Water Pooling Beneath the Unit: Blocked drain lines or improper coil defrost balance.',
      '6. Unusual Energy Bill Spikes: Early warning that motors are straining against dirty heat exchangers.',
      '7. Chemical or Foul Smells: Potential refrigerant leak or bacterial buildup in the condensate drain system.'
    ],
    keyTakeaways: [
      'Call for service immediately if temperature rises above safe thresholds',
      'Never attempt to chip ice off evaporator coils with sharp tools',
      'Catching leaks early prevents costly compressor replacement'
    ]
  },
  {
    id: 'energy-rebates',
    title: 'BC Commercial Refrigeration Energy Efficiency & Rebates Guide',
    category: 'Energy & Rebates',
    readTime: '6 min read',
    summary: 'How BC businesses can access provincial rebates, lower operating overhead, and upgrade to high-efficiency refrigeration hardware.',
    content: [
      'CleanBC and FortisBC offer substantial commercial energy efficiency incentive programs for businesses upgrading aging cooling infrastructure.',
      'Electronically Commutated (EC) Evaporator Fan Motors: Replace standard shaded-pole motors with brushless EC motors to save up to 65% on fan energy consumption.',
      'Smart Defrost Controllers: Replace mechanical timeclocks with demand-based defrost sensors that only trigger defrost cycles when frost is actually detected.',
      'Anti-Sweat Heater Controls: Modulate door heater power based on real-time ambient dew points rather than running 24/7 continuously.'
    ],
    keyTakeaways: [
      'Rebates often cover up to 30-50% of qualifying retrofit equipment costs',
      'Payback period on EC motor retrofits is typically under 14 months',
      'BC Freezer assists clients with audit documentation and rebate filing'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General & Service',
    question: 'How quickly can BC Freezer respond to an emergency refrigeration breakdown?',
    answer: 'We offer 24/7 priority emergency dispatch. For commercial clients in the Lower Mainland and Fraser Valley (Langley, Abbotsford, Maple Ridge, Mission, Chilliwack), our average emergency arrival time is between 30 and 60 minutes. For Hope, Princeton, Merritt, and Kamloops, we dispatch from regional response staging to minimize downtime.'
  },
  {
    category: 'Installation & Equipment',
    question: 'What brands of commercial refrigeration systems do you install and service?',
    answer: 'We service and install all major commercial and industrial refrigeration equipment, including Bohn, KeepRite, Heatcraft, Danfoss, Copeland, Goodman / Amana, Daikin, Gree / Tosot, Trent, True, Beverage-Air, and Master-Bilt.'
  },
  {
    category: 'Preventive Maintenance',
    question: 'What is included in a BC Freezer Preventive Maintenance plan?',
    answer: 'Our comprehensive maintenance plan includes condenser and evaporator coil sanitization, refrigerant pressure and charge validation, electrical contactor inspection, door gasket and latch testing, defrost cycle calibration, condensate drain flushing, and a certified health inspection report.'
  },
  {
    category: 'Pricing & Value',
    question: 'Do you offer free quotes for new installations and retrofits?',
    answer: 'Yes! We provide detailed, no-obligation quotes for all new walk-in cooler/freezer installations, equipment replacements, and efficiency retrofits. Our quotes break down equipment specifications, labor, and anticipated energy rebate eligibility.'
  },
  {
    category: 'Certification & Warranty',
    question: 'Are your technicians licensed and certified in British Columbia?',
    answer: 'Absolutely. All our lead technicians hold Red Seal Certification in Commercial Refrigeration and Air Conditioning Mechanics, are licensed by Technical Safety BC (Class A Refrigeration Contractor), and are fully insured and bonded with WorkSafeBC clearance.'
  },
  {
    category: 'Energy & Rebates',
    question: 'Can you help us apply for CleanBC commercial energy rebates?',
    answer: 'Yes. When we design and install energy-efficient upgrades such as EC motors, smart defrost controls, or high-efficiency condensing units, our team assists you with the necessary technical documentation and rebate submission process.'
  }
];
