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
						expression.innerHTML = eval(hist.innerHTML); 
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
