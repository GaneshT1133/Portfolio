import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CursorDirective } from './directives/cursor.directive';
import {
  CONTACT_CONTENT,
  HERO_CONTENT,
  HIGHLIGHTS,
  NAV_ITEMS,
  PROJECTS,
  SKILL_CATEGORIES,
  TIMELINE
} from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    HighlightsComponent,
    ProjectsComponent,
    TimelineComponent,
    ContactComponent,
    CursorDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly brandName = 'GANESH TODKAR';
  readonly navItems = NAV_ITEMS;
  readonly heroContent = HERO_CONTENT;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly highlights = HIGHLIGHTS;
  readonly projects = PROJECTS;
  readonly timeline = TIMELINE;
  readonly contact = CONTACT_CONTENT;
}

