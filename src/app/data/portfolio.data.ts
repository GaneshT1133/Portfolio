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
  { label: 'About', anchor: '#about' },
  { label: 'Projects', anchor: '#projects' },
  { label: 'Skills', anchor: '#skills' },
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
      { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'RxJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg' }
    ]
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Hibernate', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
      { name: 'REST APIs', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Microservices', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ]
  },
  {
    title: 'DevOps',
    items: [
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'ECS', iconUrl: 'https://api.iconify.design/logos:aws-ecs.svg' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jenkins', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'DynamoDB', iconUrl: 'https://api.iconify.design/logos:aws-dynamodb.svg' }
    ]
  },
  {
    title: 'Version Control',
    items: [
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Bitbucket', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' }
    ]
  },
  {
    title: 'AI',
    items: [
      { name: 'ChatGPT', iconUrl: 'https://api.iconify.design/logos:openai-icon.svg' },
      { name: 'Claude', iconUrl: 'https://api.iconify.design/fluent-emoji-flat:robot.svg' },
      { name: 'Antigravity', iconUrl: 'https://api.iconify.design/fluent-emoji-flat:rocket.svg' },
      { name: 'Codex', iconUrl: 'https://api.iconify.design/fluent-emoji-flat:brain.svg' }
    ]
  },
];


export const HIGHLIGHTS: readonly HighlightItem[] = [
  { title: 'Experience', value: '3+ Years' },
  { title: 'Core Strength', value: 'Spring Boot Microservices' },
  { title: 'Cloud Stack', value: 'AWS + Docker + CI/CD' }
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    name: 'CTI Connectivity Microservice',
    stack: 'Spring Boot | AWS Step Functions | SQS | ECS',
    summary: 'Built scalable REST APIs to integrate CTI vendors like Avaya and Cisco, enabling multi-region workflow orchestration using AWS Step Functions, SQS, and ECS. Designed audit-safe configuration and event-driven processing to ensure reliability across distributed systems.',
    impact: 'Reduced vendor onboarding time and improved system resilience with fault-tolerant event handling.'
  },
  {
    name: 'Media Playback Service',
    stack: 'Spring Boot | JPA | Hibernate | DynamoDB | EC2 | EFS',
    summary: 'Enhanced media playback APIs by implementing caching strategies and integrating encrypted storage using AWS EFS. Improved backend performance and observability with structured logging and monitoring.',
    impact: 'Achieved lower API response times and increased production stability through better resource management and monitoring.'
  },
  {
    name: 'E-commerce Microservices Application (Personal Project)',
    stack: 'Spring Boot | Eureka | Config Server | Feign Client | Circuit Breaker | Angular',
    summary: 'Led the development of a microservices-based backend using Spring Boot, Eureka, Config Server, and Feign Client, with fault tolerance via Circuit Breaker. Built a responsive Angular frontend with routing and authentication.',
    impact: 'Delivered a scalable and user-friendly application capable of handling distributed service communication efficiently.'
  },
  {
    name: 'COVID-19 Tracking Application (Personal Project)',
    stack: 'Spring Boot | MySQL | MongoDB | Angular | TypeScript | HTML/CSS',
    summary: 'Contributed to building a full-stack COVID-19 tracking system by developing microservices and end-to-end REST APIs aligned with business requirements. Implemented frontend features using Angular with clean and maintainable code practices.',
    impact: 'Successfully collaborated in a team to deliver a complete real-time tracking solution.'
  }
];

export const TIMELINE: readonly TimelineItem[] = [
  { title: 'NICE Interactive Solutions', detail: 'Software Engineer' },
  { title: 'Wipro Technologies', detail: 'Project Engineer' }
];

export const CONTACT_CONTENT: ContactContent = {
  heading: 'Let us build reliable systems at scale.',
  email: 'gstodkar01@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/ganeshtodkar',
  linkedinLabel: 'linkedin.com/in/ganeshtodkar',
  phone: '+917263849596'
};

