//// new date()
 
let koha
koha = new Date()
console.log(koha)


//// date e specifikume

let koha1
koha1 = new Date(2021, 0, 12, 8, 7, 2)
console.log(koha1)



//// setInterval()
 var intervali = setInterval(test, 6000)

 function test(){
    alert("Hello jCoders!")
 }

//  perseritet krejt kohen
// perseritet per 6 milisekonda


//// clear Intervall()

var count = 0
var detyra = setInterval(test,1000)

function test1() {
    console.log(count)
    count++
    if(count == 10){
        clearInterval(detyra)
    }
}
// e nal intervalin


//// setTimeout()

// const User = "John"
// function greet(userName){
//     alert("Welcome " + userName)
// }
// setTimeout(greet, 8000, User)



//// Ushtrim

// Te shfaqet ora aktuale (merret nga kompjuteri juaj) duke perdorur objektin Date() dhe te rifriskohet cdo 1 sekond duke perdor metoden setInterval().

// Permes nje butoni te mund te ndalet intervali i kijuar (clearInterval()), ndersa nje buton tjeter qe e vazhdon intervalin prape.



function shfaqOren(){
    const clock = new Date()
    const ora = clock.toLocaleTimeString()
    document.getElementById('ora').innerHTML = ora
}


function startInterval(){
    shfaqOren()
    intervalid = setInterval(shfaqOren, 1000)
}

function stopInterval(){
    clearInterval(intervalid)
}