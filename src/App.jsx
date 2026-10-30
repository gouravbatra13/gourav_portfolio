import './App.css'
import { useState } from 'react'
import portrait from './assets/gourav-batra.jpg'

const experience = [
  {
    role: 'Software Developer',
    company: 'Konstant Infosolutions Private Limited',
    location: 'Jaipur, India',
    dates: 'Oct 2025 — Sep 2026',
    responsibilities: [
      'Built scalable backend applications and REST APIs with Node.js, NestJS, and Express.js.',
      'Implemented JWT authentication, role-based access control, validation, and secure workflows.',
      'Developed responsive React interfaces and integrated them with backend APIs.',
      'Optimized MySQL and PostgreSQL queries; integrated payment gateways and other third-party services.',
      'Implemented scheduled jobs, queue processing, and email notifications; resolved production issues and improved performance.',
    ],
    skills: ['Node.js', 'Express.js', 'NestJS', 'RBAC', 'MongoDB', 'React.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'JWT'],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Safe Food Mitra Private Limited',
    location: 'Remote, India',
    dates: 'Jun 2025 — Sep 2025',
    responsibilities: [
      'Developed EFSM platform modules for food inspections, safety training, verification, and applications.',
      'Built inspection records, training programs, application and user management, and food-safety workflows.',
      'Implemented Laravel and PHP backend functionality, including CRUD operations, validation, and workflow processing.',
      'Created responsive management interfaces using JavaScript and Bootstrap.',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST APIs'],
  },
  {
    role: 'Software Developer',
    company: 'Future Profilez Private Limited',
    location: 'Jaipur, India',
    dates: 'Sep 2023 — May 2025',
    responsibilities: [
      'Developed web applications and REST APIs for mobile and web products using Laravel, Node.js, Express.js, and NestJS.',
      'Built admin panels and reusable application modules following MVC architecture.',
      'Implemented authentication, authorization, RBAC, payment gateways, and third-party API integrations.',
      'Optimized MySQL queries and contributed across projects using React.js, Node.js, Express.js, NestJS, MongoDB, and Laravel.',
      'Guided junior developers, reviewed code, and coordinated team work to support timely project delivery.',
    ],
    skills: ['Laravel', 'PHP', 'React.js', 'Node.js', 'Express.js', 'NestJS', 'RBAC', 'MongoDB', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    role: 'PHP Developer',
    company: 'Appentus Technologies Private Limited',
    location: 'Jaipur, India',
    dates: 'Jun 2022 — Sep 2023',
    responsibilities: [
      'Developed dynamic web applications, CRUD features, and admin panels using PHP and Laravel.',
      'Integrated frontend interfaces built with HTML, CSS, Bootstrap, and JavaScript.',
      'Integrated APIs, managed MySQL data, fixed bugs, and improved application performance.',
      'Collaborated with QA and UI teams to deliver project updates.',
    ],
    skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Iskylar Technologies Private Limited',
    location: 'Jaipur, India',
    dates: 'Jan 2022 — Jun 2022',
    responsibilities: [
      'Built and updated responsive websites with HTML, CSS, Bootstrap, and JavaScript.',
      'Worked with PHP and Laravel applications, used MySQL, and assisted senior developers with features and bug fixes.',
      'Used Git for version control while learning full-stack web development.',
    ],
    skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
  },
]

const projects = [
  {
    number: '01',
    category: 'Fitness · Backend & Admin',
    name: 'Into Fitness',
    description:
      'A fitness and workout management platform for profiles, exercises, workout plans, progress tracking, fitness summaries, and admin analytics.',
    previewTitle: 'WORKOUT OVERVIEW',
    previewItems: ['Workout plans', 'Progress tracking', 'Fitness summaries'],
    tags: ['Fitness', 'Workout management', 'Analytics'],
    tone: 'project-card--lime',
  },
  {
    number: '02',
    category: 'Inventory · Production',
    name: 'INV Management',
    description:
      'An end-to-end inventory workflow covering raw materials, production, finished goods, dispatch operations, warehouse summaries, and notifications.',
    previewTitle: 'PRODUCTION FLOW',
    previewItems: ['Raw materials', 'Production', 'Dispatch'],
    tags: ['Inventory', 'Production', 'Warehouse'],
    tone: 'project-card--blue',
  },
  {
    number: '03',
    category: 'Community · Real-time',
    name: 'Afuse',
    description:
      'A social and community platform with member profiles, posts, comments, likes, connection requests, community management, and group chat.',
    previewTitle: 'COMMUNITY SPACE',
    previewItems: ['Community posts', 'Connections', 'Group chat'],
    tags: ['Community', 'Social platform', 'Messaging'],
    tone: 'project-card--orange',
  },
  {
    number: '04',
    category: 'Pet Care · Dog Training',
    name: 'Hoofzy',
    description:
      'A pet-care and dog-training app with guided video lessons, personalized programs, progress tracking, training schedules, reminders, and trainer feedback.',
    previewTitle: 'TRAINING PLAN',
    previewItems: ['Guided video lessons', 'Weekly progress', 'Next training session'],
    tags: ['Pet care', 'Personalized plans', 'Progress tracking'],
    tone: 'project-card--lime',
  },
  {
    number: '05',
    category: 'Food Rescue · Marketplace',
    name: 'Good To Grab',
    description:
      'A surplus-food marketplace where local food businesses offer discounted items for customers to reserve, pay for, and collect at a scheduled time.',
    previewTitle: 'SAVE GOOD FOOD',
    previewItems: ['Nearby surplus picks', 'Reserve and pay', 'Scheduled pickup'],
    tags: ['Marketplace', 'Food rescue', 'Pickup scheduling'],
    tone: 'project-card--orange',
  },
  {
    number: '06',
    category: 'Sports & tournaments',
    name: 'Tennis Khelo',
    description:
      'A sports platform for tennis players, match management, and tournament workflows.',
    previewTitle: 'TOURNAMENT PLAY',
    previewItems: ['Player features', 'Manage matches', 'Tournament workflows'],
    tags: ['Tennis', 'Sports', 'Tournaments'],
    tone: 'project-card--blue',
    url: 'https://tenniskhelo.com/',
  },
  {
    number: '07',
    category: 'Education · School website',
    name: 'Bal Vishwa Bharti',
    description:
      'A school website with information for families, admissions content, and academic updates.',
    previewTitle: 'SCHOOL INFORMATION',
    previewItems: ['School information', 'Admissions', 'Academic updates'],
    tags: ['Education', 'School website', 'Admissions'],
    tone: 'project-card--lime',
    url: 'https://www.balvishwabharti.com/',
  },
  {
    number: '08',
    category: 'Mental Wellness · Teletherapy',
    name: 'Mental Health',
    description:
      'An online therapy platform that helps people connect with professional counsellors and access remote support through audio and video sessions.',
    previewTitle: 'SUPPORT, YOUR WAY',
    previewItems: ['Connect with a counsellor', 'Choose audio or video', 'Access support remotely'],
    tags: ['Mental wellness', 'Counselling', 'Audio & video'],
    tone: 'project-card--blue',
  },
  {
    number: '09',
    category: 'E-learning · Education',
    name: 'Pathsala',
    description:
      'An Odisha-based digital learning platform for educational resources, course activities, learning content, and student management.',
    previewTitle: 'LEARNING JOURNEY',
    previewItems: ['Explore learning resources', 'Course activities', 'Student support'],
    tags: ['E-learning', 'Education', 'Student management'],
    tone: 'project-card--lime',
  },
]

const additionalProjects = [
  {
    name: 'DesireMe',
    category: 'E-commerce',
    description: 'Seller listings, orders, earnings tracking, and payment integration.',
  },
  {
    name: 'BizzyBee',
    category: 'Warehouse management',
    description: 'Inventory records, stock tracking, and warehouse operations.',
  },
  {
    name: 'Spenny Piggy',
    category: 'Creator & buyer platform',
    description: 'Creator and buyer profiles with content-related workflows.',
  },
  {
    name: 'Mebee',
    category: 'Dating · Social networking',
    description:
      'A dating and social app with profile management, discovery, matching, and user interactions.',
  },
  {
    name: 'EFSM',
    category: 'Food safety platform',
    description:
      'Built platform modules for food inspections, safety training, verification, applications, and user management.',
  },
  {
    name: 'Strove',
    category: 'Clothing e-commerce',
    description:
      'An online clothing store for discovering and shopping apparel.',
    url: 'https://strove.in/',
  },
]

const genAiProjects = [
  {
    number: '01',
    name: 'Multi-PDF RAG Chatbot',
    description:
      'Ask questions across multiple PDF documents and get relevant answers backed by semantic retrieval.',
    technologies: ['Python', 'LangChain', 'RAG', 'Embeddings'],
    artLabel: 'PDF KNOWLEDGE SEARCH',
    icon: '⌕',
    tone: 'ai-project--rag',
  },
  {
    number: '02',
    name: 'AI Resume Screening System',
    description:
      'Find the right candidate faster with semantic resume search powered by vector embeddings.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Ollama', 'Streamlit'],
    artLabel: 'SEMANTIC SEARCH',
    icon: '✳',
    tone: 'ai-project--resume',
  },
]

const achievements = [
  {
    number: '01',
    title: 'Employee of the Month',
    organization: 'Future Profilez',
    description: 'Recognized for consistent contribution and impact across the team.',
    mark: '★',
  },
  {
    number: '02',
    title: 'Certificate of Appreciation',
    organization: 'Appentus Technologies',
    description: 'Appreciated for dedication and valuable contributions to the team.',
    mark: '✳',
  },
]

const services = [
  {
    number: '01',
    type: 'backend',
    title: 'Backend & API Development',
    description:
      'Build dependable server-side features and APIs for products, admin tools, and business workflows.',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'REST APIs'],
  },
  {
    number: '02',
    type: 'fullstack',
    title: 'Full-Stack Web Applications',
    description:
      'Develop connected web experiences, from responsive React interfaces to the data and services behind them.',
    technologies: ['React.js', 'MERN', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '03',
    type: 'genai',
    title: 'Generative Artificial Intelligence (GenAI)',
    description:
      'Create practical AI features that find useful answers across documents and resumes using retrieval and embeddings.',
    technologies: ['Python', 'RAG', 'LangChain', 'LangGraph', 'Vector DB', 'Embeddings', 'Semantic search'],
  },
  {
    number: '04',
    type: 'frontend',
    title: 'Frontend Development',
    description:
      'Build responsive, user-friendly web interfaces with React and modern frontend tools.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    number: '05',
    type: 'database',
    title: 'Database Design & Optimization',
    description:
      'Organize application data and improve how it is queried across SQL and NoSQL databases.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Indexing', 'Query optimization'],
  },
  {
    number: '06',
    type: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Work with cloud and delivery fundamentals to support reliable application development and deployment.',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Git'],
  },
  {
    number: '07',
    type: 'api',
    title: 'API & Third-Party Integrations',
    description:
      'Connect applications with payment services and external APIs through dependable backend workflows.',
    technologies: ['REST APIs', 'Payment integrations', 'WebSockets', 'OAuth'],
  },
  {
    number: '08',
    type: 'analytics',
    title: 'Analytics & Reporting',
    description:
      'Turn product data into useful summaries, fitness insights, and admin analytics.',
    technologies: ['Admin dashboards', 'Fitness summaries', 'Progress tracking', 'Reports'],
  },
  {
    number: '09',
    type: 'automation',
    title: 'AI & Workflow Automation',
    description:
      'Explore LLM-powered agents and practical AI workflows using LangGraph and related tools.',
    technologies: ['LLM agents', 'LangGraph', 'LangChain', 'Workflow automation'],
  },
]

