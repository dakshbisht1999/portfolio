// Local, editable content for virtual:content module.

/**
 * Portfolio positioning:
 * Senior Software Engineer with a strong Angular/enterprise background,
 * expanding into full-stack engineering and AI-native application development.
 *
 * The homepage is intentionally structured around:
 * 1. Proven engineering foundation
 * 2. Full-stack expansion
 * 3. Current public work
 * 4. Current AI experiments
 * 5. Direction of growth
 */

export const home = {
  hero: {
    greeting: "Hi, I'm",
    name: 'Dishant Bisht',
    roles: ['Senior Software Engineer', 'Full-Stack Engineer', 'AI Engineer'],
    bio: '5+ years building production web applications across Angular, React, Node.js, and AWS. Now expanding that foundation into AI-native applications with LLMs, RAG, embeddings, and agentic systems.',
    ctaPrimary: 'Explore my work',
    ctaSecondary: "Let's Connect",
  },

  marquee: {
    items: [
      { id: 'angular', label: 'Angular' },
      { id: 'react', label: 'React' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'aws', label: 'AWS' },
      { id: 'ec2', label: 'EC2' },
      { id: 's3', label: 'S3' },
      { id: 'lambda', label: 'AWS Lambda' },
      { id: 'generative-ai', label: 'Generative AI' },
      { id: 'python', label: 'Python' },
      { id: 'fastapi', label: 'FastAPI' },
      { id: 'llm', label: 'LLMs' },
      { id: 'rag', label: 'RAG' },
      { id: 'langchain', label: 'LangChain' },
      { id: 'langgraph', label: 'LangGraph' },
      { id: 'github-actions', label: 'GitHub Actions' },
      { id: 'cicd', label: 'CI/CD' },
    ],
  },

  journey: {
    eyebrow: 'The Journey',
    headline: 'From frontend specialist to full-stack & AI engineer.',
    narrative:
      'The goal has never been to move away from frontend engineering. It has been to build on that foundation — understanding more of the backend, infrastructure, and AI layers that power modern software.',
    milestones: [
      {
        id: 'enterprise',
        period: 'Professional Experience',
        title: 'Enterprise Frontend Engineering',
        description:
          'Built and modernized production applications with Angular, worked across large enterprise products, collaborated with backend teams, and mentored developers while growing into senior engineering responsibilities.',
      },
      {
        id: 'private-product',
        period: 'Jan 2026 – Jul 2026',
        title: 'Private Product Collaboration',
        description:
          'Built React interfaces for a private interior-design product while collaborating with a team working with Python/FastAPI microservices, cloud infrastructure, Docker, and AI/LLM integrations. The product is currently private and cannot be publicly demonstrated.',
        status: 'Private',
      },
      {
        id: 'full-stack',
        period: 'Aug 2026 – Present',
        title: 'Full-Stack Engineering',
        description:
          'Building on full-stack project work at EbizOn, went deeper into React, Node.js, Express, MongoDB, authentication, OAuth 2.0, APIs, and AWS deployment.',
        status: 'Active',
      },
      {
        id: 'ai',
        period: 'Current',
        title: 'AI Engineering',
        description:
          'Building practical foundations in LLM applications, embeddings, RAG, AI-powered search, recommendation systems, and agentic architectures while continuing to ship full-stack software.',
        status: 'In Progress',
      },
    ],
  },

  skills: {
    eyebrow: 'Engineering Foundation',
    headline: 'Built from production experience.',
    statLabel: 'Years of Experience',
    statValue: '5+',
    narrative:
      'My foundation comes from building and maintaining production-grade web applications, with deep frontend experience in Angular and growing full-stack ownership across Angular, React, Node.js, MongoDB, APIs, AWS, and deployment workflows.',
    categories: [
      {
        id: 'frontend',
        name: 'Frontend Engineering',
        description: 'Angular, React, TypeScript, reusable UI systems, forms, state management, APIs, and production application development.',
        accent: 'blue',
        items: [
          { id: 'angular', label: 'Angular' },
          { id: 'react', label: 'React' },
          { id: 'typescript', label: 'TypeScript' },
          { id: 'rxjs', label: 'RxJS' },
          { id: 'ngrx', label: 'NgRx' },
          { id: 'angular-material', label: 'Angular Material'},
        ],
      },
      {
        id: 'backend',
        name: 'Backend & APIs',
        accent: 'cyan',
        description:
          'Building REST-driven applications and understanding the complete request, authentication, data, and deployment lifecycle.',
        items: [
          { id: 'node', label: 'Node.js' },
          { id: 'express', label: 'Express' },
          { id: 'mongodb', label: 'MongoDB' },
          { id: 'rest', label: 'REST APIs' },
          { id: 'jwt', label: 'JWT' },
          { id: 'auth', label: 'OAuth 2.0' },
        ],
      },
      {
        id: 'cloud',
        name: 'Cloud & Delivery',
        accent: 'violet',
        description:
          'Hands-on experience taking applications from local development to deployed environments and learning the infrastructure behind them.',
        items: [
          { id: 'ec2', label: 'AWS EC2' },
          { id: 's3', label: 'AWS S3' },
          { id: 'cloudfront', label: 'AWS CloudFront' },
          { id: 'lambda', label: 'AWS Lambda' },
          { id: 'nginx', label: 'Nginx' },
          { id: 'githubActions', label: 'GitHub Actions' },
          { id: 'cicd', label: 'CI/CD' },
        ],
      },
      {
        id: 'ai',
        name: 'AI Engineering — In Progress',
        accent: 'accent',
        items: [
          { id: 'python', label: 'Python' },
          { id: 'fastapi', label: 'Fast API' },
          { id: 'llm', label: 'LLMs' },
          { id: 'embeddings', label: 'Embeddings' },
          { id: 'rag', label: 'RAG' },
          { id: 'mcp', label: 'MCP' },
          { id: 'langchain', label: 'LangChain' },
          { id: 'langgraph', label: 'LangGraph' },
        ],
      },
    ],
  },

  project: {
    badge: 'Full-Stack · Production',
    name: 'DevTinder',
    tagline: 'A full-stack platform for developer connections.',
    description:
      'A developer matchmaking platform built to explore real-world full-stack engineering — from React and Node.js to MongoDB, authentication, OAuth 2.0, AWS deployment, and production-oriented application architecture.',
    highlights: [
      { id: '1', text: 'React frontend with Node.js / Express backend' },
      { id: '2', text: 'MongoDB data layer and REST APIs' },
      { id: '3', text: 'Authentication and Google OAuth 2.0' },
      { id: '4', text: 'Deployed on AWS EC2 with production-style configuration' },
    ],
    techStack: [
      { id: 'react', label: 'React' },
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'oauth', label: 'OAuth 2.0' },
      { id: 'gcp', label: 'GCP (Google OAuth)' },
      { id: 'aws', label: 'AWS EC2' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'ses', label: 'AWS SES' },
      { id: 'githubActions', label: 'GitHub Actions' },
    ],
    liveUrl: 'https://devtinder.dishantbisht.in',
    githubUrl: 'https://github.com/dakshbisht1999/devtinder-fe/',
    githubUrl2: 'https://github.com/dakshbisht1999/devtinder-be/',
    ctaLive: 'Live Demo →',
    ctaGithub: 'FE source',
    ctaGithub2: 'BE source',
  },

  currentlyBuilding: {
    eyebrow: 'Currently Building',
    headline: 'Turning full-stack systems into intelligent systems.',
    narrative:
      'My current work focuses on adding practical AI capabilities to applications rather than treating AI as a separate layer. These experiments are evolving alongside DevTinder and other personal projects.',
    items: [
      {
        id: 'ai-search',
        status: 'Exploring',
        title: 'AI-Powered Search',
        description:
          'Combining semantic retrieval with LLM reasoning to make search results more useful and explain why a result is relevant.',
        concepts: ['Embeddings', 'Elasticsearch', 'LLMs'],
      },
      {
        id: 'two-tower',
        status: 'Exploring',
        title: 'Two-Tower Recommendation',
        description:
          'Exploring a two-tower architecture for generating more relevant recommendations and feed results inside DevTinder.',
        concepts: ['Two-Tower Models', 'Embeddings', 'Recommendation Systems'],
      },
      {
        id: 'rag',
        status: 'Exploring',
        title: 'RAG Chatbot',
        description:
          'A document-grounded conversational AI project where users can provide documents and ask questions based on their contents.',
        concepts: ['RAG', 'Vector Search', 'LLMs'],
      },
      {
        id: 'agents',
        status: 'Coming Soon',
        title: 'Agentic Applications',
        description:
          'Exploring multi-step workflows where AI systems can reason, use tools, and execute tasks through structured agent workflows.',
        concepts: ['LangGraph', 'MCP', 'Tool Calling'],
      },
    ],
  },

  genai: {
    eyebrow: 'The Next Chapter',
    headline: 'Full-Stack → AI Engineering',
    narrative:
      'I am building on years of software engineering experience rather than starting over. The next step is learning how to design, integrate, deploy, and scale AI capabilities inside real applications.',
    concepts: [
      { id: 'python', label: 'Python' },
      { id: 'fastapi', label: 'Fast API' },
      { id: 'llm', label: 'LLMs' },
      { id: 'embeddings', label: 'Embeddings' },
      { id: 'rag', label: 'RAG' },
      { id: 'mcp', label: 'MCP' },
      { id: 'langchain', label: 'LangChain' },
      { id: 'langgraph', label: 'LangGraph' },
    ],
    status: 'In Progress',
  },

  cta: {
    headline: "Let's build something useful.",
    sub:
      'Open to full-time software engineering opportunities, full-stack roles, and opportunities where I can combine production engineering with AI.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
  },
};

