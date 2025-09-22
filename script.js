//your JS code here. If required.
let squares = document.querySelectorAll(".square");

squares.forEach((square, index) => {
	square.addEventListener("mouseover", () => {
		squares.forEach((sq, i) => {
			if (i === index) {
				sq.style.backgroundColor = "#E6E6FA";  // keep hovered 0ne levender
			} else {
				sq.style.backgroundColor = "#6F4E37";  // others coffee
			}
		});
	});

	square.addEventListner("mouseout", () => {
		squares.forEach(sq => {
			sq.style.backgroundColor = "#E6E6FA";
		});
	});
});

