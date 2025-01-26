import { User } from "./user.model";

// dodaj u providers u koreni modul!
export class UserService {

    private users: User[] = [];

    constructor() {
        this.loadUsersFromLocalStorage();
    }

    private loadUsersFromLocalStorage() {
        const users = localStorage.getItem('users');
        if (users) {
            this.users = JSON.parse(users);
        } else {
            this.users = [
                {
                    id: "0",
                    password: "123",
                    email: "anchy@gmail.com",
                    cardNumber: 123
                },
                {
                    id: "1",
                    password: "123",
                    email: "ana@gmail.com",
                    cardNumber: 456
                }
            ];
            this.saveUsersToLocalStorage();
        }
    }

    private saveUsersToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    getUsers(){
        return this.users;
    }
    userExists(email: string, password: string): boolean {
        return this.users.some(user => user.email === email && user.password === password);
      }
    emailExists(email: string): boolean {
        return this.users.some(user => user.email === email);
    }

    newUser(password: string, email: string, cardNumber: number) {

        const lastId = Math.max(...this.users.map(user => parseInt(user.id)));
        const newId = (lastId + 1).toString();

        const newUser: User = {
            id: newId,
            password: password,
            email: email,
            cardNumber: cardNumber
        };

        this.users.push(newUser);
        this.saveUsersToLocalStorage();
    }
}

