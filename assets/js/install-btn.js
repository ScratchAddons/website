let extensionStore; // "chrome", "firefox", null
const browser = bowser.getParser(navigator.userAgent).parsedResult;
if (browser.engine.name === "Blink") extensionStore = "Chrome";
else if (browser.engine.name === "Gecko") extensionStore = "Firefox";
else extensionStore = null;

let url;
if (extensionStore === "Chrome") url = "https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco";
else if (extensionStore === "Firefox") url = "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/";

if(url) {
	const elements = [document.querySelector("[href='/#install']")];
	if (document.getElementById("main-install-btn")) elements.push(document.getElementById("main-install-btn"));
	for(const element of elements) {
		element.href = url;
		element.target = "_blank";
	}
}