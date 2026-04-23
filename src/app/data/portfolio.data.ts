import {
  ContactContent,
  HeroContent,
  HighlightItem,
  NavItem,
  ProjectItem,
  SkillCategory,
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
    items: ['Angular', 'TypeScript', 'HTML5', 'CSS', 'RxJS']
  },
  {
    title: 'Back-end',
    items: ['Java', 'Spring Boot', 'Hibernate', 'Spring Data JPA', 'REST APIs', 'Microservices']
  },
  {
    title: 'Communication',
    items: ['Jira', 'Agile', 'Postman', 'Code Reviews', 'Cross-team Collaboration']
  },
  {
    title: 'Deployment',
    items: ['AWS ECS', 'Lambda', 'SQS', 'Kinesis', 'S3', 'EFS', 'CloudWatch', 'Docker', 'Jenkins CI/CD']
  },
  {
    title: 'Certificate',
    items: ['AWS Certified Cloud Practitioner']
  },
  {
    title: 'Version Control',
    items: ['Git', 'GitHub']
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

