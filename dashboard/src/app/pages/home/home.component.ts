import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 walletPrice='$10,200.00'
 cryptocurrencies = [{
  icon : 'https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg',
  name : 'Bitcoin',
  shortName : 'BTC',
  price : '$102,976',
  change : '-0.83%',
  button :'Trade' 
 },
{
  icon : 'https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg',
  name : 'Bitcoin',
  shortName : 'BTC',
  price : '$102,976',
  change : '-0.83%',
  button :'Trade' 
 },
{
  icon : 'https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg',
  name : 'Bitcoin',
  shortName : 'BTC',
  price : '$102,976',
  change : '-0.83%',
  button :'Trade' 
 },
{
  icon : 'https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg',
  name : 'Bitcoin',
  shortName : 'BTC',
  price : '$102,976',
  change : '-0.83%',
  button :'Trade' 
 },]
}
