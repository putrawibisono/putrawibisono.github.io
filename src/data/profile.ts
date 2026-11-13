export interface ExperienceItem {
  id: string;
  role: string;
  secondaryRole?: string;
  organization: string;
  domainTag: string;
  location: string;
  period: string;
  periodNote?: string;
  statusType: 'Current Responsibility (Ad Hoc)' | 'Verified Past Role';
  summary: string;
  highlights: { label: string; detail: string }[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  shortInstitution: string;
  degree: string;
  concentrationOrMinor: string;
  location: string;
  graduationDate: string;
  honorsOrGpa?: string;
  focusAreas: string[];
}

export interface ProjectItem {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category:
    | 'Data & Battery Systems'
    | 'Scientific Computing & Materials'
    | 'Software Engineering'
    | 'Agricultural Operations (In Progress)';
  statusLabel: 'Completed Industry System' | 'Completed Research / Lab Study' | 'Completed Engineering Project' | 'Ongoing & Exploratory Initiative';
  organizationOrContext: string;
  period: string;
  featured: boolean;
  image?: string;
  imageCaption?: string;
  diagramType:
    | 'agritech-pipeline'
    | 'battery-telemetry'
    | 'spectroscopy-bandgap'
    | 'lpcvd-reactor'
    | 'gitlet-dag'
    | 'signal-processing';
  summary: string;
  challenge: string;
  architectureAndApproach: string[];
  outcomes: string[];
  technologies: string[];
  codeAvailabilityNote?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  sourceNote: string;
  description: string;
  skills: string[];
}

export interface TeachingCourse {
  code: string;
  title: string;
  type: string;
  institution: string;
  department: string;
  location: string;
  summary: string;
  sourceNote?: string;
  learningOutcomes: string[];
  toolsAndTopics: string[];
}

export const siteMetadata = {
  name: 'Putra Wibisono',
  monogram: 'PW',
  title: 'Putra Wibisono — Data Engineer, Materials Scientist & Agricultural Operations',
  roleHeadline: 'Data Engineer & Materials Scientist · Ex-Stripe, Ex-Tesla',
  currentRoleTag: 'Acting President (as needed) — Family-Owned Agricultural Business',
  subheadline:
    "My background spans data engineering, battery manufacturing, and materials science. I currently support operations and strategic initiatives at my family's agricultural business, taking on presidential responsibilities when needed.",
  shortBio:
    "Data engineering, battery manufacturing, and materials science (Ex-Stripe, Ex-Tesla, UC Berkeley M.Eng., UC San Diego B.S.). Supporting operations and strategic initiatives at my family's agricultural business.",
  siteUrl: 'https://putrawibisono.com',
  githubPagesUrl: 'https://putrawibisono.github.io',
  email: 'putrawibisonos@gmail.com',
  affiliation: 'UC Berkeley (M.Eng.) · UC San Diego (B.S.)',
  location: 'Berkeley, CA & Indonesia',
  githubUsername: 'EytaW',
  githubUrl: 'https://github.com/EytaW',
  repoGithubUrl: 'https://github.com/putrawibisono',
};

export const identityPillars = [
  {
    label: 'Data & Battery Engineering',
    primary: 'Ex-Stripe · Ex-Tesla · Ex-Rivian',
    detail: 'Senior Data Engineer at Stripe; Sr. Data Engineer (P3) & Data Engineer (P2) at Tesla (FAST library, RAPID dashboard, 4680 cell recipes).',
  },
  {
    label: 'Current Agricultural Role',
    primary: 'Acting President (as needed)',
    detail: "Supporting operations, organic fertilizer demonstration plot trials, and data initiatives at my family's agricultural business.",
  },
  {
    label: 'Academic Training',
    primary: 'UC Berkeley (M.Eng.) · UC San Diego (B.S.)',
    detail: 'M.Eng. in Materials Science & Engineering + Data Science (3.92 GPA); B.S. in Chemical Engineering & CS Minor.',
  },
];

export const biographyNarrative = {
  lead: "My background spans data engineering, battery manufacturing, and materials science. I currently support operations and strategic initiatives at my family's agricultural business, taking on presidential responsibilities when needed.",
  paragraphs: [
    'I began my career in data engineering, battery cell formation, and computational materials research. Across roles at Stripe, Tesla, ATOM Science, and Rivian, my work focused on making high-volume, noisy operational and experimental data clean, reliable, and actionable so engineering teams could make deterministic decisions.',
    'At Stripe, I designed and managed scalable services, governed data pipelines, and centralized source-of-truth datasets for internal employee information under strict privacy and security controls. Previously at Tesla, I progressed from Data Engineer (P2) to Senior Data Engineer (P3), where I built the FAST (Formation Analytics Screening Toolbox) library, maintained the real-time RAPID telemetry dashboard for the Berlin and Austin Gigafactories, and developed API recipe synchronization and screening workflows for 4680 battery cells.',
    "Today, I apply that engineering discipline to support my family's agricultural business. Stepping in as Acting President when needed, I assist with operational management, field-level fertilizer validation trials, and the development of practical data and reporting workflows for farmers and institutional partners.",
  ],
  currentInitiativesTitle: 'Current Responsibilities & Ongoing Initiatives in Agriculture',
  currentInitiativesSubtitle:
    'Distinguishing active operational work, technical pipelines currently in development, and exploratory initiatives:',
  currentInitiatives: [
    {
      status: 'Active Operations',
      title: 'Business Operations & Demonstration Plot Trials',
      description:
        "Stepping in as Acting President (as needed) to support management of the family's agricultural business, including running demonstration plot trials to validate organic fertilizers and measure crop productivity gains.",
    },
    {
      status: 'In Development',
      title: 'Field Condition IoT & Historical Satellite Baseline Analysis',
      description:
        'Developing IoT data pipelines to track field conditions (soil pH, moisture, and nutrients), using historical satellite imaging as an initial baseline analysis.',
    },
    {
      status: 'In Development',
      title: 'Transparent Partner & Government Reporting Tools',
      description:
        'Building reporting and analytics tools to generate clear, transparent agricultural documentation for government and industry partners.',
    },
    {
      status: 'Exploratory / Proposed',
      title: 'Farmer Training & Digital Monitoring Services',
      description:
        'Exploring value-added services such as structured farmer training programs and accessible digital platforms for ongoing agricultural monitoring.',
    },
  ],
  philosophyQuote:
    'Applying the same data integrity and experimental rigor used in semiconductor and battery manufacturing to day-to-day agricultural operations.',
};

export const experienceList: ExperienceItem[] = [
  {
    id: 'family-agricultural-business',
    role: 'Acting President (as needed)',
    organization: 'Family-Owned Agricultural Business',
    domainTag: 'Operations · Field Trials · Agricultural Data Initiatives',
    location: 'Indonesia / Berkeley, CA',
    period: 'Current',
    periodNote:
      'Ad hoc executive and technical support role in a family-owned enterprise (not a founder role or formal statutory appointment). Legacy files referenced both "Agricultural Technologies" and the domain agrosindustry.com.',
    statusType: 'Current Responsibility (Ad Hoc)',
    summary:
      "Supporting business operations, stakeholder representation, and technical modernization at my family's agricultural company, stepping into presidential responsibilities as needed.",
    highlights: [
      {
        label: 'Operational Representation',
        detail:
          'Step in on an ad hoc basis to manage business operations, coordinate field teams, and represent the family business with institutional and industry stakeholders.',
      },
      {
        label: 'Demonstration Plot Trials (Active)',
        detail:
          'Run field demonstration plot trials to empirically evaluate organic fertilizers and measure productivity gains.',
      },
      {
        label: 'IoT & Satellite Baseline Pipelines (In Development)',
        detail:
          'Developing IoT pipelines to track soil field conditions (pH, moisture, nutrients), paired with historical satellite imaging for initial baseline analysis.',
      },
      {
        label: 'Partner Reporting & Advisory Exploration (In Progress)',
        detail:
          'Building transparent reporting tools for government and industry partners, while exploring farmer training and digital monitoring services.',
      },
    ],
    technologies: ['Python', 'SQL', 'Field Trial Analytics', 'IoT Telemetry (In Dev)', 'Satellite Baseline Analysis', 'PowerBI / Tableau'],
  },
  {
    id: 'stripe',
    role: 'Senior Data Engineer',
    organization: 'Stripe',
    domainTag: 'Enterprise Data Infrastructure · Governance & Privacy',
    location: 'Remote',
    period: 'Post-Tesla Tenure',
    periodNote: 'Verified in legacy CV (_pages/cv.md); exact start/end months not listed in source document.',
    statusType: 'Verified Past Role',
    summary:
      'Designed, developed, and managed scalable data services, governed pipelines, and centralized source-of-truth datasets for internal employee information.',
    highlights: [
      {
        label: 'Scalable Data Services',
        detail:
          'Designed, developed, and managed scalable services, data pipelines, tools, and systems supporting internal employee information.',
      },
      {
        label: 'Privacy & Security Controls',
        detail:
          'Implemented robust controls and strong security measures across pipelines to guarantee high data accuracy and strict privacy protection.',
      },
      {
        label: 'Unified Source of Truth',
        detail:
          'Collaborated with cross-functional teams to build carefully scoped shared datasets, establishing a dependable, centralized organizational source of truth.',
      },
      {
        label: 'Stakeholder Delivery',
        detail:
          'Delivered accurate, timely data pipelines in close collaboration with diverse stakeholders and subject-matter experts.',
      },
    ],
    technologies: ['Python', 'SQL', 'Data Pipelines', 'Data Governance & Privacy', 'Centralized Source-of-Truth Systems'],
  },
  {
    id: 'tesla',
    role: 'Sr. Data Engineer (P3) & Data Engineer (P2)',
    secondaryRole: 'Also summarized as Data Scientist (Battery Formation & 4680 Cell Trials) in academic CV',
    organization: 'Tesla, Inc.',
    domainTag: 'EV Battery Manufacturing · 4680 Cell & Factory Telemetry',
    location: 'Fremont, CA (Supporting Berlin & Austin Gigafactories)',
    period: 'May 2023 – Dec 2024',
    periodNote: 'Data Engineer (P2): May 2023 – Apr 2024 · Sr. Data Engineer (P3): Apr 2024 – Dec 2024 (Verified in 2024 Resume PDF)',
    statusType: 'Verified Past Role',
    summary:
      'Built battery formation screening libraries, real-time multi-gigafactory telemetry dashboards, Generation 4/5 battery simulation models, and 4680 cell recipe synchronization workflows.',
    highlights: [
      {
        label: 'FAST Screening Library (P3)',
        detail:
          'Developed the FAST (Formation Analytics Screening Toolbox) library used by data scientists to deep-dive into new development recipes during battery formation and reach deterministic pass/fail trial conclusions.',
      },
      {
        label: 'RAPID Live Factory Dashboard (P3)',
        detail:
          'Developed and maintained the RAPID dashboard for Berlin and Austin Gigafactory sites, enabling process engineers to inspect real-time telemetry and make live production-line adjustments.',
      },
      {
        label: 'EoL Defect Detection & Vendor Scoring (P3)',
        detail:
          'Developed and assisted automated early defect detection during End of Life (EoL) testing and audited formation metrics for machine errors, establishing vendor scoring parameters for business analytics teams.',
      },
      {
        label: '4680C/D Recipes & API Sync Systems (P2)',
        detail:
          'Developed and validated 4680 Cybercell and Drycell recipes (4680C/D Build) for GFTX manufacturing, and engineered API call-and-sync recipe systems that increased R&D trial output for 4680 battery cells.',
      },
      {
        label: 'Milmont AWS Streams & Gen 4/5 ML Models (P2)',
        detail:
          'Implemented continuous factory data streams (temperature, pH, electrical current) for the Milmont facility into AWS databases, and developed proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors.',
      },
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Simulation', 'REST APIs'],
  },
  {
    id: 'atom-science',
    role: 'Data Science Intern / Data Scientist',
    organization: 'ATOM Science (ATOM Research)',
    domainTag: 'Computational Drug Discovery · Molecular Machine Learning',
    location: 'San Francisco, CA',
    period: 'Sep 2022 – May 2023',
    statusType: 'Verified Past Role',
    summary:
      'Curated drug discovery datasets and trained transfer-learning and active-learning models in Python to screen molecular candidates for wet-lab testing.',
    highlights: [
      {
        label: 'Molecular Property Prediction',
        detail:
          'Used Python to curate drug discovery datasets and build machine learning models predicting molecular properties.',
      },
      {
        label: 'Transfer & Active Learning',
        detail:
          'Explored transfer learning and active learning techniques to maximize predictive value across sparse chemical datasets.',
      },
      {
        label: 'Wet-Lab Candidate Screening',
        detail:
          'Screened large databases of molecules to identify optimal candidates to advance into wet-lab experimental testing.',
      },
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Transfer Learning', 'Active Learning'],
  },
  {
    id: 'rivian',
    role: 'Process Development Engineer, Formation',
    organization: 'Rivian',
    domainTag: 'EV Battery Cell Formation · SEI Diagnostics',
    location: 'Irvine, CA',
    period: 'Sep 2021 – Sep 2022',
    statusType: 'Verified Past Role',
    summary:
      'Developed proprietary battery cell formation recipes for R1S, R2, and R3 vehicle programs and predictive Solid Electrolyte Interphase (SEI) anomaly detection protocols.',
    highlights: [
      {
        label: 'R1S, R2 & R3 Formation Recipes',
        detail:
          'Developed proprietary formation recipes for R1S, R2, and R3 models that achieved higher charging compatibility with Tesla’s Supercharger network.',
      },
      {
        label: 'Predictive SEI Anomaly Detection',
        detail:
          'Developed diagnostic protocols to detect Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
      },
      {
        label: 'Standard Production Deployment',
        detail:
          'Deployed 6 recipes (4 development recipes and 2 production recipes) that served as the standard baseline recipe for one year from December 2021 to December 2022.',
      },
    ],
    technologies: ['Battery Cell Formation', 'SEI Precharge Diagnostics', 'Electrochemical Testing', 'Python / MATLAB'],
  },
  {
    id: 'ucsd-nanoengineering',
    role: 'Undergraduate Research Assistant',
    organization: 'UC San Diego — Department of Nanoengineering (Battery Engineering)',
    domainTag: 'Electrochemical Energy Storage & Materials Characterization',
    location: 'San Diego, CA',
    period: 'Sep 2020 – Jun 2021',
    statusType: 'Verified Past Role',
    summary:
      'Conducted coin-cell assembly, cathode active material synthesis, spectroscopic characterization (XRD, FTIR, NMR), and battery cell recycling research.',
    highlights: [
      {
        label: 'Coin-Cell Assembly & Cycling',
        detail:
          'Assembled coin cells in argon glove boxes and executed electrical testing through automated battery cyclers.',
      },
      {
        label: 'Cathode Synthesis & Spectroscopy',
        detail:
          'Prepared and synthesized cathode active materials and performed physical characterization using XRD, FTIR, NMR, vacuum ovens, and ROTAP shakers.',
      },
      {
        label: 'Direct Recycling Teardown',
        detail:
          'Harvested and tore down spent cells (cathode, separator, and electrolytes) for battery recycling studies and documented experimental findings.',
      },
    ],
    technologies: ['Coin Cell Assembly', 'Battery Cyclers', 'XRD', 'FTIR', 'NMR', 'Glove Box Operations'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'uc-berkeley',
    institution: 'University of California, Berkeley',
    shortInstitution: 'UC Berkeley',
    degree: 'Master of Engineering (M.Eng.) in Materials Science and Engineering',
    concentrationOrMinor: 'Concentration in Data Science',
    location: 'Berkeley, CA',
    graduationDate: 'June 2023',
    honorsOrGpa: 'Major GPA: 3.92',
    focusAreas: [
      'Data Science & Machine Learning for Physical Systems',
      'Semiconductor & Battery Energy Storage Materials',
      'Experimental Characterization & Computational Modeling',
    ],
  },
  {
    id: 'uc-san-diego',
    institution: 'University of California, San Diego',
    shortInstitution: 'UC San Diego',
    degree: 'Bachelor of Science (B.S.) in Chemical Engineering',
    concentrationOrMinor: 'Minor in Computer Science',
    location: 'San Diego, CA',
    graduationDate: 'June 2021',
    focusAreas: [
      'Process Modeling & Multiphysics Simulation (COMSOL, Aspen, MATLAB)',
      'Data Structures, Algorithms & Object-Oriented Systems (C++, Java, Python)',
      'Nanoengineering Battery Research & Undergraduate CSE Instruction',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    slug: 'tesla-fast-rapid-battery-telemetry',
    index: '01',
    title: 'FAST Screening Library & RAPID Multi-Factory Telemetry',
    subtitle: 'Deterministic battery formation analytics, real-time Gigafactory dashboards, and 4680 cell recipe systems at Tesla.',
    category: 'Data & Battery Systems',
    statusLabel: 'Completed Industry System',
    organizationOrContext: 'Tesla, Inc. (Fremont · Austin GFTX · Berlin)',
    period: 'May 2023 – Dec 2024',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Production data engineering and analytical systems built at Tesla to evaluate new development recipes during battery formation, stream real-time factory telemetry, and detect End-of-Life (EoL) cell defects.',
    challenge:
      'Evaluating experimental battery formation recipes and managing live production lines across Fremont, Berlin, and Austin required deterministic screening tools, real-time telemetry visibility, and automated recipe synchronization.',
    architectureAndApproach: [
      'FAST (Formation Analytics Screening Toolbox): Developed a Python library enabling data scientists to deep-dive into new development recipes during formation and reach deterministic conclusions on trial success.',
      'RAPID Real-Time Dashboard: Developed and maintained live dashboards for Berlin and Austin Gigafactory sites so process engineers could monitor real-time data and adjust production lines.',
      '4680C/D Recipe Validation & API Sync: Developed and validated 4680 Cybercell and Drycell recipes (4680C/D Build) for GFTX manufacturing, plus API call-and-sync recipe systems for trial and testing batteries.',
      'Milmont AWS Streams, EoL Defect Detection & Gen 4/5 Models: Implemented temperature, pH, and current data streams for the Milmont factory into AWS; built proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors; and assisted automated early defect detection during EoL testing.',
    ],
    outcomes: [
      'Enabled deterministic pass/fail trial conclusions for battery formation development recipes via the FAST library.',
      'Increased R&D trial output giving rise to 4680 Battery cells through API call-and-sync recipe management.',
      'Established quantitative vendor scoring parameters for business analytics teams via automated EoL defect detection.',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Models', 'REST APIs'],
  },
  {
    slug: 'uv-vis-semiconductor-spectroscopy',
    index: '02',
    title: 'Semiconductor Thin-Film Band Gap Analysis via UV-Vis Spectroscopy',
    subtitle: 'Dual-spectrometer optical absorption workflow for measuring electronic band gaps in semiconductor thin films.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Completed Research / Lab Study',
    organizationOrContext: 'Materials Science & Engineering Laboratory',
    period: 'Academic & Laboratory Research',
    featured: true,
    image: '/images/portfolio1.jpg',
    imageCaption:
      'Authentic laboratory workstation featuring the Shimadzu SolidSpec-3700 UV-Vis-NIR Spectrophotometer and optical reference standards.',
    diagramType: 'spectroscopy-bandgap',
    summary:
      'Experimental and data-reduction workflow combining optical measurements from two UV-Vis spectrometers to determine the electronic band gaps of semiconductor thin films.',
    challenge:
      'Measuring the band gap of semiconductor thin films across wide spectral regimes requires reconciling measurements from two UV-Vis spectrometers and extracting optical absorption edges accurately.',
    architectureAndApproach: [
      'Dual-Spectrometer Optical Acquisition: Collected ultraviolet, visible, and near-infrared spectral measurements across thin-film samples using laboratory instrumentation including the Shimadzu SolidSpec-3700 UV-Vis-NIR Spectrophotometer.',
      'Cross-Instrument Data Reduction: Reconciled baseline transmittance and reflectance data from the two spectrometers to construct continuous absorption spectra.',
      'Band-Gap Determination: Evaluated optical absorption coefficients as a function of photon energy to extract thin-film semiconductor band gaps.',
    ],
    outcomes: [
      'Measured semiconductor thin-film band gaps by integrating data across two UV-Vis spectrometers.',
      'Documented with original laboratory workstation photography from the experimental setup.',
    ],
    technologies: ['UV-Vis-NIR Spectroscopy', 'Shimadzu SolidSpec-3700', 'Semiconductor Thin Films', 'Python / MATLAB'],
  },
  {
    slug: 'lpcvd-wafer-reactor-modeling',
    index: '03',
    title: 'LPCVD Silicon Wafer Reactor Uniformity Modeling',
    subtitle: 'Coupled fluid dynamics, heat/mass transfer simulation, and 2^k factorial Design of Experiments in COMSOL & MATLAB.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Completed Engineering Project',
    organizationOrContext: 'UC San Diego Chemical Engineering',
    period: 'Mar 2021 – Jun 2021',
    featured: true,
    diagramType: 'lpcvd-reactor',
    summary:
      'Computational modeling and experimental design of a Low Pressure Chemical Vapor Deposition (LPCVD) boat reactor that accomplished nearly 100% silicon wafer deposition uniformity.',
    challenge:
      'Achieving uniform silicon deposition across wafers inside an LPCVD boat reactor requires balancing coupled fluid dynamics, heat transfer, and mass transfer parameters.',
    architectureAndApproach: [
      'COMSOL Multiphysics Reactor Design: Developed a boat reactor model in COMSOL incorporating fluid dynamics, heat transfer, and mass transfer models.',
      '2^k Factorial Design of Experiments (DoE): Computed a 2^k factorial experimental design to identify the most influential operating parameters for reporting to the project manager.',
      '2D & 3D Wafer Uniformity Rendering: Rendered 2D and 3D wafer uniformity models in MATLAB to interpret experimental parameters in terms of deposition uniformity.',
    ],
    outcomes: [
      'Developed a boat reactor configuration that accomplished nearly 100% uniformity for silicon wafers in COMSOL.',
      'Identified key process sensitivity parameters through 2^k Design of Experiments and 2D/3D MATLAB visualization.',
    ],
    technologies: ['COMSOL Multiphysics', 'MATLAB', '2^k Design of Experiments', 'Fluid Dynamics', 'Heat & Mass Transfer'],
    codeAvailabilityNote: 'Please email for view-only code and simulation reports of individual academic projects.',
  },
  {
    slug: 'gitlet-version-control-engine',
    index: '04',
    title: 'Gitlet — Distributed Version Control System in Java',
    subtitle: 'Content-addressable persistence, O(n) branching data structures, and merge resolution.',
    category: 'Software Engineering',
    statusLabel: 'Completed Engineering Project',
    organizationOrContext: 'Computer Science Systems Project',
    period: 'July 2022',
    featured: false,
    diagramType: 'gitlet-dag',
    summary:
      'A Java implementation imitating core Git version-control functionality through abstraction, persistent file serialization, and O(n) complexity branching.',
    challenge:
      'Replicating Git functionality from scratch in Java requires designing efficient persistence mechanisms and graph data structures that support fast branching and historical file restoration.',
    architectureAndApproach: [
      'Command Abstraction (`java main.Gitlet`): Implemented core version-control commands including `init`, `add`, `commit`, `checkout`, `status`, `log`, and `merge`.',
      'O(n) Branching Data Structures: Selected and implemented data structures capable of providing branching functionality with O(n) complexity.',
      'Deterministic File Persistence: Engineered file persistence enabling users to revert files to older versions from specific historical commits.',
    ],
    outcomes: [
      'Successfully implemented core Git commands, branching, and persistent historical state restoration in Java.',
      'View-only source code available upon direct email request.',
    ],
    technologies: ['Java', 'Data Structures', 'O(n) Branching', 'Persistent Serialization', 'CLI Abstraction'],
    codeAvailabilityNote: 'Please email for view-only code of individual projects.',
  },
  {
    slug: 'signal-and-image-processing-systems',
    index: '05',
    title: 'Acoustic Spatiotemporal Output & Digital Image Processing',
    subtitle: 'Arduino G-Code motorized speaker scanning, PWM analog conversion, and MATLAB digital video characterization.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Completed Research / Lab Study',
    organizationOrContext: 'MATLAB Instrumentation & Signal Processing Labs',
    period: 'Feb 2020 – Apr 2020',
    featured: false,
    diagramType: 'signal-processing',
    summary:
      'Two quantitative MATLAB hardware-in-the-loop studies: characterizing the spatiotemporal acoustic output of a speaker using Arduino G-Code motion control (Feb 2020) and quantitative digital video/image signal analysis (Apr 2020).',
    challenge:
      'Accurately characterizing acoustic and optical signals requires synchronized hardware positioning, time-domain noise reduction, digital-to-analog PWM filtering, and analysis of resolution and sampling limits.',
    architectureAndApproach: [
      'Arduino G-Code Motion Control (Feb 2020): Utilized motor/driving control with Arduino via G-Code to move the speaker relative to the acoustic sensor.',
      'Time-Domain Averaging & PWM Filtering: Applied time-domain signal averaging to enhance signal-to-noise ratio (SNR) and implemented pulse-width modulation (PWM) with low-pass filtering to convert digital signals to analog signals.',
      'Quantitative Digital Image Processing (Apr 2020): Applied digital video camera measurement techniques in MATLAB to evaluate how amplitude, spatial resolution, and sampling rate affect digital imaging.',
    ],
    outcomes: [
      'Characterized spatiotemporal speaker output with enhanced signal-to-noise ratio via time-domain averaging.',
      'Evaluated digital imaging resolution and sampling constraints and demonstrated PWM + low-pass digital-to-analog conversion in MATLAB.',
    ],
    technologies: ['MATLAB', 'Arduino', 'G-Code Motion Control', 'PWM & Low-Pass Filtering', 'Digital Image Processing'],
    codeAvailabilityNote: 'Please email for view-only code of individual projects.',
  },
  {
    slug: 'agritech-iot-satellite-intelligence',
    index: '06',
    title: 'Agricultural Field Trials, IoT Telemetry & Reporting Initiatives',
    subtitle: "Ongoing operational trials and technical pipelines in development at my family's agricultural business.",
    category: 'Agricultural Operations (In Progress)',
    statusLabel: 'Ongoing & Exploratory Initiative',
    organizationOrContext: 'Family-Owned Agricultural Business (Acting President, as needed)',
    period: 'Current (In Progress)',
    featured: true,
    diagramType: 'agritech-pipeline',
    summary:
      "A set of active field trials, in-development telemetry pipelines, and exploratory digital initiatives supporting operations at my family's agricultural business.",
    challenge:
      'Improving fertilizer adoption and crop productivity requires pairing practical field demonstration trials with baseline spatial analysis, soil tracking, and clear reporting for stakeholders.',
    architectureAndApproach: [
      'Active Operational Work — Demonstration Plot Trials: Running demonstration plot trials to validate organic fertilizers and measure crop productivity gains in the field.',
      'In Development — IoT Field Pipelines & Satellite Baseline: Developing IoT pipelines to track field conditions (pH, moisture, nutrients), using historical satellite imaging as an initial baseline analysis.',
      'In Development — Stakeholder Reporting Tools: Building tools to generate transparent reporting for government and industry partners.',
      'Exploratory / Proposed — Farmer Training & Digital Platforms: Exploring value-added services including farmer training programs and digital platforms for agricultural monitoring.',
    ],
    outcomes: [
      'Note on Project Status: These initiatives represent current operational work, tools under active development, and exploratory programs—not a completed commercial software product.',
    ],
    technologies: ['Python', 'SQL', 'Organic Fertilizer Field Trials', 'IoT Telemetry (In Dev)', 'Historical Satellite Baseline', 'Partner Reporting'],
  },
];

export const additionalEngineeringProjects = [
  { name: 'Molecular Property Prediction (Active & Transfer Learning)', domain: 'Python · TensorFlow/Keras', context: 'ATOM Science (Sep 2022 – May 2023)' },
  { name: 'Catalytic Bed Reactor', domain: 'Chemical Engineering', context: 'UC San Diego Project Work' },
  { name: 'Hydrogen on Demand', domain: 'Chemical Engineering', context: 'UC San Diego Project Work' },
  { name: 'Ideal Gas Simulation', domain: 'MATLAB', context: 'UC San Diego Project Work' },
  { name: 'Ant vs. Doodlebug', domain: 'C++', context: 'UC San Diego Project Work' },
  { name: 'Employee Paycheck & Deques', domain: 'C++ / Java', context: 'UC San Diego Project Work' },
  { name: '2048 Game Implementation', domain: 'Java', context: 'UC San Diego Project Work' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'data-engineering',
    category: 'Languages, Data Engineering & Platforms',
    sourceNote: 'Documented in About Me (_pages/about.md) & 2024 Resume',
    description: 'Core languages and distributed data tools used across production data engineering and backend services.',
    skills: ['Python', 'SQL', 'PySpark', 'Flask / FastAPI', 'PostgreSQL', 'Kafka', 'Hadoop', 'Airflow'],
  },
  {
    id: 'cloud-analytics',
    category: 'Cloud, Machine Learning & Visualization',
    sourceNote: 'Documented in About Me (_pages/about.md) & 2024 Resume',
    description: 'Cloud infrastructure, scientific Python libraries, deep learning frameworks, and business intelligence tools.',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'NumPy & Pandas', 'Matplotlib', 'TensorFlow & Keras', 'PowerBI & Tableau'],
  },
  {
    id: 'scientific-systems',
    category: 'Scientific Computing, Simulation & Compiled Languages',
    sourceNote: 'Documented in 2024 Resume (Core Skills)',
    description: 'Multiphysics engineering simulation, chemical process modeling, and compiled systems languages.',
    skills: ['MATLAB', 'COMSOL Multiphysics', 'Aspen', 'C++', 'Java', 'C / HTML / CSS / JavaScript'],
  },
  {
    id: 'experimental-lab',
    category: 'Battery Formation & Materials Characterization',
    sourceNote: 'Documented in 2024 Resume (Tesla, Rivian & UCSD Nanoengineering)',
    description: 'Electrochemical cell formation protocols and physical/chemical materials characterization techniques.',
    skills: ['Battery Cyclers & Coin Cell Assembly', '4680 & SEI Formation Protocols', 'UV-Vis-NIR Spectroscopy', 'XRD, FTIR & NMR', 'Glove Box & Vacuum Oven', 'ROTAP Sieving & Cell Teardown'],
  },
];

export const teachingCourses: TeachingCourse[] = [
  {
    code: 'CSE 8A',
    title: 'Introduction to Programming in Python',
    type: 'Undergraduate Course',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    summary:
      'Undergraduate computer science course introducing algorithmic formulation, Python programming, data structures, memory models, and program debugging.',
    learningOutcomes: [
      'Read a computational problem and formulate an algorithm to solve that problem.',
      'Describe the functionality of a program that you or someone else has written.',
      'Write simple Python programs using variables, functions, conditional statements, and loops.',
      'Store data in a program using data structures like lists, tuples, and dictionaries.',
      'Use memory models to trace the state of data during a program’s execution.',
      'Debug and test Python programs that you or someone else has written.',
      'Describe ways in which computer science plays a role in society and in other scientific disciplines.',
    ],
    toolsAndTopics: ['Python', 'Algorithmic Formulation', 'Memory Models', 'Lists, Tuples & Dictionaries', 'Debugging & Testing'],
  },
  {
    code: 'CSE 20',
    title: 'Undergraduate Computer Science Course (CSE 20)',
    type: 'Undergraduate Course',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    summary:
      'Undergraduate course in the Department of Computer Science and Engineering at UC San Diego.',
    sourceNote:
      'Archival Note: The legacy repository record (_teaching/2015-spring-teaching-2.md) lists the course title (CSE 20), department, and San Diego location, but contains placeholder body text rather than a full syllabus.',
    learningOutcomes: [],
    toolsAndTopics: ['UC San Diego CSE', 'Undergraduate Instruction'],
  },
];

export const recommendationLetterPolicy = {
  title: 'Recommendation Letters',
  lead: "I provide recommendation letters for individuals I have worked with directly as colleagues, students, or collaborators. If you have worked with me at Stripe, Tesla, in agricultural projects, or as a student in my classes, I am happy to support your next career step.",
  philosophy:
    'A strong recommendation letter requires that I know your work well and can speak credibly to your skills and accomplishments.',
  eligibleGroups: [
    {
      group: 'Former Colleagues',
      detail: 'Colleagues from Stripe, Tesla, Rivian, ATOM Science, or agricultural projects.',
    },
    {
      group: 'Students',
      detail: 'Students who have taken my classes or participated in my teaching programs at UC San Diego.',
    },
    {
      group: 'Collaborators',
      detail: 'Collaborators on data engineering, agricultural technology, or research projects.',
    },
    {
      group: 'Field Trial Team Members',
      detail: 'Team members from agricultural demonstration plots and field trials.',
    },
  ],
  credibleAreas: [
    'Data engineering and pipeline development (Python, SQL, PySpark, Kafka, Airflow)',
    'Cloud platforms and infrastructure (AWS, GCP, Docker, Kubernetes)',
    'Agricultural technology and IoT systems',
    'Data analytics and visualization',
    'Technical leadership and mentorship',
  ],
  requiredMaterials: [
    {
      step: '01',
      title: 'Your Current Resume / CV',
      detail: 'An up-to-date PDF or link summarizing your academic and professional record.',
    },
    {
      step: '02',
      title: 'The Opportunity Details',
      detail: 'Position description, graduate program requirements, and exact submission deadline.',
    },
    {
      step: '03',
      title: 'Our Connection & Timeframe',
      detail: 'How we worked together and the timeframe of our collaboration or course.',
    },
    {
      step: '04',
      title: 'Specific Projects or Accomplishments',
      detail: 'Concrete work or milestones you would like me to highlight.',
    },
    {
      step: '05',
      title: 'Draft Talking Points (Optional)',
      detail: 'Key strengths or experiences you want emphasized.',
    },
  ],
  timelineNotice:
    'Please request letters at least 3–4 weeks before the deadline. This ensures I have adequate time to write a thoughtful, detailed recommendation.',
  contactEmail: 'putrawibisonos@gmail.com',
  subjectLine: 'Recommendation Letter Request',
};
