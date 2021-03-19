let weight;
console.log(typeof weight)


let nome, age, weight, isSubscribed;

nome = 'jojo'
age = 30
weight = 76.61
isSubscribed = true

let student = {
    nome: 'jojo',
    age: 30,
    weight: 76.61,
    isSubscribed: true

};
console.log(`${student.nome} de idade ${student.age} pesa ${student.weight}kg `)

let students = []

students = [student] 

console.log(students[0])

let student2 = {
    nome: 'joaquin',
    age: 20,
    weight: 80.61,
    isSubscribed: true

};

students[1] = student2
console.log(students)