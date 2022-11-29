function sum(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,callBack){
    return callBack(num1,num2);
}   

console.log(calc(2,2,sum));
setTimeout(function (){
    console.log('Hola JavaScript');
},2000)

function gretting(name){
    console.log('Hello '+name)
}

setTimeout(gretting,3000,'Camilo')