const skills = [
  {
    label: 'Backend engineering',
    icon: '{ }',
    detail: 'APIs, application architecture & access control',
    items: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'CodeIgniter', 'RESTful APIs', 'WebSockets', 'RBAC', 'System design'],
  },
  {
    label: 'Frontend development',
    icon: 'UI',
    detail: 'Modern interfaces and server-rendered views',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'EJS', 'HBS'],
  },
  {
    label: 'Databases & performance',
    icon: 'DB',
    detail: 'Data modeling, indexing & query tuning',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database design', 'Indexing', 'Query optimization'],
  },
  {
    label: 'AI & generative AI',
    icon: 'AI',
    detail: 'LLM-powered apps, agents & retrieval',
    items: ['Python (Basic)', 'LLMs', 'OpenAI API', 'LangChain', 'LangGraph', 'RAG', 'Vector DB', 'Embeddings', 'Semantic search', 'Prompt engineering', 'Hugging Face', 'Ollama', 'ChromaDB'],
  },
  {
    label: 'Languages',
    icon: '</>',
    detail: 'The languages I use to build and connect systems',
    items: ['JavaScript', 'PHP', 'SQL'],
  },
  {
    label: 'DevOps & cloud',
    icon: '☁',
    detail: 'Version control, delivery & cloud fundamentals',
    items: ['AWS', 'EC2', 'S3', 'Docker', 'CI/CD', 'Git'],
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.25 10h11.5m-4.75-4.75L15.75 10 11 14.75" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5.5 2.75h6l3 3v11.5H5.5z" />
      <path d="M11.5 2.75v3.5H15M8 10h4m-4 3h4" />
    </svg>
  )
}

