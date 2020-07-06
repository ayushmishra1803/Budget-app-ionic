import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  enteredexpences: string;
  enteredammount: number;
expencesreason:string[]=[];
expencesammount:number[]=[];
  constructor() {}
  clear() {
    if (this.enteredammount > 0 && this.enteredexpences.length > 0) {
      this.enteredexpences = "";
      this.enteredammount = 0;
    }
  }
  add() {
    if (this.enteredammount > 0 && this.enteredexpences.length > 0) {
        
      this.expencesreason.push(this.enteredexpences);
      this.expencesammount.push(this.enteredammount);
        
     
      
  }
}
}
