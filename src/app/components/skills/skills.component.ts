import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  @Input({ required: true }) categories!: readonly SkillCategory[];
}

