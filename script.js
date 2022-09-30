window.onload = function () {
	let xhr = new XMLHttpRequest();
	let xhr2 = new XMLHttpRequest();

	xhr.open("GET", "./assets/json/skills.json");
	xhr.addEventListener("load", function () {
		if (xhr.status == 200) {
			let data = JSON.parse(xhr.response);

			let skills_cards = document.getElementById("skills_cards");
			let arr_len = data.skills.length;

			for (let i = 0; i < arr_len; i++) {
				let skill_card = document.createElement("div");

				skill_card.classList.add("skill_card");
				if (i % 2 !== 0) {
					skill_card.classList.add("dodged");
				}

				let image = document.createElement("img");
				image.src = data.skills[i].image_path;
				image.alt = `${data.skills[i].title} image`;

				skill_card.appendChild(image);
				skills_cards.appendChild(skill_card);
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
				port_card_a.href =
					data.portfolio[i].website === ""
						? data.portfolio[i].code
						: data.portfolio[i].website;

				let port_card_background = document.createElement("div");
				port_card_background.className = "port_card_background";

				port_card_background.style.backgroundImage = `url(${data.portfolio[i].image_path})`;
				port_card_background.style.backgroundSize = "cover";
				port_card_background.style.backgroundPosition = "center";
				port_card_background.style.backgroundRepeat = "no-repeat";

				port_card_a.appendChild(port_card_background);
				port_card_image.appendChild(port_card_a);

				let port_card_desc_items = document.createElement("div");
				port_card_desc_items.className = "port_card_desc_items";
				let port_card_desc = document.createElement("div");
				port_card_desc.className = "port_card_desc";

				let title = document.createElement("h3");
				title.className = "title";
				title.textContent = `${data.portfolio[i].title}`;

				let description = document.createElement("p");
				description.className = "description";
				description.textContent = `${data.portfolio[i].description}`;

				let techs_wrapper = document.createElement("div");
				techs_wrapper.className = "techs_wrapper";
				let techs = data.portfolio[i].techs;
				for (const tech of techs) {
					let tech_div = document.createElement("div");
					tech_div.className = "tech_div";
					tech_div.textContent = tech;
					techs_wrapper.appendChild(tech_div);
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

				if (data.portfolio[i].website !== "") {
					cta_wrapper.append(website_button, code_button);
				} else {
					cta_wrapper.append(code_button);
				}
				port_card_desc_items.append(
					title,
					description,
					techs_wrapper,
					cta_wrapper
				);

				port_cards.appendChild(port_card_wrapper);
				port_card_wrapper.appendChild(port_card_inner);
				port_card_inner.appendChild(port_card_desc);
				if (i % 2 === 0) {
					port_card_desc.append(
						port_card_image,
						port_card_desc_items
					);
				} else {
					port_card_desc.append(
						port_card_desc_items,
						port_card_image
					);
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
		console.log(windowHeight);
		var elementTop = reveals[i].getBoundingClientRect().top;
		console.log(elementTop);
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
