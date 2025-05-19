import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  walletPrice = '$10,200.00';
  priceUpdate = '$95.23';
  percentageUpdate = 0.92;
}