export const about = {
  hero: {
    eyebrow: 'About me',
    headline: 'Engineer by craft. Builder by nature.',
    bio:
      `
      I'm Dishant Bisht — a Senior Software Engineer with 5+ years of experience building, modernizing, and evolving production web applications across full-stack, API, and cloud environments.
      
      My foundation spans frontend architecture in Angular, React, and TypeScript alongside full-stack engineering with Node.js, Express, MongoDB, and AWS. I have driven large-scale modernization projects, PWA migrations, and multi-component enterprise ecosystems, while contributing to API design, HLD/LLD discussions, developer mentoring, and cross-functional backend systems built on Java, PHP, and microservices.
      
      Building on this background, I am continuously deepening my full-stack expertise while expanding into GenAI engineering through real-world systems and project-driven exploration with Python, FastAPI, LLMs, RAG, and agentic workflows.
      `
  },
  stats: [
    { id: 'experience', value: '5+', label: 'Years Experience' },
    { id: 'stack', value: 'Full Stack', label: 'Engineering' },
    { id: 'architecture', value: 'HLD / LLD', label: 'Architecture' },
    { id: 'direction', value: 'AI', label: 'Engineering' },
  ],
  journey: {
    headline: 'The Journey',
    timeline: [
      {
        id: '1',
        year: '2017–2020',
        title: 'BCA & Web Development Foundations',
        description: 'Started my journey in software development while pursuing my BCA, building the fundamentals of web development and programming through academic and personal projects.',
      },
      {
        id: '2',
        year: 'Oct 2020–Mar 2021',
        title: 'Web Developer Intern | Lumuk',
        description: 'Entered professional software development through a six-month internship, working on web development and gaining hands-on experience with real-world applications, CMS platforms, and deployment environments.',
      },
      {
        id: '3',
        year: 'Apr 2021–Mar 2024',
        title: 'Analyst Programmer → Senior Analyst Programmer | EbizOn',
        description: 'Moved into full-time software engineering and grew from Analyst Programmer to Senior Analyst Programmer. Worked full-stack on CADDRA (React) and MariDeal (Angular PWA with Node.js APIs), then led frontend development of the ShipCarte Customer and Admin portals and a frontend team of 4.',
      },
      {
        id: '4',
        year: 'Sep 2024–Dec 2025',
        title: 'Senior Software Engineer | Avalon Information Systems',
        description: 'Led the Angular 7 → 20 modernization of OpenEMIS products for a UNESCO and CSF initiative, maintaining a versioned shared StyleGuide, building reusable components used across all the products, and cutting pending frontend issues from 75% to 40%. Contributed to REST API integration and HLD/LLD discussions, mentored developers, and built the React-based Parakh (NCERT) dashboard.',
      },
      {
        id: '5',
        year: 'Jan 2026–Jul 2026',
        title: 'Private Product Collaboration',
        description: 'Expanded into a broader full-stack environment through product collaboration involving React, Python/FastAPI, microservices, Docker, cloud infrastructure, and AI/LLM integrations.',
      },
      {
        id: '6',
        year: 'Aug 2026–Present',
        title: 'AI Engineering',
        description: 'Continuing to expand as a full-stack engineer through projects such as DevTinder while exploring AI-native application development with LLMs, embeddings, RAG, MCP, LangChain, and LangGraph.',
      },
    ],
  },
  education: {
    headline: 'Education',
    timeline: [
      {
        id: '1',
        year: '2014–2015',
        title: 'Secondary | CBSE',
        description: 'Completed Secondary education with core coursework across science and mathematics, achieving a top grade (10/10) in Foundations of Information Technology (FIT).',
      },
      {
        id: '2',
        year: '2016–2017',
        title: 'Senior Secondary | CBSE',
        description: 'Completed Senior Secondary education with a focus on Commerce and Mathematics, developing strong analytical, quantitative reasoning, and algorithmic problem-solving skills.',
      },
      {
        id: '3',
        year: '2017–2020',
        title: 'BCA & Web Development Foundations | GGSIPU',
        description: 'Built core computer science fundamentals, data structures, and algorithms alongside hands-on web development. Developed full-stack web applications, REST APIs, and database solutions through academic projects and early internships.',
      },
      {
        id: '4',
        year: 'Jan 2025–Dec 2026',
        title: 'MCA (AI & ML) | Amity University Online',
        description: 'Focusing on advanced machine learning algorithms, deep learning, neural networks, and generative AI architectures. Building expertise in vector search, RAG pipelines, and integrating AI models into scalable microservices.',
      },
    ],
  },
  transition: {
    eyebrow: 'The Next Chapter',
    headline: 'Full Stack → AI Engineering',
    body: [
      {
        id: 'focus',
        text:
          'My goal is not to abandon software engineering for AI. It is to combine both. A strong AI product still needs good frontend engineering, backend systems, data modeling, APIs, deployment, security, and reliable software architecture.',
      },
      {
        id: 'focus2',
        text:
          'That is why my current learning is project-driven: building RAG systems, experimenting with embeddings and semantic search, exploring recommendation architectures, and learning how agentic systems can connect models with tools and real application workflows.',
      },
    ],
    learning: [
      { id: 'python', label: 'Python' },
      { id: 'llm', label: 'LLMs' },
      { id: 'embeddings', label: 'Embeddings' },
      { id: 'rag', label: 'RAG' },
      { id: 'mcp', label: 'MCP' },
      { id: 'langchain', label: 'LangChain' },
      { id: 'langgraph', label: 'LangGraph' },
    ],
  },
  cta: {
    headline: 'Want to work together?',
    sub:
      "I'm open to full-time software engineering and full-stack opportunities, particularly where I can continue growing into AI engineering.",
    ctaContact: 'Get in Touch',
    ctaProjects: 'See My Work',
  },
};

