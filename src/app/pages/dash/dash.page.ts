import { Component, OnInit } from '@angular/core';
import { level1 } from '../profile/data';
import { level2 } from './../profile/data';
import { level3 } from './../profile/data';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertService } from 'src/app/services/alertservice.service';
import { IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})

export class DashPage implements OnInit {
  
public progress=0;


  level3=level3;
  level2 = level2;
  level1 = level1;
  currentLevel =0;
  currentStage  =0;

 
 
  constructor(
    private route:ActivatedRoute,
    private alertService:AlertService
  ) {

  }
  ngOnInit() {
    this.getLevelAndStage();
  }

  getLevel(currentLevel:any,stage:any){
  }

  getLevelAndStage(){

      this.alertService.currentLevelState$.subscribe(level => {
        this.currentLevel = level;
        console.log("current level in dash ",level)
        this.updateProgress();
      });
      this.alertService.currentStageState$.subscribe(stage => {
        this.currentStage = stage;
        console.log("current stage in dash",stage)
        this.updateProgress();
      });

     
  }

  updateProgress() {
    const totalStages = 20; // Since there are 20 stages
    this.progress = (this.currentStage / totalStages) * 100;
   
  }
  async getValue(key: string) {
    const { value } = await Storage.get({ key: key });
    return value;
  }
  

  check(level:any,stage:number){
    // console.log(level, stage);

    // console.log("current level ", this.currentLevel == level);
    // console.log("current stage ", stage<=this.currentStage
    // );

   if(this.currentLevel==level && stage<=this.currentStage){
      return false;
    }
    return true;
  }
}


