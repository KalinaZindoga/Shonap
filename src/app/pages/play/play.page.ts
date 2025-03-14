import { ActivatedRoute, Router } from '@angular/router';
import { level1 } from './../profile/data';
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
  checkedValues:any = [];
  
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
    else if(Number(level)==2){
      this.myCurrentLevel= this.level2;
    }

    console.log("current level ",this.myCurrentLevel);
    console.log("current stage ",this.myCurrentStage);

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

 
 checkValue() {
  
  if (this.result === this.myCurrentStage.item) {
  
    this.alertservice.presentAlert('WAGONA');
    console.log("current level*** ",this.myCurrentLevel.length);
    console.log("current stage** ",this.myCurrentStage.stage);
    if(this.myCurrentLevel.length>this.myCurrentStage.stage){
      this.setValue('currentStage',JSON.stringify(Number(this.myCurrentStage.stage)+1));
     this.alertservice.setLevel(Number(this.myCurrentStage)+1);
      this.router.navigate(['/pages/dash']);
    }


   
  } 
  else{
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
