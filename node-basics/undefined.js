

function greeting (name) {
	if (typeof(name) == 'undefined'){
		return 'Hello World!';
	}else {
		return "Hello " + name;
	}
}

console.log(greeting("Parth"));
console.log(greeting());