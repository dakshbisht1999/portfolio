// Local, editable content for virtual:content module.
export const home = {
  hero: {
    greeting: "Hi, I'm",
    name: 'Dishant Bisht',
    roles: ['Full-Stack Engineer', 'GenAI Engineer'],
    bio: '5+ years building scalable web apps with MERN & MEAN. Now engineering the future with LLMs, RAG, and Langchain.',
    ctaPrimary: 'Explore my work',
    ctaSecondary: "Let's Connect",
  },
  marquee: {
    items: [
      { id: '', label: 'Angular' },
      { id: 'react', label: 'React' },
      { id: 'node', label: 'Node.js' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'express', label: 'Express' },
      { id: 'aws', label: 'AWS EC2' },
      { id: 'genai', label: 'Generative AI' },
      { id: 'python', label: 'Python' },
      { id: 'langchain', label: 'LangChain' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'githubActions', label: 'GitHub Actions' },
      { id: 'cicd', label: 'CI/CD' },
      { id: 'langgraph', label: 'LangGraph' },
    ],
  },
  skills: {
    statLabel: 'Years of Experience',
    statValue: '5+',
    narrative: "From architecting full-stack MERN applications to deploying on AWS with CI/CD pipelines — I've built production systems end-to-end. Now I'm adding GenAI capabilities to that foundation.",
    categories: [
      { id: 'frontend', name: 'Frontend', accent: 'blue', items: [{ id: 'angular', label: 'Angular' }, { id: 'react', label: 'React' }, { id: 'typescript', label: 'TypeScript' }] },
      { id: 'backend', name: 'Backend', accent: 'cyan', items: [{ id: 'node', label: 'Node.js' }, { id: 'express', label: 'Express' }, { id: 'mongodb', label: 'MongoDB' }] },
      { id: 'cloud', name: 'Devops', accent: 'violet', items: [{ id: 'aws', label: 'AWS EC2' },{ id: 'nginx', label: 'Nginx' },{ id: 'pm2', label: 'pm2' },{ id: 'githubActions', label: 'GitHub Actions' }, { id: 'cicd', label: 'CI/CD' }] },
      { id: 'cloud', name: 'genai - next chapter', accent: 'accent', items: [{ id: 'python', label: 'Python' }, { id: 'llm', label: 'LLM' }, { id: 'rag', label: 'RAG' }, { id: 'mcp', label: 'MCP' }, { id: 'langchain', label: 'LangChain' }, { id: 'langgraph', label: 'LangGraph' }] },
    ],
  },
  project: {
    badge: 'MERN Stack',
    name: 'DevTinder',
    description: 'A developer matchmaking app — swipe right on your next collaborator. Built with MERN stack, real-time connections, and a developer-first UX.',
    techStack: [{ id: 'mongodb', label: 'MongoDB' }, { id: 'express', label: 'Express' }, { id: 'react', label: 'React' }, { id: 'node', label: 'Node.js' }],
    liveUrl: 'https://devtinder.dishantbisht.in',
    githubUrl: 'https://github.com/dakshbisht1999/devtinder-fe/',
    githubUrl2: 'https://github.com/dakshbisht1999/devtinder-be/',
    ctaLive: 'Live Demo →',
    ctaGithub: 'FE source',
    ctaGithub2: 'BE source',
  },
  genai: {
    eyebrow: 'the next chapter',
    headline: 'Full Stack GenAI',
    narrative: "The future of software isn't just full-stack — it's intelligent. I'm building expertise in LLMs, Retrieval-Augmented Generation, and agentic frameworks to engineer AI-native applications from the ground up.",
    concepts: [{ id: 'python', label: 'Python' }, { id: 'llm', label: 'LLMs' }, { id: 'rag', label: 'RAG' }, { id: 'mcp', label: 'MCP' }, { id: 'langchain', label: 'LangChain' }, { id: 'langgraph', label: 'LangGraph' }],
  },
  cta: {
    headline: "Let's build something intelligent together",
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
  },
};

