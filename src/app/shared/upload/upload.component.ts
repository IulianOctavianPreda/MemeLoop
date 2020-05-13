import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { PostApiService } from "./../../api/apis/posts.api";
import { CameraService } from "./../services/camera.service";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html",
    styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
    uploadedImage;
    title;

    constructor(
        private cameraService: CameraService,
        private sanitizer: DomSanitizer,
        private postService: PostApiService
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
    }

    updateUploadedImage(data) {
        this.uploadedImage = data.changingThisBreaksApplicationSecurity;
    }

    upload() {
        this.postService.upload({
            title: this.title,
            path: this.uploadedImage,
        });
    }
}
