import { level1 } from './../profile/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  result = "";
  level1 = level1;
  checkedValues:any = [];
  
  constructor() {
    const data = level1[1].itemArray;
    let i = 0;
    data.forEach(element => {
      this.checkedValues.push({ value: 'item' + i, checked: false });
      i++;
    });
   }

  ngOnInit() {

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
  });

    

  }

}
