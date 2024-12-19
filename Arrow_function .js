
// Arrow Function =>  and call the function using the constant name or variable name 


var hello = (n) => console.log(` hello ${n} `)

var longfun = (no,a ) =>{
    console.log(` hello ${no} `)
    console.log(` hello ${no}  YOure ${a} Year Old `)
}
hello("Lily");
longfun("Lily",23);

console.log(" Arrow Function with TIMeoutFunction ")

setTimeout( () => console.log(" Welcome here after 4000ms"),4000)
