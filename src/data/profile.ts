export interface ExperienceItem {
  id: string;
  role: string;
  secondaryRole?: string;
  organization: string;
  domainTag: string;
  location: string;
  period: string;
  periodNote?: string;
  statusType:
    | 'Current Responsibility'
    | 'Verified — Dec 2024 CV (cvsreal.pdf)'
    | 'Unverified — Legacy Website Only (Pending Confirmation)';
  summary: string;
  highlights: { label: string; detail: string; provenance?: 'Verified (cvsreal.pdf)' | 'Unverified (Legacy Website Only)' }[];
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
  provenanceLabel: string;
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
    | 'Software Engineering';
  statusLabel: 'Verified Industry System (cvsreal.pdf)' | 'Verified Engineering Project (cvsreal.pdf)';
  organizationOrContext: string;
  period: string;
  featured: boolean;
  diagramType:
    | 'battery-telemetry'
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
  provenanceStatus: 'Verified — Dec 2024 CV (cvsreal.pdf)' | 'Unverified — Legacy Website Only (Pending Confirmation)';
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
  provenanceStatus: 'Unverified — Modified AcademicPages Template File';
  templateFilename: string;
  summary: string;
  sourceNote: string;
  learningOutcomes: string[];
  toolsAndTopics: string[];
}

export const siteMetadata = {
  name: 'Putra Wibisono',
  monogram: 'PW',
  title: 'Putra Wibisono — Data Engineer, Materials Scientist & Business Operations',
  roleHeadline: 'Data Engineer & Materials Scientist · Ex-Tesla, Ex-Rivian',
  currentRoleTag: 'Business Operations & Strategy — Family-Owned Enterprise',
  subheadline:
    "My background spans data engineering, battery manufacturing, and materials science. I currently support business operations and strategic initiatives at my family's enterprise.",
  shortBio:
    "Data engineering, battery manufacturing, and materials science (Ex-Tesla, Ex-Rivian, UC Berkeley M.Eng., UC San Diego B.S.). Business Operations & Strategy at a family-owned enterprise.",
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
    label: 'Verified Industry Engineering (cvsreal.pdf)',
    primary: 'Tesla (P3/P2) · Rivian · ATOM Science',
    detail:
      'Sr. Data Engineer (P3) & Data Engineer (P2) at Tesla (FAST library, RAPID dashboard, 4680 API recipe systems); Process Development Engineer at Rivian (6 deployed formation recipes).',
  },
  {
    label: 'Current Role',
    primary: 'Business Operations & Strategy — Family-Owned Enterprise',
    detail:
      "Supporting operations and strategic initiatives at my family's agricultural enterprise, alongside exploratory concepts in field trial evaluation and stakeholder reporting.",
  },
  {
    label: 'Verified Academic Training (cvsreal.pdf)',
    primary: 'UC Berkeley (M.Eng.) · UC San Diego (B.S.)',
    detail:
      'M.Eng. in Materials Science & Engineering conc. Data Science (3.92 Major GPA, June 2023); B.S. in Chemical Engineering, Minor in Computer Science (June 2021).',
  },
];

