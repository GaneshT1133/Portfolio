export interface NavItem {
  readonly label: string;
  readonly anchor: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly headline: string;
  readonly summary: string;
  readonly primaryActionLabel: string;
  readonly primaryActionAnchor: string;
  readonly secondaryActionLabel: string;
  readonly secondaryActionUrl: string;
}

export interface SkillItem {
  readonly name: string;
  readonly iconUrl: string;
}

export interface SkillCategory {
  readonly title: string;
  readonly items: readonly SkillItem[];
}

export interface HighlightItem {
  readonly title: string;
  readonly value: string;
}

export interface ProjectItem {
  readonly name: string;
  readonly stack: string;
  readonly summary: string;
  readonly impact: string;
}

export interface TimelineItem {
  readonly title: string;
  readonly detail: string;
}

export interface ContactContent {
  readonly heading: string;
  readonly email: string;
  readonly linkedinUrl: string;
  readonly linkedinLabel: string;
  readonly phone: string;
}

