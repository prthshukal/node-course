

function countDownWhile (startPoint, endPoint) {
	while (startPoint >= endPoint){
		console.log("While: " + startPoint);
		startPoint--; 
	}
}

function countDownFor (startPoint, endPoint) {
	for (var i = startPoint; i >= endPoint; i--){
		console.log("For: " + i);
	}
}


countDownWhile(10, 0);
countDownFor(10, 0);