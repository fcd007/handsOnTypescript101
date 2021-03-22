namespace InterfaceNamespace {
    interface Thing {
        name: string
        getFullName: () => string
    }

    interface Vehicle extends Thing {
        weelCount: number
        updateWeelCount: (newWeelCount: number) => void
        showNumberOfWeels: () => void
    }

    class Motocycle implements Vehicle {
        name: string
        weelCount: number
        constructor(name: string) {
            this.name = name
        }

        updateWeelCount(newWeelCount: number) {
            this.weelCount = newWeelCount
            console.log(`Automobile has ${this.weelCount}`)
        }

        showNumberOfWeels() {
            console.log(`Moved Automobile ${this.weelCount}`)
        }

        getFullName() {
            return "MC-" + this.name
        }
    }

    const moto = new Motocycle('Beginner-cycle')
    console.log(moto.getFullName())
    

}