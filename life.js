let operator=window.prompt("Enter Operator: +, -, *, /")
if(operator=="+"){
   let num1=parseFloat(prompt("Enter First Number: "))
   let num2=parseFloat(prompt("Enter Second Number: "))
   let result=num1+num2
    alert(result)
}
else if(operator=="-"){
   let num1=parseFloat(prompt("Enter First Number: "))
   let num2=parseFloat(prompt("Enter Second Number: "))
   let result=num1-num2
    alert(result)
}
else if(operator=="*"){
    let num1=parseFloat(prompt("Enter First Number: "))
   let num2=parseFloat(prompt("Enter Second Number: "))
   let  result=num1*num2
    alert(result)
}
else if(operator=="/"){
    let num1=parseFloat(prompt("Enter First Number: "))
   let num2=parseFloat(prompt("Enter Second Number: "))
    let result=num1/num2
    alert(result)
}
else{
    alert("There is no such Operator pls enter either +, -, *, or /")
}