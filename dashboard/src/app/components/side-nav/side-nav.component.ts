import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  constructor(private activatedRoute : ActivatedRoute, private router: Router){}
  sidebarExpandable = true;
  activeRoute : any = '';

  ngOnInit(): void {
   
  }
 
   ActiveNavLink(routeName:string): void{
    this.activeRoute = routeName;
    
  }

}
