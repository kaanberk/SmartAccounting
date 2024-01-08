//Rewrite sentence effect 

// List of sentences
var _CONTENT = [ 
	"Secure Paper Work Management.", 
	"Accurate and Fast Response.", 
	"Help to Grow Your Business.", 
	"Expert Business and Financial Decisions."
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#rewrite-text");
var _CURSOR = document.querySelector("#cursor");

// Typing Senteces Function
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Deleting Sentence Function
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
_INTERVAL_VAL = setInterval(Type, 100);

//Moving Boxes effect on the Home Page
var box = document.querySelector('.box');
	box.animate([
		{ transform: 'scaleX(1)', offset: 0 },
		{ transform: 'scaleX(2)', offset: 0.5 },
		{ transform: 'scaleX(0.5)', offset: 0.9 },
		{ transform: 'scaleX(1)', offset: 1 }
		], {
	duration: 2800,
	iterations: 9999
});

var box = document.querySelector('.box2');
	box.animate([
		{ transform: 'scaleX(1)', offset: 0 },
		{ transform: 'scaleX(2)', offset: 0.3 },
		{ transform: 'scaleX(0.5)', offset: 0.6 },
		{ transform: 'scaleX(1)', offset: 1 }
		], {
    duration: 1800,
    iterations: 9999
});

var box = document.querySelector('.box3');
	box.animate([
		{ transform: 'scaleX(1)', offset: 0 },
		{ transform: 'scaleX(2)', offset: 0.3 },
		{ transform: 'scaleX(0.5)', offset: 0.6 },
		{ transform: 'scaleX(1)', offset: 1 }
		], {
    duration: 1800,
    iterations: 9999
});

var box = document.querySelector('.box4');
	box.animate([
		{ transform: 'scaleX(1)', offset: 0 },
		{ transform: 'scaleX(2)', offset: 0.3 },
		{ transform: 'scaleX(0.5)', offset: 0.9 },
		{ transform: 'scaleX(1)', offset: 1 }
		], {
    duration: 2800,
    iterations: 9999
});


//Sliding Image Effect on the Home Page with adjusted for mobile view

let currentSlide = 0;
let slideAmountDesktop = 1450;
let slideAmountMobile = 414;
let slideAmount = window.innerWidth < 768 ? slideAmountMobile : slideAmountDesktop;

function startSlider() {
  let images = document.querySelector("ulimg");
  images.style.transform = `translateX(-${currentSlide*slideAmount}px)`;
  
  if (currentSlide == 3) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  slideAmount = window.innerWidth < 768 ? slideAmountMobile : slideAmountDesktop;
  startSlider();
}, 3000);

