var isValid = false;


function toggleBoolean (abc) {
	if(typeof(abc) === "boolean"){
		if(!abc){
			return abc + "It is valid";
		}else {
			return abc + "It is not valid";
		}
	}else {
	return "It is not a boolean";
	}

}

var result = toggleBoolean(isValid);
console.log(result);