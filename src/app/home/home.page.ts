import { Component } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  enteredexpences:string;
  enteredammount:number
 
  constructor() {}
  clear(){
    console.log(`${this.enteredexpences}${this.enteredammount}`);
    
  };
}
