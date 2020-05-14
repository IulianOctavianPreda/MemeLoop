import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { StorageService } from "../../shared/services/storage.service";
import { UserDetail } from "../types/user-detail";
import { Users } from "./../models/users";

@Injectable({
    providedIn: "root",
})
export class UserApiService implements OnDestroy {
    users: BehaviorSubject<UserDetail[]> = new BehaviorSubject<UserDetail[]>(Users);
    currentUser: BehaviorSubject<UserDetail> = new BehaviorSubject<UserDetail>(Users[1]);

    constructor(private storage: StorageService) {
        storage.getObject("users").then((storedUsers: { users: UserDetail[] }) => {
            if (!!storedUsers) {
                this.users = new BehaviorSubject<UserDetail[]>(storedUsers.users);
            }
        });
    }

    public getLoggedInUser() {
        return this.currentUser.value;
    }

    public logIn(username, password) {
        const user = this.users.value.find((x) => x.name === username && x.password === password);
        if (!!user) {
            this.currentUser.next(user);
            return true;
        }
        return false;
    }

    public signUp(username, password) {
        const user = { name: username, password };
        this.users.next([...this.users.value, user]);
        this.currentUser.next(user);
        this.saveToStorage();
    }

    public updateUser(oldUsername, username, password) {
        const users = this.users.value;
        const user = users.find((x) => x.name === oldUsername);
        if (!!user) {
            user.name = username;
            user.password = password;
            this.users.next([...users]);
            this.currentUser.next(user);
        }
        this.saveToStorage();

        return !!user;
    }

    saveToStorage() {
        this.storage.setObject("users", { posts: this.users.value });
    }

    ngOnDestroy() {
        this.saveToStorage();
    }
}
