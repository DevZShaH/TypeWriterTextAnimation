// const TypeWriter = function(txtElement, words, wait = 3000) {
// 	this.txtElement = txtElement;
// 	this.words = words;
// 	this.txt = '';
// 	this.wordIndex = 0;
// 	this.wait = parseInt(wait, 10); // base of 10
// 	this.typer();
// 	this.isDeleting = false;
// };

// //Type Method
// TypeWriter.prototype.typer = function() {
// 	//CURRENT index of current word
// 	const current = this.wordIndex % this.words.length;
// 	// console.log(current);

// 	//Get full text of current word
// 	const fullText = this.words[current];
// 	// console.log(fullText);

// 	//CHECK if DELETING
// 	if (this.isDeleting) {
// 		//REMOVE CHAR
// 		this.txt = fullText.substring(0, this.txt.length - 1);
// 	} else {
// 		//ADD CHAR
// 		this.txt = fullText.substring(0, this.txt.length + 1);
// 	}

// 	//INSERT txt INTO ELEMENT
// 	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; //setting another span with class txt. we're using new class to introduce cursor "|" effect in the text

// 	//Initial TYPE SPEED
// 	let typeSpeed = 100;

// 	if (this.isDeleting) {
// 		typeSpeed /= 1.3;
// 	}

// 	//if word is complete
// 	if (!this.isDeleting && this.txt === fullText) {
// 		//Make PAUSE at the end
// 		typeSpeed = this.wait; // wait for defined amount of time.

// 		//Set Delete to true
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		//Move to next word
// 		this.wordIndex++;
// 		//PAUSE before start typing
// 		typeSpeed = 500;
// 	}

// 	setTimeout(() => this.typer(), typeSpeed);
// };

// //INIT on DOM LOAD
// document.addEventListener('DOMContentLoaded', init);

// //INIT APP
// function init() {
// 	const txtElement = document.querySelector('.txt-typer');
// 	const words = JSON.parse(txtElement.getAttribute('data-words')); // parsing data from data-words atttribute in txt-typer class from html file
// 	const wait = txtElement.getAttribute('data-wait');
// 	//INIT TYPEWRITER
// 	new TypeWriter(txtElement, words, wait);
// }

//ES6 Class instead above ES5 class

class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10); // base of 10
		this.typer();
		this.isDeleting = false;
	}

	typer() {
		//CURRENT index of current word
		const current = this.wordIndex % this.words.length;
		// console.log(current);

		//Get full text of current word
		const fullText = this.words[current];
		// console.log(fullText);

		//CHECK if DELETING
		if (this.isDeleting) {
			//REMOVE CHAR
			this.txt = fullText.substring(0, this.txt.length - 1);
		} else {
			//ADD CHAR
			this.txt = fullText.substring(0, this.txt.length + 1);
		}

		//INSERT txt INTO ELEMENT
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; //setting another span with class txt. we're using new class to introduce cursor "|" effect in the text

		//Initial TYPE SPEED
		let typeSpeed = 100;

		if (this.isDeleting) {
			typeSpeed /= 1.3;
		}

		//if word is complete
		if (!this.isDeleting && this.txt === fullText) {
			//Make PAUSE at the end
			typeSpeed = this.wait; // wait for defined amount of time.

			//Set Delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			//Move to next word
			this.wordIndex++;
			//PAUSE before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.typer(), typeSpeed);
	}
}

//INIT on DOM LOAD
document.addEventListener('DOMContentLoaded', init);

//INIT APP
function init() {
	const txtElement = document.querySelector('.txt-typer');
	const words = JSON.parse(txtElement.getAttribute('data-words')); // parsing data from data-words atttribute in txt-typer class from html file
	const wait = txtElement.getAttribute('data-wait');
	//INIT TYPEWRITER
	new TypeWriter(txtElement, words, wait);
}
