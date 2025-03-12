import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 

  shonap = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  
  loggedIn: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.getValue('loggedIn').then(value => {
      if (value === 'true') {
        this.loggedIn = true;
        this.router.navigate(['/pages/dash']);
      }
    });
  }

  async setValue(key: string, value: string) { 
    await Storage.set({
      key: key,
      value: value,
    });
  }

  async getValue(key: string) {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  onSubmit() {
    if (this.shonap.valid) {
      // Retrieve stored username and password
      this.getValue('username').then(storedUsername => {
        this.getValue('password').then(storedPassword => {
          if (storedUsername === this.shonap.value.username && storedPassword === this.shonap.value.password) {
            this.loggedIn = true;
            this.setValue('loggedIn', 'true');
            this.router.navigate(['/pages/dash']);
          } else {
            console.log('Invalid username or password');
            alert('Invalid username or password');
          }
        });
      });
    } else {
      console.log('Form is invalid');
    }
  }
}