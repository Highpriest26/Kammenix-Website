export interface ServiceDivision {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  concept: string;
  iconName: string;
  services: string[];
  benefits: string[];
  targetCustomers?: string[];
  enquiryProcess: string[];
  disclaimer?: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Estate Development' | 'Project Development' | 'Facility Management' | 'Professional Cleaning Services' | 'General Contract Execution' | 'Supply Services';
  location: string;
  description: string;
  imageUrl: string;
  scope: string;
  status: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  address: string;
  cacRegistrationDate: string;
  phone: string;
  displayPhone: string;
  mobileNumbers?: string[];
  email: string;
  workingHours: string;
  whatsappNumber: string;
  whatsappMessage: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  introduction: string;
  philosophy: string;
  commitment: string;
  mission: string;
  vision: string;
  coreValues: { title: string; description: string }[];
  sellingPoints: { title: string; description: string; icon: string }[];
  process: { step: string; title: string; description: string }[];
}

// OFFICIAL COMPANY CONFIGURATION
export const companyConfig: CompanyConfig = {
  name: 'Kammenix',
  legalName: 'KAMMENIX NIGERIA LIMITED',
  tagline: 'Excellence, Professionalism & Trust',
  address: 'No. 82, Ralph Shodeinde Street, Central Business District, Abuja, FCT, Nigeria',
  cacRegistrationDate: '17th April 2014',
  phone: '+2349161236876',
  displayPhone: '+234 916 123 6876',
  mobileNumbers: ['+234 803 672 5147', '+234 803 630 6795'],
  email: 'info@kammenixnigltd@gmail.com',
  workingHours: 'Monday to Friday: 8:00 AM – 5:00 PM',
  whatsappNumber: '2349161236876',
  whatsappMessage: 'Hello Kammenix Nigeria Limited, I would like to enquire about your services.',
  socialLinks: {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
  },
  introduction: 'Kammenix Nigeria Limited is a diversified Nigerian company committed to delivering innovative, sustainable, and professional solutions across multiple sectors. Incorporated on the 17th April 2014, we provide value-driven services that help governments, corporate organizations, institutions, development agencies, SMEs, and private individuals achieve their operational and investment objectives.',
  philosophy: 'Our philosophy is built on professionalism, integrity, innovation, accountability, and customer satisfaction. Every project undertaken by Kammenix Nigeria Limited is executed with a commitment to quality, cost-effectiveness, and timely delivery.',
  commitment: 'At Kammenix Nigeria Limited, every assignment is approached with dedication, technical competence, and a passion for excellence. We strive to exceed client expectations by delivering reliable, efficient, and sustainable solutions that create lasting value.',
  mission: 'To provide excellent services, Adequate management of project and property with utmost professionalism, state of the art tools and creativity',
  vision: 'To be the most effective, efficient and reliable contract and property development and management firm in Africa.',
  coreValues: [
    { title: 'Professionalism', description: 'Upholding highest technical, operational, and ethical standards in all deliverables.' },
    { title: 'Integrity', description: 'Operating with uncompromised honesty, transparency, and fiscal accountability.' },
    { title: 'Innovation', description: 'Deploying practical, sustainable, and cutting-edge methodologies across all sectors.' },
    { title: 'Accountability', description: 'Taking full ownership of project outcomes, timelines, and contractual obligations.' },
    { title: 'Customer Satisfaction', description: 'Tailoring solutions to exceed client expectations and foster long-term partnerships.' },
    { title: 'Excellence', description: 'Striving for continuous improvement and superior quality in every assignment.' },
  ],
  sellingPoints: [
    { title: 'Multidisciplinary Professionals', description: 'Team of experienced engineers, financial advisors, facility managers, and consultants.', icon: 'Award' },
    { title: 'Innovative & Practical Solutions', description: 'Tailored strategies designed for real-world execution in public and private sectors.', icon: 'Layers' },
    { title: 'High Ethical Standards', description: 'Strict compliance with Nigerian regulations, CAC standards, and corporate governance.', icon: 'ShieldCheck' },
    { title: 'Competitive & Transparent Pricing', description: 'Value-driven cost structures ensuring maximum ROI for clients and institutions.', icon: 'UserCheck' },
    { title: 'Timely Project Execution', description: 'Disciplined scheduling and proactive risk management for on-time project delivery.', icon: 'CheckCircle2' },
    { title: 'Quality Assurance Systems', description: 'Rigorous inspection routines, milestone sign-offs, and post-completion support.', icon: 'MessageSquareText' },
  ],
  process: [
    { step: '01', title: 'Consultation & Assessment', description: 'We understand the customer’s requirements, operational environment, and expected outcomes.' },
    { step: '02', title: 'Planning & Proposal', description: 'We develop a practical plan, scope, timeline, resource allocation, and technical proposal.' },
    { step: '03', title: 'Contract Execution', description: 'Our team coordinates and delivers the agreed service professionally with structured milestones.' },
    { step: '04', title: 'Monitoring & Reporting', description: 'We provide ongoing support, comprehensive reporting, and continuous advisory assistance.' },
  ],
};