export const projects = {
  hero: {
    eyebrow: 'Projects',
    headline: "Things I've built.",
    sub:
      'A collection of personal products, production applications, experiments, and selected professional work — with the emphasis on what I built, learned, and contributed.',
  },
  featured: {
    badge: 'Full-Stack · Production',
    name: 'DevTinder',
    tagline: 'Discover developers, find collaborators, and build together.',
    description:
      'A full-stack networking and matchmaking platform that helps software developers discover peers, mentors, and project collaborators. Members can explore developer profiles, send and manage connection requests, and grow their professional network. Built with a React frontend and a Node.js / Express API backed by MongoDB.',
    highlights: [
      { id: '1', text: 'Discover developer profiles and send connection requests' },
      { id: '2', text: 'Review incoming requests and manage accepted connections' },
      { id: '3', text: 'Profile management, Google OAuth, and secure cookie-based JWT sessions' },
      { id: '4', text: 'AWS EC2 deployment with Nginx, GitHub Actions, and AWS SES email workflows' },
      { id: '5', text: 'Roadmap: payment gateway, WebSocket live chat for premium users, Swagger API docs, Google AdSense, and Two-Tower recommendations' },
    ],
    techStack: [
      { id: 'react', label: 'React' },
      { id: 'vite', label: 'Vite' },
      { id: 'redux', label: 'Redux Toolkit' },
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'oauth', label: 'Google OAuth 2.0' },
      { id: 'gcp', label: 'GCP (Google OAuth)' },
      { id: 'ses', label: 'AWS SES' },
      { id: 'aws', label: 'AWS EC2' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'githubActions', label: 'GitHub Actions' },
    ],
    liveUrl: 'https://devtinder.dishantbisht.in',
    githubUrl: 'https://github.com/dakshbisht1999/devtinder-fe/',
    githubUrl2: 'https://github.com/dakshbisht1999/devtinder-be/',
    ctaLive: 'Live Demo →',
    ctaGithub: 'FE source',
    ctaGithub2: 'BE source',
  },

  personal: [
    {
      id: 'portfolio',
      status: 'Production',
      name: 'Portfolio',
      description:
        'A personal developer portfolio built with React. Designed serverless-first on AWS (S3, CloudFront, Lambda); currently running on EC2 behind Nginx while a CloudFront distribution issue is resolved with AWS support. The contact form reuses the DevTinder backend email API.',
      techStack: [
        { id: 'react', label: 'React' },
        { id: 'tailwind', label: 'Tailwind CSS' },
        { id: 'aws', label: 'AWS EC2' },
        { id: 'nginx', label: 'Nginx' },
        { id: 'githubActions', label: 'GitHub Actions' },
      ],
      liveUrl: 'https://dishantbisht.in',
      githubUrl: ['https://github.com/dakshbisht1999/portfolio/'],
    },
    {
      id: 'rag',
      status: 'In Progress',
      name: 'RAG Chatbot',
      description:
        'A document-grounded conversational AI project where users can provide documents and ask questions based on their contents.',
      techStack: [
        { id: 'python', label: 'Python' },
        { id: 'fastapi', label: 'FastAPI' },
        { id: 'react', label: 'React' },
        { id: 'embeddings', label: 'Embeddings' },
        { id: 'vectorsearch', label: 'Vector Search' },
        { id: 'llm', label: 'LLMs' },
        { id: 'rag', label: 'RAG' },
      ],
      liveUrl: '',
      githubUrl: [],
    },
    {
      id: 'langgraph',
      status: 'Planned',
      name: 'LangGraph Agent',
      description:
        'An upcoming agentic AI project exploring structured workflows, tool use, reasoning, and multi-step execution with LangGraph and MCP.',
      techStack: [
        { id: 'python', label: 'Python' },
        { id: 'langgraph', label: 'LangGraph' },
        { id: 'mcp', label: 'MCP' },
        { id: 'llm', label: 'LLMs' },
      ],
      liveUrl: '',
      githubUrl: [],
    },
  ],

  professional: {
    eyebrow: 'Professional Work',
    headline: 'Selected products I contributed to.',
    sub:
      'These are professional products I worked on during my previous roles. They are presented without source-code or demo links because the underlying applications and repositories belong to their respective organizations.',
    disclaimer:
      'Descriptions are intentionally limited to my role and publicly appropriate technical context. No proprietary source code, credentials, internal architecture, or confidential information is exposed.',
    items: [
      {
        id: 'openemis',
        status: 'Professional · Production',
        name: 'OpenEMIS',
        organization: 'Avalon',
        description:
          'Led modernization of OpenEMIS applications, upgrading legacy systems from Angular 7 to Angular 20 for a UNESCO and CSF initiative. Contributed across Exams, Core, Registrations and StyleGuide, maintaining a shared StyleGuide library with a release for each Angular version and building reusable components for reporting, certificates and examination statistics. Cut pending frontend issues from 75% to 40%.',
        applications: [
          'Exams',
          'Core',
          'Registrations',
          'StyleGuide',
          'Other OpenEMIS application modules',
        ],
        focus: [
          'Angular frontend development',
          'Frontend modernization',
          'Reusable UI components',
          'Data-heavy application interfaces',
          'API integration',
        ],
        liveUrl: '',
        githubUrl: [],
      },
      {
        id: 'shipcarte',
        status: 'Professional · Production',
        name: 'ShipCarte',
        organization: 'EbizOn',
        description:
          'Led frontend development of the Customer (Angular 11) and Admin (Angular 8) portals, which share the Stylo styleguide across both versions (250+ components, 30+ modules, 400+ API integrations), and led a frontend team of 4. Worked with the Java 17 backend team on API contracts, payload and response structures. Implemented custom markers on google maps to handle shipping of products from multiple shippers to multiple receivers, also the custom back-button route handling for multi-step workflows and delivered reusable components that sped up feature delivery.',
        applications: [
          'Customer portal (Angular 11)',
          'Admin portal (Angular 8)',
          'Stylo styleguide',
        ],
        focus: [
          'Angular',
          'Reusable components',
          'REST API integration',
          'Admin and user workflows',
          'Production application development',
        ],
        liveUrl: '',
        githubUrl: [],
      },
      {
        id: 'marideal',
        status: 'Professional · Production',
        name: 'MariDeal',
        organization: 'EbizOn',
        description:
          'Full-stack developer on the migration of the MariDeal PWA from AngularJS to Angular 13, replacing legacy controllers and directives with a component-based architecture (MVC to MVVM). Designed and built the Node.js APIs the new app needed and mirrored them in Magento for the legacy production application. Delivered PWA capabilities, Google OAuth and multilingual support.',
        focus: [
          'Angular',
          'AngularJS → Angular migration',
          'PWA development',
          'REST API integration',
          'Node.js API development',
          'Magento API integration',
          'Responsive UI',
          'Google OAuth',
          'i18n (Multilingual)',
        ],
        liveUrl: '',
        githubUrl: [],
      },
      {
        id: 'caddra',
        status: 'Professional · Production',
        name: 'CADDRA',
        organization: 'EbizOn',
        description:
          'Full-stack developer on a healthcare application. Built the React frontend with role-based authorization and separate patient, doctor and admin dashboards, plus a forms module where doctors create forms and assign them to patients. Designed and developed the new backend APIs in CakePHP and handled live bug fixes and deployments.',
        focus: [
          'React',
          'Role-based dashboards',
          'Form creation and assignment',
          'REST API design',
          'Live bug fixes and deployments',
        ],
        liveUrl: '',
        githubUrl: [],
      },
    ],
  },

  cta: {
    headline: 'More code, experiments, and progress.',
    sub:
      'Explore my public repositories for implementation details, experiments, and work in progress.',
    ctaGithub: 'View GitHub Profile',
    ctaContact: "Let's Collaborate",
  },
};

