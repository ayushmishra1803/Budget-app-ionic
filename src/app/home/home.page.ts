import { Component } from "@angular/core";

import { AlertController } from '@ionic/angular';
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public alertController: AlertController) {}
  enteredexpences: string;
  enteredammount: number;
  expencesreason: string[] = [];
  expencesammount: number[] = [];
  
  
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
