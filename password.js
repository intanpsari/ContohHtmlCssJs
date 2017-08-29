function mintaPassword(password){

	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	//var password = prompt();
	var resultString = ''; 

	// chiper 1 karakter
	for (var i = 0; i<password.length; i++) {
		var char = password.substring(i, i+1); //mengambil perhuruf dari kata
		var index = alphabet.indexOf(char); //menemukan index huruf tersebut di alfabet
		//antisipasi juka inputan z
		if(index === alphabet.length-1){
			index=-1;
		}
		resultString += alphabet.substring(index+1, index+2); //mengambil huruf setelahnya
	}
	alert("Hasilnya: "+resultString);
	return resultString;
	

}

function getPassword(password){
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	//var password = prompt();
	var resultString = ''; 

	// chiper 1 karakter
	for (var i = 0; i<password.length; i++) {
		var char = password.substring(i, i+1); //mengambil perhuruf dari kata
		var index = alphabet.indexOf(char); //menemukan index huruf tersebut di alfabet
		//antisipasi juka inputan z
		if(index === alphabet.length-1){
			index=-1;
		}
		resultString += alphabet.substring(index-1, index); //mengambil huruf setelahnya
	}
	alert("hasil decode: "+resultString);
	return resultString;
	
}

function ambilKarakter(){
	var input = prompt();
	for (var i = 0; i<input.length; i++) {
		alert(input.substring(i, i+1));
	}
	//alert(input.substring(0, 1));
}