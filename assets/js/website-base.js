window.addEventListener('load', () => {

	let darkTheme = false
	let toggle = document.querySelector("#dark-toggle")
	
	const update = () => {
		document.body.classList.toggle("dark")
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
		update()
	}	
	
	toggle.addEventListener("click", () => {
		update()
	})

})
