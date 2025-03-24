import { ActivatedRoute, Router } from '@angular/router';
import { level1, level3 } from './../profile/data';
import { level2 } from './../profile/data';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alertservice.service';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  myCurrentLevel:any;
  myCurrentStage: any;
  result = ""; 
  level2 = level2;
  level1 = level1;
  level3 = level3;
  checkedValues:any = [];
  progress = 0; // Add a progress property to track progress percentage
  
  constructor(
    private route:ActivatedRoute,
    private alertservice: AlertService,
    private router:Router) {
   
   }

  ngOnInit() {
    const level = this.route.snapshot.paramMap.get('level');
    const stage = this.route.snapshot.paramMap.get('stage');

    if(Number(level)==1){
      this.myCurrentLevel= level1;
      this.myCurrentLevel.forEach((element: any) => {
        if(element.stage==stage){
          this.myCurrentStage =element;
          let i=0;
          this.myCurrentStage.itemArray.forEach((elem:any) => {
            this.checkedValues.push({ value: 'item' + i, checked: false });
            i++;
          });
        }
      });

    }
    else  if(Number(level)==2){
      this.myCurrentLevel= level2;
      this.myCurrentLevel.forEach((element: any) => {
        if(element.stage==stage){
          this.myCurrentStage =element;
          let i=0;
          this.myCurrentStage.itemArray.forEach((elem:any) => {
            this.checkedValues.push({ value: 'item' + i, checked: false });
            i++;
          });
        }
      });

    }

    if(Number(level)==3){
      this.myCurrentLevel= level3;
      this.myCurrentLevel.forEach((element: any) => {
        if(element.stage==stage){
          this.myCurrentStage =element;
          let i=0;
          this.myCurrentStage.itemArray.forEach((elem:any) => {
            this.checkedValues.push({ value: 'item' + i, checked: false });
            i++;
          });
        }
      });

    }

    console.log("current level ",this.myCurrentLevel);
    console.log("current stage ",this.myCurrentStage.stage);

 }


 async removeName(name:any){
  await Storage.remove({ key: name });
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

 
async checkValue() {
  if (this.result === this.myCurrentStage.item) {
    await this.alertservice.presentAlert('WAGONA'); // Wait for the success alert to complete


    
    console.log("current level*** ", this.myCurrentLevel.length);
    console.log("current stage** ", this.myCurrentStage.stage);


    // Check if the current stage is less than the total number of stages
     if (this.myCurrentLevel.length > this.myCurrentStage.stage) {
      await this.setValue('currentStage', JSON.stringify(Number(this.myCurrentStage.stage) + 1));
       const next = Number(this.myCurrentStage.stage) + 1;
       console.log('next', next);
       this.alertservice.setStage(next);
      this.router.navigate(['/pages/dash']);
    }
    else if (this.myCurrentLevel.length == this.myCurrentStage.stage) {
       const nextLevel = Number(this.myCurrentStage.level) + 1;
       console.log('nextLevel', nextLevel);
       
      await this.setValue('currentStage', JSON.stringify(1));
      await this.setValue('currentLevel', JSON.stringify(nextLevel));
      this.alertservice.setLevel(nextLevel);
      this.alertservice.setStage(1);
      this.router.navigate(['/pages/dash']);
    }
  } else {
    this.alertservice.presentAlert('Watadza, zama zvakare');
    this.clear();
  }
}

  clear() {
    this.result = "";
    let i = 0;
    this.checkedValues.forEach((item:any) => {
        item.checked = false;
    });

  }

  getData(val: string, index: number) {
    this.result =this.result+ val;

  this.checkedValues.forEach((element:any) => {
    if(element.value == 'item'+index){
      element.checked = true;
    }
  })
    
  }

}
