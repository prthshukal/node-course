var accounts = [];


function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	for (var i = 0; i < accounts.length; i++){
		if (accounts[i].username === username){
			matchedAccount = accounts[i];
		}
	}
	
	return matchedAccount;
}

function deposit (account, amount) {
	if (typeof(amount) == 'number'){
		return account.balance = account.balance + amount;
	}else {
		console.log("Entered value is not a number");
	}
	
} 

function withdrawal (account, amount) {
	if (typeof(amount) == 'number'){
		return account.balance = account.balance - amount;
	}else {
		console.log("Entered value is not a number");	
	}
}

 
function createBalanceGetter (account) {
	function bal () {
		return account.balance;
	}
	return bal;
}

var parthaccount = createAccount ({
	balance: 0,
	username: "prthshukal",
})

deposit(parthaccount, 1000);

withdrawal(parthaccount, 500);

console.log(getAccount("prthshukal"));

var balGetter = createBalanceGetter(parthaccount);
console.log("balance is: " + balGetter());