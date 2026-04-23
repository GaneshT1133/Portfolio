import {
  ContactContent,
  HeroContent,
  HighlightItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  SkillItem,
  TimelineItem
} from '../models/portfolio.models';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', anchor: '#home' },
  { label: 'Skills', anchor: '#skills' },
  { label: 'Projects', anchor: '#projects' },
  { label: 'Timeline', anchor: '#timeline' },
  { label: 'Contact', anchor: '#contact' }
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'JAVA FULL STACK DEVELOPER + AWS',
  headline: 'Calm Design. Serious Engineering.',
  summary:
    'I build reliable Java microservices and cloud-native systems with measurable business impact. Delivered 50% cloud cost reduction by refactoring inefficient cross-account Lambda workflows.',
  primaryActionLabel: 'View Projects',
  primaryActionAnchor: '#projects',
  secondaryActionLabel: 'Download CV',
  secondaryActionUrl: 'Ganesh_Todkar_Resume.pdf'
};

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Front-end',
    items: [
      { name: 'Angular',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5',      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',       iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'RxJS',       iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg' }
    ]
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Java',         iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Hibernate',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
      { name: 'REST APIs',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Microservices',iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ]
  },
  {
    title: 'DevOps',
    items: [
      { name: 'AWS',        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'ECS',        iconUrl: 'https://api.iconify.design/logos:aws-ecs.svg' },
      { name: 'Docker',     iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jenkins',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'DynamoDB', iconUrl: 'https://api.iconify.design/logos:aws-dynamodb.svg' }
    ]
  },
  {
    title: 'Version Control',
    items: [
      { name: 'Git',       iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Bitbucket', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' }
    ]
  },
  {
    title: 'AI',
    items: [
      { name: 'ChatGPT',     iconUrl: 'https://api.iconify.design/logos:openai-icon.svg' },
      { name: 'Claude',      iconUrl: 'https://api.iconify.design/fluent-emoji-flat:robot.svg' },
      { name: 'Antigravity', iconUrl: 'https://api.iconify.design/fluent-emoji-flat:rocket.svg' },
      { name: 'Codex',       iconUrl: 'https://api.iconify.design/fluent-emoji-flat:brain.svg' }
    ]
  },
  {
    title: 'Communication',
    items: [
      { name: 'Jira',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma',   iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  {
    title: 'Certificate',
    items: [
      { name: 'AWS Cloud Practitioner', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
    ]
  }
];


export const HIGHLIGHTS: readonly HighlightItem[] = [
  { title: 'Experience', value: '3+ Years' },
  { title: 'Core Strength', value: 'Spring Boot Microservices' },
  { title: 'Cloud Stack', value: 'AWS + Docker + CI/CD' }
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    name: 'CTI Connectivity Microservice',
    stack: 'Spring Boot | Step Functions | SQS | Lambda | ECS | DynamoDB',
    summary:
      'Built REST APIs for CTI vendor integrations (Avaya, Cisco) with multi-region workflow controls and audit-safe configuration.',
    impact: 'Faster vendor onboarding and resilient event processing.'
  },
  {
    name: 'Media Playback Service',
    stack: 'Spring Boot | JPA | Hibernate | DynamoDB | EC2 | EFS',
    summary:
      'Enhanced media APIs with caching and encrypted EFS integration while strengthening production logging and monitoring.',
    impact: 'Lower response time and more stable production operations.'
  }
];

export const TIMELINE: readonly TimelineItem[] = [
  { title: 'NICE Interactive Solutions', detail: 'Software Engineer | Feb 2025 - Present' },
  { title: 'Wipro Technologies', detail: 'Project Engineer | Sep 2022 - Oct 2024' },
  { title: 'AWS Certified Cloud Practitioner', detail: 'Cloud-first distributed architecture mindset' }
];

export const CONTACT_CONTENT: ContactContent = {
  heading: 'Let us build reliable systems at scale.',
  email: 'gstodkar01@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/ganeshtodkar',
  linkedinLabel: 'linkedin.com/in/ganeshtodkar',
  phone: '+917263849596'
};

