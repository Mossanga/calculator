// function add (){
//     let num1 = parseFloat(document.getElementById("firstnumber").value);
//     let num2 = parseFloat(document.getElementById("secondnumber").value);
//     let operator = document.getElementById("operator").value;
// if (operator == "+"){
//     let answer = num1 + num2;
//     document.getElementById("answer").innerHTML=answer;
// } else if (operator == "-"){
//     let answer = num1 - num2;
//     document.getElementById("answer").innerHTML=answer;
// }else if (operator == "*"){
//     let answer = num1 * num2;
//     document.getElementById("answer").innerHTML=answer;
// }else if (operator == "/"){
//     let answer = num1 / num2;
//     document.getElementById("answer").innerHTML=answer;
// }
// }
function calculator(){
    let num1 = parseFloat(document.getElementById("firstnumber").value);
    let num2 = parseFloat(document.getElementById("secondnumber").value);
    let operator = document.getElementById("operator").value;
    switch(operator){
        case "+":{
            let answer = num1 + num2;
            document.getElementById("answer").innerHTML=answer;
            break;
        }   
        case "-":{
            let answer = num1 - num2;
            document.getElementById("answer").innerHTML=answer;
            break;
        }
        case "*":{
            let answer = num1 * num2;
            document.getElementById("answer").innerHTML=answer;
            break;
        }
        case "/":{
            let answer = num1 / num2;
            document.getElementById("answer").innerHTML=answer;
            break;
            }
            default:{

                document.getElementById("answer").innerHTML="select an operator";
            }
        }    
    }