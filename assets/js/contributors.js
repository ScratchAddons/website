const run = async () => {
	response = await fetch("https://sa-contributors.hans5958.workers.dev")	
	contributors = await response.json()

	document.querySelector(".lds-ellipsis").hidden = true

	contributors.forEach((contributor, index) => {
		
		let nameEl = document.createElement("p")
		nameEl.className = "user-name"
		nameEl.textContent = contributor.login

		let contribCountEl = document.createElement("p")
		contribCountEl.className = "contribution-count"
		contribCountEl.textContent = `${contributor.contributions} commit${contributor.contributions == 1 ? "" : "s"}`;

		let iconEl
		iconEl = document.createElement("img")
		iconEl.className = "user-icon"
        iconEl.src = contributor.avatar_url
        iconEl.alt = `${contributor.login} contributes ${contributor.contributions} commit${contributor.contributions == 1 ? "" : "s"}`

		let iconWrap = document.createElement("div")
		iconWrap.className = "icon-wrap"
		iconWrap.appendChild(iconEl)

		let infoWrap = document.createElement("div")
		infoWrap.className = "info-wrap"
		infoWrap.appendChild(nameEl)
		infoWrap.appendChild(contribCountEl)

		let linkEl = document.createElement("a")
		linkEl.target = "_blank"
		linkEl.href = `https://github.com/${contributor.login}`
		linkEl.appendChild(iconWrap)
		linkEl.appendChild(infoWrap)

		let wrapEl = document.createElement("div")
		wrapEl.className = "contributor"
		wrapEl.appendChild(linkEl)
		
		let colEl = document.createElement("div")
		colEl.className = "col-12 col-sm-6 col-md-4 col-xl-3"
		colEl.appendChild(wrapEl)

		// if (value % 4 === 0) {
		// 	let rowEl = document.createElement("div")
		// 	rowEl.className = "row"
		// 	document.querySelector("#account").appendChild(rowEl)
		// }

		document.querySelector("#contributors .row").appendChild(colEl)

	});
}

run()
