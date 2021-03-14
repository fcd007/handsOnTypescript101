//not user interface
// function canDriver(user) {
//   console.log('user is', user.name)
function canDrive(user) {
    console.log('User is', user.name);
    if (user.age >= 16) {
        console.log('Allow to drive');
    }
    else {
        console.log('do not allow to drive');
    }
}
var theFlash = {
    name: 'Barry Alen',
    age: 17
};
//call function
canDrive(theFlash);
