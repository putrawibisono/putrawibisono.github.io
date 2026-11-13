export interface ExperienceItem {
  id: string;
  role: string;
  secondaryRole?: string;
  organization: string;
  domainTag: string;
  location: string;
  period: string;
  periodNote?: string;
  roleCategory: string;
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
    | 'Software Engineering';
  statusLabel: string;
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
  description: string;
  skills: string[];
}

export const siteMetadata = {
  name: 'Putra Wibisono',
  monogram: 'PW',
  title: 'Putra Wibisono — Data Engineer, Materials Scientist & Business Operations',
  roleHeadline: 'Data Engineer & Materials Scientist · Ex-Tesla, Ex-Rivian',
  currentRoleTag: 'Business Operations & Strategy — Family-Owned Enterprise',
  subheadline:
    "My background spans data engineering, battery manufacturing, and materials science. I currently support business operations and strategic initiatives at my family's agricultural enterprise.",
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
    label: 'Industry Engineering',
    primary: 'Tesla · Rivian · ATOM Science',
    detail:
      'Sr. Data Engineer (P3) & Data Engineer (P2) at Tesla (FAST library, RAPID dashboard, 4680 recipe systems); Process Development Engineer at Rivian.',
  },
  {
    label: 'Current Role',
    primary: 'Business Operations & Strategy — Family-Owned Enterprise',
    detail:
      "Supporting operations, business planning, and field evaluation initiatives at my family's agricultural enterprise.",
  },
  {
    label: 'Education',
    primary: 'UC Berkeley (M.Eng.) · UC San Diego (B.S.)',
    detail:
      'M.Eng. in Materials Science & Engineering with a Data Science concentration (3.92 GPA); B.S. in Chemical Engineering & Computer Science Minor.',
  },
];

