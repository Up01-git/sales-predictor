import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToHomePage() {
    this.route.navigateByUrl("/mainpage");
  }

  goToInstructPage() {
    this.route.navigateByUrl("/instructions");
  }

  goToCalculate() {
    this.route.navigateByUrl("/calculate");
  }

  goToSignIn() {
    this.route.navigateByUrl("/login");
  }

}
