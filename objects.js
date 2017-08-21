var pet = {
	name: "pappi",
	type: "dog",
}

function petName (pet) {
	return "You have a pet with name " + pet.name + " and it is a " + pet.type + "!";
}

var statement = petName(pet);
console.log(statement);