import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shouldDisable = true;

  public items = [
    {
      name: "test",
      subItems: [
        { enabled: true, value: "test" },
        { enabled: true, value: "test" },
        { enabled: true, value: "test" }
      ]
    },
    {
      name: "test",
      subItems: [
        { enabled: false, value: "" },
        { enabled: false, value: "" },
        { enabled: false, value: "" }
      ]
    },
    {
      name: "test",
      subItems: [
        { enabled: false, value: "" },
        { enabled: false, value: "" },
        { enabled: false, value: "" }
      ]
    },
    {
      name: "test",
      subItems: [
        { enabled: false, value: "" },
        { enabled: false, value: "" },
        { enabled: false, value: "" }
      ]
    },
    {
      name: "test",
      subItems: [
        { enabled: false, value: "" },
        { enabled: false, value: "" },
        { enabled: false, value: "" }
      ]
    },
    {
      name: "test",
      subItems: [
        { enabled: false, value: "" },
        { enabled: false, value: "" },
        { enabled: false, value: "" }
      ]
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
