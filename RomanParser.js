

function RomanParser(){

function Parse(number){
	var romanNumber = "";
	var anterior = "";
	var posterior = "V";
	if(number > 5){
		anterior = "V";
		posterior = "X";
		number = number - 5;
	}

	if (number < 5){
		if (number == 4){
			romanNumber += "I"+posterior;
		}else{
			for (var a = 0; a<number ; a++){
				romanNumber += anterior;
				romanNumber += "I";
			}
		}
	}else if (number = 5){
		romanNumber += posterior;
	}/*else if (number<10){
		if (number == 9){
			romanNumber += "IX";
		}else{
			number -=
			for (var a = 0; a<number ; a++){
				romanNumber += "I";
			}
		}
	}*/
	return romanNumber

};


return {
	Parse: function(number){
		return Parse(number);
	}
}

};