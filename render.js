function getValues() {
    let a= Number(document.getElementById("num1").value);
    let b= Number(document.getElementById("num2").value);
    return [a,b];
}
function add() {
    let [a,b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a + b);
}
function sub() {
    let [a,b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a - b);
}
function mul() {
    let [a,b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a * b);
}
function div() {
    let [a,b] = getValues();
    if (b === 0) {
        document.getElementById("result").innerText = "Error: Division by zero";
    } else{
        document.getElementById("result").innerText = "Result: " + (a / b);
    }
}