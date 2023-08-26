// globes
let lastvalue = "";
let operations ="*+-/";

function appendToInput(value) {
    var inputField = document.getElementById("inputField");
    // No double operator
    if(operations.includes(lastvalue))
    {
        if(operations.includes(value)){
            var resultField = document.getElementById("resultField");
            resultField.value = "incorrect input"
            return;
        }
    }
    lastvalue = value;
    inputField.value += value;
    
  }
  
  function calculate() {
    // To eleminate bad expressions like {12+5-} ending in an operator
    if (operations.includes(lastvalue) && lastvalue != "") {
        var resultField = document.getElementById("resultField");
        resultField.value = "invalid expression"
        return;
    }else{
        if (lastvalue == "") {
            var resultField = document.getElementById("resultField");
            resultField.value = "Nothing to calculate"
            return;
        }
    }
    
    var inputField = document.getElementById("inputField");
    var resultField = document.getElementById("resultField");
    
    var inputExpression = inputField.value;
    var result = eval(inputExpression);

    resultField.value = result;
  }
  
  function clearCalculator() {
    var inputField = document.getElementById("inputField");
    var resultField = document.getElementById("resultField");
    
    lastvalue = ""
    inputField.value = "";
    resultField.value = "";
  }