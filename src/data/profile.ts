export interface ExperienceItem {
  id: string;
  role: string;
  secondaryRole?: string;
  organization: string;
  domainTag: string;
  location: string;
  period: string;
  periodNote?: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
  metricsOrArtifacts?: { label: string; value: string }[];
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
  category: 'Agri-Tech & IoT' | 'Data & Battery Systems' | 'Scientific Computing & Materials' | 'Software Engineering';
  organizationOrContext: string;
  period: string;
  featured: boolean;
  image?: string;
  imageCaption?: string;
  diagramType: 'agritech-pipeline' | 'battery-telemetry' | 'spectroscopy-bandgap' | 'lpcvd-reactor' | 'gitlet-dag' | 'signal-processing';
  summary: string;
  challenge: string;
  architectureAndApproach: string[];
  outcomes: string[];
  technologies: string[];
  codeAvailabilityNote?: string;
}

export interface SkillGroup {
  id: string;
  code: string;
  category: string;
  description: string;
  skills: { name: string; tier: 'Primary' | 'Proficient' | 'Applied' }[];
}

export interface TeachingCourse {
  code: string;
  title: string;
  type: string;
  institution: string;
  department: string;
  location: string;
  summary: string;
  learningOutcomes: string[];
  toolsAndTopics: string[];
}

export const siteMetadata = {
  name: 'Putra Wibisono',
  monogram: 'PW',
  title: 'Putra Wibisono — Agri-Tech Entrepreneur & Senior Data Engineer',
  headline: 'Cofounder of Agricultural Technologies. Ex-Stripe, Ex-Tesla.',
  subheadline:
    'Former Senior Data Engineer turned agri-tech entrepreneur—bridging large-scale distributed data systems, machine learning, and field-level precision agriculture.',
  shortBio:
    'Cofounder of Agricultural Technologies. Ex-Stripe, Ex-Tesla. Passionate about ML/AI, reliable data infrastructure, and sustainable food systems.',
  siteUrl: 'https://putrawibisono.com',
  githubPagesUrl: 'https://putrawibisono.github.io',
  email: 'president@agrosindustry.com',
  affiliation: 'UC Berkeley (M.Eng.) · UC San Diego (B.S.)',
  location: 'Berkeley, CA & Indonesia',
  githubUsername: 'EytaW',
  githubUrl: 'https://github.com/EytaW',
  repoGithubUrl: 'https://github.com/putrawibisono',
  statusBadge: 'Building Agricultural Technology Systems · Open to Research & Industry Collaboration',
};

export const heroStats = [
  {
    code: '01 // DATA SYSTEMS',
    value: 'Ex-Stripe & Tesla',
    label: 'Senior Data Engineering & Real-Time Manufacturing Telemetry',
  },
  {
    code: '02 // AGRI-TECH',
    value: 'Agros Industry',
    label: 'IoT Field Pipelines, Satellite Analytics & Organic Fertilizer Trials',
  },
  {
    code: '03 // ACADEMIC FOUNDATION',
    value: 'UC Berkeley & UCSD',
    label: 'M.Eng. Materials Science & Data Science (3.92 GPA) · B.S. ChemE & CS',
  },
];

