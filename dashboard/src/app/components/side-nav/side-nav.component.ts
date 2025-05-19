import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sidebarExpandable = true;
  activeRoute : any = 'home';
   ActiveNavLink(routeName:string): void{
    this.activeRoute = routeName;
    
  }
}
