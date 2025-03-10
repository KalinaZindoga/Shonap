import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  async getValue(key: string) {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  ngOnInit() {
    this.getValue('username').then(value => console.log('Stored username:', value));
    this.getValue('password').then(value => console.log('Stored password:', value));
  }

}
