type Settings = typeof import("./index.json")

const settings: Settings = { lastPage: "", list: ["1"], k: 1 }

class Person {
    public firstName: string;
    private password: number
    constructor(firstName: string, password: number) {
        this.firstName = firstName;
        this.password = password
    }

    getPassword(): number {
        return this.password
    }
    setPassword(newPassword: number): void {
        this.password = newPassword
    }
}
const user = new Person("Raffa", 123456)
user.firstName
const t: string = user.getPassword()



const user1: IUserName = { firstName: "Gal", lastName: "amouyal", email: "string" }
const user2: IUserName = { firstName: "Gal", lastName: "amouyal" }
const user3: Partial<IUserName | IAge> = { firstName: "Gal", lastName: "amouyal", age: 1 }
const userAge: IAge = { age: 24 }

interface IUserName {
    firstName: string,
    lastName: string,
    email: string
}

interface IAge {
    age: number
}

class User implements Partial<IUserName>, IAge {
    public firstName: string;
    public lastName: string;

    public age: number;
    public newParam: string;
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 22
        this.newParam = "";
    }
}



abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name
    }

    sayHi() {
        console.log(this.name)
    }
    abstract move(): void;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)

    }
    move() {
        console.log("running")
    }

}

class Bird extends Animal {
    constructor(name: string) {
        super(name)

    }

    move() {
        console.log("flying")
    }
}

// const a1 = new Animal("Doggi")
const dog1 = new Dog("doggi")
dog1.sayHi()


