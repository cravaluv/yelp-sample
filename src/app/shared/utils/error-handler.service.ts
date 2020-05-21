import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root',
})
export class ErrorHandlerService {
    constructor(public toastController: ToastController) { }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Some error occurred. Please try again later.',
            duration: 2000,
            position: 'top',
            color: "danger"
        });
        toast.present();
    }
}
