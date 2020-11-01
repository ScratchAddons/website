---
layout: markdown
title: Frequently Asked Questions
description: This page lists frequently asked questions related to the Scratch Addons extension and project.
---

This page lists frequently asked questions related to the Scratch Addons extension and project.

- [What is Scratch Addons?](#what-is-scratch-addons)
- [What is an "addon", exactly?](#what-is-an-addon-exactly)
- [If everything is an addon, then what does Scratch Addons do?](#if-everything-is-an-addon-then-what-does-scratch-addons-do)
- [Is Scratch Addons safe? How can I report a security vulnerability?](#is-scratch-addons-safe-how-can-i-report-a-security-vulnerability)
- [Will my account be safe when using Scratch Addons?](#will-my-account-be-safe-when-using-scratch-addons)
- [Can I tell people about Scratch Addons on Scratch?](#can-i-tell-people-about-scratch-addons-on-scratch)
- [How can I contribute to Scratch Addons?](#how-can-i-contribute-to-scratch-addons)
- [What can I do if I find a problem?](#what-can-i-do-if-i-find-a-problem)
- [I think you missed a feature. What can I do?](#i-think-you-missed-a-feature-what-can-i-do)
- [Where can I discuss about Scratch Addons?](#where-can-i-discuss-about-scratch-addons)
- [I think Scratch Addons slows down Scratch. What can I do?](#i-think-scratch-addons-slows-down-scratch-what-can-i-do)
- [Are there any consequences for enabling everything?](#are-there-any-consequences-for-enabling-everything)
- [I got more questions!](#i-got-more-questions)

### What is Scratch Addons?

Scratch Addons is an "all-in-one" browser extension for the Scratch website and project editor. It provides features and themes (called addons internally), both for the Scratch website and the project editor. Scratch Addons' mission is to combine all existing Scratch extensions, userscripts and userstyles, developed by several members of the Scratch community, into a single easy-to-access place, while still letting users choose which ones to enable.

### What is an "addon", exactly?

An addon is similar to an extension or a userscript, but they use special APIs provided by the Scratch Addons extension. These APIs allow addons to run scripts on a Scratch page (userscripts), run scripts on the background (persistent scripts), or apply styles to the Scratch website (userstyles).

Userscripts and persistent scripts can use the `addon.*` JavaScript APIs, which allow them to obtain Scratch-related information (for example, get the current logged in user) and also use extension APIs (like sending notifications).

### If everything is an addon, then what does Scratch Addons do?

By itself, Scratch Addons is just an addon loader. Its main tasks are:

- Allow users to enable, disable and configure addons.
- Run addons and provide APIs to them.
- Provide global state to addons (for example, the addon.auth API).
- Pollute prototypes for use by addon userscripts.
- Provide ways to access and modify Redux state.
- Avoid addons from interfering with each other.
- Avoid duplicate work from different addons.

### Is Scratch Addons safe? How can I report a security vulnerability?

Scratch Addons should not have any security issues/vulnerability in its most recent version, found in the Chrome Web Store and addons.mozilla.org. They have been verified by reviewers on contributors of Scratch Addons and by the extension stores.

If you happen to find a security vulnerability please contact World_Languages privately by emailing `worldxlanguages (at) gmail.com`. If you don't get a response within 48 hours, please create an issue [here](https://github.com/ScratchAddons/ScratchAddons/issues/).

Read our security policy [here](https://github.com/ScratchAddons/ScratchAddons/security/policy).

### Will my account be safe when using Scratch Addons?

Scratch Addons doesn't use your account credentials to essentially work. In fact, you can be logged out from Scratch, and Scratch Addons will still work. Scratch Addons will only send requests based on the cookies that you have, which is supplied by the browser for each request, so some addons like Scratch Messaging won't work when you are logging in, but it won't affect other parts of the extension.

Addons on Scratch Addons also have been audited by multiple contributors on the repository, so no-one can just slip some malicious code under our eyes.

### Can I tell people about Scratch Addons on Scratch?

You can't, and please don't. There is a policy that forbids advertising browser extensions/userscripts [here](https://scratch.mit.edu/discuss/post/2907564/). You may, however, use different methods to tell your friends about Scratch Addons.

### How can I contribute to Scratch Addons?

Contributing to Scratch Addons is not that hard.

If you can code on JavaScript, simply contribute some code, whether it's an addon or a new feature, and create to a pull request. You can do so by forking [the repository](https://github.com/ScratchAddons/ScratchAddons/), do your necessary changes, and some of us will review your pull request. If we think that it fits, then it will be an official addon on our extension.

If you can't code or would just like to help with discussions and suggestions for the addon, feel free to say something on [our issues tab](https://github.com/ScratchAddons/ScratchAddons/issues) or [our Discussions tab](https://github.com/ScratchAddons/ScratchAddons/discussions). There, you can suggest new addons to be added, help with a little bit with the development, and much more!

You can send a feedback on [our feedback page](https://scratchaddons.com/feedback). Your small feedback give us a different point-of-view in the extension development, and, in most times, help us point things that needed attention and fix problems that we didn't think of.

### What can I do if I find a problem?

You can tell us using one of these three methods.

- Send a feedback on [our feedback page](https://scratchaddons.com/feedback).
- Create an issue on [the extension repository](https://github.com/ScratchAddons/ScratchAddons/issues) (or [the website repository](https://github.com/ScratchAddons/website/issues)).
- Create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions).

### I think you missed a feature. What can I do?

If you think a feature is missing, or you wanted to suggest an addon to the extension, send a feedback on [our feedback page](https://scratchaddons.com/feedback), or create an issue directly on [our repository](https://github.com/ScratchAddons/ScratchAddons/issues).

### Where can I discuss about Scratch Addons?

You can do so by doing it on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions). There, you can discuss about it and ask questions if you have difficulties.

### I think Scratch Addons slows down Scratch. What can I do?

Most times you turned on addons that utilise the so-called "traps" on the process. These addons often include a warning, so turn those off and try again. The warnings are look like this.

![warning](/assets/images/faq/warning.png)

### Are there any consequences for enabling everything?

If you have a mid-end computer, chances are the performance won't be dropped significantly, unless if you turned on addons that utilise "traps". Otherwise, it will just be a major change. Feel free to go through again and turn off addons that you don't need.

### I got more questions!

If you have more questions that needed answers, you can create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions). Someone will try to answer it for you.

<script type="application/ld+json">
     {
    	"@context": "https://schema.org",
    	"@type": "FAQPage",
    	"mainEntity": [{
    		"@type": "Question",
    		"name": "What is Scratch Addons?",
    		"acceptedAnswer": {
    			"@type": "Answer",
    			"text": "Scratch Addons is an 'all-in-one' browser extension for the Scratch website and project editor. It provides features and themes (called addons internally), both for the Scratch website and the project editor. Scratch Addons' mission is to combine all existing Scratch extensions, userscripts and userstyles, developed by several members of the Scratch community, into a single easy-to-access place, while still letting users choose which ones to enable."
    		}
    	}, {
    		"@type": "Question",
    		"name": "What is an 'addon', exactly?",
    		"acceptedAnswer": {
    			"@type": "Answer",
    			"text": "An addon is similar to an extension or a userscript, but they use special APIs provided by the Scratch Addons extension. These APIs allow addons to run scripts on a Scratch page (userscripts), run scripts on the background (persistent scripts), or apply styles to the Scratch website (userstyles). Userscripts and persistent scripts can use the < code > addon.* < /code> JavaScript APIs, which allow them to obtain Scratch-related information (for example, get the current logged in user) and also use extension APIs (like sending notifications)."
    		}
    	}, {
    		"@type": "Question",
    		"name": "If everything is an addon, then what does Scratch Addons do?",
    		"acceptedAnswer": {
    			"@type": "Answer",
    			"text": "By itself, Scratch Addons is just an addon loader. Its main tasks are to: <br> - Allow users to enable,disable and configure addons. <br> - Run addons and provide APIs to them. <br> - Provide global state to addons(for example, the addon.auth API). <br> - Pollute prototypes for use by addon userscripts. <br> - Provide ways to access and modify Redux state. <br> - Avoid addons from interfering with each other. <br> - Avoid duplicate work from different addons."
    		}
    	}, {
    		"@type": "Question",
    		"name": "Is Scratch Addons safe? How can I report a security vulnerability?",
    		"acceptedAnswer": {
    			"@type": "Answer",
    			"text": "Scratch Addons should not have any security issues/vulnerability in its most recent version, found in the Chrome Web Store and addons.mozilla.org. They have been verified by reviewers on contributors of Scratch Addons and by the extension stores. <br> If you happen to find a security vulnerability please contact World_Languages privately by emailing `worldxlanguages (at) gmail.com`.If you don 't get a response within 48 hours, please create an issue <a href=\"https://github.com/ScratchAddons/ScratchAddons/issues/\">here</a>. <br> Read our security policy <a href=\"https://github.com/ScratchAddons/ScratchAddons/security/policy\">here</a>."
    		}
    	}, {
    		"@type": "Question",
    		"name": "Will my account be safe when using Scratch Addons?",
    		"acceptedAnswer": {
    			"@type": "Answer",
    			"text": "Scratch Addons doesn't use your account credentials to essentially work. In fact, you can be logged out from Scratch, and Scratch Addons will still work. Scratch Addons will only send requests based on the cookies that you have, which is supplied by the browser for each request, so some addons like Scratch Messaging won't work when you are logging in, but it won't affect other parts of the extension. Addons on Scratch Addons also have been audited by multiple contributors on the repository,so no - one can just slip some malicious code under our eyes."
    		}
    	}]
    }
</script>

