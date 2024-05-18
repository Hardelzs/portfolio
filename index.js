function unChecked(){
    let number = [1,3,4,5,6,7,8,];
let index = number.map(number => number * 2);
for(let i = 0; i > index; i++){
     index++
}
let name = "     HelloWorld    !";
let indelz = name.trim();
let trim = indelz.length;
console.log(index);
console.log(indelz);
console.log(trim);
}
unChecked();



let firstNumber = 4;
let secondNumber = 5;
let answer = "";
let operator = ({
    add: "",
    subtract: "-",
    multiplication: "x",
    division : "/",
    percentage: ""
})

function calculator(){
    let answers = firstNumber + secondNumber;
    console.log(answers);
}
calculator(2,[0])


