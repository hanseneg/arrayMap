//doubles the number
// const numbers = [2, 5, 10, 25, 50]
// const result = numbers.map(num => num * 2)
// console.log(result)
  
//makes the numbers strings
// const numbers = [2, 5, 10, 25, 50]
// const result = numbers.map(num => num.toString())
// console.log(result)

//capitalize each of an array of names
/* const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const result = names.map(function(name){
    const upperCaseName = name[0].toUpperCase()
    const lowerCaseName = name.toLowerCase().slice(1, name.length)
    return upperCaseName.concat(lowerCaseName)
})
console.log(result) */
//make an array of strings of names
const players = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// const result = players.map(player => player.name)
// console.log(result)

//array of strings that can go into matrix and can't
// const result = players.map(function(people){
//     if (people.age > 18){
//         return people.name + " can enter the Matrix. Proceed with caution"
//     } else {
//         return people.name + " is too young and cannot enter the Matrix!"
//     }
// })
//console.log(result)

const result = players.map(function(people){
    return "<h1>" + people.name + "</h1>" + "<h2>" + people.age + "</h2>"
})
console.log(result)