export const biographyNarrative = {
  lead: "I'm Putra Wibisono—a former Senior Data Engineer turned agri-tech entrepreneur (Ex-Stripe, Ex-Tesla).",
  paragraphs: [
    'I started my career in data engineering and physical process analytics, where I built and optimized large-scale data pipelines across financial infrastructure, electric vehicle battery manufacturing, and computational drug discovery. My focus has always been on making high-volume, noisy data clean, reliable, and actionable so engineers and decision-makers can move fast and with confidence.',
    'At Stripe, I designed and managed scalable services and unified source-of-truth data pipelines with strict privacy and security controls. Earlier at Tesla, I served as a Senior Data Engineer (P3) and Data Engineer (P2), where I architected the FAST (Formation Analytics Screening Toolbox) library, maintained the real-time RAPID dashboard for Gigafactory Berlin and Austin production lines, and validated 4680 Cybercell and Drycell formation recipes.',
    'Today, I am channeling that technical foundation into something deeply personal and impactful: agriculture. Operating at the intersection of distributed data systems and soil science, I help farmers, agronomists, and institutional partners adopt evidence-based fertilizer strategies, monitor crop yields, and optimize long-term soil health.',
  ],
  currentInitiativesTitle: 'Current Focus in Agricultural Technology',
  currentInitiatives: [
    {
      code: 'AG-01',
      title: 'Satellite & IoT Telemetry Pipelines',
      description:
        'Developing end-to-end IoT data pipelines to track field conditions (soil pH, moisture, and nutrient profiles), paired with historical satellite imaging analysis for initial baseline field characterization.',
    },
    {
      code: 'AG-02',
      title: 'Demonstration Plot Trials & Yield Validation',
      description:
        'Designing and running rigorous demonstration plot trials to empirically validate organic fertilizer formulations and quantify crop productivity gains under real-world field conditions.',
    },
    {
      code: 'AG-03',
      title: 'Transparent Institutional Reporting',
      description:
        'Building automated analytics and reporting platforms that deliver auditable, transparent agricultural metrics for government agencies and industry stakeholders.',
    },
    {
      code: 'AG-04',
      title: 'Digital Monitoring & Farmer Enablement',
      description:
        'Developing value-added digital services, agronomic monitoring workflows, and field training programs to bridge modern data tools with day-to-day farming operations.',
    },
  ],
  philosophyQuote:
    'Bridging advanced data systems with real-world agriculture—proving that the same engineering rigor applied in high-scale tech can drive sustainability and food security.',
};

