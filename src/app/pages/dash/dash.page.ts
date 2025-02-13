import { Component, OnInit } from '@angular/core';
import { level1 } from '../profile/data';
import { level2 } from './../profile/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})

export class DashPage implements OnInit {
  level2 = level2;
  level1 = level1;
  currentLevel:any;
  currentStage  =0;
 
 

  constructor(private route:ActivatedRoute) {
  //  take url params in angular

  
   }
   
  ngOnInit() {
    this.currentLevel = 1;
    this.currentStage =1;

    
  }

  getLevel(currentLevel:any,stage:any){
    console.log("curre ",currentLevel," stage ",stage)
  }

}
