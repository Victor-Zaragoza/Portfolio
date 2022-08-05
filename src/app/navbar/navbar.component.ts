import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNav(){
    console.log('show nav');
    const primaryNav= document.querySelector('.primary-navigation')!;
    const navToggle= document.querySelector('.mobile-nav-toggle')!;
    const visibility= primaryNav.getAttribute('data-visible');
    
    console.log(visibility);
        
    if(visibility=== "false"){
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    }
    else{
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  closeNav(){
    console.log("close");
    const primaryNav= document.querySelector('.primary-navigation')!;
    const navToggle= document.querySelector('.mobile-nav-toggle')!;
    
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }

}