export const about = {
  hero: {
    eyebrow: 'About me',
    headline: 'Engineer by craft. Builder by nature.',
    bio: "I'm Dishant Bisht — a Full-Stack Software Engineer with 5+ years of experience designing and shipping production-grade web applications. I've worked across the entire stack: from pixel-perfect Angular and React frontends to Node.js APIs, MongoDB databases, and AWS-hosted infrastructure with CI/CD pipelines. Now I'm channelling that foundation into the next frontier — building intelligent, AI-native applications with LLMs, RAG, and agentic frameworks.",
  },
  stats: [
    { id: 'experience', value: '5+', label: 'Years Experience' },
    { id: 'experience', value: '2', label: 'Stacks Mastered' },
    { id: 'experience', value: '1', label: 'App in Production' },
    { id: 'experience', value: '∞', label: 'Things to Build' },
  ],
  journey: {
    headline: 'The Journey',
    timeline: [
      { id: '1', year: '2019', title: 'Started Full-Stack Development', description: 'Began building web applications with the MEAN stack — Angular, Express, Node.js, and MongoDB. Shipped my first production apps and fell in love with end-to-end engineering.' },
      { id: '2', year: '2020-2021', title: 'Expanded to MERN & Cloud', description: 'Adopted React for frontend work and moved infrastructure to AWS EC2. Set up Nginx as a reverse proxy, pm2 for process management, and built my first CI/CD pipelines with GitHub Actions.' },
      { id: '3', year: "2022-2023", title: "Production Systems at Scale", description: "Architected and deployed scalable full-stack applications in production. Deepened expertise in DevOps — automated deployments, zero-downtime releases, and cloud infrastructure management." },
      { id: '4', year: "2024", title: "Built DevTinder", description: "Designed and launched devTinder — a developer matchmaking platform built with the MERN stack. A passion project that combined real-time features, clean UX, and production-ready deployment." },
      { id: '5', year: "2025-Now", title: "Transitioning to Full Stack GenAI", description: "Learning Python and diving deep into AI/ML concepts — LLMs, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), LangChain, and LangGraph. The goal: become a Full Stack GenAI Engineer." }
    ],
  },
  transition: {
    eyebrow: 'The Next Chapter',
    headline: 'Full Stack → GenAI',
    body: [
      { id: 'focus', text: "The software industry is undergoing its most significant shift since the cloud era. AI isn't just a feature anymore — it's the foundation. I've spent years mastering the full-stack craft, and now I'm applying that same rigour to the GenAI layer." },
      { id: 'focus2', text: "I'm learning to build AI-native applications: systems that reason, retrieve, and act. From prompt engineering and RAG pipelines to agentic workflows with LangGraph and MCP — I'm building the skills to engineer the next generation of intelligent software." },
    ],
    learning: [
      { id: 'python', label: 'Python' }, { id: 'llm', label: 'LLMs' }, { id: 'rag', label: 'RAG' }, { id: 'mcp', label: 'MCP' }, { id: 'langchain', label: 'LangChain' }, { id: 'langgraph', label: 'LangGraph' }
    ],
  },
  cta: {
    headline: 'Want to work together?',
    sub: "I'm open to full-time roles, freelance projects, and GenAI collaborations.",
    ctaContact: 'Get in Touch',
    ctaProjects: 'See My Work',
  },
};