export const skills = {
  hero: {
    eyebrow: 'Skills & Tech Stack',
    headline: 'The engineering toolkit.',
    sub:
      'A production-focused foundation across frontend engineering, backend development, cloud deployment, and an evolving AI engineering stack.',
  },
  stacks: [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '◈',
      color: 'blue',
      description: 'Building production-grade, responsive, maintainable web applications.',
      skills: [
        { id: 'angular', name: 'Angular', level: 95 },
        { id: 'react', name: 'React', level: 85 },
        { id: 'typescript', name: 'TypeScript', level: 90 },
        { id: 'javascript', name: 'JavaScript (ES6+)', level: 95 },
        { id: 'htmlcss', name: 'HTML5 / CSS3', level: 95 },
        { id: 'tailwind', name: 'Tailwind CSS', level: 75 },
        { id: 'rxjs', name: 'RxJS', level: 80 },
        { id: 'reduxNgrx', name: 'Redux / NgRx', level: 80 },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '◉',
      color: 'green',
      description: 'Building APIs, authentication flows, data layers, and full-stack application logic.',
      skills: [
        { id: 'node', name: 'Node.js', level: 70 },
        { id: 'express', name: 'Express', level: 75 },
        { id: 'mongodb', name: 'MongoDB', level: 75 },
        { id: 'restapis', name: 'REST APIs', level: 90 },
        { id: 'jwtauth', name: 'JWT / Auth', level: 70 },
        { id: 'oauth', name: 'OAuth 2.0', level: 70 },
      ],
    },
    {
      id: 'cloud',
      name: 'DevOps & Cloud',
      icon: '◎',
      color: 'orange',
      description: 'Deploying applications and working with practical cloud and delivery workflows.',
      skills: [
        { id: 'aws', name: 'AWS EC2', level: 75 },
        { id: 's3', name: 'AWS S3', level: 70 },
        { id: 'cloudfront', name: 'CloudFront', level: 70 },
        { id: 'lambda', name: 'AWS Lambda', level: 65 },
        { id: 'nginx', name: 'Nginx', level: 75 },
        { id: 'githubActions', name: 'GitHub Actions', level: 75 },
        { id: 'cicd', name: 'CI/CD Pipelines', level: 75 },
        { id: 'linuxShell', name: 'Linux / Shell', level: 70 },
      ],
    },
    {
      id: 'genai',
      name: 'AI Engineering — In Progress',
      icon: '◆',
      color: 'accent',
      description: 'Building practical AI-native applications on top of a full-stack engineering foundation.',
      skills: [
        { id: 'python', name: 'Python', level: 10 },
        { id: 'fastapi', name: 'Fast API', level: 10 },
        { id: 'llms', name: 'LLMs', level: 5 },
        { id: 'embeddings', name: 'Embeddings', level: 5 },
        { id: 'rag', name: 'RAG', level: 0 },
        { id: 'mcp', name: 'MCP', level: 0 },
        { id: 'langchain', name: 'LangChain', level: 0 },
        { id: 'langgraph', name: 'LangGraph', level: 0 },
      ],
    },
  ],
  learning: {
    headline: 'Currently Building & Learning',
    items: [
      {
        id: 'fullstack',
        title: 'Full-Stack Engineering',
        description:
          'Deepening practical experience across React, Node.js, Express, MongoDB, authentication, APIs, and AWS deployment.',
      },
      {
        id: 'ai-search',
        title: 'AI-Powered Search',
        description:
          'Exploring semantic retrieval, Elasticsearch, embeddings, and LLM reasoning for more relevant search experiences.',
      },
      {
        id: 'recommendation',
        title: 'Recommendation Systems',
        description:
          'Exploring Two-Tower model architecture and embedding-based recommendations for application feeds.',
      },
      {
        id: 'rag',
        title: 'RAG Applications',
        description:
          'Building document-grounded applications using embeddings, retrieval, vector search, and LLMs.',
      },
      {
        id: 'agenticAi',
        title: 'Agentic AI',
        description:
          'Learning structured AI workflows with LangGraph, MCP, tool calling, and multi-step execution.',
      },
    ],
  },
  certificates: {
    headline: 'Certifications',
    items: [
      { id: '1', name: 'The Complete 2020 Web Development Bootcamp', issuer: 'Udemy', issuedOn: 'May 2020', image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-VWBYL4VS.jpg?v=1578174128000', link: 'https://www.udemy.com/certificate/UC-VWBYL4VS/', cId: 'UC-VWBYL4VS' },
      { id: '2', name: 'Front End Development - HTML', issuer: 'Great Learning', issuedOn: 'Jan 2024', image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/4034811/original/Dishant_Bisht20240122-70-bldxns.jpg', link: 'https://www.mygreatlearning.com/certificate/PMPHPGGI', cId: 'PMPHPGGI' },
      { id: '3', name: 'Angular7 for Beginners', issuer: 'Great Learning', issuedOn: 'Jan 2024', image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/4034861/original/Dishant_Bisht20240122-70-bkur7x.jpg', link: 'https://www.mygreatlearning.com/certificate/NDWRFKQC', cId: 'NDWRFKQC' },
      { id: '4', name: 'Angular7 for Intermediate level', issuer: 'Great Learning', issuedOn: 'Jan 2024', image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/4034910/original/Dishant_Bisht20240122-70-v5b4pm.jpg', link: 'https://www.mygreatlearning.com/certificate/LHNDOJEG', cId: 'LHNDOJEG' },
      { id: '5', name: 'Angular7 for Advanced level', issuer: 'Great Learning', issuedOn: 'Jan 2024', image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/4034959/original/Dishant_Bisht20240122-70-jbyh2c.jpg', link: 'https://www.mygreatlearning.com/certificate/KMLSLQUN', cId: 'KMLSLQUN' },
      { id: '6', name: 'Team Leadership and Team Management', issuer: 'Great Learning', issuedOn: 'Jan 2024', image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/4034826/original/Dishant_Bisht20240122-70-tngqgq.jpg', link: 'https://www.mygreatlearning.com/certificate/EAWVKDIG', cId: 'EAWVKDIG' },
      { id: '7', name: 'Basic of AI', issuer: 'Amity University Online', issuedOn: 'Jun 2026', image: 'https://media.licdn.com/dms/image/v2/D562DAQEWDLigBsWK7Q/profile-treasury-document-images_1920/B56Z6Wq5jwJwAk-/1/1780644289974?e=1792022400&v=beta&t=2dJyTv4F2F8MmMSNI-VZbz-Lp0iCNpuN4Fk37DsudLQ', link: 'https://media.licdn.com/dms/image/v2/D562DAQEWDLigBsWK7Q/profile-treasury-document-images_1920/B56Z6Wq5jwJwAk-/1/1780644289974?e=1792022400&v=beta&t=2dJyTv4F2F8MmMSNI-VZbz-Lp0iCNpuN4Fk37DsudLQ', cId: 'mfhwg4oucA' },
      { id: '8', name: 'Leadership and Motivation in Organization', issuer: 'Amity University Online', issuedOn: 'Jun 2026', image: 'https://media.licdn.com/dms/image/v2/D562DAQFXpbt4HyTIGA/profile-treasury-document-images_1920/B56Z6Wrd5SKYAk-/1/1780644438780?e=1792022400&v=beta&t=NU2AwVjnPXaAw7ke739QgV5aZZWrk7MtNJTTEGSJYSI', link: 'https://media.licdn.com/dms/image/v2/D562DAQFXpbt4HyTIGA/profile-treasury-document-images_1920/B56Z6Wrd5SKYAk-/1/1780644438780?e=1792022400&v=beta&t=NU2AwVjnPXaAw7ke739QgV5aZZWrk7MtNJTTEGSJYSI', cId: 'Rx5ynOugsU' },
      {
        id: '9',
        name: 'Professional and Life Skills',
        issuer: 'Amity University Online',
        issuedOn: 'Jun 2026',
        image: 'https://media.licdn.com/dms/image/v2/D562DAQHiHZtt0HXevw/profile-treasury-document-cover-images_1920/B56Z6Wrz6wJQBI-/0/1780644529046?e=1791806400&v=beta&t=yRc0V-1wwBMv56nLb30SPEtx29cs0Nq8FOU8h21whH4',
        link: 'https://media.licdn.com/dms/image/v2/D562DAQHiHZtt0HXevw/profile-treasury-document-cover-images_1920/B56Z6Wrz6wJQBI-/0/1780644529046?e=1791806400&v=beta&t=yRc0V-1wwBMv56nLb30SPEtx29cs0Nq8FOU8h21whH4',
        cId: 'IG1IQA7jIF'
      },
      {
        id: '10',
        name: 'Namaste Node.Js',
        issuer: 'NamasteDev',
        issuedOn: 'Aug 2026',
        image: 'https://namastedev.com/assets/images/namaste-node.webp',
        link: 'https://namastedev.com/dakshbisht1999/certificates/namaste-node',
        cId: '99386413BCF81BFE08556666A6B'
      }
    ],
  },
  tools: {
    headline: 'Tools & Environment',
    items: [
      // Core Development
      { id: 'vscode', label: 'VS Code' },
      { id: 'git', label: 'Git' },
      { id: 'github', label: 'GitHub' },
      { id: 'npm', label: 'npm' },
      
      // Design & Prototyping
      { id: 'figma', label: 'Figma' },
      { id: 'adobe-xd', label: 'Adobe XD' },
      
      // Project Management & Agile
      { id: 'jira', label: 'Jira' },
      { id: 'trello', label: 'Trello' },
      { id: 'confluence', label: 'Confluence' },
      
      // APIs & Databases
      { id: 'postman', label: 'Postman' },
      { id: 'swagger', label: 'Swagger' },
      { id: 'mongodb-compass', label: 'MongoDB Compass' },
      { id: 'mongodb-atlas', label: 'MongoDB Atlas' },
      
      // DevOps, Cloud & Environments
      { id: 'docker', label: 'Docker' },
      { id: 'aws', label: 'AWS (EC2, S3, Cloudfront, SES, Route 53)' },
      { id: 'gcp', label: 'GCP (Google OAuth / Sign-In)' },
      { id: 'github-actions', label: 'GitHub Actions' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'copilot', label: 'GitHub Copilot' },
      { id: 'cursor', label: 'Cursor' },
      { id: 'codex', label: 'Codex' },
      { id: 'antigravity', label: 'Antigravity' },
      { id: 'claude', label: 'Claude' },
    ],
  },
};

export const contact = {
  hero: {
    eyebrow: 'Contact',
    headline: "Let's build something.",
    sub:
      "Open to full-time software engineering opportunities, full-stack roles, and opportunities where I can continue growing into AI engineering.",
  },

  form: {
    heading: 'Send a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: 'Tell me about the role, project, or idea...',
    submitLabel: 'Send Message',
    sendingLabel: 'Sending…',
    successHeadline: 'Message sent',
    successBody: 'Thanks for reaching out. I will get back to you soon.',
    errorBody: 'The message could not be sent. Please try again.',
  },

  availability: {
    status: 'Open to opportunities',
    detail:
      'Available for full-time software engineering, full-stack, and AI-focused opportunities.',
  },

  links: {
    headline: 'Find me online',
    items: [
      {
        id: 'github',
        label: 'GitHub',
        handle: '@dakshbisht1999',
        url: 'https://github.com/dakshbisht1999',
        icon: 'github',
      },
      {
        id: 'namastedev',
        label: 'NamasteDev',
        handle: '@dakshbisht1999',
        url: 'https://namastedev.com/dakshbisht1999',
        icon: 'github',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        handle: 'Dishant Bisht',
        url: 'https://linkedin.com/in/dishantbisht',
        icon: 'linkedin',
      },
      {
        id: 'email',
        label: 'Email',
        handle: 'dakshbisht1999@gmail.com',
        url: 'mailto:dakshbisht1999@gmail.com',
        icon: 'mail',
      },
    ] as Array<{
      id: string;
      label: string;
      handle: string;
      url: string;
      icon: string;
    }>,
  },
};
