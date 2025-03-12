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
 
  fullName: new FormControl('',[Validators.required]),
  childName: new FormControl('',[Validators.required]),
  relationship: new FormControl('',[Validators.required]),
  username: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),

});

  constructor(private router: Router) {
  
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
  
      // Store email, username, and password in storage
      this.setValue('fullName', this.shonap.value.fullName!);
      this.setValue('childName', this.shonap.value.childName!);
      this.setValue('relationship', this.shonap.value.relationship!);
      this.setValue('username', this.shonap.value.username!);
      this.setValue('password', this.shonap.value.password!);
      
       this.router.navigate(['/auth/login']);
  
      // retrieve and log the stored values
      
      // this.getValue('fullName').then(value => console.log('fullName:', value));
      // this.getValue('childName').then(value => console.log('childName:', value));
      // this.getValue('relationship').then(value => console.log('relationship:',
      // value));
      // this.getValue('username').then(value => console.log(' username:', value));
      // this.getValue('password').then(value => console.log('password:', value));
    }
  }

