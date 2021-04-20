//Manipulando Strings e Numeros 
//Transforamdno String em numero e numero em String 
/*
let string = '123'
console.log(Number(string));

let inteiro = 4
console.log(String(inteiro));

//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero 

let word = 'gods'
console.log(word.length);
let number = 1234
console.log(String(number).length); 

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula 

let number = 342352525235.35343414
console.log(number.toFixed(2).replace(".",","));

//Transformando letras minusculas em maiusculas, e faça o contrario

let word = "Programar é muito legal"
console.log(word.toLowerCase().toLocaleUpperCase());


//Verificar se o texto tem uma palavra especifica

let phrase = "i want to live the love"
console.log(phrase.includes("love"));


//Separe um texto que contem espaços, em um novo array onde cada texto é uma posiçãp do array.
//depois transforme o array em um text e onde eram spaces, coloque "_"

let phrase = "i want to live love"
let myArray = phrase.split(" ")
console.log(myArray);

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase());

//Criar um Array com construtor 
let myArray = new Array('a','b','c')
console.log(myArray.length);
//Contar elementos de um array
//.lenght

//Transformar ma cadeia de caracteres em elementos de um array 
let word = 'manipulaçao'
console.log(Array.from(word));
*/

//Manipulando Arrays
let lista = ['html', 'css', 'js', 'py', 'c']
//adicionar no fim
console.log(lista.push('nodess'));
//adicionar no começo
console.log(lista.unshift('sql'));
//remover do fim
console.log(lista.pop());
//remover do começo
console.log(lista.shift());
//pegar somento alguns
console.log(lista.slice(1, 4));
//remover 1 ou mais itens em qualquer posiçao
console.log(lista.splice(1, 1));
//encontrar fazendo uma busca
let index = lista.indexOf('js')
lista.splice(index, 1)
console.log(lista);









