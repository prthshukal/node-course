function createAdder (baseNumber) {
	function addition (numberToAdd) {
		return baseNumber + numberToAdd;
	}
	return addition;
}

var addTen = createAdder(10);
console.log(addTen(2));

console.log(addTen(0));