export const biographyNarrative = {
  lead: "My background spans data engineering, battery manufacturing, and materials science. I currently support business operations and strategic initiatives at my family's agricultural enterprise.",
  paragraphs: [
    'My verified engineering record centers on battery manufacturing telemetry, cell formation protocols, and computational materials research. At Tesla (May 2023 – December 2024), I progressed from Data Engineer (P2) to Senior Data Engineer (P3), where I built the FAST (Formation Analytics Screening Toolbox) library, maintained the real-time RAPID telemetry dashboard for the Berlin and Austin Gigafactories, streamed Milmont facility sensor telemetry to AWS, and engineered API call-and-sync recipe workflows for 4680 battery cells.',
    'Prior to Tesla, I served as a Data Science Intern at ATOM Science in San Francisco (September 2022 – May 2023) while completing my M.Eng. at UC Berkeley, applying transfer learning and active learning in Python to screen molecular databases for drug discovery. Earlier, as a Process Development Engineer in Formation at Rivian (September 2021 – September 2022), I developed 6 deployed formation recipes (4 development, 2 production) for the R1S, R2, and R3 programs—serving as the standard baseline from December 2021 to December 2022—and authored precharge Solid Electrolyte Interphase (SEI) anomaly detection protocols.',
    "Today, I focus on Business Operations & Strategy at my family's enterprise. While legacy website drafts (_pages/about.md and _pages/cv.md) also mentioned an undated Senior Data Engineer role at Stripe and exploratory agricultural IoT/satellite concepts, this dossier explicitly distinguishes facts verified by my December 2024 CV (files/cvsreal.pdf) from legacy website-only claims pending independent confirmation.",
  ],
  currentInitiativesTitle: 'Exploratory Agricultural Concepts (Unverified — Legacy Website _pages/about.md Only)',
  currentInitiativesSubtitle:
    'The following items appeared in legacy _pages/about.md without independent technical documentation in files/cvsreal.pdf. They are presented strictly as exploratory concepts or proposed initiatives rather than active software engineering deployments:',
  currentInitiatives: [
    {
      status: 'Current Role',
      title: 'Business Operations & Strategy — Family-Owned Enterprise',
      description:
        "Supporting operational management, business coordination, and strategic planning at my family's enterprise (company name 'Agros Industry' inferred only from legacy domain agrosindustry.com; pending formal confirmation).",
    },
    {
      status: 'Exploratory / Proposed (Unverified)',
      title: 'Organic Fertilizer Demonstration Plot Trials',
      description:
        'Legacy website (_pages/about.md) referenced running demonstration plot trials to evaluate organic fertilizers and measure productivity gains (unverified by independent documentation; pending confirmation).',
    },
    {
      status: 'Exploratory Concept (Not Active Dev)',
      title: 'Field Condition IoT & Historical Satellite Baseline Concepts',
      description:
        'Legacy website (_pages/about.md) described a concept for tracking soil conditions (pH, moisture, nutrients) using historical satellite imaging as an initial baseline. Classified as an exploratory concept rather than active engineering development.',
    },
    {
      status: 'Exploratory / Proposed (Unverified)',
      title: 'Partner Reporting & Farmer Training Concepts',
      description:
        'Legacy website (_pages/about.md) noted exploring transparent reporting for government/industry partners, farmer training, and digital monitoring concepts (pending independent verification).',
    },
  ],
  philosophyQuote:
    'Applying the data integrity and experimental rigor of semiconductor and battery manufacturing to operational strategy and physical-world systems.',
};

