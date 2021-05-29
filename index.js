let starVeryBad = document.querySelector('.star-very-bad');
let starBad = document.querySelector('.star-bad');
let starGood = document.querySelector('.star-good');
let starVeryGood = document.querySelector('.star-very-good');
let starAmazing = document.querySelector('.star-amazing');

let angryEmoji = document.querySelector('.angry-emoji');
let sadEmoji = document.querySelector('.sad-emoji');
let nutralEmoji = document.querySelector('.nutral-emoji');
let happyEmoji = document.querySelector('.happy-emoji');
let veryHappyEmoji = document.querySelector('.veryhappy-emoji');


// First star

starVeryBad.addEventListener("mouseover", function() {
	starVeryBad.src="images/star-golden.png";
	starBad.src="images/star.png";
	starGood.src="images/star.png";
	starVeryGood.src="images/star.png";
	starAmazing.src="images/star.png";

	angryEmoji.style.display = "block";
	sadEmoji.style.display = "none";
	nutralEmoji.style.display = "none";
	happyEmoji.style.display = "none";
	veryHappyEmoji.style.display = "none";
})

// Second Star

starBad.addEventListener("mouseover", function() {
	starVeryBad.src="images/star-golden.png";
	starBad.src="images/star-golden.png";
	starGood.src="images/star.png";
	starVeryGood.src="images/star.png";
	starAmazing.src="images/star.png";

	angryEmoji.style.display = "none";
	sadEmoji.style.display = "block";
	nutralEmoji.style.display = "none";
	happyEmoji.style.display = "none";
	veryHappyEmoji.style.display = "none";
})

// Third Star

starGood.addEventListener("mouseover", function() {
	starVeryBad.src="images/star-golden.png";
	starBad.src="images/star-golden.png";
	starGood.src="images/star-golden.png";
	starVeryGood.src="images/star.png";
	starAmazing.src="images/star.png";

	angryEmoji.style.display = "none";
	sadEmoji.style.display = "none";
	nutralEmoji.style.display = "block";
	happyEmoji.style.display = "none";
	veryHappyEmoji.style.display = "none";
})

// Fourth Star

starVeryGood.addEventListener("mouseover", function() {
	starVeryBad.src="images/star-golden.png";
	starBad.src="images/star-golden.png";
	starGood.src="images/star-golden.png";
	starVeryGood.src="images/star-golden.png";
	starAmazing.src="images/star.png";

	angryEmoji.style.display = "none";
	sadEmoji.style.display = "none";
	nutralEmoji.style.display = "none";
	happyEmoji.style.display = "block";
	veryHappyEmoji.style.display = "none";
})

// Fifth Star

starAmazing.addEventListener("mouseover", function() {
	starVeryBad.src="images/star-golden.png";
	starBad.src="images/star-golden.png";
	starGood.src="images/star-golden.png";
	starVeryGood.src="images/star-golden.png";
	starAmazing.src="images/star-golden.png";

	angryEmoji.style.display = "none";
	sadEmoji.style.display = "none";
	nutralEmoji.style.display = "none";
	happyEmoji.style.display = "none";
	veryHappyEmoji.style.display = "block";
})