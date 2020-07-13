let person = {
	name: 'Muhammad Juan',
	address: 'Jombang',
	phone: '089676842907',
	login: {
		username: 'juan',
		password: '123'
	}
};

const validate = (username, password) =>
	new Promise((resolve, reject) => {
		let err;
		if (username == person.login.username) {
			if (password == person.login.password) {
				resolve(true);
			} else {
				err = 'Invalid Password';
				reject(err);
			}
		} else {
			err = 'Invalid Username';
			reject(err);
		}
	});

const validation = async function() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	const isValid = await validate(username, password);
	if (isValid === true) {
		result = 'home.html';
		return result;
	}
};

function login() {
	validation().then((result) => (location = result)).catch((err) => alert(err));
}

function getData() {
	document.getElementById('name').innerHTML = person.name;
	document.getElementById('address').innerHTML = person.address;
	document.getElementById('phone_number').innerHTML = person.phone;
}
