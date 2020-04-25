import { Injectable } from "@angular/core";
import { Storage } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    set(key: string, value: string): Promise<void> {
        return Storage.set({
            key,
            value,
        });
    }

    get(key: string): Promise<string> {
        return Storage.get({ key }).then((x) => x.value);
    }

    remove(key: string): Promise<void> {
        return Storage.remove({ key });
    }

    setObject(key: string, data: object): Promise<void> {
        return Storage.set({
            key,
            value: JSON.stringify(data),
        });
    }

    getObject(key: string): Promise<object> {
        return Storage.get({ key }).then((x) => JSON.parse(x.value));
    }

    keys(): Promise<string[]> {
        return Storage.keys().then((x) => x.keys);
    }

    clear(): Promise<void> {
        return Storage.clear();
    }
}
