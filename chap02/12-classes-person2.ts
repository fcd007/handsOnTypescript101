class Person {
    constructor(private message: string) {}

    speak() {
        console.log(this.message)
    }
}

const person = new Person('Barry Alen!')
//person.message = 'Barry Alen''
person.speak()