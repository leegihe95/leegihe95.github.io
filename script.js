var animation = bodymovin.loadAnimation({
	// animationData: { /* ... */ },
	container: document.getElementById("animationContainer"), // required
	path: "./assets/animations/animationHP.json", // required
	renderer: "svg", // required
	loop: true, // optional
	autoplay: true, // optional
	name: "Demo Animation", // optional
});