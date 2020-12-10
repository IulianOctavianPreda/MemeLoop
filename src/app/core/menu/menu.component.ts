import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AuthService } from './../../api/apis/auth.api';
import { InfoModalComponent } from './../../shared/info-modal/info-modal.component';
import { LoginComponent } from './../../shared/login/login.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() contentId: string;

    modalRef: HTMLIonModalElement | null = null;
    appPages = [
        {
            url: 'posts',
            icon: 'happy',
            title: 'All Posts'
        },
        {
            url: 'about',
            icon: 'information-circle',
            title: 'About'
        }
    ];

    public categories = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(public authService: AuthService, public modalController: ModalController) {}

    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            if (!!user && !!this.modalRef) {
                this.modalRef.dismiss();
            }
        });
    }

    presentModal() {
        this.modalController
            .create({
                component: LoginComponent,
                swipeToClose: true,
                showBackdrop: true
            })
            .then((x) => {
                this.modalRef = x;
                x.present();
            });
    }

    async logout() {
        const modal = this.modalController.create({
            component: InfoModalComponent,
            swipeToClose: true,
            showBackdrop: true,
            componentProps: {
                message: 'Do you really want to log out?'
            }
        });
        modal.then((x) => {
            x.present();
            x.onDidDismiss().then((x) => {
                if (x.data) {
                    this.authService.logout();
                }
            });
        });
    }
}
