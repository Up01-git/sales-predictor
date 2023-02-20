import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

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
