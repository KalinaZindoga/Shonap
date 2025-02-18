import { ActivatedRoute } from '@angular/router';
import { level1 } from './../profile/data';
import { level2 } from './../profile/data';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alertservice.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  myCurrentLevel:any;
  myCurrentStage: any;

checkAnswer() {
throw new Error('Method not implemented.');
}

  result = ""; 
  level2 = level2;
  level1 = level1;
  checkedValues:any = [];
  
  constructor(private route:ActivatedRoute , private alertservice: AlertService) {
   
   }

  ngOnInit() {
    const level = this.route.snapshot.paramMap.get('level');
    const stage = this.route.snapshot.paramMap.get('stage');

    if(Number(level)==1){
      this.myCurrentLevel= this.level1;
      this.myCurrentLevel.forEach((element:any) => {
        if(element.stage==stage){
          this.myCurrentStage =element;
          console.log(element);
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

 }
 
 checkValue() {
  
  if (this.result === this.myCurrentStage.item) {
  
    this.alertservice.presentAlert('SUCCESS');
  } 

  if (this.myCurrentStage === this.myCurrentLevel.stages) {
  
    this.myCurrentLevel++; 
    this.myCurrentStage = 1; 
  } else { 
    
    this.myCurrentStage++; 
  }
}

  clear() {
    this.result = "";
    let i = 0;
    this.checkedValues.forEach((item:any) => {
        item.checked = false;
    });

  }

  getValue(val: string, index: number) {
    this.result =this.result+ val;

  this.checkedValues.forEach((element:any) => {
    if(element.value == 'item'+index){
      element.checked = true;
    }
  })
    
  }
 
}
