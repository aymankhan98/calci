function multiplyBy() {
    num1 = Number(document.getElementById("firstNumber").value);
    num2 = Number(document.getElementById("secondNumber").value);
    console.log(typeof num1, typeof num2)
    document.getElementById("result").innerHTML = Number(num1 * num2);
    console.log(typeof document.getElementById("result").innerHTML)
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    console.log(typeof num1, typeof num2)
    
    document.getElementById("result").innerHTML = num1 / num2;
    console.log(typeof num1/num2)
} 
function addedBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    console.log(typeof num1, typeof num2)

    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
} 
function subtractBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 - num2;
} 