export const projects = {
  hero: {
    eyebrow: 'Projects',
    headline: "Things I've built.",
    sub: "A collection of production apps, side projects, and experiments — each one a chance to solve a real problem and sharpen the craft.",
  },
  featured: {
    badge: 'MERN Stack · Production',
    name: 'DevTinder',
    tagline: 'Swipe right on your next collaborator.',
    description: "A developer matchmaking platform inspired by Tinder — but for finding coding partners, collaborators, and teammates. Built end-to-end with the MERN stack, featuring real-time connections, a swipe-based UX, and a production deployment on AWS EC2 with Nginx and CI/CD.",
    highlights: [
      { id: '1', text: 'Real-time connection requests and match system' },
      { id: '2', text: 'JWT-based authentication with secure sessions' },
      { id: '3', text: 'Deployed on AWS EC2 with Nginx reverse proxy' },
      { id: '4', text: 'Automated CI/CD pipeline via GitHub Actions' }
    ],
    techStack: [
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'express', label: 'Express' },
      { id: 'react', label: 'React' },
      { id: 'node', label: 'Node.js' },
      { id: 'aws', label: 'AWS EC2' },
      { id: 'nginx', label: 'Nginx' },
      { id: 'githubActions', label: 'GitHub Actions' }
    ],
    liveUrl: 'https://devtinder.dishantbisht.in',
    githubUrl: 'https://github.com/dakshbisht1999/devtinder-fe/',
    githubUrl2: 'https://github.com/dakshbisht1999/devtinder-be/',
    ctaLive: 'Live Demo →',
    ctaGithub: 'FE source',
    ctaGithub2: 'BE source',
  },
  other: [
    {
      id: "1",
      status: "Production",
      name: "Portfolio",
      description: "My first developer portfolio — built with React and deployed on AWS. The foundation that led to this site.",
      techStack: [
        { id: 'mongodb', label: 'MongoDB' },
        { id: 'express', label: 'Express' },
        { id: 'react', label: 'React' },
        { id: 'node', label: 'Node.js' },
        { id: 'aws', label: 'AWS EC2' },
        { id: 'nginx', label: 'Nginx' },
        { id: 'githubActions', label: 'GitHub Actions' }
      ],
      liveUrl: "https://dishantbisht.in",
      githubUrl: ['https://github.com/dakshbisht1999/portfolio/']
    },
    {
      id: "2",
      status: "Production",
      name: "DevTinder",
      description: "A developer matchmaking platform inspired by Tinder — built with React and deployed on AWS.",
      techStack: [
        { id: 'mongodb', label: 'MongoDB' },
        { id: 'express', label: 'Express' },
        { id: 'react', label: 'React' },
        { id: 'node', label: 'Node.js' },
        { id: 'aws', label: 'AWS EC2' },
        { id: 'nginx', label: 'Nginx' },
        { id: 'githubActions', label: 'GitHub Actions' }
      ],
      liveUrl: "https://devtinder.dishantbisht.in",
      githubUrl: ['https://github.com/dakshbisht1999/devtinder-fe', 'https://github.com/dakshbisht1999/devtinder-be']
    },
    {
      id: "3",
      status: "In Progress",
      name: "RAG Pipeline",
      description: "My first developer portfolio — built with React and deployed on AWS. The foundation that led to this site.",
      techStack: [
        { id: 'mongodb', label: 'MongoDB' },
        { id: 'express', label: 'Express' },
        { id: 'react', label: 'React' },
        { id: 'node', label: 'Node.js' },
        { id: 'aws', label: 'AWS EC2' },
        { id: 'nginx', label: 'Nginx' },
        { id: 'githubActions', label: 'GitHub Actions' }
      ],
      liveUrl: "",
      githubUrl: []
    },
    {
      id: "4",
      status: "Coming Soon",
      name: "LangGraph Agent",
      description: "My first developer portfolio — built with React and deployed on AWS. The foundation that led to this site.",
      techStack: [
        { id: 'mongodb', label: 'MongoDB' },
        { id: 'express', label: 'Express' },
        { id: 'react', label: 'React' },
        { id: 'node', label: 'Node.js' },
        { id: 'aws', label: 'AWS EC2' },
        { id: 'nginx', label: 'Nginx' },
        { id: 'githubActions', label: 'GitHub Actions' }
      ],
      liveUrl: "",
      githubUrl: []
    }
  ] as Array<{
    id: string;
    status: string;
    name: string;
    description: string;
    techStack: Array<{ id: string; label: string }>;
    liveUrl: string;
    githubUrl: Array<string>;
  }>,
  cta: {
    headline: 'More on GitHub.',
    sub: 'All my code lives on GitHub — open source, experiments, and work in progress.',
    ctaGithub: 'View GitHub Profile',
    ctaContact: "Let's Collaborate",
  },
};

