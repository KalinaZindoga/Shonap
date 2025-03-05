import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignUpPageRoutingModule } from './sign-up-routing.module';


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
  onSubmit(){
    console.log(this.shonap.value);
  }
}
