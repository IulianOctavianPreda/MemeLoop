import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";

import { ThemeService } from "../shared/services/theme.service";
import { FontAwesomeLibraryService } from "./services/font-awesome-library.service";
import { SplashScreenService } from "./services/splash-screen.service";

@Injectable({
    providedIn: "root",
})
export class AppService {
    constructor(
        private fontAwesomeLibrary: FontAwesomeLibraryService,
        private platform: Platform,
        private splashScreenService: SplashScreenService,
        private themeService: ThemeService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.fontAwesomeLibrary.addIconsToApplication();

        this.splashScreenService.show();
        this.themeService.setStoredTheme();
        this.platform.ready().then(() => {
            // StatusBarPlugin.styleDefault();
            this.splashScreenService.hide();
        });
    }
}