export const experienceList: ExperienceItem[] = [
  {
    id: 'family-agricultural-business',
    role: 'Business Operations & Strategy',
    organization: 'Family-Owned Enterprise',
    domainTag: 'Business Operations · Strategic Initiatives',
    location: 'Indonesia',
    period: 'Current',
    periodNote:
      'Public role description per user direction ("Business Operations & Strategy — Family-Owned Enterprise"). Legacy files referenced the email domain agrosindustry.com; formal corporate title and entity name remain pending independent documentation.',
    statusType: 'Current Responsibility',
    summary:
      "Supporting business operations and strategic initiatives at my family's enterprise. Exploratory agricultural data and field-trial ideas mentioned on the legacy website are listed below as unverified concepts pending confirmation.",
    highlights: [
      {
        label: 'Business Operations & Strategy',
        detail:
          "Support operational management, coordination, and strategic initiatives at my family's agricultural enterprise.",
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Demonstration Plot Trials (Exploratory / Legacy Website Only)',
        detail:
          'Legacy _pages/about.md mentioned running demonstration plot trials to validate organic fertilizers and measure productivity gains (unverified by independent documentation).',
        provenance: 'Unverified (Legacy Website Only)',
      },
      {
        label: 'IoT & Satellite Baseline Concept (Exploratory / Not Active Dev)',
        detail:
          'Legacy _pages/about.md mentioned an exploratory concept for tracking field conditions (pH, moisture, nutrients) with historical satellite imaging as initial analysis; not presented as active software development.',
        provenance: 'Unverified (Legacy Website Only)',
      },
      {
        label: 'Partner Reporting & Advisory Concepts (Exploratory / Legacy Website Only)',
        detail:
          'Legacy _pages/about.md mentioned exploring partner reporting tools, farmer training, and digital monitoring platforms (unverified by independent documentation).',
        provenance: 'Unverified (Legacy Website Only)',
      },
    ],
    technologies: ['Business Operations', 'Strategic Planning', 'Exploratory Agricultural Concepts (Unverified)'],
  },
  {
    id: 'tesla',
    role: 'Sr. Data Engineer (P3) & Data Engineer (P2)',
    secondaryRole: 'Summarized as "Data Scientist" in unfinished legacy _pages/cv.md',
    organization: 'Tesla, Inc.',
    domainTag: 'EV Battery Manufacturing · 4680 Cell & Factory Telemetry',
    location: 'Fremont, CA (Supporting Berlin & Austin Gigafactories)',
    period: 'May 2023 – Dec 2024',
    periodNote:
      'Verified by independent December 2024 CV PDF (files/cvsreal.pdf): Data Engineer (P2) from May 2023 – April 2024; promoted to Sr. Data Engineer (P3) from April 2024 – December 2024.',
    statusType: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    summary:
      'Built battery formation screening libraries (FAST), real-time multi-gigafactory telemetry dashboards (RAPID), Generation 4/5 battery simulation models, and 4680 cell API recipe synchronization workflows.',
    highlights: [
      {
        label: 'FAST Screening Library (P3 · Verified in cvsreal.pdf)',
        detail:
          'Developed the FAST (Formation Analytics Screening Toolbox) library used by data scientists to deep-dive into new development recipes during battery formation and reach deterministic pass/fail trial conclusions.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'RAPID Live Factory Dashboard (P3 · Verified in cvsreal.pdf)',
        detail:
          'Developed and maintained the RAPID internal dashboard for Berlin and Austin Gigafactory sites, enabling process engineers to inspect real-time telemetry and make live production-line adjustments.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'EoL Defect Detection & Vendor Scoring (P3 · Verified in cvsreal.pdf)',
        detail:
          'Developed and assisted automated early defect detection during End of Line (EoL) testing and established vendor scoring parameters for business analytics teams.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Milmont AWS Streams, Gen 4/5 ML Models & 4680 API Sync (P2 · Verified in cvsreal.pdf)',
        detail:
          'Implemented temperature, pH, and electrical current data streams for the Milmont facility into AWS; developed proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors; and engineered API call-and-sync recipe systems giving rise to 4680 battery cells.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: '4680C/D Build Cybercell & Drycell Recipes (Unverified — Legacy _pages/cv.md Only)',
        detail:
          'Unfinished legacy webpage (_pages/cv.md) additionally listed: "Developed and validated 4680 Cybercell and Drycell recipes (4680C/D Build) for GFTX manufacturing." Flagged as website-only phrasing pending confirmation.',
        provenance: 'Unverified (Legacy Website Only)',
      },
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Simulation', 'REST APIs'],
  },
  {
    id: 'atom-science',
    role: 'Data Science Intern',
    secondaryRole: 'Listed as "Data Scientist — ATOM Research" in unfinished legacy _pages/cv.md',
    organization: 'ATOM Science',
    domainTag: 'Computational Drug Discovery · Molecular Machine Learning',
    location: 'San Francisco, CA',
    period: 'Sep 2022 – May 2023',
    periodNote:
      'Verified by independent December 2024 CV PDF (files/cvsreal.pdf). Unfinished legacy _pages/cv.md copied the exact same three bullets under the variant title "Data Scientist" and company name "ATOM Research".',
    statusType: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    summary:
      'Curated drug discovery datasets and trained transfer-learning and active-learning models in Python to screen molecular candidates for wet-lab testing during UC Berkeley M.Eng. graduate studies.',
    highlights: [
      {
        label: 'Molecular Property Prediction (Verified in cvsreal.pdf)',
        detail:
          'Used Python to curate drug discovery-related datasets and build machine learning models to predict molecular properties.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Transfer & Active Learning (Verified in cvsreal.pdf)',
        detail:
          'Used ML models to explore transfer learning and active learning techniques in order to maximize the predictive information extracted from chemical datasets.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Wet-Lab Candidate Screening (Verified in cvsreal.pdf)',
        detail:
          'Screened large databases of molecules to identify the best candidates to move into wet-lab experimental testing.',
        provenance: 'Verified (cvsreal.pdf)',
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
    periodNote: 'Verified by independent December 2024 CV PDF (files/cvsreal.pdf). Omitted from unfinished legacy _pages/cv.md.',
    statusType: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    summary:
      'Developed proprietary battery cell formation recipes for R1S, R2, and R3 vehicle programs and predictive Solid Electrolyte Interphase (SEI) anomaly detection protocols.',
    highlights: [
      {
        label: 'R1S, R2 & R3 Formation Recipes (Verified in cvsreal.pdf)',
        detail:
          'Developed proprietary formation recipes for R1S, R2, and R3 models that achieved higher charging compatibility with Tesla’s Supercharger network.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Predictive SEI Anomaly Detection (Verified in cvsreal.pdf)',
        detail:
          'Developed diagnostic protocols to detect Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: '6 Deployed Formation Recipes — 1-Year Standard (Verified in cvsreal.pdf)',
        detail:
          'Deployed 6 recipes (4 development recipes and 2 production recipes) that served as the standard baseline recipe for 1 year from December 2021 to December 2022.',
        provenance: 'Verified (cvsreal.pdf)',
      },
    ],
    technologies: ['Battery Cell Formation', 'SEI Precharge Diagnostics', 'Electrochemical Testing', 'Python / MATLAB'],
  },
  {
    id: 'ucsd-nanoengineering',
    role: 'Research Assistant — Battery Engineering',
    organization: 'UC San Diego — Department of Nanoengineering',
    domainTag: 'Electrochemical Energy Storage & Materials Characterization',
    location: 'San Diego, CA',
    period: 'Sep 2020 – Jun 2021',
    periodNote: 'Verified by independent December 2024 CV PDF (files/cvsreal.pdf).',
    statusType: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    summary:
      'Conducted coin-cell assembly, cathode active material synthesis, spectroscopic characterization (XRD, FTIR, NMR), and battery cell recycling research.',
    highlights: [
      {
        label: 'Coin-Cell Assembly & Cycling (Verified in cvsreal.pdf)',
        detail:
          'Assembled coin cells in argon glove boxes and executed electrical testing through automated battery cyclers.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Cathode Synthesis & Characterization (Verified in cvsreal.pdf)',
        detail:
          'Prepared and synthesized cathode active materials and performed physical characterization using XRD, FTIR, NMR, vacuum ovens, and ROTAP shakers.',
        provenance: 'Verified (cvsreal.pdf)',
      },
      {
        label: 'Direct Recycling Teardown (Verified in cvsreal.pdf)',
        detail:
          'Harvested and tore down spent cells (cathode, separator, and electrolytes) for battery recycling studies and documented experimental findings.',
        provenance: 'Verified (cvsreal.pdf)',
      },
    ],
    technologies: ['Coin Cell Assembly', 'Battery Cyclers', 'XRD', 'FTIR', 'NMR', 'Glove Box Operations', 'ROTAP Shaker'],
  },
  {
    id: 'stripe',
    role: 'Senior Data Engineer (Unverified — Legacy Website Only)',
    organization: 'Stripe',
    domainTag: 'Legacy Website Claim (_pages/cv.md & _pages/about.md) · Pending Confirmation',
    location: 'Remote (Per _pages/cv.md)',
    period: 'Dates Unspecified in Legacy Source',
    periodNote:
      'PROVENANCE FLAG: Appears only in unfinished legacy _pages/cv.md (commit 85cfcd9), _pages/about.md, and _pages/letters.md without employment dates. Absent from the December 2024 CV PDF (files/cvsreal.pdf), which documents full-time employment at Rivian (Sep 2021 – Sep 2022), UC Berkeley / ATOM Science (Sep 2022 – Jun 2023), and Tesla (May 2023 – Dec 2024). Labeled unverified until confirmed.',
    statusType: 'Unverified — Legacy Website Only (Pending Confirmation)',
    summary:
      'Listed in legacy _pages/cv.md as designing, developing, and managing scalable data services and centralized source-of-truth datasets for internal employee information. Retained with an unverified provenance label pending user confirmation.',
    highlights: [
      {
        label: 'Scalable Data Services (Legacy _pages/cv.md Only)',
        detail:
          'Listed in _pages/cv.md: "Design, develop, and manage scalable services, data pipelines, tools, and systems for internal employee information."',
        provenance: 'Unverified (Legacy Website Only)',
      },
      {
        label: 'Privacy & Security Controls (Legacy _pages/cv.md Only)',
        detail:
          'Listed in _pages/cv.md: "Implement robust controls and strong security measures across pipelines to guarantee high accuracy and strict privacy."',
        provenance: 'Unverified (Legacy Website Only)',
      },
      {
        label: 'Unified Source of Truth (Legacy _pages/cv.md Only)',
        detail:
          'Listed in _pages/cv.md: "Collaborate with cross-functional teams to build carefully scoped shared datasets, establishing a unified source of truth."',
        provenance: 'Unverified (Legacy Website Only)',
      },
    ],
    technologies: ['Unverified Legacy Claim (_pages/cv.md)', 'Pending Date & Documentation Confirmation'],
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
    provenanceLabel: 'Verified — Dec 2024 CV (cvsreal.pdf)',
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
    provenanceLabel: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    focusAreas: [
      'Process Modeling & Multiphysics Simulation (COMSOL, Aspen, MATLAB)',
      'Data Structures, Algorithms & Object-Oriented Systems (C++, Java, Python)',
      'Nanoengineering Battery Research (Coin Cell Assembly, XRD, FTIR, NMR)',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    slug: 'tesla-fast-rapid-battery-telemetry',
    index: '01',
    title: 'FAST Screening Library & RAPID Multi-Factory Telemetry',
    subtitle: 'Deterministic battery formation analytics, real-time Gigafactory dashboards, and 4680 cell API recipe systems at Tesla.',
    category: 'Data & Battery Systems',
    statusLabel: 'Verified Industry System (cvsreal.pdf)',
    organizationOrContext: 'Tesla, Inc. (Fremont · Austin · Berlin)',
    period: 'May 2023 – Dec 2024',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Production data engineering and analytical systems built at Tesla (verified in files/cvsreal.pdf) to evaluate new development recipes during battery formation, stream real-time factory telemetry to AWS, and detect End-of-Line (EoL) cell defects.',
    challenge:
      'Evaluating experimental battery formation recipes and managing live production lines across Fremont, Berlin, and Austin required deterministic screening tools, real-time telemetry visibility, and automated recipe synchronization.',
    architectureAndApproach: [
      'FAST (Formation Analytics Screening Toolbox): Developed a Python library enabling data scientists to deep-dive into new development recipes during formation and reach deterministic conclusions on trial success.',
      'RAPID Real-Time Dashboard: Developed and maintained live internal dashboards for Berlin and Austin Gigafactory sites so process engineers could monitor real-time data and adjust production lines.',
      '4680 API Call-and-Sync Recipe Systems: Engineered API call-and-sync recipe systems for trial and testing batteries, resulting in higher R&D output giving rise to 4680 battery cells.',
      'Milmont AWS Streams, EoL Defect Detection & Gen 4/5 Models: Implemented temperature, pH, and current data streams for the Milmont factory into AWS; built proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors; and assisted automated early defect detection during EoL testing.',
    ],
    outcomes: [
      'Enabled deterministic pass/fail trial conclusions for battery formation development recipes via the FAST library (Verified in cvsreal.pdf).',
      'Increased R&D trial output giving rise to 4680 Battery cells through API call-and-sync recipe management (Verified in cvsreal.pdf).',
      'Established quantitative vendor scoring parameters for business analytics teams via automated EoL defect detection (Verified in cvsreal.pdf).',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Models', 'REST APIs'],
  },
  {
    slug: 'rivian-formation-sei-protocols',
    index: '02',
    title: 'EV Battery Formation Recipes & SEI Precharge Anomaly Diagnostics',
    subtitle: 'Six deployed formation recipes for R1S, R2, and R3 battery cells with enhanced Tesla Supercharger compatibility at Rivian.',
    category: 'Data & Battery Systems',
    statusLabel: 'Verified Industry System (cvsreal.pdf)',
    organizationOrContext: 'Rivian (Irvine, CA)',
    period: 'Sep 2021 – Sep 2022',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Electrochemical process development and precharge diagnostic protocols engineered at Rivian (verified in files/cvsreal.pdf) for R1S, R2, and R3 battery programs.',
    challenge:
      'Optimizing lithium-ion cell formation requires controlling Solid Electrolyte Interphase (SEI) nucleation during precharge while maximizing fast-charging compatibility across vehicle platforms.',
    architectureAndApproach: [
      'R1S, R2 & R3 Recipe Engineering: Developed proprietary formation recipes for R1S, R2, and R3 models with higher compatibility with Tesla’s Supercharger network.',
      'SEI Precharge Anomaly Protocols: Developed predictive protocols to detect Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
      'Production & Development Standardization: Deployed 6 formation recipes (4 development recipes and 2 production recipes) into manufacturing workflows.',
    ],
    outcomes: [
      '6 deployed formation recipes (4 development, 2 production) served as the standard baseline recipe for 1 year from December 2021 to December 2022 (Verified in cvsreal.pdf).',
      'Improved fast-charging compatibility with Tesla’s Supercharger network across R1S, R2, and R3 cell builds (Verified in cvsreal.pdf).',
    ],
    technologies: ['Battery Cell Formation', 'SEI Precharge Diagnostics', 'R1S / R2 / R3 Programs', 'Electrochemical Testing'],
  },
  {
    slug: 'lpcvd-wafer-reactor-modeling',
    index: '03',
    title: 'LPCVD Silicon Wafer Reactor Uniformity Modeling',
    subtitle: 'Coupled fluid dynamics, heat/mass transfer simulation, and 2^k factorial Design of Experiments in COMSOL & MATLAB.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Verified Engineering Project (cvsreal.pdf)',
    organizationOrContext: 'UC San Diego Chemical Engineering',
    period: 'Mar 2021 – Jun 2021',
    featured: true,
    diagramType: 'lpcvd-reactor',
    summary:
      'Computational modeling and experimental design of a Low Pressure Chemical Vapor Deposition (LPCVD) boat reactor that accomplished nearly 100% silicon wafer deposition uniformity (verified in files/cvsreal.pdf).',
    challenge:
      'Achieving uniform silicon deposition across wafers inside an LPCVD boat reactor requires balancing coupled fluid dynamics, heat transfer, and mass transfer parameters.',
    architectureAndApproach: [
      'COMSOL Multiphysics Reactor Design: Developed a boat reactor model in COMSOL incorporating fluid dynamics, heat transfer, and mass transfer models.',
      '2^k Factorial Design of Experiments (DoE): Computed a 2^k factorial experimental design to identify the most influential operating parameters for reporting to the project manager.',
      '2D & 3D Wafer Uniformity Rendering: Rendered 2D and 3D wafer uniformity models in MATLAB to interpret experimental parameters in terms of deposition uniformity.',
    ],
    outcomes: [
      'Developed a boat reactor configuration that accomplished nearly 100% uniformity for silicon wafers in COMSOL (Verified in cvsreal.pdf).',
      'Identified key process sensitivity parameters through 2^k Design of Experiments and 2D/3D MATLAB visualization (Verified in cvsreal.pdf).',
    ],
    technologies: ['COMSOL Multiphysics', 'MATLAB', '2^k Design of Experiments', 'Fluid Dynamics', 'Heat & Mass Transfer'],
    codeAvailabilityNote: 'Please email for view-only code and simulation reports of individual academic projects (per files/cvsreal.pdf).',
  },
  {
    slug: 'gitlet-version-control-engine',
    index: '04',
    title: 'Gitlet — Distributed Version Control System in Java',
    subtitle: 'Content-addressable persistence, O(n) branching data structures, and historical commit restoration.',
    category: 'Software Engineering',
    statusLabel: 'Verified Engineering Project (cvsreal.pdf)',
    organizationOrContext: 'Computer Science Systems Project',
    period: 'July 2022',
    featured: true,
    diagramType: 'gitlet-dag',
    summary:
      'A Java implementation imitating core Git version-control functionality through abstraction, persistent file serialization, and O(n) complexity branching (verified in files/cvsreal.pdf).',
    challenge:
      'Replicating Git functionality from scratch in Java requires designing efficient persistence mechanisms and graph data structures that support fast branching and historical file restoration.',
    architectureAndApproach: [
      'Command Abstraction (`java main.Gitlet`): Implemented core version-control commands including `init`, `add`, `commit`, `checkout`, `status`, `log`, and `merge`.',
      'O(n) Branching Data Structures: Selected and implemented data structures capable of providing branching functionality with O(n) complexity.',
      'Deterministic File Persistence: Engineered file persistence enabling users to revert files to older versions from specific historical commits.',
    ],
    outcomes: [
      'Successfully implemented core Git commands, O(n) branching, and persistent historical state restoration in Java (Verified in cvsreal.pdf).',
      'View-only source code available upon direct email request.',
    ],
    technologies: ['Java', 'Data Structures', 'O(n) Branching', 'Persistent Serialization', 'CLI Abstraction'],
    codeAvailabilityNote: 'Please email for view-only code of individual projects (per files/cvsreal.pdf).',
  },
  {
    slug: 'signal-and-image-processing-systems',
    index: '05',
    title: 'Acoustic Spatiotemporal Output & Digital Image Processing',
    subtitle: 'Arduino G-Code motorized speaker scanning, PWM analog conversion, and MATLAB digital video characterization.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Verified Engineering Project (cvsreal.pdf)',
    organizationOrContext: 'MATLAB Instrumentation & Signal Processing Labs',
    period: 'Feb 2020 – Apr 2020',
    featured: false,
    diagramType: 'signal-processing',
    summary:
      'Two quantitative MATLAB hardware-in-the-loop studies verified in files/cvsreal.pdf: characterizing the spatiotemporal acoustic output of a speaker using Arduino G-Code motion control (Feb 2020) and quantitative digital video/image signal analysis (Apr 2020).',
    challenge:
      'Accurately characterizing acoustic and optical signals requires synchronized hardware positioning, time-domain noise reduction, digital-to-analog PWM filtering, and analysis of resolution and sampling limits.',
    architectureAndApproach: [
      'Arduino G-Code Motion Control (Feb 2020): Utilized motor/driving control with Arduino via G-Code to move the speaker relative to the acoustic sensor.',
      'Time-Domain Averaging & PWM Filtering: Applied time-domain signal averaging to enhance signal-to-noise ratio (SNR) and implemented pulse-width modulation (PWM) with low-pass filtering to convert digital signals to analog signals.',
      'Quantitative Digital Image Processing (Apr 2020): Applied digital video camera measurement techniques in MATLAB to evaluate how amplitude, spatial resolution, and sampling rate affect digital imaging.',
    ],
    outcomes: [
      'Characterized spatiotemporal speaker output with enhanced signal-to-noise ratio via time-domain averaging (Verified in cvsreal.pdf).',
      'Evaluated digital imaging resolution and sampling constraints and demonstrated PWM + low-pass digital-to-analog conversion in MATLAB (Verified in cvsreal.pdf).',
    ],
    technologies: ['MATLAB', 'Arduino', 'G-Code Motion Control', 'PWM & Low-Pass Filtering', 'Digital Image Processing'],
    codeAvailabilityNote: 'Please email for view-only code of individual projects (per files/cvsreal.pdf).',
  },
];

export const additionalEngineeringProjects = [
  { name: 'Molecular Property Prediction (Active & Transfer Learning)', domain: 'Python · TensorFlow/Keras', context: 'ATOM Science (Sep 2022 – May 2023 · Verified in cvsreal.pdf)' },
  { name: 'Catalytic Bed Reactor', domain: 'Chemical Engineering', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
  { name: 'Hydrogen on Demand', domain: 'Chemical Engineering', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
  { name: 'Ideal Gas Simulation', domain: 'MATLAB', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
  { name: 'Ant vs. Doodlebug', domain: 'C++', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
  { name: 'Employee Paycheck & Deques', domain: 'C++ / Java', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
  { name: '2048 Game Implementation', domain: 'Java', context: 'UC San Diego Project Work (Verified in cvsreal.pdf)' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'verified-core-stack',
    category: 'Proficient Languages, Data Science & Cloud (Verified)',
    provenanceStatus: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    sourceNote: 'Verified in files/cvsreal.pdf (Core Skills & Tesla P2/P3 Experience)',
    description: 'Core programming languages, scientific computing libraries, machine learning frameworks, and cloud databases documented in the December 2024 CV PDF.',
    skills: ['Python (NumPy, Pandas, Matplotlib.pyplot)', 'SQL', 'TensorFlow & Keras', 'AWS', 'C++', 'Java'],
  },
  {
    id: 'verified-simulation-systems',
    category: 'Engineering Simulation & Web Foundations (Verified)',
    provenanceStatus: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    sourceNote: 'Verified in files/cvsreal.pdf (Core Skills — Proficient & Intermediate)',
    description: 'Multiphysics simulation, chemical process modeling, and intermediate systems/web languages documented in the December 2024 CV PDF.',
    skills: ['MATLAB', 'COMSOL Multiphysics', 'Aspen', 'C (Intermediate)', 'HTML / CSS / JavaScript (Intermediate)'],
  },
  {
    id: 'verified-experimental-lab',
    category: 'Battery Formation & Materials Characterization (Verified)',
    provenanceStatus: 'Verified — Dec 2024 CV (cvsreal.pdf)',
    sourceNote: 'Verified in files/cvsreal.pdf (Tesla, Rivian & UCSD Nanoengineering)',
    description: 'Electrochemical cell formation protocols and physical/chemical materials characterization instrumentation documented in the December 2024 CV PDF.',
    skills: [
      'Battery Cyclers & Coin Cell Assembly',
      '4680 & R1S/R2/R3 Formation Protocols',
      'SEI Precharge Anomaly Diagnostics',
      'XRD, FTIR & NMR Characterization',
      'Glove Box, Vacuum Oven & ROTAP Shaker',
      'Cell Harvesting & Recycling Teardown',
    ],
  },
  {
    id: 'unverified-legacy-web-stack',
    category: 'Additional Data & Cloud Tools (Unverified — Legacy Website Only)',
    provenanceStatus: 'Unverified — Legacy Website Only (Pending Confirmation)',
    sourceNote: 'Listed only in legacy _pages/about.md & _pages/letters.md; not in files/cvsreal.pdf',
    description: 'Additional distributed data, container, and BI tools listed on the legacy Jekyll website that do not appear in the December 2024 CV PDF. Labeled unverified until confirmed.',
    skills: [
      'PySpark (Unverified)',
      'Flask / FastAPI (Unverified)',
      'PostgreSQL (Unverified)',
      'Kafka (Unverified)',
      'Hadoop (Unverified)',
      'Airflow (Unverified)',
      'GCP (Unverified)',
      'Docker & Kubernetes (Unverified)',
      'PowerBI & Tableau (Unverified)',
    ],
  },
];

export const teachingCourses: TeachingCourse[] = [
  {
    code: 'CSE 8A',
    title: 'Introduction to Programming in Python (CSE 8A)',
    type: 'Modified AcademicPages Template File — Unverified',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    provenanceStatus: 'Unverified — Modified AcademicPages Template File',
    templateFilename: '_teaching/2014-spring-teaching-1.md',
    summary:
      'PROVENANCE WARNING: This entry originates from _teaching/2014-spring-teaching-1.md, an inherited AcademicPages template file that retains its 2014 template filename, commented-out 2014-01-01 date, and bottom placeholder headings ("Heading 1 / Sample text"). It is not corroborated by files/cvsreal.pdf and must not be treated as verified UCSD teaching experience unless confirmed.',
    sourceNote:
      'Git diff (e354740..c74b02d) shows that standard UCSD CSE 8A catalog learning outcomes were pasted into the upstream template file 2014-spring-teaching-1.md while leaving "Heading 1 / Sample text" intact at the bottom.',
    learningOutcomes: [
      'Read a computational problem and formulate an algorithm to solve that problem.',
      'Describe the functionality of a program that you or someone else has written.',
      'Write simple Python programs using variables, functions, conditional statements, and loops.',
      'Store data in a program using data structures like lists, tuples, and dictionaries.',
      'Use memory models to trace the state of data during a program’s execution.',
      'Debug and test Python programs that you or someone else has written.',
      'Describe ways in which computer science plays a role in society and in other scientific disciplines.',
    ],
    toolsAndTopics: ['Modified Template File (2014-spring-teaching-1.md)', 'Absent from Dec 2024 CV PDF', 'Pending Confirmation'],
  },
  {
    code: 'CSE 20',
    title: 'Discrete Mathematics (CSE 20)',
    type: 'Modified AcademicPages Template File — Unverified',
    institution: 'University of California, San Diego',
    department: 'Department of Computer Science and Engineering (CSE)',
    location: 'San Diego, CA',
    provenanceStatus: 'Unverified — Modified AcademicPages Template File',
    templateFilename: '_teaching/2015-spring-teaching-2.md',
    summary:
      'PROVENANCE WARNING: This entry originates from _teaching/2015-spring-teaching-2.md, an inherited AcademicPages template file whose body still reads "This is a description of a teaching experience. You can use markdown like any other post." followed by the test string "Adding some edits from H2O PC". It is not corroborated by files/cvsreal.pdf and must not be treated as verified UCSD teaching experience.',
    sourceNote:
      'Git diff (58e1ddb..cc87dc6) shows only the YAML title ("CSE 20"), venue ("Departement of Computer Science and Engineering"), and a 5-word test line ("Adding some edits from H2O PC") were changed from the upstream template.',
    learningOutcomes: [],
    toolsAndTopics: ['Modified Template File (2015-spring-teaching-2.md)', 'Template Placeholder Body', 'Absent from Dec 2024 CV PDF'],
  },
];

export const recommendationLetterPolicy = {
  title: 'Recommendation Letters',
  lead: 'I provide recommendation letters for individuals I have worked with directly as colleagues, research collaborators, or mentees. A strong recommendation letter requires that I know your work firsthand and can speak credibly to your technical contributions.',
  philosophy:
    'Note: The legacy webpage (_pages/letters.md) also referenced writing letters for former colleagues at Stripe, agricultural technology ventures, and students in classes. Items supported only by the legacy website remain labeled unverified pending confirmation.',
  eligibleGroups: [
    {
      group: 'Former Engineering & Research Colleagues (Verified Roles)',
      detail: 'Colleagues from Tesla, Rivian, ATOM Science, or UC Berkeley / UC San Diego research teams.',
    },
    {
      group: 'Business & Operational Collaborators',
      detail: 'Collaborators from Business Operations & Strategy at our family-owned enterprise.',
    },
    {
      group: 'Legacy Website Scope (_pages/letters.md — Pending Confirmation)',
      detail: 'Legacy _pages/letters.md additionally listed colleagues from Stripe, agricultural field trial teams, and students; retained with an unverified provenance note.',
    },
  ],
  credibleAreas: [
    'Data engineering, battery telemetry & analytics (Python, SQL, AWS, FAST, RAPID — Verified in cvsreal.pdf)',
    'Battery cell formation & materials characterization (4680, R1S/R2/R3, SEI diagnostics, XRD, FTIR, NMR — Verified in cvsreal.pdf)',
    'Machine learning & scientific simulation (TensorFlow, Keras, MATLAB, COMSOL, Aspen — Verified in cvsreal.pdf)',
    'Additional distributed data & cloud stacks listed in legacy _pages/letters.md (PySpark, Kafka, Airflow, GCP, Docker, Kubernetes — Unverified / Website-Only)',
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
      detail: 'How we worked together and the timeframe of our collaboration.',
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
