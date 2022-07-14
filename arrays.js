console.log('Hello World');

/**
  */
// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array


let fruits = ['kiwi','mango',"apple"]
console.log(...fruits)
fruits.push('avocado')
console.log(...fruits)
fruits.unshift('tomatoes')
console.log(...fruits)
fruits.pop()
console.log(...fruits)
fruits.sort()
console.log(...fruits)

console.log(`This is reg display`,fruits)
console.log(`This is spread`,...fruits)


console.log(fruits)
console.log(...fruits)
console.log(fruits.indexOf(`mango`))
console.log(fruits.indexOf('Gavin'))

const chickenEgg = ['🐔','🥚'].sort()

console.log(`The ${chickenEgg[0]} came first!`)