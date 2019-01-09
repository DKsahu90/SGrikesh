import { Component } from '@angular/core';
import{ Router } from '@angular/router'
import {ScoreGeniusService} from '../Services/score-genius.service'


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {
  isExpanded = false;
   
    
    constructor(private router:Router,private _services:ScoreGeniusService) {
       
     }
     
  
    ngOnInit() {
    }



  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
  OnlogOut()
  {
    
  
    this.router.navigate(['/log-in']);
  
  }
}


