var x = 10;//variable decleration and initialization
var y = 36;//variable decleration and initialization
console.log(x*y);


let a = 30;//variable decleration and initialization
let b = 50;//variable decleration and initialization
console.log(a+b);

//Naming convantion is a UPPER_SNAKE_CASE
//const value are always fixed ,can not changed this value
const PI = 3.14;//variable decleration and initialization
const PI_FIRST = 3.14345;//variable decleration and initializatin
console.log(PI+PI_FIRST);


//1. function definition
//Function Naming convntion always define a camleCase
function functionA(name){//formal argument/parameter
    //function body
    console.log(name+' Rathor');
}
//1. function calling
functionA('Kiran');//actual argument/parameter


//2. function definition
function functionB(n){// formal argument/parameter
    //function body
    return n;//function may be return something
}
//2. function calling
let p = functionB('i am learning js');//actual argument/parameter
console.log(p);

var a1 = 'Tree ';//variable declration and intializatin
var a2 = 'needs ';//variable decleration and initialization
var a3 = 'a ';//variable declration and intializatin
var a4 = 'water';//variable declration and intializatin
console.log(a1+a2+a3+a4);

//3. function definition 
function functionC(a1a,a2a){//formal argument/parameter
    //function body
    console.log(a1a+a2a);
}
//3. function calling
functionC(48,94);


//4.function definiton
function functionD(a2a,a3a,a4a,a5a){//formal argument/parameter
    //function body
    return a2a+a3a+a4a+a5a;//function may be return something
}
//4.function calling
let u = functionD(8,45,234,functionD(55,59,85,57));//actual argument/parameter
console.log(u);

var result = ['Health',' ministry,','flags','five','states','for','high','number','of','active','Covid-19','cases'];
console.log(result);

var result1 = [...result, 'india','news'];
console.log(result1);

var z = ['kiran','Kamlesh','Rudransh','Anjali','Sarita','Harish'];
var z2 =[...z,'Vijay','krishna','Laddu'];
var k   = [...result,...result1,...z,...z2,'kavita'];
console.log(k);

//5.function definition
function functionE(result1){//formal argument/parameter
    //function body
    //(initialization;condition,increment/decrement)
    for( var i=0;i<result1.length;i++){
        console.log('Hello '+z[i]+', how are you ?');
    }
}
//5.function calling 
functionE(result1);//actual argument /parameter

var b1 = ['Earthquake','of'];
var b2 = [...b1,'six','magnitude']   
var b3 = [...b2,'shakes','Tokyo'];
var b4 = [...b3,'area;'];
var b5 = [...b4,'no','tsunami','danger'];
console.log(b5);

var paragraph = '';
//(initialization;condition,increment/decrement)
for( var i=0;i<b5.length;i++){
    console.log(b5[i]);
   paragraph = paragraph + b5[i] + ' ';
}
console.log(paragraph);


//fat arrow function 
//6.function definition
let functionF = (name)=>{//formal argument/parameter
    //function body
    console.log(name+"Rathor");
}
//6.function calling
functionF("Anjali");//actual argument/parameter
