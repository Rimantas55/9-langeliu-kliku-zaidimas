console.log('working');

// var next_btn = document.getElementById('btn1');
// var random_btn = document.getElementById('btn2');
// var block_btn = document.getElementsByClassName('block');

function next_random() {
	ceil_clear();
	var random_index = Math.ceil(Math.random()*9);
	console.log(random_index);
	document.getElementsById('nr_' + random_index).style.background = 'red';



	// var x = document.getElementsByClassName("block");
	// Math.floor(Math.random() * 9);
	
}

function ceil_clear(){
	ceil_clear();
}

function ceil_clear(){
	for (var index = 1; index <=9; index++) {
		document.getElementsById('nr_' + random_index).style.background = 'grey';

	}

}




function next_red(){
	
	
	
}

// elevator saga yra toks game
