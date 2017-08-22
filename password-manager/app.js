console.log("Starting Password manger app");

var storage = require('node-persist');
storage.initSync();

storage.setItemSync("accounts", [{
	username: "prthshukal",
	balance: 0,
}])

var accounts = storage.getItemSync("accounts");
console.log(accounts);