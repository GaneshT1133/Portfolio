import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillCategory } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

import { SKILL_CATEGORIES } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  categories = SKILL_CATEGORIES;
}