function NavIcon({ type }) {
  const paths = {
    about: <><circle cx="10" cy="6.5" r="3" /><path d="M4.5 17a5.5 5.5 0 0 1 11 0" /></>,
    experience: <><rect x="3" y="6" width="14" height="10" rx="1.5" /><path d="M7 6V4.5h6V6M3 10h14m-8 0v2h2v-2" /></>,
    projects: <><path d="M2.5 5.5h6l1.5 2h7.5v7a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 2.5 14.5z" /><path d="M2.5 8h15" /></>,
    skills: <><path d="m10 2 1.5 5.5L17 9l-5.5 1.5L10 16l-1.5-5.5L3 9l5.5-1.5z" /><path d="m16 13 .8 2.2L19 16l-2.2.8L16 19l-.8-2.2L13 16l2.2-.8z" /></>,
    education: <><path d="m2 8 8-4 8 4-8 4z" /><path d="M5 9.5V14c2.8 2.4 7.2 2.4 10 0V9.5M18 8v5" /></>,
  }

  return (
    <svg className="nav-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none">
      {paths[type]}
    </svg>
  )
}

function TechIcon({ type }) {
  const icon = {
    laravel: (
      <>
        <path d="m3.5 6 4-2.2 4 2.2v4.6l-4 2.2-4-2.2z" />
        <path d="m11.5 10 4-2.2L18.5 10v4.6l-4 2.2-4-2.2M7.5 8.3l4 2.2" />
      </>
    ),
    node: (
      <>
        <path d="m10 2.5 6.5 3.75v7.5L10 17.5l-6.5-3.75v-7.5z" />
        <path d="M7.1 8.2v4.5c0 1 1.6 1 1.6 0V8.2m2.2 0v5.6m0-5.6h2.5m-2.5 2.7h2" />
      </>
    ),
    react: (
      <>
        <circle cx="10" cy="10" r="1.25" />
        <ellipse cx="10" cy="10" rx="8" ry="3.3" />
        <ellipse cx="10" cy="10" rx="8" ry="3.3" transform="rotate(60 10 10)" />
        <ellipse cx="10" cy="10" rx="8" ry="3.3" transform="rotate(120 10 10)" />
      </>
    ),
    mern: (
      <>
        <path d="m10 2.8 7 3.6-7 3.7-7-3.7z" />
        <path d="m3 9.2 7 3.7 7-3.7M3 12l7 3.7 7-3.7" />
      </>
    ),
    genai: (
      <>
        <path d="m10 2.5 1.5 5.2 5.2 1.5-5.2 1.5L10 16l-1.5-5.3L3.3 9.2l5.2-1.5z" />
        <path d="m16.5 13.5.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z" />
      </>
    ),
  }

  return (
    <svg className={`tech-icon tech-icon--${type}`} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      {icon[type]}
    </svg>
  )
}