// 8 OFFICIAL BUSINESS DIVISIONS FROM CONCEPT NOTE
export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'financial-consulting-and-management',
    slug: 'financial-consulting-and-management',
    title: 'Financial Consulting',
    shortDescription: 'Strategic financial advisory, business financing solutions, loan structuring, investment advisory, and cooperative finance management.',
    concept: 'Kammenix Nigeria Limited provides strategic financial advisory and management solutions designed to improve organizational financial performance, enhance operational efficiency, reduce financial risks, and support sustainable growth. Our financial consulting services assist organizations in making informed investment decisions, structuring projects, managing finances, and accessing funding opportunities.',
    iconName: 'TrendingUp',
    services: [
      'Financial advisory',
      'Business financing solutions',
      'Loan arrangement and structuring',
      'Investment advisory',
      'Financial planning',
      'Budget preparation',
      'Financial analysis',
      'Cash flow management',
      'Financial due diligence',
      'Cooperative finance management',
      'Asset management support',
    ],
    benefits: [
      'Improved financial performance',
      'Better investment decisions',
      'Increased profitability',
      'Efficient budgeting',
      'Enhanced cash flow',
      'Reduced financial risks',
      'Improved accountability',
      'Easier access to finance',
      'Stronger financial controls',
      'Sustainable business growth',
    ],
    targetCustomers: [
      'Federal Government Ministries',
      'State Governments',
      'Local Government Councils',
      'Corporate Organizations',
      'SMEs',
      'Cooperative Societies',
      'NGOs',
      'Development Partners',
      'Educational Institutions',
      'Private Investors',
      'Entrepreneurs',
    ],
    enquiryProcess: [
      'Initial enquiry via phone, email, or office visit.',
      'Preliminary consultation.',
      'Review of financial needs.',
      'Submission of relevant financial documents.',
      'Financial assessment.',
      'Proposal preparation.',
      'Service agreement.',
      'Project implementation.',
      'Monitoring and reporting.',
      'Continuous advisory support.',
    ],
    imageUrl: '/images/divisions/financial-consulting-and-management.jpg',
  },
  {
    id: 'facility-management',
    slug: 'facility-management',
    title: 'Facility Management',
    shortDescription: 'Integrated facility management ensuring commercial, institutional, industrial, and residential properties remain safe, clean, and cost-efficient.',
    concept: 'Kammenix Nigeria Limited provides integrated facility management services that ensure commercial, institutional, industrial, and residential properties remain safe, functional, clean, and cost-efficient. We manage facilities to maximize asset value while minimizing operational costs.',
    iconName: 'Building2',
    services: [
      'Facility maintenance',
      'Building management',
      'Preventive maintenance',
      'Technical support',
      'Waste management',
      'Landscaping',
      'Pest control coordination',
      'Utility management',
      'Health and safety compliance',
      'Facility inspection',
    ],
    benefits: [
      'Reduced maintenance costs',
      'Longer asset lifespan',
      'Increased property value',
      'Improved workplace productivity',
      'Safer working environment',
      'Better customer experience',
      'Regulatory compliance',
      'Efficient facility operations',
      'Reduced downtime',
    ],
    targetCustomers: [
     
    ],
    enquiryProcess: [
      'Client contacts Kammenix.',
      'Facility inspection.',
      'Needs assessment.',
      'Preparation of maintenance proposal.',
      'Cost estimation.',
      'Contract award.',
      'Mobilization.',
      'Routine service delivery.',
      'Performance monitoring.',
      'Periodic reporting.',
    ],
    imageUrl: '/images/divisions/facility-management.jpg',
  },
  {
    id: 'estate-development',
    slug: 'estate-development',
    title: 'Estate Development',
    shortDescription: 'Estate planning, land development, residential, commercial, and mixed-use infrastructure solutions transforming land into valuable assets.',
    concept: 'Kammenix Nigeria Limited delivers estate development solutions that transform land into functional, modern, and valuable residential, commercial, and mixed-use developments.',
    iconName: 'Home',
    services: [
      'Estate planning',
      'Land development',
      'Residential development',
      'Commercial development',
      'Infrastructure development',
      'Property advisory',
      'Site supervision',
      'Property investment planning',
    ],
    benefits: [
      'Increased property value',
      'Quality infrastructure',
      'Professional project execution',
      'Modern housing solutions',
      'Higher investment returns',
      'Sustainable development',
      'Efficient land utilization',
    ],
    targetCustomers: [
      'Property developers',
      'Government agencies',
      'Private investors',
      'Corporate organizations',
      'Cooperative societies',
      'Real estate firms',
      'Communities',
      'Religious organizations',
    ],
    enquiryProcess: [
      'Property consultation.',
      'Site inspection.',
      'Feasibility study.',
      'Development proposal.',
      'Budget preparation.',
      'Contract agreement.',
      'Project execution.',
      'Quality inspection.',
      'Project delivery.',
      'After-project support.',
    ],
    imageUrl: '/images/divisions/estate-development.jpg',
  },
  {
    id: 'professional-cleaning-services',
    slug: 'professional-cleaning-services',
    title: 'Professional Cleaning Services',
    shortDescription: 'World-class cleaning, office sanitization, post-construction cleaning, deep cleaning, and janitorial management for pristine environments.',
    concept: 'Kammenix Nigeria Limited provides world-class cleaning and environmental hygiene services that create healthy, attractive, and productive environments for homes, offices, industries, and institutions.',
    iconName: 'Sparkles',
    services: [
      'Office cleaning',
      'Industrial cleaning',
      'Residential cleaning',
      'Post-construction cleaning',
      'Deep cleaning',
      'Glass cleaning',
      'Carpet cleaning',
      'Floor treatment',
      'Fumigation coordination',
      'Janitorial services',
    ],
    benefits: [
      'Healthier work environment',
      'Better corporate image',
      'Increased employee productivity',
      'Improved hygiene',
      'Longer life of facilities',
      'Reduced maintenance costs',
      'Professional cleaning standards',
      'Flexible service schedules',
    ],
    targetCustomers: [
      'Government offices',
      'Banks',
      'Insurance companies',
      'Hospitals',
      'Hotels',
      'Schools',
      'Shopping malls',
      'Residential estates',
      'Corporate headquarters',
      'Manufacturing companies',
    ],
    enquiryProcess: [
      'Customer enquiry.',
      'Site visit.',
      'Cleaning assessment.',
      'Quotation.',
      'Service approval.',
      'Mobilization.',
      'Cleaning execution.',
      'Quality inspection.',
      'Client feedback.',
      'Maintenance contract.',
    ],
    imageUrl: '/images/divisions/professional-cleaning-services.jpg',
  },
  {
    id: 'supply-services',
    slug: 'supply-services',
    title: 'Supply Services',
    shortDescription: 'Procurement and supply of quality materials, office equipment, ICT, building supplies, safety gear, and general goods.',
    concept: 'Kammenix Nigeria Limited supplies quality products, equipment, materials, and consumables to public and private sector organizations while ensuring timely delivery and competitive pricing.',
    iconName: 'Package',
    services: [
      'Office supplies',
      'Cleaning materials',
      'Building materials',
      'Industrial equipment',
      'Furniture',
      'ICT equipment',
      'Safety equipment',
      'Electrical materials',
      'General procurement',
    ],
    benefits: [
      'Reliable sourcing',
      'Quality assurance',
      'Competitive pricing',
      'Timely delivery',
      'Reduced procurement delays',
      'Genuine products',
      'Professional procurement support',
    ],
    targetCustomers: [
      'Ministries',
      'Departments',
      'Agencies',
      'Educational institutions',
      'Hospitals',
      'NGOs',
      'Corporate organizations',
      'Construction firms',
      'Manufacturing companies',
    ],
    enquiryProcess: [
      'Customer request.',
      'Product specification review.',
      'Quotation.',
      'Purchase order.',
      'Procurement.',
      'Quality inspection.',
      'Delivery.',
      'Acceptance.',
      'Documentation.',
      'After-sales support.',
    ],
    imageUrl: '/images/divisions/supply-services.jpg',
  },
  {
    id: 'consultancy-services',
    slug: 'consultancy-services',
    title: 'Consultancy Services',
    shortDescription: 'Multidisciplinary consulting in business strategy, project advisory, organizational development, procurement, and policy research.',
    concept: 'Kammenix Nigeria Limited offers multidisciplinary consultancy services that enable organizations to solve business challenges, improve performance, and achieve strategic objectives.',
    iconName: 'Briefcase',
    services: [
      'Business consulting',
      'Project consulting',
      'Organizational development',
      'Procurement advisory',
      'Operational improvement',
      'Strategy development',
      'Policy development',
      'Capacity building',
      'Research',
      'Technical advisory',
    ],
    benefits: [
      'Better decision-making',
      'Increased organizational efficiency',
      'Reduced operational risks',
      'Improved productivity',
      'Better project outcomes',
      'Strong governance',
      'Sustainable growth',
    ],
    targetCustomers: [
      'Government agencies',
      'International organizations',
      'NGOs',
      'SMEs',
      'Cooperatives',
      'Educational institutions',
      'Corporate organizations',
    ],
    enquiryProcess: [
      'Initial consultation.',
      'Needs assessment.',
      'Proposal preparation.',
      'Consultancy agreement.',
      'Data collection.',
      'Analysis.',
      'Implementation support.',
      'Monitoring.',
      'Evaluation.',
      'Final reporting.',
    ],
    imageUrl: '/images/divisions/consultancy-services.jpg',
  },
  {
    id: 'project-development',
    slug: 'project-development',
    title: 'Project Development',
    shortDescription: 'End-to-end project origination, feasibility studies, business case preparation, project financing support, and risk management.',
    concept: 'Kammenix Nigeria Limited develops projects from concept to completion by providing technical, financial, and managerial expertise that ensures successful implementation.',
    iconName: 'Kanban',
    services: [
      'Project identification',
      'Feasibility studies',
      'Project planning',
      'Business case preparation',
      'Project financing support',
      'Risk assessment',
      'Project management',
      'Monitoring and evaluation',
    ],
    benefits: [
      'Bankable projects',
      'Reduced project risks',
      'Improved project delivery',
      'Efficient resource utilization',
      'Better investor confidence',
      'Sustainable development',
    ],
    targetCustomers: [
      'Government institutions',
      'Investors',
      'Development agencies',
      'Financial institutions',
      'Communities',
      'Private developers',
      'NGOs',
    ],
    enquiryProcess: [
      'Concept discussion.',
      'Project assessment.',
      'Feasibility study.',
      'Proposal development.',
      'Financing strategy.',
      'Implementation planning.',
      'Execution.',
      'Monitoring.',
      'Evaluation.',
      'Project close-out.',
    ],
    imageUrl: '/images/divisions/project-development.jpg',
  },
  {
    id: 'general-contract-execution',
    slug: 'general-contract-execution',
    title: 'General Contract Execution',
    shortDescription: 'Turnkey contract execution including building construction, civil engineering, MEP works, infrastructure, and property renovation.',
    concept: 'Kammenix Nigeria Limited undertakes turnkey contract execution by coordinating planning, procurement, supervision, quality assurance, and project delivery in accordance with industry standards and client expectations.',
    iconName: 'HardHat',
    services: [
      'Building construction',
      'Civil engineering works',
      'Renovation',
      'Infrastructure development',
      'Mechanical works',
      'Electrical installations',
      'Water engineering',
      'Procurement contracts',
      'Maintenance contracts',
      'Turnkey projects',
    ],
    benefits: [
      'One-stop project delivery',
      'Professional supervision',
      'Cost control',
      'Timely completion',
      'High-quality workmanship',
      'Compliance with specifications',
      'Risk management',
      'Client satisfaction',
    ],
    targetCustomers: [
      'Federal Government',
      'State Governments',
      'Local Government Councils',
      'Oil and gas companies',
      'Financial institutions',
      'Educational institutions',
      'Healthcare organizations',
      'Manufacturing companies',
      'Real estate developers',
      'Private clients',
    ],
    enquiryProcess: [
      'Client enquiry.',
      'Project briefing.',
      'Site inspection.',
      'Technical assessment.',
      'Cost estimation.',
      'Proposal submission.',
      'Contract award.',
      'Project mobilization.',
      'Construction and supervision.',
      'Inspection, commissioning, handover, and post-completion maintenance support.',
    ],
    imageUrl: '/images/divisions/general-contract-execution.jpg',
  },
];

