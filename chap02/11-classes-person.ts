class Person {
    constructor() {}
    message: string
    speak() {
        console.log(this.message)
    }
}

const batman = new Person()
batman.message = 'Bruce Wayne'
batman.speak()