/* =============================================================
                        INITIAL FUNCTIONS                      
============================================================= */

// https://stackoverflow.com/a/61511955
const waitForElement = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector))
                observer.disconnect()
            }
        })

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        })
    })
}

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
        document.querySelector("#install-intro").classList.toggle("disabled")
	}

	for (const element of document.querySelectorAll(".install-btn")) {
		element.href = url
		element.classList.add(`install-${browser}`)
		if (location.pathname !== "/" && browser !== "unsupported") {
            element.target = "_blank"
            element.rel = "noopener"
        }
	}

})

/* =============================================================
                         COOKIE CONSENT
============================================================= */

var cookiesBanner = new CookiesEuBanner(function () {
    window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments)}; gtag("js", new Date); gtag("config", "UA-144464383-2")
    let s = document.createElement("script")
    s.src ="https://www.googletagmanager.com/gtag/js?id=UA-144464383-2";
    document.head.appendChild(s)
    // this.deleteCookie(this.cookieName)
    // window.location.reload()
}, false)

// cookiesBanner.deleteCookie(cookiesBanner.cookieName);
// console.log(cookiesBanner.hasConsent())

// function updateCookiesEuState() {
//     var hasConsent = cookiesBanner.hasConsent()
//     var state = '❔ Nor accepted nor rejected';

//     if (hasConsent === true) {
//         state = '✅ Accepted';
//     } else if (hasConsent === false) {
//         state = '❌ Rejected';
//         cookiesBanner.deleteCookie(cookiesBanner.cookieName)
//         cookiesBanner.setConsent(false);
//     }

//     console.log(state)
// }

// updateCookiesEuState();
// setInterval(updateCookiesEuState, 100);

/* =============================================================
                           DARK THEME
============================================================= */

let darkTheme = false
let extensionStyledTheme = false
let toggle

const updateExtensionStyledTheme = () => {
    document.body.classList.toggle("extension-styled")
    extensionStyledTheme = !extensionStyledTheme
    localStorage.setItem("extensionStyledTheme", extensionStyledTheme)
}

const updateDarkTheme = (shiftPressed = false) => {
    document.body.classList.toggle("no-animation")

    if (shiftPressed || [...document.body.classList].indexOf(".extension-styled") + 1) {
        updateExtensionStyledTheme()
    } 

    document.body.classList.toggle("dark")
    setTimeout(() => document.body.classList.toggle("no-animation"), 200)
    darkTheme = !darkTheme
    localStorage.setItem("darkTheme", darkTheme)
}
    
if (localStorage.getItem("extensionStyledTheme") === "true") {
    updateExtensionStyledTheme()
} else {
    localStorage.setItem("extensionStyledTheme", false)
}

if (localStorage.getItem("darkTheme") === "true") {
    updateDarkTheme()
} else {
    localStorage.setItem("darkTheme", false)
}

waitForElement("body").then(() => document.body.dataset.themeLoaded = true)
    
waitForElement("#dark-toggle").then(() => {

    toggle = document.querySelector("#dark-toggle")
    
    if (darkTheme) {
        toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
    } else {
        toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
    }

    toggle.addEventListener("click", event => {
        if (event && event.shiftKey) updateExtensionStyledTheme()
        updateDarkTheme()
            if (darkTheme) {
                toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
            } else {
                toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
            }
    })
        
})

/* =============================================================
                            TOOLTIPS
============================================================= */

window.addEventListener('load', () => {
    $(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()
})

let lastTooltipsAmount = 0

var tooltipsObserver = new MutationObserver(mutations => {
    currentTooltipsAmount = document.querySelectorAll('[data-toggle="tooltip"]').length
    if (lastTooltipsAmount !== currentTooltipsAmount) {
        lastTooltipsAmount = currentTooltipsAmount
        $(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()
    }
    // TODO: I suck at mutations. Wanted try to detect added tooltip-ed elements, but it didn't work because I need to traverse the element tree.
    // console.log(mutations)
    // mutations.forEach(mutation => {
    //     console.log(mutation)
    //     console.log(mutation.addedNodes)
    //     if (mutation.type === "childList" && mutation.addedNodes.length) {
    //         console.log(mutation.addedNodes)
    //         mutation.addedNodes.forEach(node => {
    //             console.log(node)
    //             if (node.matches('[data-toggle="tooltip"]')) $(node).tooltip()
    //         })
    //     }
    // })
})

tooltipsObserver.observe(document.body, {
    childList: true,
    subtree: true
})

/* =============================================================
                       CONSOLE EASTER EGG
============================================================= */

window.addEventListener('load', () => {
	console.log(
`%cHello, console log readers!
%c
It seems that you wanted to know what happened behind the scenes. Well, there is not much happening here because the is quite simple.
This site is built using Bootstrap 4 as the main theme, Jekyll as the site generator, and GitHub Pages as the hosting provider. Also, this site has been compressed before it reaches to you, so if you want to see the uncompressed source code, then go to https://github.com/ScratchAddons/website.

If you wanted to report issues or wanted to suggest something about the website, please create an issue on https://github.com/ScratchAddons/website/issues (GitHub account required) or tell us on https://scratchaddons.com/feedback.

We thank you for visiting the website, and enjoy using the extension if you do!
-Hans5958

%cBy the way, here's a little secret: You can toggle the similar style to the extension if you click the dark theme switch button while holding SHIFT. Keep in mind that the secret theme is made seperate because the current theme minds readability and accessibility better than the secret.`, 
	"font-size: 1.5rem; font-weight: 500", 
	"",
	"font-style: italic; font-size: 0.75rem")
})