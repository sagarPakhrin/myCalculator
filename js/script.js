var wrapper = document.querySelector(".wrapper").addEventListener("click", clickEvent);
var isDecimal = false;

function clickEvent(e){
		var expression = document.querySelector('#expression');
		var hist = document.querySelector('#hist');
		if(e.target !== e.currentTarget){
				var key = e.target;
				var num = key.textContent;
				if(num=='C'){
						expression.innerHTML ="";
						hist.innerHTML ="";
				}
				else if (num =='<'){
						expression.innerHTML = expression.innerHTML.substring(0,expression.innerHTML.length -1);
				}
				else if (num == "."){
						if(isDecimal == true){
								expression.innerHTML =expression.innerHTML;
						}
						else{
								isDecimal = true;
								expression.innerHTML +=key.textContent;
						}
				}
				else if(num == "="){
						hist.innerHTML =expression.innerHTML;
						expression.innerHTML = calculate(expression.innerHTML);
				}
				else if(num == "+" || num == "-" || num == "*" || num == "X" ||    num == "/" ){
						isDecimal = false;
						expression.innerHTML +=key.textContent;
				}
				else{
						expression.innerHTML +=key.textContent;
				}
		}
}

function calculate(expression){
		var result = 0;
		var exp=''; // to store operands
		var postFix=[]; // this is to hold the postfix expression
		var stack=[];// this is to hold the operator
		for (var i = 0;i<expression.length; i++){
				var character = expression[i];
				if(!isNaN(character)){
						exp +=character;
						if(i==(expression.length-1)){
								stack.push(exp);
						}
				}
				else if(character == "+" ||character == "-" ||character == "X" ||character == "/"){
						postFix.push(exp);
						exp="";
						while(stack.length !== 0 && (precedence(character)<=precedence(stack[stack.length-1]))){
								postFix.push(stack.pop());
						}
						stack.push(character);
				}
		}
		while(stack.length>0){
				postFix.push(stack.pop());
		}
		console.log(postFix);
		return result;
}

var precedence = function(operator){
		switch(operator){
				case "^":
						return 3;
				case "X":
				case "/":
						return 2;
				case "+":
				case "-":
						return 1;
				default:
						return 0;
		}
}
function stackTop(string){
		return string[string.length -1];
}
