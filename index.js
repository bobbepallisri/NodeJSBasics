// using named exports in common js modules.

const calcluator = require('./calcluator')
import { add, mul, sub } from './calcluator.mjs';

const {add,sub,mul}=calcluator;
const greeting = (name) =>{
    console.log(`hello, ${name}`)
}

greeting('srikanth');
greeting('manasa');
console.log(add(2,3));
console.log(sub(4,2));
console.log(mul(2,3));