function SocialIcon({ type }) {
  const paths = {
    github: (
      <path d="M10 2.4a7.6 7.6 0 0 0-2.4 14.8c.38.07.52-.16.52-.37v-1.42c-2.12.46-2.57-.9-2.57-.9-.35-.88-.85-1.12-.85-1.12-.7-.48.05-.47.05-.47.77.05 1.18.79 1.18.79.69 1.18 1.8.84 2.24.64.07-.5.27-.84.49-1.04-1.69-.19-3.46-.85-3.46-3.77 0-.83.3-1.5.79-2.03-.08-.19-.34-.97.08-2.02 0 0 .65-.21 2.1.78a7.3 7.3 0 0 1 3.82 0c1.46-.99 2.1-.78 2.1-.78.42 1.05.16 1.83.08 2.02.49.53.79 1.2.79 2.03 0 2.93-1.77 3.57-3.47 3.76.28.24.52.7.52 1.41v2.12c0 .21.14.45.52.37A7.6 7.6 0 0 0 10 2.4Z" />
    ),
    linkedin: (
      <>
        <path d="M4.2 7.7H1.8V18h2.4zM3 6.3a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM8 18h2.4v-5.1c0-1.35.25-2.66 1.93-2.66 1.66 0 1.68 1.55 1.68 2.75V18h2.4v-5.65c0-2.77-.6-4.9-3.86-4.9a3.38 3.38 0 0 0-3.04 1.67h-.03V7.7H8z" />
      </>
    ),
    email: <><rect x="2.5" y="4" width="15" height="12" rx="1.5" /><path d="m3.5 5.5 6.5 5 6.5-5" /></>,
    phone: <><path d="M6.2 2.8h7.6a1.5 1.5 0 0 1 1.5 1.5v11.4a1.5 1.5 0 0 1-1.5 1.5H6.2a1.5 1.5 0 0 1-1.5-1.5V4.3a1.5 1.5 0 0 1 1.5-1.5Z" /><path d="M8.5 14.6h3" /></>,
  }

  return (
    <svg className={`social-icon social-icon--${type}`} aria-hidden="true" viewBox="0 0 20 20" fill={type === 'github' || type === 'linkedin' ? 'currentColor' : 'none'}>
      {paths[type]}
    </svg>
  )
}

