import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
  providers: [CalculateService]
})
export class CalculateComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private calcServ: CalculateService) { }

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

  file: any;
  date: any;
  predict: any;
  finalString: any;


  getFile(event: any): void {
    this.file = event.target.files[0];
    console.log("File : ", this.file);
  }

  getDate(date: any) {
    this.date = date;
  }
  
  onSubmit() {

    this.predict = this.calcServ.sendData(this.date).subscribe((response: any) => {
      this.finalString = 'The predicted value is ' + response;
    });
    
  }
}
