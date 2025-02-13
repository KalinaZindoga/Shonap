import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})

export class AlertService {
    constructor(private alertController: AlertController){}

    async presentAlert(header: string, message:string , buttons: any[]=['OK']){
        const alert = await this.alertController.create({
            header,
            message,
            buttons,
        });
        await alert.present();
    }
}