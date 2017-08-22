var account = {
	balance: 0,
}

function deposit (account, amount) {
	return account.balance = account.balance + amount;
} 

function withdrawal (account, amount) {
	return account.balance = account.balance - amount;
}

function getBalance(account) {
	return account.balance;
}


var depositAmount = deposit(account, 1000);
console.log("Total amount deposited is: " + depositAmount);

var withdrawalAmount = withdrawal(account, 500);
console.log("Total amount withdrawal is: " + withdrawalAmount);

console.log("Current account balance is: " + getBalance(account));