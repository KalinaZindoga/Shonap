import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})

export class AlertService {
    constructor(private alertController: AlertController){}

    async presentAlert( message:string , buttons: any[]=['OK']){
        const alert = await this.alertController.create({
            mode:'ios',
            message,
            buttons,
        });
        await alert.present();
    }
}