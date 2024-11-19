import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string="My first One way binding :Interploation code";
  constructor(
    private router: Router
  ) {

  }

  openPage(str: string): void {
    this.router.navigate(['/' + str]);
  }
  //title = 'Angular Interpolation->One way Data Binding';
  // declared array of months.
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  isavailable = true; //variable is set to true
  myClickFunction(event: any) {
  this.isavailable = !this.isavailable;
  // variable is toggled onclick of the button
  }
  changemonths(event: any) {
  alert("Changed month from the Dropdown"); }
 }
