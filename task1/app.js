// let ad = "Mikayil"

// alert("hey,there! I'm using JS")
// alert("Welcome,dear")
// alert("HI, I am "+  ad )
// alert(ad +" has a car"  + ad + "loves his car ")
// alert(ad +" is a good boy")
// let username = "Lale"
// prompt("adinizi daxil edin:")
// let userName = confirm ('are you ready to learn JavaScript?')
// let ad = prompt('adinizi daxil edin')
// let soyad = prompt('soyadinizi daxil edin')

// let name = "John"
// let admin = name
// console.log(admin)
// let age= prompt('How old are you',18)
// console.log(age);

// let browser=prompt("Enter your browser")
// if(browser==="Edge"){
//     console.log("You've got the Edge")

// }
// let a = +prompt("Input the first integer")
// let b = +prompt("Input the second integer")
// operator = prompt("Input operator")
// let sum;
// switch(operator){
//     case "+":
//     sum= a+b;
//     break
//     case "-":
//     sum= a-b;
//     break
//     case "*":
//     sum =a*b;
//     break
//     case "/":
//     sum =a/b;

// }
// console.log(sum)
// if(0) {console.log('beli, duz deyirsen')}
// else{
//     console.log('xeyr dostum,seni aldadiblar')
// }
// let eded = prompt('ededi daxil edin, cut/tek oldugunu yoxlayaq ')
// if(eded %2 === 0) {
//     console.log(`${eded} ededi cut ededdir`)
// }
// else{ 
//     console.log(`${eded} ededi tek ededdir`)
// }
// let ad = prompt('adinizi daxil edin:')
// let cins = prompt(' cinsinizi daxil edin:')
// if (cins=== "K") {
//     console.log(`hey, mr, ${ad}`)
// }
// else if (cins=== 'Q') {
//     console.log(`hey, ms ${ad}`)
// }
// else{
//     console.log('gender is not found')
// }

// let eded= prompt('eded daxil edin')
//  if(eded % 3 ===0 && eded % 5 === 0) {
//     console.log('fizzbuzz')
// }
// else if (eded % 3 === 0) {
//     console.log('fizz')
// }
// else if (eded % 5 ===0) {

//     console.log('buzz')
// }

// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         sum = sum + i;
//     }
// }
// console.log(sum)


// for ( let i =1; i<867; i++) {
//     if (i%13===4)
//     console.log(i)
// }
// let ad=prompt('adinizi daxil edin')
// let cins= prompt('cinsinizi daxil edin')
// if (cins==='K') {
//     console.log(`Hey, mr ${ad} `)

// }
// else if(cins==="K") {
//     console.log(`hey, ms ${ad}`)}
// let ad=prompt('adinizi daxil edin')
// let cins= prompt('cinsinizi daxil edin')
// if  (cins==="K"){
//     console.log(`hey,mr ${ad}`)
// }
// else if (cins==="Q") {
//     console.log(`hey, ms ${ad}`)
// }

// function add() {

//    let ed1=+prompt('first number')
//    let ed2=+prompt('second number')
//     console.log(ed1+ed2)
// }
// add()
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             console.log(num1 + num2)
//             break;
//         case '- ':
//             console.log(num1 - num2)
//             break;
//         case '*':
//             console.log(num1 * num2)
//     }

// }
// calculator(6, 2, '-')
// function getNumber(){
//     let ed=+prompt('eded daxil edin')
//     return ed;
// }
// let ed =getNumber()
// console.log(ed)
// function niceName (name, emoji){
//     let netice= emoji+ad+emoji
//     return netice

// }
// const ad1= niceName('ali', '~')
// console.log(ad1)
// const ad2= niceName(qamze,'🌹')
// console.log(ad2)
//  
// const info = (name, phone, price) => `${name} bought ${phone} for ${price}`


// console.log(info('Ali', 'Honor', '2000$'))
// const calc = (operator) => {
//     if(operator ==='+') {
//         return(ed1, ed2) => ed1+ed2
//     }
// }
// const sum = calc ('+')
// console.log(sum(12,23))
// const makeFormalFactory = (gender) => {
//     if (gender === 'K') {
//         return (name) => `Hi, mr ${name} `   }
//         else if (gender === 'Q') { return (name) => { `Hi, ms ${name}` } }

// OBJECT
// }
// const forMan= makeFormal
// const mikayil = {
//     name:'mikayil',
//     age:3,
//     job: 'playing',
//     coding: ()=>{
//         console.log('he goes to the nursery school')
//     }


// }
// console.log(mikayil.age)
//  const product = {
//     model:'nokia',
//     price: 600
//  }
//  console.log(product.price)
//  product.price-=200
//  console.log('After discount:')
//  console.log(product.price) 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }
// let sum = 0
// for (let key in salaries) { sum += salaries[key] }
// console.log(sum)
const ali = {
    ad:'ali',
    yas:12,
    is:'avara'
}
const ali2={...ali}
// spread

ali2.is='xuliqan'
console.log(ali)
console.log(ali2)