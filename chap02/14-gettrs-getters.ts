class Speaker {
  private message: string
  constructor(private name: string) {}
  get Message() {
    if(!this.message.includes(this.name)) {
      throw Error('message is missing speaker´s name')
    }
    return this.message
  }

  set Message(value: string) {
    let tempMessage = value
    if(!value.includes(this.name) ) {
      tempMessage = this.name + ' ' + value
    }
    this.message = tempMessage
  }
}

const speaker = new Speaker('Lucas Prado')
speaker.Message = 'Hello'
console.log(speaker.Message)