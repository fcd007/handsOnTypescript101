
//not user interface
// function canDriver(user) {
//   console.log('user is', user.name)

//   if(user.age >= 16) {
//     console.log('allow to drive')
//   }else {
//     console.log('do not allow to drive')
//   }
// }

// const tom = {
//   name:'Bruce Wayne'
// }
// canDriver(tom)
interface User {
  name: string
  age: number
}
function canDrive(user:User) {
  console.log('User is', user.name)
  if (user.age >= 16) {
    console.log('Allow to drive')
  } else {
    console.log('do not allow to drive')
  }
}

const theFlash = {
  name: 'Barry Alen',
  age: 17
}
//call function
canDrive(theFlash)