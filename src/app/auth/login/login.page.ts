import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setName();
    this.checkName();
  }

  async setName(){ 
    await Storage.set({
      key: 'surname',
      value: 'Ziny',
    });

    await Storage.set({
      key: 'name',
      value: 'Ashley',
    });
   
  }

  async checkName() {
    const { value } = await Storage.get({ key: 'surname' });
    console.log(` ${value}!`);
  }
}
 



