const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8];

let unique1 = arr1.filter((obj) => arr2.indexOf(obj) === -1);
let unique2 = arr2.filter((obj) => arr1.indexOf(obj) === -1);

const unique = unique1.concat(unique2);

console.log(unique);