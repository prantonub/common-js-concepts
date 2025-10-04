//strongly typed language
// int a = 5;
// string b = 'Hasan Minhaz Shakil'
// bool c = True;
// object student = { name: 'Pranto', id: 17}
// int[] numbers = [12, 15, 20]
// string[] friends = ['Hasan', 'Shakil'];

//dynamic type

//primitive
const a = 5;
const b = 'NUB'
const c = true;
//non-primitive
const ages = [20, 25, 30];
const student = {id: 17, class: 11}
console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y)

//
let p = {job: 'web developer'}
let q = p;
q.job = 'front end developer';
console.log(p, q);