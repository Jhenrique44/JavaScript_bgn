/*//function Hoisting

sayName()

function sayName() { 
   console.log('jojo')
}

//Arrow function 

const senhorAmado = (name) => {
    console.log(name)
}
name = 'jojo'
senhorAmado(name)

//Callback function

function sayNombre(nome) {
    console.log('Antes de executar')

    nome()

    console.log('depois da execução ')
}
sayNombre(
    () => {
        console.log('estou em uma callback')
    }
)*/
//Function constructor

//date
let date = new Date("2223-10-1")
console.log(date)

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name +' '+'andando'
    }
}
const jo = new Person("jojo")
const asno = new Person("aslfred")
console.log(jo.walk())
console.log(asno.walk())

