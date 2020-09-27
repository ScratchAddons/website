/* =============================================================
                         INSTALL BUTTON
============================================================= */

window.addEventListener('load', () => {

	let browser; // "chrome", "firefox", null
	const bowserResult = bowser.getParser(navigator.userAgent).parsedResult;
	switch (bowserResult.engine.name) {
		case "Blink":
			browser = "chrome"
			break
		case "Gecko":
			browser = "firefox"
			break
		default:
			browser = "unsupported"
			break
	}

	const storeLinks = {
		"chrome": "https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco",
		"firefox": "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",
		"unsupported": "/#install"
	}

	const url = storeLinks[browser]

	document.querySelector("#install-nav").classList.add(`install-${browser}`)
	if (document.querySelector("#install-intro")) {
		switch (browser) {
			case "chrome":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:googlechrome"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Chrome"
				break
			case "firefox":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:firefoxbrowser"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Firefox"
				break
			default:
				document.querySelector("#install-browser-icon").innerHTML = ""
				document.querySelector("#install-browser").innerHTML = "Install"
				break;
		}
	}

	for (const element of document.querySelectorAll(".install-btn")) {
		element.href = url
		if (location.pathname !== "/" && browser !== "unsupported") element.target = "_blank"
	}

})

/* =============================================================
                           DARK THEME
============================================================= */

window.addEventListener('load', () => {

	let darkTheme = false
	let toggle = document.querySelector("#dark-toggle")
	
	const update = () => {
		document.body.classList.toggle("no-animation")
		document.body.classList.toggle("dark")
		setTimeout(() => document.body.classList.toggle("no-animation"), 200)
		darkTheme = !darkTheme
		localStorage.setItem("darkTheme", darkTheme)
		if (darkTheme) {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
		} else {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
		}
	}
	
	if (darkTheme) {
		toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
	} else {
		toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
	}
	
	if (localStorage.getItem("darkTheme")) {
		if (localStorage.getItem("darkTheme") == "true") {
			update()
		}
	} else {
		localStorage.setItem("darkTheme", false)
	}	
	
	toggle.addEventListener("click", () => {
		update()
	})

})
