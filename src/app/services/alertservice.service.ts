import { Injectable, signal } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AlertService {

    currentLevelState = new BehaviorSubject(1);
    currentLevelState$ = this.currentLevelState.asObservable();

    currentStageState = new BehaviorSubject(1);
    currentStageState$ = this.currentStageState.asObservable();



    constructor(private alertController: AlertController){}

    async presentAlert( message:string , buttons: any[]=['OK']){
        const alert = await this.alertController.create({
            mode:'ios',
            message,
            buttons,
        });
        await alert.present();
    }
    setLevel(level: number){
        this.currentLevelState.next(level);
    }

    setStage(stage: number){
        this.currentStageState.next(stage);
    }
}