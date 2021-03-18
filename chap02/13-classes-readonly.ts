class Person {
    constructor(private readonly message: string) {}

    speak() {
        // this.message = 'speak' + this.message
        console.log(this.message)
    }
}

const bruce = new Person('Batman')
//burce.message = 'Batman'
bruce.speak()