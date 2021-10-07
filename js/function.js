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

var para = " ";
var result = ['Health',' ministry,','flags','five','states','for','high','number','of','active','Covid-19','cases'];

para = para + result + "  ";
console.log(para);


var result1 = [...result, 'india','news'];
console.log(result1);

var z = ['kiran','Kamlesh','Rudransh','Anjali','Sarita','Harish'];
var z2 =[...z,'Vijay','krishna','Laddu'];
var k   = [...result,...result1,...z,...z2,'kavita'];
console.log(k.length);

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
console.log(b5.length);

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


//7.function definition
var h1 = ["SURAT:","The","Tapi","river","through","the","Diamond","City","will","be","flowing","bank-to-bank","from","Monday","late","evening","with","the","release","of",1.75,"lakh","cusecs","water","from","the","Ukai","dam."];
var h2 = [...h1,"The","amount","of","water","released","from","the","Ukai","dam","was","increased","from",1.5,"lakh","cusecs","following","heavy","inflow","from","the","Tapi","catchment","area","which","witnessed","incessant","rain","under","the","influence","of","cyclone","Gluab","in the Bay of"," Bengal."];
var h3 = [...h2,"The","water","level","in","the","Tapi","river","has","been","on","the","rise","since","Monday","afternoon",",said","city","authorities."];
var h4 = [...h3,"Out","of","the","total","water","being","released","from","Ukai","dam,",1.51,"lakh","cusecs","was","released","through","gates","while"];
var h5 = [...h4,22,512,"cusecs","was","being","released","from","the","four","hydropower"," units.","Water","level","in","the","dam","that","was",342.29,"ft"];
var h6 = [...h5,"on","Monday","morning","was","brought","down","to",341.91,"ft.","Ukai","dam","authorities","further","plan","to","increase","the","water"];
var h7 = [...h6,"released","to",1.95,"lakh","cusecs","considering","the","inflow."];

let functionG = (news)=>{//formal argument/parameter
    //function body
    //(initialization;condition;increment/decrement)
    var paragraph1 = " ";
    for(var i=0;i<h7.length;i++){
        //console.log(news + h7[i]+" ");
        paragraph1 = paragraph1 +h7[i];
    }
    console.log(paragraph1);
}
//7.function calling
functionG("NEWS");


