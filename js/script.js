var wrapper = document.querySelector(".wrapper").addEventListener("click", calculate);

function calculate(e){
		var expression = document.querySelector('#expression');
		if(e.target !== e.currentTarget){
				var key = e.target;
				var num = key.textContent;
				if(num=='C'){
						expression.innerHTML ="";
				}
				else if (num =='<'){
						expression.innerHTML = expression.innerHTML.substring(0,expression.innerHTML.length -1);
				}
				else if (num == "."){
						if(expression.innerHTML)
				}
				else{
						expression.innerHTML +=key.textContent;
				}
		}
}
