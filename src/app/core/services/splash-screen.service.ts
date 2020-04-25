import { Injectable } from "@angular/core";
import { SplashScreen, SplashScreenHideOptions } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class SplashScreenService {
    constructor() {}

    show(options?: SplashScreenHideOptions, callback?: () => any): Promise<void> {
        return SplashScreen.show(options, callback);
    }

    hide(options?: SplashScreenHideOptions, callback?: () => any): Promise<void> {
        return SplashScreen.hide(options, callback);
    }
}
