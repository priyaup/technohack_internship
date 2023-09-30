(function () {
	let screen = document.querySelector('.screen');
	let buttons = document.querySelectorAll('.btn');
	let clear = document.querySelector('.btn-clear');
	
  buttons.forEach(function(button){
    button.addEventListener("click", function(e){
    	let value = e.target.dataset.num;
    	screen.value += value;
    })
	});


  let equal = document.querySelector('.equals');
	equal.addEventListener("click", function(e){
		if (screen.value === '') {
			screen.value = "Please Enter the Number";
		}else{
			let answer = eval(screen.value);
			screen.value = answer;
		}
	});

	clear.addEventListener("click",function(e){
		screen.value = " ";
	})
})(); 