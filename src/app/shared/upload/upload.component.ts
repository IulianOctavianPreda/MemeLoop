import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as ExifReader from 'exifreader';

import { PostApiService } from './../../api/apis/posts.api';
import { CameraService } from './../services/camera.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
    uploadedImage: string;
    title: string;
    location;

    constructor(
        private cameraService: CameraService,
        private sanitizer: DomSanitizer,
        private postService: PostApiService,
        private route: Router,
        private httpClient: HttpClient
    ) {}

    ngOnInit() {}

    getImage() {
        this.cameraService
            .takePicture()
            .then((x) => this.updateUploadedImage(this.sanitizer.bypassSecurityTrustUrl(`${x}`)));
    }

    getDataUrl(event) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            this.updateUploadedImage(this.sanitizer.bypassSecurityTrustUrl(`${reader.result}`));
        };
        reader.readAsDataURL(file);

        const binaryReader = new FileReader();
        binaryReader.onloadend = () => {
            const { Latitude, Longitude } = ExifReader.load(binaryReader.result as ArrayBuffer, { expanded: true }).gps;
            this.getCountry(Latitude, Longitude).then((x) => (this.location = x['countryCode']));
        };
        binaryReader.readAsArrayBuffer(file);
    }

    getCountry(lat: number, lng: number) {
        return this.httpClient
            .get(`http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=He9999mat1937`)
            .toPromise();
    }

    updateUploadedImage(data) {
        this.uploadedImage = data.changingThisBreaksApplicationSecurity;
    }

    upload() {
        if (!!this.title && !!this.uploadedImage) {
            const id = this.postService.upload({
                title: this.title,
                path: this.uploadedImage,
                location: this.location
            });
            this.route.navigate(['posts', id]);
        }
    }
}
