//function scope
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}
//função sem parametro, sobrescreve variaveis

console.log(subject)  // == createvideo
console.log(createThink(subject)) // == study 