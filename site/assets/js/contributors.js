const types = {
	a11y: {
		symbol: '️️️️♿️',
		description: 'Accessibility',
	},
	audio: {
		symbol: '🔊',
		description: 'Audio',
	},
	blog: {
		symbol: '📝',
		description: 'Blogposts',
	},
	bug: {
		symbol: '🐛',
		description: 'Bug reports',
	},
	business: {
		symbol: '💼',
		description: 'Business development',
	},
	code: {
		symbol: '💻',
		description: 'Code',
	},
	content: {
		symbol: '🖋',
		description: 'Content',
	},
	data: {
		symbol: '🔣',
		description: 'Data',
	},
	design: {
		symbol: '🎨',
		description: 'Design',
	},
	doc: {
		symbol: '📖',
		description: 'Documentation',
	},
	eventOrganizing: {
		symbol: '📋',
		description: 'Event Organizing',
	},
	example: {
		symbol: '💡',
		description: 'Examples',
	},
	financial: {
		symbol: '💵',
		description: 'Financial',
	},
	fundingFinding: {
		symbol: '🔍',
		description: 'Funding Finding',
	},
	ideas: {
		symbol: '🤔',
		description: 'Ideas, Planning, & Feedback',
	},
	infra: {
		symbol: '🚇',
		description: 'Infrastructure (Hosting, Build-Tools, etc)',
	},
	maintenance: {
		symbol: '🚧',
		description: 'Maintenance',
	},
	mentoring: {
		symbol: '🧑‍🏫',
		description: 'Mentoring',
	},
	platform: {
		symbol: '📦',
		description: 'Packaging/porting to new platform',
	},
	plugin: {
		symbol: '🔌',
		description: 'Plugin/utility libraries',
	},
	projectManagement: {
		symbol: '📆',
		description: 'Project Management',
	},
	question: {
		symbol: '💬',
		description: 'Answering Questions',
	},
	review: {
		symbol: '👀',
		description: 'Reviewed Pull Requests',
	},
	security: {
		symbol: '🛡️',
		description: 'Security',
	},
	talk: {
		symbol: '📢',
		description: 'Talks',
	},
	test: {
		symbol: '⚠️',
		description: 'Tests',
	},
	tool: {
		symbol: '🔧',
		description: 'Tools',
	},
	translation: {
		symbol: '🌍',
		description: 'Translation',
	},
	tutorial: {
		symbol: '✅',
		description: 'Tutorials',
	},
	userTesting: {
		symbol: '📓',
		description: 'User Testing',
	},
	video: {
		symbol: '📹',
		description: 'Videos',
	},
}

const run = async () => {
	
	let contributors = []

	await Promise.all([

		// Fetch contributors data from ScratchAddons/contributors, with all-contributors spec
		(() => new Promise(async callback => {
			setTimeout(async () => {
				let response = await (await fetch("https://raw.githubusercontent.com/ScratchAddons/contributors/master/.all-contributorsrc")).json()
				console.log(contributors)
				console.log(response)
				response.contributors.forEach(responseItem => {
					let index = contributors.findIndex(contributorsItem => contributorsItem.login === responseItem.login)
					console.log(index)
					if (index === -1) {
						contributors.push({})
						index = contributors.length - 1
					}
					Object.assign(contributors[index], responseItem)
				})
				console.log(contributors)
				console.log(response)
				callback()
			}, 3000);
		}))(),

		// Fetch commit count data from all repositories
		(() => new Promise(async callback => {
			let response = await (await fetch("https://sa-contributors.hans5958.workers.dev")).json()
			console.log(contributors)
			console.log(response)
			while (contributors.length === 0) await new Promise(resolve => setTimeout(resolve, 250))
			response.forEach(responseItem => {
				let index = contributors.findIndex(contributorsItem => contributorsItem.login === responseItem.login)
				if (index === -1) {
					contributors.push({})
					index = contributors.length - 1
				}
				responseItem.commits = responseItem.contributions
				delete responseItem.contributions 
				Object.assign(contributors[index], responseItem)
			})
			console.log(contributors)
			console.log(response)
			callback()
		}))()
	])

	document.querySelector(".lds-ellipsis").hidden = true

	// Create elements based on the object
	contributors.forEach(contributor => {
		
		// Contributor name text (top part)
		let nameEl = document.createElement("p")
		nameEl.className = "user-name"
		nameEl.textContent = contributor.login

		// Contributor details (bottom part)
		let detailsEl = document.createElement("p")
		detailsEl.className = "contribution-details"
		if (contributor.contributions) contributor.contributions.forEach(i => {
			let contributionEl = document.createElement("span")
			contributionEl.title = types[i].description
			contributionEl.dataset.toggle = "tooltip"
			contributionEl.dataset.placement = "bottom"
			contributionEl.innerHTML = types[i].symbol
			detailsEl.appendChild(contributionEl)
		})
		if (contributor.commits) {
			let contributionEl = document.createElement("span")
			contributionEl.classList.add("contribution-commits")
			contributionEl.insertAdjacentHTML("beforeend", `<span class="iconify" data-icon="octicon:git-commit-16"></span> ${contributor.commits}`)
			detailsEl.appendChild(contributionEl)
		}

		// Contributor icon
		let iconEl
		iconEl = document.createElement("img")
		iconEl.className = "user-icon"
		iconEl.src = contributor.avatar_url
		iconEl.alt = `${contributor.login} contributes ${contributor.contributions} commit${contributor.contributions == 1 ? "" : "s"}`

		// Contributor info wrapper
		let infoWrap = document.createElement("div")
		infoWrap.className = "info-wrap"
		infoWrap.appendChild(nameEl)
		infoWrap.insertAdjacentHTML("beforeend", " ")
		infoWrap.appendChild(detailsEl)

		// Link wrapper
		let linkEl = document.createElement("a")
		linkEl.target = "_blank"
		linkEl.href = `https://github.com/${contributor.login}`
		linkEl.appendChild(iconEl)
		linkEl.appendChild(infoWrap)

		// Contributor wrapper (wraps link wrapper)
		let wrapEl = document.createElement("div")
		wrapEl.className = "contributor col-12 col-sm-6 col-md-4 col-xl-3"
		wrapEl.appendChild(linkEl)

		// if (value % 4 === 0) {
		// 	let rowEl = document.createElement("div")
		// 	rowEl.className = "row"
		// 	document.querySelector("#account").appendChild(rowEl)
		// }

		// Appends the contributor wrapper to the row element
		document.querySelector("#contributors .row").appendChild(wrapEl)

	});
}

run()
