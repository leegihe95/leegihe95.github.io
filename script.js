window.onload = function (){
	let xhr = new XMLHttpRequest();
	let xhr2 = new XMLHttpRequest();

	xhr.open("GET", "./assets/json/skills.json");
	xhr.addEventListener("load", function (){
		if(xhr.status == 200){
			let data = JSON.parse(xhr.response);

			let all_cards = document.getElementById("all_cards");
			let arr_len = data.skills.length;

			for(let i=0; i<arr_len; i++){
				let one_card = document.createElement("div");
				one_card.setAttribute("class", "one_card");
				
				// let title = document.createElement("h3");
				// title.textContent = data.skills[i].title;

				let image = document.createElement("img");
				image.src = data.skills[i].image_path;

				// one_card.appendChild(title);
				one_card.appendChild(image);

				all_cards.appendChild(one_card);
			}

		}
	})
	xhr.send(null);

	xhr2.open("GET", "./assets/json/portfolio.json");
	xhr2.addEventListener("load", function (){
		if(xhr2.status == 200){
			let data = JSON.parse(xhr2.response);

			let port_cards = document.getElementById("port_cards");
			let arr_len = data.portfolio.length;

			for(let i=0; i<arr_len; i++){
				let port_card_wrapper = document.createElement("div");

				let title = document.createElement("h3");
				title.className = "title";
				title.textContent = data.portfolio[i].title;

				let port_card = document.createElement("div");
				port_card.setAttribute("class", "port_card");
				

				let code = document.createElement("a");
				code.className = "code";
				code.href = data.portfolio[i].code;
				code.textContent = "See Code";
				code.target = "_blank";
				
				port_card.style.backgroundImage = `url(${data.portfolio[i].image_path})`;
				// port_card.appendChild(title);
				port_card.appendChild(code);
				
				port_cards.appendChild(port_card_wrapper);
				port_card_wrapper.appendChild(title);
				port_card_wrapper.appendChild(port_card);
			}

		}
	})
	xhr2.send(null);
}