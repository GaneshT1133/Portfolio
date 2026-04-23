import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavItem } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input({ required: true }) brandName!: string;
  @Input({ required: true }) navItems!: readonly NavItem[];
}