function App() {
  const [expandedExperience, setExpandedExperience] = useState({})

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Gourav Batra, home">
          <span className="wordmark-monogram" aria-hidden="true">GB</span>
          <span className="wordmark-period" aria-hidden="true">.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about"><NavIcon type="about" />About</a>
          <a className="nav-services-link" href="#services"><NavIcon type="skills" />Services</a>
          <a href="#work"><NavIcon type="experience" />Experience</a>
          <a href="#projects"><NavIcon type="projects" />Projects</a>
          <a href="#skills"><NavIcon type="skills" />Skills</a>
          <a href="#education"><NavIcon type="education" />Education</a>
        </nav>
        <div className="header-actions">
          <a className="header-resume" href="/Gourav-Batra-Resume.pdf" target="_blank" rel="noreferrer">
            <ResumeIcon /> View résumé
          </a>
          <a className="header-contact" href="mailto:batra4336@gmail.com">
            Let&apos;s talk <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">BACKEND <span className="eyebrow-divider">/</span> FULL-STACK <span className="eyebrow-divider">/</span> AI</p>
            <h1>
              Building
              <br />
              thoughtful
              <br />
              <span>software.</span>
            </h1>
            <p className="hero-intro">
              Hey, I&apos;m <strong>Gourav Batra</strong> — a software engineer who builds
              scalable backends, dependable APIs, and useful full-stack products.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#projects">
                Explore my work <ArrowIcon />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/gouravbatra13/" target="_blank" rel="noreferrer"><SocialIcon type="github" />GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://www.linkedin.com/in/gourav-batra-7b9336217/" target="_blank" rel="noreferrer"><SocialIcon type="linkedin" />LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="mailto:batra4336@gmail.com"><SocialIcon type="email" />Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="art-spark art-spark--one" aria-hidden="true">✳</div>
            <div className="art-spark art-spark--two" aria-hidden="true">✳</div>
            <div className="profile-tile">
              <img className="profile-photo" src={portrait} alt="Gourav Batra" />
              <span className="profile-caption">
                <span className="profile-name">Gourav Batra</span>
                <span className="profile-role">Software Engineer</span>
              </span>
            </div>
            <div className="floating-note floating-note--top">
              <span className="note-icon" aria-hidden="true">↗</span>
              Backend &amp; Full Stack
            </div>
            <div className="hero-tech-tags" aria-label="Specialties">
              {[
                ['laravel', 'Laravel'],
                ['node', 'Node.js'],
                ['react', 'React.js'],
                ['mern', 'MERN'],
                ['genai', 'Gen AI'],
              ].map(([type, technology]) => (
                <span key={type}>
                  <TechIcon type={type} />
                  {technology}
                </span>
              ))}
            </div>
            <div className="floating-note floating-note--bottom">
              <span className="note-dot" />
              4.7+ years building software
            </div>
          </div>

          <div className="hero-toolbelt">
            <p className="eyebrow">MY WORKING TOOLKIT</p>
            <div className="hero-tool-list">
              {['Node.js', 'NestJS', 'Laravel', 'React.js', 'MongoDB', 'MySQL'].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <a href="#skills">Explore all skills <span aria-hidden="true">↗</span></a>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <span className="section-index">01 / 08</span>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <h2>
                Good software is
                <br />
                <span>built with intent.</span>
              </h2>
              <div className="about-process">
                <p className="eyebrow">HOW I APPROACH A BUILD</p>
                <div className="about-process-steps">
                  <div className="about-process-step">
                    <span>01</span>
                    <strong>Understand</strong>
                    <small>Start with the problem</small>
                  </div>
                  <div className="about-process-step">
                    <span>02</span>
                    <strong>Build</strong>
                    <small>Make it reliable</small>
                  </div>
                  <div className="about-process-step">
                    <span>03</span>
                    <strong>Improve</strong>
                    <small>Keep it useful</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a software developer with 4.7+ years of experience across
                backend and full-stack development. I enjoy building scalable web
                applications, clean APIs, and systems that make everyday workflows
                simpler.
              </p>
              <p>
                From query optimization and secure access control to real-time
                features and AI-powered search, I like taking a problem from the
                first conversation through to a dependable solution.
              </p>
              <div className="about-facts">
                <div><strong>4.7+</strong><span>Years of experience</span></div>
                <div><strong>Alwar</strong><span>Rajasthan, India</span></div>
                <div><strong>Backend</strong><span>My core craft</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">HOW I CAN HELP</p>
              <span className="section-index">02 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>What I can<br />help you build<span>.</span></h2>
              <p>Focused on the kind of software I build every day: robust backends, useful web products, and practical AI features.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card service-card--${service.type}`} key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">
                      {service.type === 'backend' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="4" y="4" width="16" height="6" rx="1.5" />
                          <rect x="4" y="14" width="16" height="6" rx="1.5" />
                          <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" />
                        </svg>
                      )}
                      {service.type === 'fullstack' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="3.5" y="4" width="17" height="12" rx="2" />
                          <path d="M8 20h8m-4-4v4M7.5 8h9m-9 3h5" />
                        </svg>
                      )}
                      {service.type === 'genai' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="m12 3 2.1 6.9L21 12l-6.9 2.1L12 21l-2.1-6.9L3 12l6.9-2.1z" />
                          <path d="m19 2 .7 2.3L22 5l-2.3.7L19 8l-.7-2.3L16 5l2.3-.7z" />
                        </svg>
                      )}
                      {service.type === 'frontend' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="14" rx="2" />
                          <path d="M3 8h18M7 6h.01M10 6h.01M9 12l-2 2 2 2m6-4 2 2-2 2m-3-5-1 6" />
                        </svg>
                      )}
                      {service.type === 'database' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
                          <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                          <path d="M4 11.5c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                        </svg>
                      )}
                      {service.type === 'cloud' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M7.5 18.5h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.3 4.7 4.7 0 0 0 1.1 9.3Z" />
                          <path d="m9 13 3-3 3 3m-3-3v7" />
                        </svg>
                      )}
                      {service.type === 'api' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M8 8 4 12l4 4m8-8 4 4-4 4m-3-11-2 14" />
                        </svg>
                      )}
                      {service.type === 'analytics' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M4 19V5m0 14h17M8 15l4-4 3 2 5-6" />
                          <path d="M16 7h4v4" />
                        </svg>
                      )}
                      {service.type === 'automation' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
                          <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
                        </svg>
                      )}
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-tags">
                    {service.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <span className="section-index">03 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>Things I&apos;ve helped build<span>.</span></h2>
              <p>A selection of products and platforms I&apos;ve helped bring to life with thoughtful engineering.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    {project.url ? (
                      <a className="project-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website`}>
                        ↗
                      </a>
                    ) : (
                      <span className="project-arrow" aria-hidden="true">↗</span>
                    )}
                  </div>
                  <p className="project-category">{project.category}</p>
                  <div className="project-preview" aria-hidden="true">
                    <div className="preview-heading">
                      <span className="preview-mark" />
                      <span>{project.previewTitle}</span>
                      <span className="preview-menu">•••</span>
                    </div>
                    <div className="preview-items">
                      {project.previewItems.map((item, index) => (
                        <div className="preview-item" key={item}>
                          <span className="preview-step">{String(index + 1).padStart(2, '0')}</span>
                          <span>{item}</span>
                          <span className="preview-check">{index === 0 ? '↗' : '·'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
                    ) : project.name}
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <div className="additional-work">
              <div className="additional-work-heading">
                <span className="more-projects-mark" aria-hidden="true">+</span>
                <div className="additional-work-copy">
                  <p className="eyebrow">MORE PRODUCT WORK</p>
                  <h3>More projects</h3>
                  <p>A few more products I&apos;ve helped shape along the way.</p>
                </div>
              </div>
              <div className="additional-project-grid">
                {additionalProjects.map((project, index) => (
                  <article className="additional-project" key={project.name}>
                    <span className="additional-project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="additional-project-copy">
                      <h4>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noreferrer">
                            {project.name}<span aria-hidden="true"> ↗</span>
                          </a>
                        ) : project.name}
                      </h4>
                      <span className="additional-project-category">{project.category}</span>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="genai section-pad" id="genai">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">GENERATIVE AI</p>
              <span className="section-index">04 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>Ideas, powered<br />by AI<span>.</span></h2>
              <p>Experiments in retrieval, semantic search, and making information easier to work with.</p>
            </div>
            <div className="genai-project-grid">
              {genAiProjects.map((project) => (
                <article className={`ai-project ${project.tone}`} key={project.number}>
                  <div className="ai-project-copy">
                    <span className="ai-project-label"><span /> GENAI PROJECT · {project.number}</span>
                    <h3>{project.name}<span>.</span></h3>
                    <p>{project.description}</p>
                    <div className="ai-project-tech" aria-label="Technologies used">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ai-project-art" aria-hidden="true">
                    <span className="ai-project-orbit ai-project-orbit--outer" />
                    <span className="ai-project-orbit ai-project-orbit--inner" />
                    <span className="ai-project-icon">{project.icon}</span>
                    <span className="ai-project-art-label">{project.artLabel}</span>
                    <span className="ai-project-art-dot ai-project-art-dot--one" />
                    <span className="ai-project-art-dot ai-project-art-dot--two" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-wrap section-pad" id="work">
          <div className="section-heading">
            <p className="eyebrow">WHERE I&apos;VE BEEN</p>
            <span className="section-index">05 / 08</span>
          </div>
          <div className="section-title-row experience-title-row">
            <h2>Experience that<br />shapes the work<span>.</span></h2>
            <p>Growing through teams, products, and problems worth solving.</p>
          </div>
          <div className="timeline">
            {experience.map((job, index) => {
              const isExpanded = Boolean(expandedExperience[job.company])
              const detailsId = `experience-details-${index}`

              return (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline-main">
                  <div className="timeline-heading">
                    <div>
                      <p className="timeline-kicker">
                        CAREER MILESTONE <span>· {String(index + 1).padStart(2, '0')}</span>
                      </p>
                      <h3>{job.role}</h3>
                      <p className="company">{job.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">{job.dates}</span>
                      <span className="timeline-location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="timeline-responsibilities" id={detailsId}>
                    {job.responsibilities.slice(0, isExpanded ? job.responsibilities.length : 2).map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  {isExpanded && (
                    <div className="timeline-skills" aria-label="Skills used">
                      {job.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  )}
                  <button
                    className="timeline-toggle"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => setExpandedExperience((expanded) => ({
                      ...expanded,
                      [job.company]: !expanded[job.company],
                    }))}
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </article>
              )
            })}
          </div>
        </section>

        <section className="achievements section-pad" id="achievements">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">RECOGNITION</p>
              <span className="section-index">06 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>A little recognition<br />along the way<span>.</span></h2>
              <p>A couple of moments that made the hard work feel especially worthwhile.</p>
            </div>
            <div className="achievement-grid">
              {achievements.map((achievement) => (
                <article className="achievement-card" key={achievement.number}>
                  <div className="achievement-emblem" aria-hidden="true">
                    <span className="achievement-mark">{achievement.mark}</span>
                  </div>
                  <span className="achievement-number">RECOGNITION · {achievement.number}</span>
                  <div className="achievement-copy">
                    <p className="eyebrow">{achievement.organization}</p>
                    <h3>{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    <span className="achievement-award-label">AWARD &amp; APPRECIATION</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">MY TOOLKIT</p>
              <span className="section-index">07 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>My toolkit for<br />building what&apos;s next<span>.</span></h2>
              <p>A considered mix of technologies I use to build reliable products, from backend systems to generative AI.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className={`skill-group skill-group--${index + 1}`} key={group.label}>
                  <div className="skill-group-heading">
                    <span className="skill-group-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="skill-group-mark" aria-hidden="true">{group.icon}</span>
                  </div>
                  <h3>{group.label}</h3>
                  <p className="skill-group-detail">{group.detail}</p>
                  <div className="tag-list">
                    {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">EDUCATION</p>
              <span className="section-index">08 / 08</span>
            </div>
            <div className="section-title-row">
              <h2>Learning that<br />moves me forward<span>.</span></h2>
              <p>The academic foundations behind my work in software and technology.</p>
            </div>
            <div className="education-grid">
              <article className="education-card education-card--featured">
                <div className="education-card-top">
                  <span className="education-card-index">01 / POSTGRADUATE</span>
                  <span className="education-card-complete"><span /> COMPLETED</span>
                </div>
                <div className="education-card-main">
                  <span className="education-degree-mark" aria-hidden="true">MCA</span>
                  <div>
                    <h3>Master of Computer Applications</h3>
                    <p className="education-institution">Mangalayatan University</p>
                  </div>
                </div>
                <div className="education-card-meta">
                  <span><span className="education-meta-icon" aria-hidden="true">↗</span> Jul 2024 — Aug 2026</span>
                  <span>Aligarh, Uttar Pradesh</span>
                </div>
              </article>
              <article className="education-card education-card--featured education-card--bcom">
                <div className="education-card-top">
                  <span className="education-card-index">02 / BACHELOR&apos;S</span>
                  <span className="education-card-complete"><span /> COMPLETED</span>
                </div>
                <div className="education-card-main">
                  <span className="education-degree-mark" aria-hidden="true">B.Com</span>
                  <div>
                    <h3>Bachelor of Commerce</h3>
                    <p className="education-institution">Presidency College, Matsya University</p>
                  </div>
                </div>
                <div className="education-card-meta">
                  <span><span className="education-meta-icon" aria-hidden="true">↗</span> Aug 2021 — May 2023</span>
                  <span>Alwar, Rajasthan</span>
                </div>
              </article>
              <article className="education-card education-card--featured education-card--diploma">
                <div className="education-card-top">
                  <span className="education-card-index">03 / DIPLOMA</span>
                  <span className="education-card-complete"><span /> COMPLETED</span>
                </div>
                <div className="education-card-main">
                  <span className="education-degree-mark" aria-hidden="true">WEB</span>
                  <div>
                    <h3>Advance Diploma in Web Profession</h3>
                    <p className="education-institution">DIIT EDUCOM</p>
                  </div>
                </div>
                <div className="education-card-meta">
                  <span><span className="education-meta-icon" aria-hidden="true">↗</span> Jan 2021 — Jan 2022</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p>
          <h2>Let&apos;s make<br /><span>it happen.</span></h2>
          <p className="contact-intro">Have a project in mind or just want to connect? I&apos;d love to hear from you.</p>
          <a className="button button--light" href="mailto:batra4336@gmail.com">
            Get in touch <ArrowIcon />
          </a>
          <div className="contact-links" aria-label="Contact and social links">
            <a className="contact-link-card" href="mailto:batra4336@gmail.com">
              <span className="contact-link-icon"><SocialIcon type="email" /></span>
              <span className="contact-link-copy"><span>Email me</span><strong>batra4336@gmail.com</strong></span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-link-card" href="tel:+918290621725">
              <span className="contact-link-icon"><SocialIcon type="phone" /></span>
              <span className="contact-link-copy"><span>Call me</span><strong>+91 82906 21725</strong></span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-link-card" href="https://github.com/gouravbatra13/" target="_blank" rel="noreferrer">
              <span className="contact-link-icon"><SocialIcon type="github" /></span>
              <span className="contact-link-copy"><span>Explore my code</span><strong>GitHub</strong></span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-link-card" href="https://www.linkedin.com/in/gourav-batra-7b9336217/" target="_blank" rel="noreferrer">
              <span className="contact-link-icon"><SocialIcon type="linkedin" /></span>
              <span className="contact-link-copy"><span>Connect with me</span><strong>LinkedIn</strong></span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home" aria-label="Gourav Batra, back to top">
          <span className="wordmark-monogram" aria-hidden="true">GB</span>
          <span className="wordmark-period" aria-hidden="true">.</span>
        </a>
        <p className="footer-credit">Designed &amp; built by <strong>Gourav Batra</strong></p>
        <a className="footer-top-link" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  )
}

export default App
