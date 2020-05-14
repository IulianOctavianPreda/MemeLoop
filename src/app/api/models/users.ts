import { UserDetail } from "./../types/user-detail";

const admin: UserDetail = {
    name: "admin",
    email: "admin@min.ad",
    password: "qwerty",
};

const guest: UserDetail = {
    name: "guest",
    email: "guest@min.ad",
};

export const Users: UserDetail[] = [admin, guest];
