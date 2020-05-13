import { Injectable } from "@angular/core";
import { Modals } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class ModalService {
    showAlert(title, message) {
        return Modals.alert({
            title,
            message,
        });
    }

    showConfirm(title, message) {
        return Modals.confirm({
            title,
            message,
        });
    }

    showPrompt(title, message) {
        return Modals.prompt({
            title,
            message,
        });
    }

    //   showActions() {
    //     return Modals.showActions({
    //       title: 'Photo Options',
    //       message: 'Select an option to perform',
    //       options: [
    //         {
    //           title: 'Upload'
    //         },
    //         {
    //           title: 'Share'
    //         },
    //         {
    //           title: 'Remove',
    //           style: ActionSheetOptionStyle.Destructive
    //         }
    //       ]
    //     })
    //     console.log('You selected', promptRet);
    //   }
}