export const skills = {
  hero: {
    eyebrow: 'Skills & Tech Stack',
    headline: 'The full stack.',
    sub: "5+ years of production engineering across frontend, backend, DevOps, and now GenAI. Here's everything in the toolkit.",
  },
  stacks: [
    { id: 'frontend', name: 'Frontend', icon: '◈', color: 'blue', description: 'Building fast, accessible, pixel-perfect UIs.', skills: [{ id: 'angular', name: 'Angular', level: 95 }, { id: 'react', name: 'React', level: 85 }, { id: 'typescript', name: 'TypeScript', level: 90 }, { id: 'javascript', name: 'JavaScript (ES6+)', level: 95 }, { id: 'htmlcss', name: 'HTML5 / CSS3', level: 95 }, { id: 'rxjs', name: 'RxJS', level: 80 }, { id: 'reduxNgrx', name: 'Redux / NgRx', level: 80 }] },
    { id: 'backend', name: 'Backend', icon: '◉', color: 'green', description: 'Designing and shipping robust server-side systems.', skills: [{ id: 'node', name: 'Node.js', level: 90 }, { id: 'express', name: 'Express', level: 90 }, { id: 'mongodb', name: 'MongoDB', level: 88 }, { id: 'restapis', name: 'REST APIs', level: 92 }, { id: 'jwtauth', name: 'JWT / Auth', level: 85 }, { id: 'socketio', name: 'Socket.io', level: 75 }] },
    { id: 'cloud', name: 'DevOps & Cloud', icon: '◎', color: 'orange', description: 'End-to-end deployment, automation, and infrastructure.', skills: [{ id: 'aws', name: 'AWS EC2', level: 82 }, { id: 'nginx', name: 'Nginx', level: 80 }, { id: 'pm2', name: 'pm2', level: 85 }, { id: 'githubActions', name: 'GitHub Actions', level: 80 }, { id: 'cicd', name: 'CI/CD Pipelines', level: 78 }, { id: 'linuxShell', name: 'Linux / Shell', level: 75 }] },
    { id: 'genai', name: 'GenAI — In Progress', icon: '◆', color: 'accent', description: 'Building the next layer: intelligent, AI-native applications.', skills: [{ id: 'python', name: 'Python', level: 5 }, { id: 'llms', name: 'LLMs', level: 5 }, { id: 'rag', name: 'RAG', level: 5 }, { id: 'mcp', name: 'MCP', level: 5 }, { id: 'langchain', name: 'LangChain', level: 5 }, { id: 'langgraph', name: 'LangGraph', level: 5 }] },
  ],
  learning: {
    headline: 'Currently Learning',
    items: [
      { id: 'python', title: 'Python for AI/ML', description: 'Building a strong Python foundation — data structures, async patterns, and AI-specific libraries.' },
      { id: 'llms', title: 'LLM Fundamentals', description: 'Understanding transformer architecture, prompt engineering, fine-tuning, and model evaluation.' },
      { id: 'rag', title: 'RAG Pipelines', description: 'Building retrieval-augmented generation systems with vector stores, embeddings, and LangChain.' },
      { id: 'agenticAi', title: 'Agentic AI with LangGraph', description: 'Designing multi-step AI agents that can reason, plan, and execute tasks using LangGraph workflows.' },
    ],
  },
  tools: {
    headline: 'Tools & Environment',
    items: [
      { id: 'vscode', label: 'VS Code' },
      { id: 'git', label: 'Git' },
      { id: 'github', label: 'GitHub' },
      { id: 'postman', label: 'Postman' },
      { id: 'mongodb-compass', label: 'MongoDB Compass' },
      { id: 'docker-learning', label: 'Docker (learning)' },
      { id: 'npm-yarn', label: 'npm / yarn' },
      { id: 'figma-basics', label: 'Figma (basics)' }
    ]
  },
};

export const contact = {
  hero: {
    eyebrow: 'Contact',
    headline: "Let's build something.",
    sub: "Open to full-time roles, freelance projects, and GenAI collaborations. Drop me a message and I'll get back to you.",
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
    detail: 'Available for full-time roles, freelance, and GenAI collaborations.',
  },
  links: {
    headline: 'Find me online',
    items: [
      { 
        id: 'github', 
        label: 'GitHub', 
        handle: '@dakshbisht1999', 
        url: 'https://github.com/dakshbisht1999', 
        icon: 'github' 
      },
      { 
        id: 'namastedev', 
        label: 'NamasteDev', 
        handle: '@dakshbisht1999', 
        url: 'https://namastedev.com/dakshbisht1999', 
        icon: 'github' 
      },
      { 
        id: 'linkedin', 
        label: 'LinkedIn', 
        handle: 'Dishant Bisht', 
        url: 'https://linkedin.com/in/dishantbisht', 
        icon: 'linkedin' 
      },
      { 
        id: 'email', 
        label: 'Email', 
        handle: 'dakshbisht1999@gmail.com', 
        url: 'mailto:dakshbisht1999@gmail.com', 
        icon: 'mail' 
      }
    ] as Array<{ id: string; label: string; handle: string; url: string; icon: string }>,
  },
};
