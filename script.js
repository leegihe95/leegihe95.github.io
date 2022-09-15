window.onload = function () {
	let xhr = new XMLHttpRequest();
	let xhr2 = new XMLHttpRequest();

	xhr.open("GET", "./assets/json/skills.json");
	xhr.addEventListener("load", function () {
		if (xhr.status == 200) {
			let data = JSON.parse(xhr.response);

			let all_cards = document.getElementById("all_cards");
			let arr_len = data.skills.length;

			for (let i = 0; i < arr_len; i++) {
				let one_card = document.createElement("div");

				one_card.classList.add("one_card");
				if (i % 2 !== 0) {
					one_card.classList.add("snake");
				}

				let image = document.createElement("img");
				image.src = data.skills[i].image_path;

				one_card.appendChild(image);
				all_cards.appendChild(one_card);
			}
		}
	});
	xhr.send(null);

	xhr2.open("GET", "./assets/json/portfolio.json");
	xhr2.addEventListener("load", function () {
		if (xhr2.status == 200) {
			let data = JSON.parse(xhr2.response);

			let port_cards = document.getElementById("port_cards");
			let arr_len = data.portfolio.length;

			for (let i = 0; i < arr_len; i++) {
				let port_card_wrapper = document.createElement("div");
				port_card_wrapper.classList.add("port_card_wrapper");
				if (i % 2 === 0) {
					port_card_wrapper.classList.add("light");
				} else {
					port_card_wrapper.classList.add("dark");
				}
				let port_card_inner = document.createElement("div");
				port_card_inner.className = "port_card_inner";

				let port_card_image = document.createElement("div");
				port_card_image.className = "port_card_image";
				let port_card_a = document.createElement("a");
				port_card_a.target = "_blank";
				port_card_a.className = "port_card_a";
				port_card_a.href = data.portfolio[i].website;

				let port_card_background = document.createElement("div");
				port_card_background.className = "port_card_background";

				port_card_background.style.backgroundImage = `url(${data.portfolio[i].image_path})`;
				port_card_background.style.backgroundSize = "cover";
				port_card_background.style.backgroundPosition = "center";
				port_card_background.style.backgroundRepeat = "no-repeat";

				port_card_a.appendChild(port_card_background);
				port_card_image.appendChild(port_card_a);

				let port_card_desc = document.createElement("div");
				port_card_desc.className = "port_card_desc";

				let title = document.createElement("h3");
				title.className = "title";
				title.textContent = `${data.portfolio[i].title}`;

				let description_wrapper = document.createElement("div");
				description_wrapper.className = "description_wrapper";
				let description = document.createElement("p");
				description.className = "description";
				description.textContent = `${data.portfolio[i].description}`;
				description_wrapper.appendChild(description);

				let techsUsed = document.createElement("div");
				techsUsed.className = "techsUsed";
				let techs = data.portfolio[i].techs;
				for (const tech of techs) {
					let techDiv = document.createElement("div");
					techDiv.className = "techDiv";
					techDiv.textContent = tech;
					techsUsed.appendChild(techDiv);
				}

				let cta_wrapper = document.createElement("div");
				cta_wrapper.className = "cta_wrapper";

				let website_button = document.createElement("button");
				website_button.className = "cta_button";
				let website = document.createElement("a");
				website_button.appendChild(website);
				website.target = "_blank";
				website.className = "cta_link";
				website.href = data.portfolio[i].website;
				website.innerHTML =
					"<i class='fa-solid fa-arrow-up-right-from-square'></i>";

				let code_button = document.createElement("button");
				code_button.className = "cta_button";
				let code = document.createElement("a");
				code_button.appendChild(code);
				code.target = "_blank";
				code.className = "cta_link";
				code.href = data.portfolio[i].code;
				code.innerHTML = "<i class='fa-brands fa-github'></i>";

				cta_wrapper.append(website_button, code_button);

				port_card_desc.append(
					title,
					description_wrapper,
					techsUsed,
					cta_wrapper
				);

				port_cards.appendChild(port_card_wrapper);
				port_card_wrapper.appendChild(port_card_inner);
				if (i % 2 === 0) {
					port_card_inner.append(port_card_image, port_card_desc);
				} else {
					port_card_inner.append(port_card_desc, port_card_image);
				}
			}
		}
	});
	xhr2.send(null);
};

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-10vh";
	}
	prevScrollpos = currentScrollPos;
};
