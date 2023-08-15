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

let sum = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
}
console.log(sum)