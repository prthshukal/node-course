var accounts = [];


function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username == username){
			matchedAccount = account;
		}
	});

	return matchedAccount;
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

var parthAccount = createAccount({
	balance: 0,
	username: "prthshukal",
})

console.log(getAccount('prthshukal'));

var deposit = deposit(parthAccount, 1000);

var withdrawal = withdrawal (parthAccount, 200);

console.log("Current Balance: " + getBalance(parthAccount));

var kunalAccount = createAccount({
	balance: 0,
	username: "kunal07",
})

console.log(accounts);