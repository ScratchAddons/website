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
		(() => new Promise(async callback => {
			let response = await (await fetch("https://raw.githubusercontent.com/Hans5958/ScratchAddons-Contributions/master/.all-contributorsrc")).json()
			console.log(contributors)
			console.log(response)
			response.contributors.forEach(responseItem => {
				let index = contributors.findIndex(contributorsItem => contributorsItem.login === responseItem.login)
				if (index === -1) {
					contributors.push({})
					index = contributors.length - 1
				}
				Object.assign(contributors[index], responseItem)
			})
			console.log(contributors)
			console.log(response)
			callback()
		}))(),
		(() => new Promise(async callback => {
			let response = await (await fetch("https://sa-contributors.hans5958.workers.dev")).json()
			console.log(contributors)
			console.log(response)
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

	contributors.forEach((contributor, index) => {
		
		let nameEl = document.createElement("p")
		nameEl.className = "user-name"
		nameEl.textContent = contributor.login

		let contribDetailsEl = document.createElement("p")
		contribDetailsEl.className = "contribution-details"
		contributor.contributions.forEach(i => {
			let contributionEl = document.createElement("span")
			contributionEl.title = types[i].description
			contributionEl.dataset.toggle = "tooltip"
			contributionEl.dataset.placement = "bottom"
			contributionEl.innerHTML = types[i].symbol
			contribDetailsEl.appendChild(contributionEl)
		})
		if (contributor.commits) {
			let contributionEl = document.createElement("span")
			contributionEl.classList.add("contribution-commits")
			contributionEl.insertAdjacentHTML("beforeend", '<span class="iconify" data-icon="octicon:git-commit-16"></span>')
			contributionEl.insertAdjacentHTML("beforeend", contributor.commits)
			contribDetailsEl.appendChild(contributionEl)
		}

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
		infoWrap.appendChild(contribDetailsEl)

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
