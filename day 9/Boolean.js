let bool = true;
let bool2 = false;

console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean({})); //true
console.log(Boolean('0')); //true
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean([])); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(undefined) == Boolean(null));
console.log(false == Boolean(null)); //true
console.log(Boolean('false')); //true
console.log(Boolean(false)); //false
