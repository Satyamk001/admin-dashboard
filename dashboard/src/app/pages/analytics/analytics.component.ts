import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  currency = '$';
  price = '105,000';
  durationArray = ['1D', '1W', '1M', '1Y', 'MAX'];
  volume = '36,550,790,773';
  cryptoCurrency = 'BTC';
  cryptoImage = '/assets/bitcoin-logo-svgrepo-com.svg'
}
