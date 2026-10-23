import { Project, SkillCategory, ExperienceItem, EducationItem, TrainingItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Abdullah Iqbal',
  title: 'Computer Science Student | Web Developer & IT Operations Specialist',
  badgeKicker: 'Computer Science Student · Web & IT Specialist',
  shortBio:
    'An ambitious technology enthusiast and Computer Science student combining practical web development, WordPress customization, computer operations, data management, and IT support to deliver reliable digital solutions.',
  location: 'Khanewal, Pakistan',
  email: 'abdullahiqbal1647@gmail.com',
  phone: '03156097514',
  whatsappUrl: 'https://wa.me/923156097514?text=Hi%20Abdullah%2C%20I%20came%20across%20your%20portfolio',
  linkedinUrl: 'https://www.linkedin.com/in/abdullah-iqbal-9a35b8290',
  githubUrl: 'https://github.com/theprinceabdullah0311-boop',
  portraitImage: '/assets/aistudio/image_deee4cf0.png',
  cvPdfPath: '/assets/aistudio/Abdullah_CV._868840cc.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'toolhub',
    title: 'ToolHub',
    tagline: 'Online Browser Tools Platform',
    category: 'Independent Web Utility',
    status: 'Live & Active',
    liveUrl: 'https://my-toolhub-site.vercel.app/',
    description:
      'A web-based collection of useful browser tools designed to help users complete everyday image, PDF, text, coding-format, and calculation tasks directly in their browser.',
    technologies: [
      'HTML5',
      'CSS3 & Responsive Layouts',
      'JavaScript (ES6+)',
      'Browser APIs',
      'Client-Side Processing',
    ],
    keyTools: [
      'Image Compressor',
      'JPG to PDF',
      'Image Resizer',
      'PNG to JPG',
      'JPG to PNG',
      'Word Counter',
      'QR Code Generator',
      'JSON Formatter',
      'Base64 Encoder/Decoder',
      'URL Encoder/Decoder',
      'PDF Merger',
      'PDF Compressor',
      'PDF to Images',
      'Case Converter',
      'Percentage Calculator',
    ],
    features: [
      'Zero-upload client-side processing for privacy and instant responsiveness',
      'Mobile-first responsive UI crafted for quick one-tap task completion',
      'Categorized layout spanning image manipulation, document workflows, and dev formats',
      'Lightweight bundle footprint without heavy server backends',
    ],
    highlights: [
      'Utility-focused product design solving real day-to-day conversion needs',
      'Demonstrates clean DOM manipulation, file handling APIs, and format transformations',
      'Deployed on Vercel with zero latency tool initialization',
    ],
    isFeatured: true,
  },
  {
    id: 'personal-portfolio-v1',
    title: 'Personal Portfolio (Earlier Version)',
    tagline: 'Foundational Web Development Project',
    category: 'Personal Branding & Web Showcase',
    status: 'Live & Deployed',
    liveUrl: 'https://theprinceabdullah0311-boop.github.io/abdullah-portfolio/',
    description:
      'My earlier personal portfolio project, built as part of my journey in web development and personal branding.',
    technologies: ['HTML5', 'Custom CSS', 'Vanilla JavaScript', 'GitHub Pages'],
    features: [
      'Early milestone showcasing fundamentals in HTML, CSS structure, and GitHub deployment',
      'Handcrafted responsive navigation and layout elements',
      'Living milestone of continuous technical improvement',
    ],
    highlights: [
      'Served as the launchpad for understanding semantic structure and public hosting',
      'Publicly hosted on GitHub Pages with transparent version control history',
    ],
    isFeatured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web & Frontend Development',
    description: 'Modern markup, styling, client-side interactivity, and responsive design',
    skills: [
      { name: 'HTML5', level: 'Practical Experience' },
      { name: 'CSS3 & Responsive Layouts', level: 'Practical Experience' },
      { name: 'Basic JavaScript (ES6+)', level: 'Practical Experience' },
      { name: 'Custom CSS Styling', level: 'Practical Experience' },
      { name: 'Basic PHP', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Core Computer & IT Operations',
    description: 'Office technology, documentation, spreadsheet management & IT support',
    skills: [
      { name: 'Microsoft Word', level: 'Practical Experience', note: 'Document creation, formatting & layout' },
      { name: 'Microsoft Excel', level: 'Practical Experience', note: 'Spreadsheets, formulas, filtering & data entry' },
      { name: 'Microsoft PowerPoint', level: 'Practical Experience', note: 'Professional slide presentations & visual structuring' },
      { name: 'Data Entry & Digital Records', level: 'Practical Experience', note: 'Accurate data capture, organization & verification' },
      { name: 'Windows & File Management', level: 'Practical Experience', note: 'Directory structure, system settings & OS handling' },
      { name: 'Google Workspace', level: 'Practical Experience', note: 'Docs, Sheets, Drive, Forms & team collaboration' },
      { name: 'Software & IT Troubleshooting', level: 'Practical Experience', note: 'Installation, configuration, device peripherals & diagnostics' },
      { name: 'Basic Networking', level: 'Working Knowledge', note: 'Connectivity troubleshooting, Wi-Fi & office peripherals' },
    ],
  },
  {
    title: 'WordPress & CMS Management',
    description: 'Visual builders, theme customization, and content publishing',
    skills: [
      { name: 'WordPress', level: 'Practical Experience' },
      { name: 'Divi 5 Builder', level: 'Practical Experience' },
      { name: 'Local WordPress Environments', level: 'Practical Experience' },
      { name: 'Website Customization', level: 'Practical Experience' },
      { name: 'Content & Asset Management', level: 'Practical Experience' },
    ],
  },
  {
    title: 'Programming & AI-Assisted Prototyping',
    description: 'Computing basics combined with modern prompt engineering and rapid execution',
    skills: [
      {
        name: 'Python Fundamentals',
        level: 'Beginner / Fundamentals',
        note: 'Core syntax, variables, conditions, loops & basic logic',
      },
      {
        name: 'AI-Assisted Coding',
        level: 'Practical Experience',
        note: 'Prompt engineering, code structuring, and iterative problem solving',
      },
      {
        name: 'Vibe Coding & Rapid Prototyping',
        level: 'Practical Experience',
        note: 'Quickly turning concepts into usable software interfaces',
      },
      {
        name: 'Code Comprehension & Debugging',
        level: 'Practical Experience',
        note: 'Inspecting, diagnosing, and fixing script errors and UI bugs',
      },
    ],
  },
  {
    title: 'Tools, Optimization & Documentation',
    description: 'Version control, collaborative tools, PDF handling, and search optimization',
    skills: [
      { name: 'Git & GitHub', level: 'Practical Experience' },
      { name: 'Figma', level: 'Working Knowledge' },
      { name: 'PDF & Digital File Processing', level: 'Practical Experience' },
      { name: 'Basic SEO & Rank Math', level: 'Practical Experience' },
      { name: 'Internet & Email Workflows', level: 'Practical Experience' },
    ],
  },
];

export const CORE_IT_SKILLS = [
  { name: 'Microsoft Word', detail: 'Document creation, formatting, tables, page layout & printing' },
  { name: 'Microsoft Excel', detail: 'Data entry, spreadsheets, formatting, sorting/filtering & formulas' },
  { name: 'Microsoft PowerPoint', detail: 'Presentation creation, slide layouts & visual organization' },
  { name: 'Windows & File Management', detail: 'File/folder organization, system settings & OS navigation' },
  { name: 'Data Entry & Documentation', detail: 'Digital record management, accuracy & structure' },
  { name: 'Internet & Email Workflows', detail: 'Research, web navigation, email communication & attachments' },
  { name: 'PDF & Digital File Handling', detail: 'Conversions, merging, document preparation & archiving' },
  { name: 'Office Equipment', detail: 'Standard printers, scanners & hardware peripherals' },
  { name: 'Software Installation & IT Troubleshooting', detail: 'Environment setup, driver installs & issue isolation' },
  { name: 'Google Workspace', detail: 'Docs, Sheets, Drive, Forms & collaborative workspaces' },
  { name: 'Basic Networking', detail: 'Connectivity diagnostics, Wi-Fi configuration & IP basics' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Web Development Intern',
    organization: 'Software House',
    duration: '5 Months',
    type: 'Professional Internship',
    highlights: [
      'Worked in a professional software-house environment on assigned web development and website-related tasks.',
      'Developed and customized websites using WordPress and Divi, with practical use of HTML, CSS, and basic JavaScript.',
      'Performed regular website updates, content management, UI improvements, responsive layout adjustments, and troubleshooting.',
      'Utilized local development environments and managed website assets, media files, and project resources efficiently.',
      'Adhered to task-based workflows, project deadlines, and professional collaborative team practices.',
      'Built a grounded, practical understanding of industry software tools, digital workflows, and technical problem-solving under real constraints.',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BS Computer Science',
    status: 'In Progress',
    description:
      'Pursuing an undergraduate degree in Computer Science, building comprehensive theoretical foundations, algorithm design, software engineering methodologies, data structures, and computer operations.',
    focusAreas: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems & Data Operations',
      'Software Engineering Fundamentals',
      'Computer & Web Technologies',
    ],
  },
];

export const TRAINING_DATA: TrainingItem[] = [
  {
    title: 'Web Development Course',
    provider: 'NAVTTC',
    duration: '3 Months',
    description:
      'Formal practical training focused on web development fundamentals, website structure, frontend technologies, responsive design techniques, and web-related developer tools.',
    keyTopics: [
      'HTML5 Semantic Markup',
      'CSS3 Styling & Box Model',
      'Frontend Layout Systems',
      'Web Standards & Structure',
      'Local Testing & Tooling',
    ],
  },
];

export const DEVELOPMENT_APPROACH_STEPS = [
  {
    step: '01',
    title: 'Understand & Define',
    description:
      'Start by defining the real user goal. What problem does this tool or page solve? What are the practical inputs, expected outputs, and constraints?',
  },
  {
    step: '02',
    title: 'Plan UX & Layout',
    description:
      'Draft a clean, intuitive layout with minimal friction. Prioritize responsive viewports, touch-friendly controls, and clean typographic rhythm.',
  },
  {
    step: '03',
    title: 'Code with AI Acceleration',
    description:
      'Write core frontend foundations and use prompt-assisted development to rapidly generate boilerplates, complex utilities, or syntax implementations.',
  },
  {
    step: '04',
    title: 'Test, Inspect & Debug',
    description:
      'Never accept AI code blindly. Scrutinize the logic, test edge cases in real browsers, diagnose console errors, and ensure functional accuracy.',
  },
  {
    step: '05',
    title: 'Refine Accessibility & Responsiveness',
    description:
      'Polish visual contrast, focus indicators, fluid scaling across mobile, tablet, and desktop screens, and eliminate layout shifts.',
  },
  {
    step: '06',
    title: 'Deploy & Iterate',
    description:
      'Host on fast platforms like Vercel or GitHub Pages, observe performance, gather practical feedback, and continuously update features.',
  },
];

export const PROFESSIONAL_STRENGTHS = [
  {
    title: 'Quick Learner',
    description: 'Rapidly absorbs new tools, frameworks, and workflows with practical curiosity and focus.',
  },
  {
    title: 'Practical Problem-Solving Mindset',
    description: 'Approaches bugs, data issues, and technical challenges systematically to achieve working solutions.',
  },
  {
    title: 'Organized Approach',
    description: 'Maintains disciplined file organization, clear documentation, structured spreadsheets, and task tracking.',
  },
  {
    title: 'Team & Independent Versatility',
    description: 'Equally comfortable driving independent projects like ToolHub, managing office IT tasks, and collaborating in teams.',
  },
  {
    title: 'Task-Based Workflow Discipline',
    description: 'Accustomed to deadlines, assigned tickets, office procedures, and structured quality reviews.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Dedicated to steadily leveling up coding fundamentals, computer science knowledge, and IT capabilities.',
  },
];
