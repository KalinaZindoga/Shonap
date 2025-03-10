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
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.shonap.value);
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
      // Store username and password in storage
      this.setValue('username', this.shonap.value.username!);
      this.setValue('password', this.shonap.value.password!);
      this.router.navigate(['/pages']);
      // Optionally, retrieve and log the stored values
 
    } else {
      console.log('Form is invalid');
    }
  }
}