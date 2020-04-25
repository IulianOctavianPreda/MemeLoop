import { Injectable } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Injectable({
    providedIn: "root",
})
export class FontAwesomeLibraryService {
    constructor(private library: FaIconLibrary) {}

    addIconsToApplication() {
        this.library.addIconPacks(fas, far);
    }
}
