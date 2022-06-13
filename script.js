var animation = bodymovin.loadAnimation({
	// animationData: { /* ... */ },
	container: document.getElementById("headerAnimation"), // required
	path: "./assets/animations/animationHP.json", // required
	renderer: "svg", // required
	loop: true, // optional
	autoplay: true, // optional
	name: "Demo Animation", // optional
});

var animation = bodymovin.loadAnimation({
	// animationData: { /* ... */ },
	container: document.getElementById("centralAnimation"), // required
	path: "./assets/animations/welcome.json", // required
	renderer: "svg", // required
	loop: true, // optional
	autoplay: true, // optional
	name: "Demo Animation", // optional
});

window.onload = function (){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "./assets/json/skills.json");
	xhr.addEventListener("load", function (){
		if(xhr.status == 200){
			let data = JSON.parse(xhr.response);

			let all_cards = document.getElementById("all_cards");
			let arr_len = data.skills.length;

			for(let i=0; i<arr_len; i++){
				let one_card = document.createElement("div");
				one_card.setAttribute("class", "one_card");
				
				let title = document.createElement("h3");
				title.textContent = data.skills[i].title;

				let image = document.createElement("img");
				image.src = data.skills[i].image_path;

				// one_card.appendChild(title);
				one_card.appendChild(image);

				all_cards.appendChild(one_card);
			}

		}
	})
	xhr.send(null);
}