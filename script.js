function copyText(type) {
	let text = "",
		message = "";

	switch (type) {
		case "email":
			text = "gfgfoodsopcgoa@gmail.com";
			message = "Email copied to clipboard";
			break;
		case "phone":
			text = "+919767985177";
			message = "Phone number copied to clipboard";
			break;
		case "whatsapp":
			text = "+918788902065";
			message = "Whatsapp number copied to clipboard";
			break;
		case "location":
			text = "https://goo.gl/maps/NJL9W7gxPczmubEF7";
			message = "Google maps location copied to clipboard";
			break;
	}

	navigator.clipboard.writeText(text);

	showPopupMessage(message);
}

function showPopupMessage(message) {
	const popup = document.querySelector(".popup-message");
	const popupText = document.querySelector("#popup-text");

	popupText.textContent = message;
	popup.classList.remove("hidden");
	popup.classList.add("slide-in");

	setTimeout(() => {
		popup.classList.remove("slide-in");
		popup.classList.add("slide-out");
	}, 2000);

	setTimeout(() => {
		popup.classList.remove("slide-out");
		popup.classList.add("hidden");
	}, 2500);
}
