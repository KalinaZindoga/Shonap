import { Component, OnInit } from '@angular/core';
import { level1 } from '../profile/data';
import { level2 } from './../profile/data';
import { level3 } from './../profile/data';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertService } from 'src/app/services/alertservice.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})

export class DashPage implements OnInit {
  
  level3=level3;
  level2 = level2;
  level1 = level1;
  currentLevel =0;
  currentStage  =0;
 
 
  constructor(
    private route:ActivatedRoute,
    private alertService:AlertService
  ) {
  //  take url params in angular

  
   }
   
  ngOnInit() {
    this.getLevelAndStage();
  }

  getLevel(currentLevel:any,stage:any){
    // console.log("curre ",currentLevel," stage ",stage)
  }

  getLevelAndStage(){

      this.alertService.currentLevelState$.subscribe(level => {
        this.currentLevel = level;
        console.log("current level ",level)
      });
      this.alertService.currentStageState$.subscribe(stage => {
        this.currentStage = stage;
        console.log("current stage ",stage)
      });
     
  }

  async getValue(key: string) {
    const { value } = await Storage.get({ key: key });
    return value;
  }
  

}
