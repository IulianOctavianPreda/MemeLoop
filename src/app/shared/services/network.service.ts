import { Injectable } from "@angular/core";
import { Network, NetworkStatus } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class NetworkService {
    getStatus(): Promise<NetworkStatus> {
        return Network.getStatus();
    }

    addListener(callback: (status: NetworkStatus) => void) {
        Network.addListener("networkStatusChange", callback);
    }
}
