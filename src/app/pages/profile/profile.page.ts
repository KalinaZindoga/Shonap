import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string = '';
  currentStage: string = '';
  currentLevel: string = '';
  androidVersion: string = ''; // Add a property to store the Android version

  constructor() { }

  async getValue(key: string) {
    const { value } = await Storage.get({ key: key });
    return value;
  }




  ngOnInit() {
    this.getValue('username').then(value => {
      this.username = value ?? '';
      console.log('Stored username:', value);
    }); 
    this.getValue('currentStage').then(value => {
      this.currentStage = value ?? '';
      console.log('Stored current stage:', value);
    });
    this.getValue('currentLevel').then(value => {
      this.currentLevel = value ?? '';
      console.log('Stored current level:', value);
    });
  }

}
