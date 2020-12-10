import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-info-modal',
    templateUrl: './info-modal.component.html',
    styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
    @Input() message = '';
    constructor(public modalCtrl: ModalController) {}

    ngOnInit(): void {}
}