// FEATURED PROJECTS
export const projectItems: ProjectItem[] = [
  {
    id: 'proj-amac',
    title: 'Abuja Municipal Area Council (AMAC)',
    category: 'Supply Services',
    location: 'Abuja, FCT',
    description: 'Supply of Transformers and Electrical Accessories. We supported the Abuja Municipal Area Council through the supply of electrical infrastructure equipment and related accessories required to support electricity distribution and facility operations.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    scope: 'Supply of electrical transformers, accessories, and supporting components',
    status: 'Completed',
  },
  {
    id: 'proj-trustfund',
    title: 'Trustfund Pension Limited',
    category: 'Professional Cleaning Services',
    location: 'Nigeria',
    description: 'Corporate Cleaning and Facility Management Services. Maintaining a clean, organized, and functional corporate environment that supports employees, visitors, and the client\'s daily business operations.',
    imageUrl: '/images/cleaning-crew-v2.jpg',
    scope: 'Corporate office cleaning, routine cleaning and maintenance support',
    status: 'Completed',
  },
  {
    id: 'proj-broll',
    title: 'Broll Property Services Limited',
    category: 'Facility Management',
    location: 'Nigeria',
    description: 'Integrated Cleaning, Facility and Property Support Services. Providing a range of business and facility support services covering corporate cleaning, facility management, property-related services, consultancy, and other support requirements.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    scope: 'Corporate Cleaning, Facility Management, Property Management, Consultancy Services',
    status: 'Completed',
  },
  {
    id: 'proj-1',
    title: 'Abuja Central Commercial Estate Layout',
    category: 'Estate Development',
    location: 'CBD Abuja, FCT',
    description: 'Master planning, land development, and infrastructure layout design for a modern commercial estate development in Abuja.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    scope: 'Land Layout, Estate Planning, Infrastructure Development',
    status: 'Master Plan Concept',
  },
  {
    id: 'proj-4',
    title: 'Turnkey Civil Engineering & Renovation Contract',
    category: 'General Contract Execution',
    location: 'Abuja, FCT',
    description: 'Civil engineering works, building construction, mechanical/electrical installations, and structural renovation.',
    imageUrl: '/images/general-contracting-v2.jpg',
    scope: 'Civil Works, MEP Installations, Structural Renovation',
    status: 'Execution Phase Concept',
  },
  {
    id: 'proj-5',
    title: 'Project Origination & Feasibility Framework',
    category: 'Project Development',
    location: 'Federal Capital Territory',
    description: 'Feasibility study, business case preparation, risk assessment, and project financing strategy for institutional development.',
    imageUrl: '/images/project-development-v2.jpg',
    scope: 'Feasibility Study, Business Case, Risk Assessment',
    status: 'Planning Phase Concept',
  },
];
