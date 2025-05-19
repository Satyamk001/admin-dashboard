import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() shortName!: string;
  @Input() price!: string;
  @Input() change!: string;

  @Input() button!: string;
}
