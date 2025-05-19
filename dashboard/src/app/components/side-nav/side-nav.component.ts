import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
   sidenavOpen: boolean = false;
  
  @Output() sidenavToggle = new EventEmitter<boolean>();

  toggleSidenav(): void{
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavToggle.emit(this.sidenavOpen);
  }
}
