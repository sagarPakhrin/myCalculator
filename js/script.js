var wrapper = document.querySelector(".wrapper").addEventListener("click", clickEvent);
var isDecimal = false;
var finished=false;

function clickEvent(e){
		var expression = document.querySelector('#expression');
		var hist = document.querySelector('#hist');
		if(finished){
				expression.innerHTML = "";
				hist.innerHTML = "";
				finished= false;
		}
		if(e.target !== e.currentTarget){
				var key = e.target;
				var num = key.textContent;
				if(num=='C'){
						expression.innerHTML ="";
						hist.innerHTML ="";
						isDecimal = false;
				}
				else if (num =='<'){
						expression.innerHTML = expression.innerHTML.substring(0,expression.innerHTML.length -1);
				}
				else if (num == "."){
						if(isDecimal){
								expression.innerHTML =expression.innerHTML;
						}
						else{
							isDecimal = true;
							expression.innerHTML +=key.textContent;
						}
				}
				else if(num == "="){
						isDecimal = false;
						hist.innerHTML =expression.innerHTML;
						var result = eval(hist.innerHTML); 
						if(result % 1 == 0){
							expression.innerHTML = eval(hist.innerHTML); 
						}
						else{
							expression.innerHTML = result.toFixed(2);
						}
						finished = true;
				}
				else if(num == "+" || num == "-" || num == "*" || num == "/" ){
						isDecimal = false;
						expression.innerHTML +=key.textContent;
				}
				else{
						expression.innerHTML +=key.textContent;
				}
		}
}
