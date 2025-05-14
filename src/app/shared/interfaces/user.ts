export interface User {
    username: string;
    password: string;
    name: string;
    surname: string;
    email: string;
    address: {
        area: string;
        road: string;
    }
}

export interface Credentials {
    username: string;
    password: string;
}
