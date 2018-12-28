/* use strict */
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var res = document.getElementById('res')
var btnC = document.getElementById('btnClr')
var btnS = document.getElementById('btnSum')
var btnS1 = document.getElementById('btnSub')
var btnM = document.getElementById('btnMul')
var btnD = document.getElementById('btnDiv')
var btnE = document.getElementById('btnEql')
var isOperandPressed = false
var operandPressed = ''
var isNumberPressed = false
var isDone = false

btnC.onclick = function() {
   reset()
}
res.onload = function() {
     reset()
}
btn0.onclick = function() {
    if(isDone){
        reset()
    }
    append('0')
    isNumberPressed = true
}
btn1.onclick = function() {
    if(isDone){
      reset()
    }
    append('1')
    isNumberPressed = true
}
btnS.onclick = function() {
   operandClicked('+')
   operand = '+'
}
btnS1.onclick = function() {
    operandClicked('-')
    operand = '-'
}
btnM.onclick = function() {
  operandClicked('*')
  operand = '*'
}
btnD.onclick = function() {
  operandClicked('/')
  operand = '/'
}

btnE.onclick = function(){
    evaluate(operand)
}

function operandClicked(o){
  if(!isNumberPressed){
    return
  }
  if(isOperandPressed){
    evaluate(o)
  }else{
    var valid = validate();
    if(valid){
        append(o)
        isOperandPressed = true;
    }
  }
}

function reset(){
    res.innerHTML = ''
    isOperandPressed = false
    operandPressed = ''
    isDone = false
}

function append(s){
    res.innerHTML = res.innerHTML + s;
}

function evaluate(e){
  let expression = res.innerHTML;
  if (expression == undefined){
      return;
  }
  if(expression.split(e) != expression){
    var numbers = expression.split(e)
    var left = numbers[0]
    var right = numbers[1]
    if(left.length > right.length){
      right = appendZero(left.length -right.length)+ right
    }else if(right.length > left.length){
      left = appendZero(right.length -left.length) + left
    }
    var ans = ''
    if(e == '+'){
      ans = parseInt(left, 2)+ parseInt(right, 2)
    }else if(e == ''){
      ans = parseInt(left, 2)- parseInt(right, 2)
    }else if(e == '*'){
      ans = parseInt(left, 2)* parseInt(right, 2)
    }else if(e == '/' && parseInt(right, 10)!= 0){
    ans = parseInt(left, 2)/ parseInt(right, 2)
  }


    res.innerHTML = parseInt(ans, 10).toString(2)
    isDone = true;
  }

}

function appendZero(n){
  let z = ''
  for(let a = 0; a < n; a++){
    z = z+'0'
  }
  return z;
}


function validate(){
    var test = res.innerHTML;
    let operand = test.charAt(test.length -1)
   if(operand == '+' || operand == '-' || operand == '*' || operand == '/'){
       return false;
   }else{
       return true;
   }

}