export const biographyNarrative = {
  lead: "My background spans data engineering, battery manufacturing, and materials science. I currently support business operations and strategic initiatives at my family's agricultural enterprise.",
  paragraphs: [
    'My engineering experience centers on battery manufacturing telemetry, cell formation protocols, and computational materials research. At Tesla (May 2023 – December 2024), I worked as a Data Engineer (P2) and Senior Data Engineer (P3), where I built the FAST (Formation Analytics Screening Toolbox) library, maintained the real-time RAPID telemetry dashboard for the Berlin and Austin Gigafactories, streamed Milmont facility sensor data to AWS, and built API recipe synchronization workflows for 4680 battery cells.',
    'Before joining Tesla full-time, I worked as a Data Science Intern at ATOM Science in San Francisco (September 2022 – May 2023) while completing my M.Eng. at UC Berkeley, applying transfer learning and active learning in Python to screen molecular databases for drug discovery. Earlier, as a Process Development Engineer in Formation at Rivian (September 2021 – September 2022), I developed six cell formation recipes for the R1S, R2, and R3 programs and wrote precharge Solid Electrolyte Interphase (SEI) anomaly detection protocols.',
    "Today, I focus on business operations and strategy at my family's agricultural enterprise, helping manage day-to-day operations while exploring practical ways to apply data analysis, field trials, and clear stakeholder reporting to agricultural workflows.",
  ],
  currentInitiativesTitle: 'Current Focus & Agricultural Interests',
  currentInitiativesSubtitle:
    'Alongside day-to-day operational work at our family business, I am interested in practical applications of data and field testing in agriculture:',
  currentInitiatives: [
    {
      status: 'Current Role',
      title: 'Business Operations & Strategy',
      description:
        "Supporting operational management, team coordination, and strategic planning at my family's agricultural enterprise.",
    },
    {
      status: 'Field Evaluation',
      title: 'Fertilizer Demonstration Plot Trials',
      description:
        'Evaluating organic fertilizer performance and crop productivity through structured field demonstration plots.',
    },
    {
      status: 'Exploratory',
      title: 'Soil Condition & Historical Satellite Analysis',
      description:
        'Exploring ways to combine field measurements (soil pH, moisture, nutrients) with historical satellite imagery for baseline land assessment.',
    },
    {
      status: 'Exploratory',
      title: 'Partner Reporting & Grower Support',
      description:
        'Exploring clearer operational reporting for institutional partners and practical training resources for local growers.',
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
    domainTag: 'Operations · Strategic Planning · Agriculture',
    location: 'Indonesia',
    period: 'Current',
    roleCategory: 'Current Role',
    summary:
      "Supporting day-to-day business operations, partner coordination, and strategic initiatives at my family's agricultural enterprise.",
    highlights: [
      {
        label: 'Operations & Coordination',
        detail:
          "Assist with operational management, commercial coordination, and strategic planning across my family's agricultural business.",
      },
      {
        label: 'Field Trial Evaluation',
        detail:
          'Support field demonstration plot trials to evaluate organic fertilizer strategies and track crop productivity.',
      },
      {
        label: 'Data & Reporting Exploration',
        detail:
          'Explore practical approaches for baseline soil and satellite analysis as well as clear reporting for business and institutional partners.',
      },
    ],
    technologies: ['Business Operations', 'Strategic Planning', 'Field Trial Analysis', 'Python & SQL'],
  },
  {
    id: 'tesla',
    role: 'Sr. Data Engineer (P3) & Data Engineer (P2)',
    organization: 'Tesla, Inc.',
    domainTag: 'EV Battery Manufacturing · 4680 Cell & Factory Telemetry',
    location: 'Fremont, CA (Supporting Berlin & Austin Gigafactories)',
    period: 'May 2023 – Dec 2024',
    periodNote: 'Sr. Data Engineer (P3): Apr 2024 – Dec 2024 · Data Engineer (P2): May 2023 – Apr 2024',
    roleCategory: 'Data Engineering',
    summary:
      'Built battery formation screening libraries (FAST), real-time multi-gigafactory telemetry dashboards (RAPID), Generation 4/5 battery simulation models, and 4680 cell API recipe synchronization workflows.',
    highlights: [
      {
        label: 'FAST Screening Library (P3)',
        detail:
          'Developed the FAST (Formation Analytics Screening Toolbox) library used by data scientists to evaluate new development recipes during battery formation and reach deterministic pass/fail trial conclusions.',
      },
      {
        label: 'RAPID Live Factory Dashboard (P3)',
        detail:
          'Developed and maintained the RAPID internal dashboard for Berlin and Austin Gigafactory sites, enabling process engineers to inspect real-time telemetry and make live production-line adjustments.',
      },
      {
        label: 'EoL Defect Detection & Vendor Scoring (P3)',
        detail:
          'Developed automated early defect detection during End of Line (EoL) testing and established vendor scoring parameters for business analytics teams.',
      },
      {
        label: 'Milmont AWS Streams, Gen 4/5 ML Models & 4680 API Sync (P2)',
        detail:
          'Implemented temperature, pH, and electrical current data streams for the Milmont facility into AWS; developed proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors; and engineered API call-and-sync recipe systems supporting 4680 battery cell development.',
      },
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Simulation', 'REST APIs'],
  },
  {
    id: 'atom-science',
    role: 'Data Science Intern',
    organization: 'ATOM Science',
    domainTag: 'Computational Drug Discovery · Molecular Machine Learning',
    location: 'San Francisco, CA',
    period: 'Sep 2022 – May 2023',
    roleCategory: 'Data Science',
    summary:
      'Curated drug discovery datasets and trained transfer-learning and active-learning models in Python to screen molecular candidates for wet-lab testing.',
    highlights: [
      {
        label: 'Molecular Property Prediction',
        detail:
          'Used Python to curate drug discovery datasets and build machine learning models to predict molecular properties.',
      },
      {
        label: 'Transfer & Active Learning',
        detail:
          'Applied transfer learning and active learning techniques to make effective use of sparse chemical datasets.',
      },
      {
        label: 'Wet-Lab Candidate Screening',
        detail:
          'Screened large databases of molecules to identify promising candidates to advance into wet-lab testing.',
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
    roleCategory: 'Process Development',
    summary:
      'Developed proprietary battery cell formation recipes for R1S, R2, and R3 vehicle programs and predictive Solid Electrolyte Interphase (SEI) anomaly detection protocols.',
    highlights: [
      {
        label: 'R1S, R2 & R3 Formation Recipes',
        detail:
          'Developed proprietary formation recipes for R1S, R2, and R3 models with improved charging compatibility on Tesla’s Supercharger network.',
      },
      {
        label: 'Predictive SEI Anomaly Detection',
        detail:
          'Developed diagnostic protocols to detect Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
      },
      {
        label: 'Production & Development Recipe Standardization',
        detail:
          'Deployed 6 recipes (4 development recipes and 2 production recipes) that served as the standard baseline from December 2021 to December 2022.',
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
    roleCategory: 'Academic Research',
    summary:
      'Conducted coin-cell assembly, cathode active material synthesis, materials characterization (XRD, FTIR, NMR), and battery cell recycling research.',
    highlights: [
      {
        label: 'Coin-Cell Assembly & Cycling',
        detail:
          'Assembled coin cells in argon glove boxes and ran electrochemical testing on automated battery cyclers.',
      },
      {
        label: 'Cathode Synthesis & Characterization',
        detail:
          'Synthesized cathode active materials and performed physical characterization using XRD, FTIR, NMR, vacuum ovens, and ROTAP shakers.',
      },
      {
        label: 'Direct Recycling Teardown',
        detail:
          'Harvested and tore down spent cells (cathode, separator, and electrolytes) for battery recycling studies and authored experiment reports.',
      },
    ],
    technologies: ['Coin Cell Assembly', 'Battery Cyclers', 'XRD', 'FTIR', 'NMR', 'Glove Box Operations', 'ROTAP Shaker'],
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
      'Nanoengineering Battery Research (Coin Cell Assembly, XRD, FTIR, NMR)',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    slug: 'tesla-fast-rapid-battery-telemetry',
    index: '01',
    title: 'FAST Screening Library & RAPID Multi-Factory Telemetry',
    subtitle: 'Battery formation analytics, real-time Gigafactory dashboards, and 4680 cell API recipe systems at Tesla.',
    category: 'Data & Battery Systems',
    statusLabel: 'Industry System',
    organizationOrContext: 'Tesla, Inc. (Fremont · Austin · Berlin)',
    period: 'May 2023 – Dec 2024',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Production data engineering and analytical tools built at Tesla to evaluate new development recipes during battery formation, stream real-time factory telemetry to AWS, and detect End-of-Line (EoL) cell defects.',
    challenge:
      'Evaluating experimental battery formation recipes and managing live production lines across Fremont, Berlin, and Austin required deterministic screening tools, real-time telemetry visibility, and automated recipe synchronization.',
    architectureAndApproach: [
      'FAST (Formation Analytics Screening Toolbox): Developed a Python library enabling data scientists to analyze new development recipes during formation and reach deterministic conclusions on trial performance.',
      'RAPID Real-Time Dashboard: Developed and maintained live internal dashboards for Berlin and Austin Gigafactory sites so process engineers could monitor real-time data and adjust production lines.',
      '4680 API Call-and-Sync Recipe Systems: Engineered API call-and-sync recipe systems for trial and testing batteries, increasing R&D output for 4680 battery cells.',
      'Milmont AWS Streams, EoL Defect Detection & Gen 4/5 Models: Implemented temperature, pH, and current data streams for the Milmont factory into AWS; built proprietary Generation 4 & 5 ML models simulating Model Y and Model 3 batteries across vendors; and assisted automated early defect detection during EoL testing.',
    ],
    outcomes: [
      'Enabled deterministic pass/fail trial evaluations for battery formation development recipes through the FAST library.',
      'Increased R&D trial throughput for 4680 battery cells with automated API recipe synchronization.',
      'Defined vendor scoring parameters for business analytics teams using End-of-Line defect detection metrics.',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'FAST Toolbox', 'RAPID Dashboard', 'Gen 4/5 ML Models', 'REST APIs'],
  },
  {
    slug: 'rivian-formation-sei-protocols',
    index: '02',
    title: 'EV Battery Formation Recipes & SEI Precharge Anomaly Diagnostics',
    subtitle: 'Six deployed formation recipes for R1S, R2, and R3 battery cells with improved Supercharger compatibility at Rivian.',
    category: 'Data & Battery Systems',
    statusLabel: 'Industry System',
    organizationOrContext: 'Rivian (Irvine, CA)',
    period: 'Sep 2021 – Sep 2022',
    featured: true,
    diagramType: 'battery-telemetry',
    summary:
      'Electrochemical cell formation recipes and precharge diagnostic protocols developed at Rivian for the R1S, R2, and R3 battery programs.',
    challenge:
      'Optimizing lithium-ion cell formation requires controlling Solid Electrolyte Interphase (SEI) nucleation during precharge while improving fast-charging compatibility across vehicle platforms.',
    architectureAndApproach: [
      'R1S, R2 & R3 Recipe Engineering: Developed proprietary formation recipes for R1S, R2, and R3 models with higher compatibility on Tesla’s Supercharger network.',
      'SEI Precharge Anomaly Protocols: Developed diagnostic protocols to detect Solid Electrolyte Interphase (SEI) formation anomalies during precharge steps.',
      'Production & Development Standardization: Deployed 6 formation recipes (4 development recipes and 2 production recipes) into manufacturing workflows.',
    ],
    outcomes: [
      'Deployed 6 formation recipes (4 development, 2 production) that served as the standard baseline from December 2021 to December 2022.',
      'Improved fast-charging compatibility with Tesla’s Supercharger network across R1S, R2, and R3 cell builds.',
    ],
    technologies: ['Battery Cell Formation', 'SEI Precharge Diagnostics', 'R1S / R2 / R3 Programs', 'Electrochemical Testing'],
  },
  {
    slug: 'lpcvd-wafer-reactor-modeling',
    index: '03',
    title: 'LPCVD Silicon Wafer Reactor Uniformity Modeling',
    subtitle: 'Coupled fluid dynamics, heat/mass transfer simulation, and 2^k factorial Design of Experiments in COMSOL & MATLAB.',
    category: 'Scientific Computing & Materials',
    statusLabel: 'Engineering Project',
    organizationOrContext: 'UC San Diego Chemical Engineering',
    period: 'Mar 2021 – Jun 2021',
    featured: true,
    diagramType: 'lpcvd-reactor',
    summary:
      'Computational modeling and experimental design of a Low Pressure Chemical Vapor Deposition (LPCVD) boat reactor achieving nearly 100% silicon wafer deposition uniformity.',
    challenge:
      'Achieving uniform silicon deposition across wafers inside an LPCVD boat reactor requires balancing coupled fluid dynamics, heat transfer, and mass transfer parameters.',
    architectureAndApproach: [
      'COMSOL Multiphysics Reactor Design: Built a boat reactor model in COMSOL combining fluid dynamics, heat transfer, and mass transfer physics.',
      '2^k Factorial Design of Experiments (DoE): Computed a 2^k factorial design to identify the most influential operating parameters.',
      '2D & 3D Wafer Uniformity Rendering: Rendered 2D and 3D wafer uniformity profiles in MATLAB to evaluate parameter sensitivity across the reactor.',
    ],
    outcomes: [
      'Designed a boat reactor configuration achieving nearly 100% silicon wafer uniformity in COMSOL simulations.',
      'Quantified key process sensitivity parameters through 2^k Design of Experiments and 2D/3D MATLAB visualization.',
    ],
    technologies: ['COMSOL Multiphysics', 'MATLAB', '2^k Design of Experiments', 'Fluid Dynamics', 'Heat & Mass Transfer'],
    codeAvailabilityNote: 'Please email for view-only code and simulation reports.',
  },
  {
    slug: 'gitlet-version-control-engine',
    index: '04',
    title: 'Gitlet — Distributed Version Control System in Java',
    subtitle: 'Content-addressable persistence, O(n) branching data structures, and historical commit restoration.',
    category: 'Software Engineering',
    statusLabel: 'Engineering Project',
    organizationOrContext: 'Computer Science Systems Project',
    period: 'July 2022',
    featured: true,
    diagramType: 'gitlet-dag',
    summary:
      'A Java implementation of core Git version-control functionality using content-addressable file persistence, object serialization, and O(n) complexity branching.',
    challenge:
      'Replicating Git from scratch in Java requires designing efficient persistence mechanisms and graph data structures that support fast branching and historical file restoration.',
    architectureAndApproach: [
      'Command Abstraction (`java main.Gitlet`): Implemented core version-control commands including `init`, `add`, `commit`, `checkout`, `status`, `log`, and `merge`.',
      'O(n) Branching Data Structures: Selected and implemented data structures providing branching operations with O(n) complexity.',
      'Deterministic File Persistence: Built file serialization allowing users to restore files from specific historical commits.',
    ],
    outcomes: [
      'Implemented core Git commands, O(n) branching, and persistent historical state restoration in Java.',
      'View-only source code available upon email request.',
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
    statusLabel: 'Engineering Project',
    organizationOrContext: 'MATLAB Instrumentation & Signal Processing Labs',
    period: 'Feb 2020 – Apr 2020',
    featured: false,
    diagramType: 'signal-processing',
    summary:
      'Two MATLAB hardware-in-the-loop instrumentation studies: characterizing the spatiotemporal acoustic output of a speaker using Arduino G-Code motion control (Feb 2020) and quantitative digital video/image signal analysis (Apr 2020).',
    challenge:
      'Accurately characterizing acoustic and optical signals requires synchronized hardware positioning, time-domain noise reduction, digital-to-analog PWM filtering, and analysis of resolution and sampling limits.',
    architectureAndApproach: [
      'Arduino G-Code Motion Control (Feb 2020): Used motorized driving control with Arduino via G-Code to position the speaker relative to the acoustic sensor.',
      'Time-Domain Averaging & PWM Filtering: Applied time-domain signal averaging to improve signal-to-noise ratio (SNR) and used pulse-width modulation (PWM) with low-pass filtering to convert digital signals to analog.',
      'Quantitative Digital Image Processing (Apr 2020): Applied digital video measurement techniques in MATLAB to evaluate how amplitude, spatial resolution, and sampling rate affect digital imaging.',
    ],
    outcomes: [
      'Characterized spatiotemporal speaker output with improved signal-to-noise ratio through time-domain averaging.',
      'Evaluated digital imaging resolution and sampling constraints and demonstrated PWM + low-pass digital-to-analog conversion in MATLAB.',
    ],
    technologies: ['MATLAB', 'Arduino', 'G-Code Motion Control', 'PWM & Low-Pass Filtering', 'Digital Image Processing'],
    codeAvailabilityNote: 'Please email for view-only code of individual projects.',
  },
];

export const additionalEngineeringProjects = [
  { name: 'Molecular Property Prediction (Active & Transfer Learning)', domain: 'Python · TensorFlow/Keras', context: 'ATOM Science (Sep 2022 – May 2023)' },
  { name: 'Catalytic Bed Reactor', domain: 'Chemical Engineering', context: 'UC San Diego Coursework' },
  { name: 'Hydrogen on Demand', domain: 'Chemical Engineering', context: 'UC San Diego Coursework' },
  { name: 'Ideal Gas Simulation', domain: 'MATLAB', context: 'UC San Diego Coursework' },
  { name: 'Ant vs. Doodlebug', domain: 'C++', context: 'UC San Diego Coursework' },
  { name: 'Employee Paycheck & Deques', domain: 'C++ / Java', context: 'UC San Diego Coursework' },
  { name: '2048 Game Implementation', domain: 'Java', context: 'UC San Diego Coursework' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'core-stack',
    category: 'Programming, Data Engineering & Machine Learning',
    description: 'Languages, scientific computing libraries, machine learning frameworks, and cloud databases used across production data pipelines and research.',
    skills: ['Python (NumPy, Pandas, Matplotlib.pyplot)', 'SQL', 'TensorFlow & Keras', 'AWS', 'C++', 'Java'],
  },
  {
    id: 'simulation-systems',
    category: 'Engineering Simulation & Process Modeling',
    description: 'Multiphysics simulation, chemical process modeling, and foundational systems and web languages.',
    skills: ['MATLAB', 'COMSOL Multiphysics', 'Aspen', 'C', 'HTML / CSS / JavaScript'],
  },
  {
    id: 'experimental-lab',
    category: 'Battery Formation & Laboratory Instrumentation',
    description: 'Electrochemical cell formation protocols and physical/chemical materials characterization techniques.',
    skills: [
      'Battery Cyclers & Coin Cell Assembly',
      '4680 & R1S/R2/R3 Formation Protocols',
      'SEI Precharge Anomaly Diagnostics',
      'XRD, FTIR & NMR Characterization',
      'Glove Box, Vacuum Oven & ROTAP Shaker',
      'Cell Harvesting & Recycling Teardown',
    ],
  },
];

export const recommendationLetterPolicy = {
  title: 'Recommendation Letters',
  lead: 'I am glad to write recommendation letters for colleagues, research collaborators, and mentees I have worked with directly. A strong recommendation requires that I know your work firsthand and can speak concretely to your technical contributions.',
  philosophy:
    'If we worked together closely on engineering systems, battery formation, research projects, or business operations, please include the details below so I can prepare a thorough letter.',
  eligibleGroups: [
    {
      group: 'Engineering & Research Colleagues',
      detail: 'Colleagues and interns from Tesla, Rivian, ATOM Science, UC Berkeley, or UC San Diego.',
    },
    {
      group: 'Business & Operational Collaborators',
      detail: 'Collaborators and team members from our family-owned enterprise and field evaluation work.',
    },
    {
      group: 'Project & Academic Mentees',
      detail: 'Students or project partners with whom I have worked directly in laboratory or coursework settings.',
    },
  ],
  credibleAreas: [
    'Data engineering, battery telemetry, and analytics (Python, SQL, AWS)',
    'Battery cell formation, testing, and materials characterization (4680, R1S/R2/R3, SEI diagnostics, XRD, FTIR, NMR)',
    'Machine learning and engineering simulation (TensorFlow, Keras, MATLAB, COMSOL, Aspen)',
    'Technical collaboration, experimental rigor, and operational execution',
  ],
  requiredMaterials: [
    {
      step: '01',
      title: 'Your Current Resume / CV',
      detail: 'An up-to-date PDF or link summarizing your academic and professional background.',
    },
    {
      step: '02',
      title: 'The Opportunity Details',
      detail: 'Position description, graduate program requirements, and earliest submission deadline.',
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
    'Please send requests at least 3–4 weeks before the earliest deadline so I have enough time to write a detailed letter.',
  contactEmail: 'putrawibisonos@gmail.com',
  subjectLine: 'Recommendation Letter Request',
};
