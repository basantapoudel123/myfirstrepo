/*
// Strings

let firstname = 'Jonny ';
let lastname = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2020 - year;
}

// ES5
console.log('Hey its me '+ firstname + ' '+ lastname + '. I was born in '
	+ yearOfBirth + '. Today, I am '+ calcAge(yearOfBirth)+ ' years old.');


// ES6
console.log(`This is ${firstname} ${lastname}. He was born in ${yearOfBirth}.Today, He is ${calcAge(yearOfBirth)} years old. `);

const n = `${firstname} ${lastname}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('nn'));
console.log(n.includes('mi'));
console.log(`${firstname}`.repeat(5));

*/

//ES5

/*
var box5 = {
	color: 'green',
	position : 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener
		('click', function() {
			var str = 'This is box number ' + self.position +
			' and it is ' + self.color;
			alert(str);
		});
	}
}
//box5.clickMe();


//ES6

const box6 = {
	color: 'green',
	position : 1,
	clickMe: function() {

		document.querySelector('.green').addEventListener
		('click', () => {
			var str = 'This is box number ' + this.position +
			' and it is ' + this.color;
			alert(str);
		});
	}
}
box6.clickMe();

*/

/*

// alexical this operator

function Person (name) {
	this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(function(el) {
		return this.name + ' is friends with '+ el;
	}.bind(this));
	console.log(arr);
}

var friends = ['Bob' , 'Jane', 'Mark'];
new Person('Jane').myFriends5(friends);

//ES6

Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map(el =>
		`${this.name} ' is friends with ' ${el}`); 
	console.log(arr);
		};


new Person('Jonny').myFriends5(friends);

*/

// Destructuring

// ES5

/*

var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName,lastName);

//const {firstName:a, lastName:b} = obj;
//console.log(a);
//console.log(b);

function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const[age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(`Age until retirement is ${retirement}`);

*/

// Arrays in ES6

const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});

*/

//ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor
	= 'dodgerblue');

