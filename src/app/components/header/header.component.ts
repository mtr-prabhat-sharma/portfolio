import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toogleMenu() {
    this.openMenu = !this.openMenu;
  }
  // openHome() {
  //   this.router.navigate(['home']);
  // }
  // openContactUs() {
  //   this.router.navigate(['contact-us']);
  // }
  // openAbout() {
  //   this.router.navigate(['about']);
  // }
  // openServices() {
  //   this.router.navigate(['services']);
  // }
}
