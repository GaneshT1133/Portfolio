import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContactContent } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  @Input({ required: true }) content!: ContactContent;
}

