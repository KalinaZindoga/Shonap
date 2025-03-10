import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
shonap = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  username: new FormControl('',[Validators.required, Validators.minLength(6)]),
  password: new FormControl('',[Validators.required, Validators.minLength(6)]),
});

  constructor() {
  
   }

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
      console.log(this.shonap.value);
  
      // Store email, username, and password in storage
      this.setValue('email', this.shonap.value.email!);
      this.setValue('username', this.shonap.value.username!);
      this.setValue('password', this.shonap.value.password!);
  
      // retrieve and log the stored values
      this.getValue('email').then(value => console.log('email:', value));
      this.getValue('username').then(value => console.log(' username:', value));
      this.getValue('password').then(value => console.log('password:', value));
    }
  }