export const experienceList: ExperienceItem[] = [
  {
    id: 'agros-industry',
    role: 'Cofounder',
    organization: 'Agros Industry (Agricultural Technologies)',
    domainTag: 'Agri-Tech · IoT & Satellite Data Systems',
    location: 'Indonesia / Berkeley, CA',
    period: 'Current Venture',
    isCurrent: true,
    summary:
      'Leading technical architecture and field operations at the intersection of precision data engineering and sustainable agriculture—helping farmers and institutional partners optimize fertilizer strategies, monitor yields, and restore soil health.',
    highlights: [
      'Architecting IoT sensor ingestion pipelines to continuously track field conditions (pH, moisture, macronutrients), integrated with historical satellite imagery for baseline spatial analysis.',
      'Directing controlled demonstration plot trials to validate organic fertilizers and establish statistically grounded productivity benchmarks.',
      'Engineering transparent reporting and analytics tools tailored for government ministries and agricultural industry partners.',
      'Designing farmer training initiatives and accessible digital platforms for ongoing crop and soil health monitoring.',
    ],
    technologies: ['Python', 'SQL', 'IoT Telemetry', 'Satellite Imagery Analysis', 'PostgreSQL', 'FastAPI', 'PowerBI / Tableau'],
    metricsOrArtifacts: [
      { label: 'Core Telemetry', value: 'pH · Moisture · Nutrients + Satellite' },
      { label: 'Validation Method', value: 'Controlled Demo Plot Trials' },
    ],
  },
  {
    id: 'stripe',
    role: 'Senior Data Engineer',
    organization: 'Stripe',
    domainTag: 'Financial Infrastructure · Enterprise Data Platform',
    location: 'Remote',
    period: 'Post-Tesla Tenure',
    periodNote: 'Exact start/end months omitted in source CV; flagged for optional date refinement.',
    summary:
      'Designed, developed, and operated high-reliability data services, governed pipelines, and centralized source-of-truth datasets supporting internal employee and organizational systems.',
    highlights: [
      'Designed, developed, and managed scalable services, data pipelines, tools, and systems for internal employee information.',
      'Implemented robust controls and strong security measures across pipelines to guarantee high data accuracy and strict privacy compliance.',
      'Collaborated with cross-functional engineering and operations teams to build carefully scoped shared datasets, establishing a unified organizational source of truth.',
      'Delivered accurate, dependable, and timely data streams while partnering with diverse stakeholders and subject-matter experts.',
    ],
    technologies: ['Python', 'SQL', 'PySpark', 'Airflow', 'Kafka', 'AWS / Cloud Infrastructure', 'Data Governance & Privacy'],
    metricsOrArtifacts: [
      { label: 'Architecture', value: 'Centralized Source-of-Truth Pipelines' },
      { label: 'Compliance', value: 'Strict Privacy & Security Controls' },
    ],
  },
  {
    id: 'tesla',
    role: 'Sr. Data Engineer (P3) & Data Engineer (P2)',
    secondaryRole: 'Also documented as Data Scientist (Battery Cell Formation & Manufacturing)',
    organization: 'Tesla, Inc.',
    domainTag: 'EV Battery Manufacturing · 4680 Cell & Factory Analytics',
    location: 'Fremont, CA (Supporting Austin GFTX & Berlin Gigafactories)',
    period: 'May 2023 – Dec 2024',
    periodNote: 'Data Engineer (P2): May 2023 – Apr 2024 · Sr. Data Engineer (P3): Apr 2024 – Dec 2024',
    summary:
      'Owned core battery formation analytics platforms, real-time multi-gigafactory dashboards, ML cell performance simulations, and 4680 Cybercell/Drycell recipe validation workflows.',
    highlights: [
      'Built and maintained the FAST (Formation Analytics Screening Toolbox) library enabling data scientists and engineers to deep-dive into new formation development recipes and reach deterministic trial conclusions.',
      'Developed and maintained the RAPID real-time telemetry dashboard for Gigafactory Berlin and Austin (GFTX) process engineers to drive live production-line adjustments.',
      'Developed and validated 4680 Cybercell and Drycell formation recipes (4680C/D Build) for GFTX manufacturing, alongside API call-and-sync recipe management systems that accelerated R&D trial throughput.',
      'Engineered automated early defect detection during End of Life (EoL) testing and conducted formation metric audits to isolate machine errors, establishing vendor scoring parameters for business analytics teams.',
      'Implemented continuous factory data streams (temperature, pH, electrical current) for the Milmont facility into AWS databases, and developed proprietary Generation 4 & 5 ML models simulating Model 3 and Model Y battery performance across cell vendors.',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'PySpark', 'ML Simulation (Gen 4/5)', 'REST APIs', 'FAST Toolbox', 'RAPID Dashboard'],
    metricsOrArtifacts: [
      { label: 'Key Systems', value: 'FAST Library & RAPID Real-Time Dashboard' },
      { label: 'Cell Programs', value: '4680 Cybercell/Drycell · Model 3/Y' },
    ],
  },
  {
    id: 'atom-science',
    role: 'Data Scientist / Data Science Intern',
    organization: 'ATOM Science (ATOM Research)',
    domainTag: 'Computational Drug Discovery · Molecular ML',
    location: 'San Francisco, CA',
    period: 'Sep 2022 – May 2023',
    summary:
      'Applied machine learning, transfer learning, and active learning to molecular property prediction and high-throughput virtual screening for wet-lab drug discovery.',
    highlights: [
      'Curated large-scale drug discovery datasets in Python and trained machine learning models to predict key molecular and physicochemical properties.',
      'Investigated transfer learning and active learning strategies to maximize predictive signal across sparse, high-dimensional chemical datasets.',
      'Screened large molecular databases to rank and identify optimal candidate compounds to advance into wet-lab experimental validation.',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Transfer Learning', 'Active Learning'],
    metricsOrArtifacts: [
      { label: 'ML Paradigm', value: 'Transfer & Active Learning' },
      { label: 'Application', value: 'Wet-Lab Candidate Screening' },
    ],
  },
  {
    id: 'rivian',
    role: 'Process Development Engineer, Formation',
    organization: 'Rivian',
    domainTag: 'EV Battery Formation · Electrochemical Diagnostics',
    location: 'Irvine, CA',
    period: 'Sep 2021 – Sep 2022',
    summary:
      'Developed proprietary battery cell formation recipes and predictive Solid Electrolyte Interphase (SEI) anomaly detection protocols for Rivian vehicle platforms.',
    highlights: [
      'Developed proprietary cell formation recipes for R1S, R2, and R3 vehicle programs, achieving higher charging compatibility with the Tesla Supercharger network.',
      'Created predictive diagnostic protocols to identify Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
      'Deployed 6 validated formation recipes (4 development recipes and 2 full production recipes) that served as the standard manufacturing baseline from December 2021 to December 2022.',
    ],
    technologies: ['Battery Formation', 'SEI Anomaly Detection', 'Electrochemical Testing', 'Python / MATLAB', 'Process Control'],
    metricsOrArtifacts: [
      { label: 'Production Impact', value: '6 Deployed Recipes (1-Yr Standard)' },
      { label: 'Vehicle Programs', value: 'R1S · R2 · R3' },
    ],
  },
  {
    id: 'ucsd-nanoengineering',
    role: 'Undergraduate Research Assistant',
    organization: 'UC San Diego — Department of Nanoengineering (Battery Engineering Lab)',
    domainTag: 'Electrochemical Energy Storage & Materials Characterization',
    location: 'San Diego, CA',
    period: 'Sep 2020 – Jun 2021',
    summary:
      'Conducted experimental battery cell assembly, cathode material synthesis, spectroscopic characterization, and cell teardown/recycling research.',
    highlights: [
      'Assembled coin cells inside argon glove boxes and executed electrochemical cycling protocols on automated battery cyclers.',
      'Synthesized and prepared cathode active materials and performed physical/chemical characterization via XRD, FTIR, NMR, vacuum oven processing, and ROTAP particle sieving.',
      'Executed cell harvesting and teardown workflows to recover cathode, separator, and electrolyte components for direct battery recycling studies.',
    ],
    technologies: ['Coin Cell Assembly', 'Electrochemical Cycling', 'XRD', 'FTIR', 'NMR', 'Battery Recycling'],
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
    honorsOrGpa: 'Major GPA: 3.92 / 4.00',
    focusAreas: [
      'Data Science & Machine Learning for Physical Systems',
      'Semiconductor & Energy Storage Materials',
      'Computational Modeling & Experimental Characterization',
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
      'Transport Phenomena, Reaction Engineering & Process Simulation (COMSOL, Aspen)',
      'Data Structures, Algorithms & Systems Programming (C++, Java, Python)',
      'Nanoengineering Battery Research & Undergraduate CSE Instruction',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    slug: 'agritech-iot-satellite-intelligence',
    index: '01',
    title: 'Agri-Tech IoT & Satellite Field Intelligence Platform',
    subtitle: 'Fusing in-situ soil telemetry, satellite earth observation, and demonstration plot trials for precision agriculture.',
    category: 'Agri-Tech & IoT',
    organizationOrContext: 'Agros Industry (Agricultural Technologies)',
    period: '2025 – Present',
    featured: true,
    diagramType: 'agritech-pipeline',
    summary:
      'An end-to-end agricultural data platform combining historical satellite imagery with field-deployed IoT sensor streams (pH, moisture, nutrients) and controlled organic fertilizer trial analytics.',
    challenge:
      'Smallholder and commercial agricultural operations often rely on uniform fertilizer application without baseline spatial soil diagnostics or verifiable yield tracking, leading to nutrient runoff, degraded soil health, and opaque supply-chain reporting.',
    architectureAndApproach: [
      'Stage 1 — Historical Satellite Baseline: Ingests multi-temporal satellite imagery prior to sensor installation to map vegetation vigor, moisture gradients, and historical field variability.',
      'Stage 2 — In-Situ IoT Telemetry Pipeline: Streams field-level sensor readings (soil pH, volumetric moisture, and nutrient indicators) into structured relational and analytical stores.',
      'Stage 3 — Demonstration Plot Trial Engine: Tracks side-by-side organic fertilizer validation plots to isolate treatment effects and quantify productivity gains.',
      'Stage 4 — Stakeholder Reporting & Training Layer: Generates transparent, auditable dashboards for government and industry partners alongside actionable guidance for farmer training programs.',
    ],
    outcomes: [
      'Establishes a unified data pipeline from pre-deployment satellite reconnaissance to real-time in-field soil monitoring.',
      'Provides empirical, reproducible productivity metrics for organic fertilizer adoption across demonstration trials.',
      'Delivers transparent reporting interfaces for institutional, government, and agribusiness stakeholders.',
    ],
    technologies: ['Python', 'SQL', 'IoT Sensor Pipelines', 'Satellite Imagery Analysis', 'PostgreSQL', 'FastAPI', 'PowerBI', 'Tableau'],
  },
  {
    slug: 'tesla-fast-rapid-battery-telemetry',
    index: '02',
    title: 'FAST Screening Library & RAPID Multi-Factory Telemetry',
    subtitle: 'Deterministic battery formation analytics, real-time Gigafactory dashboards, and 4680 cell recipe systems.',
    category: 'Data & Battery Systems',
    organizationOrContext: 'Tesla, Inc. (Fremont · Austin GFTX · Berlin)',
    period: '2023 – 2024',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Production data engineering and analytical systems built at Tesla to evaluate 4680 Cybercell/Drycell formation trials, stream real-time factory metrics, and detect End-of-Life (EoL) cell anomalies.',
    challenge:
      'High-volume battery cell manufacturing generates massive electrochemical and environmental telemetry streams across multiple factories. Process and R&D engineers needed deterministic screening tools to evaluate experimental formation recipes rapidly and real-time visibility to adjust live production lines.',
    architectureAndApproach: [
      'FAST (Formation Analytics Screening Toolbox): Architected a standardized Python analytics library enabling data scientists and engineers to deep-dive into experimental formation recipes and compute deterministic pass/fail trial conclusions.',
      'RAPID Real-Time Dashboard: Developed and maintained live operational dashboards for Gigafactory Berlin and Austin process engineers to monitor critical production metrics and execute timely line adjustments.',
      '4680C/D Recipe Sync & Milmont AWS Streams: Built API call-and-sync recipe management systems supporting 4680 Cybercell and Drycell builds, and engineered real-time temperature, pH, and current data streams into AWS.',
      'Gen 4/5 ML Simulation & EoL Defect Detection: Developed proprietary ML models simulating Model 3/Y battery performance across cell vendors and automated End-of-Life early defect detection to drive vendor scoring.',
    ],
    outcomes: [
      'Accelerated R&D output for 4680 Battery Cells through automated API recipe synchronization and deterministic trial screening via FAST.',
      'Empowered Berlin and Austin process engineering teams with real-time production line visibility through the RAPID dashboard.',
      'Improved data reliability by isolating machine measurement errors and establishing quantitative vendor scoring parameters.',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'PySpark', 'Machine Learning (Gen 4/5)', 'REST APIs', 'Real-Time Telemetry'],
  },
  {
    slug: 'uv-vis-semiconductor-spectroscopy',
    index: '03',
    title: 'Semiconductor Thin-Film Band Gap Analysis via UV-Vis Spectroscopy',
    subtitle: 'Dual-spectrometer optical absorption pipeline for determining electronic band gaps in semiconductor thin films.',
    category: 'Scientific Computing & Materials',
    organizationOrContext: 'Materials Science & Engineering',
    period: 'Academic & Laboratory Research',
    featured: true,
    image: '/images/portfolio1.jpg',
    imageCaption: 'Laboratory setup featuring the Shimadzu SolidSpec-3700 UV-Vis-NIR Spectrophotometer and optical reference standards used for thin-film characterization.',
    diagramType: 'spectroscopy-bandgap',
    summary:
      'Experimental and computational workflow integrating optical transmission and reflectance data from two UV-Vis-NIR spectrometers to extract absorption coefficients and optical band gaps of semiconductor thin films.',
    challenge:
      'Accurately resolving the optical band gap of semiconductor thin films across wide spectral ranges requires reconciling detector transitions, baseline drift, and substrate interference across multiple spectrometer instruments.',
    architectureAndApproach: [
      'Dual-Spectrometer Acquisition: Collected spectral transmittance and reflectance measurements across ultraviolet, visible, and near-infrared regimes (including Shimadzu SolidSpec-3700 instrumentation).',
      'Spectral Calibration & Stitching: Normalized baseline references and reconciled cross-instrument spectral response curves to construct continuous absorption spectra.',
      'Tauc Plot & Band-Gap Extraction: Computed optical absorption coefficients (α) as a function of photon energy (hν) to identify direct and indirect semiconductor band-gap transitions.',
    ],
    outcomes: [
      'Enabled high-confidence band-gap characterization across semiconductor thin-film samples by cross-validating dual UV-Vis spectrometer datasets.',
      'Preserved and documented with authentic laboratory instrumentation photography from the experimental workstation.',
    ],
    technologies: ['Python', 'MATLAB', 'UV-Vis-NIR Spectroscopy', 'Shimadzu SolidSpec-3700', 'Optical Physics', 'Data Calibration'],
  },
  {
    slug: 'lpcvd-wafer-reactor-modeling',
    index: '04',
    title: 'LPCVD Silicon Wafer Reactor Uniformity Modeling',
    subtitle: 'coupled fluid dynamics, heat/mass transfer simulation, and 2^k factorial Design of Experiments in COMSOL & MATLAB.',
    category: 'Scientific Computing & Materials',
    organizationOrContext: 'Chemical Engineering Capstone / Research',
    period: 'Mar 2021 – Jun 2021',
    featured: true,
    diagramType: 'lpcvd-reactor',
    summary:
      'Computational design and optimization of a Low Pressure Chemical Vapor Deposition (LPCVD) boat reactor achieving near-100% silicon wafer deposition uniformity.',
    challenge:
      'Precursor depletion and thermal gradients along multi-wafer LPCVD quartz tube reactors cause thickness non-uniformity across silicon wafers, reducing semiconductor device yield.',
    architectureAndApproach: [
      'Coupled Multiphysics Simulation: Modeled laminar gas flow, radiative/conductive heat transfer, and surface reaction mass transfer inside a multi-wafer boat reactor using COMSOL Multiphysics.',
      '2^k Factorial Design of Experiments (DoE): Executed a systematic 2^k factorial screening study to quantify main effects and parameter interactions (pressure, temperature profile, precursor flow rate, wafer spacing).',
      '2D & 3D Wafer Uniformity Rendering: Built MATLAB post-processing pipelines to render 2D and 3D spatial deposition profiles and communicate optimal operating windows.',
    ],
    outcomes: [
      'Designed a boat reactor configuration achieving nearly 100% deposition uniformity across silicon wafer surfaces.',
      'Identified critical sensitivity parameters via 2^k DoE analysis to guide reactor engineering decisions.',
    ],
    technologies: ['COMSOL Multiphysics', 'MATLAB', '2^k Design of Experiments', 'Fluid Dynamics', 'Heat & Mass Transfer'],
    codeAvailabilityNote: 'Simulation reports and MATLAB analysis scripts available upon request.',
  },
  {
    slug: 'gitlet-version-control-engine',
    index: '05',
    title: 'Gitlet — Distributed Version Control System in Java',
    subtitle: 'Content-addressable object store, O(n) branching data structures, and three-way merge resolution.',
    category: 'Software Engineering',
    organizationOrContext: 'Computer Science Systems Engineering',
    period: 'July 2022',
    featured: false,
    diagramType: 'gitlet-dag',
    summary:
      'A clean-room Java implementation of Git’s core distributed version-control architecture, supporting content-addressable persistence, branching, history traversal, and automated merge conflict detection.',
    challenge:
      'Replicating Git’s snapshot persistence model requires designing deterministic cryptographic serialization, efficient directed acyclic graph (DAG) commit traversal, and O(n) branch management on top of raw filesystem primitives.',
    architectureAndApproach: [
      'Command & CLI Abstraction: Implemented core porcelain commands (`init`, `add`, `commit`, `checkout`, `status`, `log`, `global-log`, `find`, `branch`, `rm-branch`, `reset`, `merge`).',
      'Content-Addressable Persistence: Designed blob and commit serialization structures allowing users to deterministically revert files or entire working trees to any historical commit.',
      'O(n) Branching & Split-Point Graph Search: Engineered commit DAG data structures supporting O(n) branch operations and lowest-common-ancestor (LCA) split-point resolution for three-way merges.',
    ],
    outcomes: [
      'Delivered a complete, persistent CLI version-control system with full branching, checkout, and merge conflict handling.',
      'View-only source code available upon direct email request to maintain academic integrity standards.',
    ],
    technologies: ['Java', 'Data Structures & Graphs', 'Cryptographic Hashing (SHA-1)', 'File System Persistence', 'CLI Design'],
    codeAvailabilityNote: 'View-only code available upon email request (per academic integrity policy).',
  },
  {
    slug: 'signal-and-image-processing-systems',
    index: '06',
    title: 'Acoustic Spatiotemporal Mapping & Digital Image Processing',
    subtitle: 'G-Code motorized sensor scanning, PWM analog reconstruction, and quantitative video/image signal analysis.',
    category: 'Scientific Computing & Materials',
    organizationOrContext: 'Quantitative Signal & Image Processing Labs',
    period: 'Feb 2020 – Apr 2020',
    featured: false,
    diagramType: 'signal-processing',
    summary:
      'Hardware-in-the-loop MATLAB and Arduino instrumentation suite for mapping the spatiotemporal acoustic field of a speaker and performing quantitative digital video/image characterization.',
    challenge:
      'Capturing high-SNR spatial acoustic profiles and quantitative digital imaging measurements requires synchronized motion control, analog signal conditioning, and rigorous treatment of sampling rate, quantization, and aliasing constraints.',
    architectureAndApproach: [
      'Automated G-Code Spatial Scanning: Programmed Arduino motor/driver stages via G-Code to position acoustic sensors reproducibly across a 2D/3D measurement grid.',
      'Signal Conditioning & SNR Enhancement: Applied time-domain ensemble averaging to suppress stochastic noise and implemented Pulse Width Modulation (PWM) + low-pass filtering for digital-to-analog signal conversion.',
      'Quantitative Digital Image Processing: Evaluated amplitude, spatial resolution, and temporal sampling limits across digital video camera feeds in MATLAB.',
    ],
    outcomes: [
      'Reconstructed full spatiotemporal acoustic output fields with significantly enhanced signal-to-noise ratio (SNR).',
      'Demonstrated end-to-end digital-to-analog hardware control and quantitative image characterization in MATLAB.',
    ],
    technologies: ['MATLAB', 'Arduino', 'G-Code Motion Control', 'Signal Conditioning (PWM / Low-Pass)', 'Digital Image Processing'],
    codeAvailabilityNote: 'View-only MATLAB & Arduino source code available upon request.',
  },
];

export const additionalEngineeringProjects = [
  { name: 'Molecular Property Prediction (Active & Transfer Learning)', domain: 'Python · TensorFlow/Keras', context: 'ATOM Science' },
  { name: 'Catalytic Bed Reactor Simulation', domain: 'Chemical Engineering', context: 'Reactor Modeling' },
  { name: 'Hydrogen on Demand System', domain: 'Chemical Engineering', context: 'Energy Systems' },
  { name: 'Ideal Gas Molecular Simulation', domain: 'MATLAB', context: 'Statistical Thermodynamics' },
  { name: 'Ant vs. Doodlebug Cellular Automata', domain: 'C++', context: 'Object-Oriented Simulation' },
  { name: 'Employee Paycheck & Double-Ended Queues (Deques)', domain: 'C++ / Java', context: 'Data Structures' },
  { name: '2048 Game Engine', domain: 'Java', context: 'State-Machine & GUI Logic' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'data-engineering',
    code: 'SYS // 01',
    category: 'Data Engineering & Distributed Platforms',
    description: 'Designing fault-tolerant batch and streaming data pipelines, centralized sources of truth, and backend APIs.',
    skills: [
      { name: 'Python', tier: 'Primary' },
      { name: 'SQL', tier: 'Primary' },
      { name: 'PySpark', tier: 'Primary' },
      { name: 'Apache Kafka', tier: 'Primary' },
      { name: 'Apache Airflow', tier: 'Primary' },
      { name: 'PostgreSQL', tier: 'Primary' },
      { name: 'Hadoop', tier: 'Proficient' },
      { name: 'Flask / FastAPI', tier: 'Primary' },
    ],
  },
  {
    id: 'cloud-infra',
    code: 'SYS // 02',
    category: 'Cloud Infrastructure & Telemetry',
    description: 'Deploying containerized services, cloud data warehouses, and real-time factory or agricultural IoT streams.',
    skills: [
      { name: 'AWS', tier: 'Primary' },
      { name: 'Google Cloud (GCP)', tier: 'Primary' },
      { name: 'Docker', tier: 'Primary' },
      { name: 'Kubernetes', tier: 'Proficient' },
      { name: 'IoT Telemetry Pipelines', tier: 'Primary' },
      { name: 'Data Governance & Privacy Controls', tier: 'Primary' },
    ],
  },
  {
    id: 'ml-analytics',
    code: 'SYS // 03',
    category: 'Machine Learning, Analytics & Visualization',
    description: 'Predictive modeling for battery cells, molecular screening, satellite earth observation, and executive reporting.',
    skills: [
      { name: 'Pandas & NumPy', tier: 'Primary' },
      { name: 'TensorFlow & Keras', tier: 'Proficient' },
      { name: 'Transfer & Active Learning', tier: 'Proficient' },
      { name: 'PowerBI', tier: 'Primary' },
      { name: 'Tableau', tier: 'Primary' },
      { name: 'Matplotlib', tier: 'Primary' },
    ],
  },
  {
    id: 'scientific-computing',
    code: 'SYS // 04',
    category: 'Scientific Computing, Simulation & Systems Languages',
    description: 'Multiphysics process simulation, electrochemical battery diagnostics, and compiled systems programming.',
    skills: [
      { name: 'MATLAB', tier: 'Primary' },
      { name: 'COMSOL Multiphysics', tier: 'Proficient' },
      { name: 'Aspen Plus', tier: 'Proficient' },
      { name: 'Java', tier: 'Proficient' },
      { name: 'C++', tier: 'Proficient' },
      { name: 'C / HTML / CSS / JS', tier: 'Applied' },
    ],
  },
];

export const teachingCourses: TeachingCourse[] = [
  {
    code: 'CSE 8A',
    title: 'Introduction to Programming and Computational Problem-Solving I',
    type: 'Undergraduate Course',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    summary:
      'Foundational undergraduate computer science course introducing algorithmic thinking, Python programming, memory models, and systematic software debugging.',
    learningOutcomes: [
      'Read a computational problem and formulate an algorithm to solve that problem.',
      'Describe the functionality of a program that you or someone else has written.',
      'Write simple Python programs using variables, functions, conditional statements, and loops.',
      'Store data in a program using data structures like lists, tuples, and dictionaries.',
      'Use memory models to trace the state of data during a program’s execution.',
      'Debug and test Python programs that you or someone else has written.',
      'Describe ways in which computer science plays a role in society and in other scientific disciplines.',
    ],
    toolsAndTopics: ['Python', 'Algorithmic Formulation', 'Memory Models', 'Lists, Tuples & Dictionaries', 'Testing & Debugging'],
  },
  {
    code: 'CSE 20',
    title: 'Discrete Mathematics for Computer Science',
    type: 'Undergraduate Course',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    summary:
      'Core undergraduate mathematics course for computer science majors covering formal logic, proofs, set theory, relations, recursion, and discrete structures underpinning computation.',
    learningOutcomes: [
      'Construct and evaluate formal mathematical proofs, including direct proofs, contraposition, contradiction, and mathematical induction.',
      'Apply propositional and predicate logic to reason rigorously about algorithms and computational invariants.',
      'Analyze discrete structures including sets, functions, relations, equivalence classes, and modular arithmetic.',
    ],
    toolsAndTopics: ['Formal Logic', 'Mathematical Induction', 'Set Theory & Relations', 'Algorithmic Proofs', 'Discrete Structures'],
  },
];

export const recommendationLetterPolicy = {
  title: 'Recommendation Letters',
  lead: "I provide recommendation letters for individuals I have worked with directly as colleagues, students, or collaborators. If you've worked with me at Stripe, Tesla, in agricultural technology projects, or as a student in my classes, I'm happy to support your next career step.",
  philosophy:
    'A strong recommendation letter requires that I know your work well and can speak credibly to your technical skills, character, and accomplishments.',
  eligibleGroups: [
    {
      group: 'Former Colleagues',
      detail: 'Engineers, scientists, and cross-functional partners from Stripe, Tesla, or agricultural technology ventures.',
    },
    {
      group: 'Students',
      detail: 'Students who have taken my classes (such as CSE 8A or CSE 20 at UC San Diego) or participated in my teaching programs.',
    },
    {
      group: 'Project Collaborators',
      detail: 'Collaborators across data engineering, machine learning, battery systems, or agricultural technology research.',
    },
    {
      group: 'Field & Venture Team Members',
      detail: 'Team members from agricultural demonstration plots, field trials, and agri-tech engineering initiatives.',
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
      title: 'Opportunity Details & Deadlines',
      detail: 'Position description, graduate program requirements, submission portal method, and exact earliest deadline.',
    },
    {
      step: '03',
      title: 'Our Connection & Timeframe',
      detail: 'Context on how we worked together, the course or team, and the exact dates of our collaboration.',
    },
    {
      step: '04',
      title: 'Specific Projects & Accomplishments',
      detail: 'Concrete technical deliverables, trials, or coursework milestones you would like highlighted.',
    },
    {
      step: '05',
      title: 'Draft Talking Points (Optional)',
      detail: 'Key strengths, technical growth, or leadership themes you want emphasized for the target committee.',
    },
  ],
  timelineNotice:
    'Please request letters at least 3–4 weeks before the earliest deadline. This ensures I have adequate time to write a thoughtful, detailed recommendation.',
  contactEmail: 'president@agrosindustry.com',
  subjectLine: 'Recommendation Letter Request',
};
