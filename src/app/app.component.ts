import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alertservice.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router,private alertService:AlertService) { }
  
  ngOnInit(): void {
    this.getCurrentState();
    this.router.navigate(['/auth/login']);
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

  getCurrentState(){
     this.getValue('currentLevel').then((value:any) =>{
      console.log("current level ",value);
        value?this.alertService.setLevel(Number(value)):this.alertService.setLevel(1);
    });

     this.getValue('currentStage').then((value:any) =>{
          value?this.alertService.setStage(Number(value)):this.alertService.setStage(1);
        console.log("current stage ",value);
       
  });
  }

}
