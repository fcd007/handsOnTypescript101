// let val: unknown = 22
// val = 'string'
// val = new Array()
// val.push(33)
// console.log(val);
var value = 22;
value = 'string';
value = new Array();
if (value instanceof Array) {
    value.push(33);
}
console.log(value);
