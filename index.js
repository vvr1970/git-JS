
//person.logInfo.bind(lena,'Front','99999999')()
//person.logInfo.call(lena,'Front','99999999')

// arr = [
//   { name: 'Valery', age: 53, budget: 70 },
//   { name: 'Nelli', age: 53, budget: 50},
//   { name: 'Anton', age: 29, budget: 75},
//   { name: 'Natali', age: 30, budget: 45}
// ]

//person = arr.map((par) => `${par.name}`)

// person = arr.filter((par) => par.age >= 35)

// .map((par) => `${par.name}`)

// sum = arr.reduce((total, par) => total + Math.sqrt(par.budget), 0 )


//arr = [1, 2, 3, 4, 5]

//kvadrat = (ar) => (ar.map((par) => (par*par)))

// Array.prototype.kvadrat = 
// function(n) { 
//   return this.map((par) => (par*par + n))
//   .filter((par) => par > 35)
//   .reduce((total, par) => (total += par), 0)
// }

// console.log([5,5,7,5,5,9,5,5,5,5].kvadrat(13))

// person1 = { name: 'Valery', age: 53, budget: 70 }
// person2 = { name: 'Nelli', age: 53, budget: 50}

// function logPerson(stroka) {
//   console.log(`Person: ${this.name} age: ${this.age} ${stroka}`)
// }

// function bind(context, fn) {
//   return function(...args) {
//     fn.apply(context, args)
//   }
// } 
// bind(person1, logPerson)('Привет')
// //bind(person2, logPerson, 'Воо!')()

function dom(domen){
  return function adr(adres) {
    return `https:\\\ www.${adres}.${domen}`
  }
}

comUrl = dom('com')
ruUrl = dom('ru')

console.log(ruUrl('npu'))