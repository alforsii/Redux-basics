// For more details go to =>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

//Iterators
const mySet = new Set([1,2,3,3,4,2]) // mySet.length === 4

// const mySet = [1,2,3,4]  //  mySet.length === 4

let iterator = mySet[Symbol.iterator]()
// each call with next() will only return one index value and false if in array exists any more values
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
//when iteration done iterator.next() => ({value: undefined, done: true})
console.log(iterator.next())//  { value: undefined, done: true }

//Generators
function *generator() {
    let i = 1
    while (true) {
        yield i    // each call iterator.next() - iterates ones
        i++        // and increments i+= 1 - ones
    }
  }
// function *generator() {
//     yield 1;
//     yield 2;
//   }
  
   iterator = generator()
  console.log(iterator)
  console.log(iterator.next()) 
  console.log(iterator.next())
  console.log(iterator.next())