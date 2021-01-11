---
layout: markdown
title: Frequently Asked Questions
description: This page lists frequently asked questions related to the Scratch Addons extension and project.
---

<script defer src="/assets/js/faq.js"></script>

This page lists frequently asked questions related to the Scratch Addons extension and project.

- [What is Scratch Addons?](#what-is-scratch-addons)
- [What is an "addon", exactly?](#what-is-an-addon-exactly)
- [If everything is an addon, then what does Scratch Addons do?](#if-everything-is-an-addon-then-what-does-scratch-addons-do)
- [Is Scratch Addons safe? How can I report a security vulnerability?](#is-scratch-addons-safe-how-can-i-report-a-security-vulnerability)
- [Will my account be safe when using Scratch Addons?](#will-my-account-be-safe-when-using-scratch-addons)
- [Can I tell people about Scratch Addons on Scratch?](#can-i-tell-people-about-scratch-addons-on-scratch)
- [How can I contribute to Scratch Addons?](#how-can-i-contribute-to-scratch-addons)
- [How can I put my name on the contributors page?](#how-can-i-put-my-name-on-the-contributors-page)
- [How can I remove my name on the contributors page?](#how-can-i-remove-my-name-on-the-contributors-page)
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

You can either [read our security policy](https://github.com/ScratchAddons/ScratchAddons/security/policy), or [check our advisories that we have published](https://github.com/ScratchAddons/ScratchAddons/security/advisories?state=published).

### Will my account be safe when using Scratch Addons?

Scratch Addons doesn't use your account credentials to essentially work. In fact, you can be logged out from Scratch, and Scratch Addons will still work. Scratch Addons will only send requests based on the cookies that you have, which is supplied by the browser for each request, so some addons like Scratch Messaging won't work when you are logging in, but it won't affect other parts of the extension.

Addons on Scratch Addons also have been audited by multiple contributors on the repository, so no-one can just slip some malicious code under our eyes.

### Can I tell people about Scratch Addons on Scratch?

You can't, and please don't. There is a policy that forbids advertising browser extensions/userscripts [here](https://scratch.mit.edu/discuss/post/2907564/). You may, however, use different methods to tell your friends about Scratch Addons.

### How can I contribute to Scratch Addons?

Firstly, thank you for your interest of contributing to Scratch Addons. We appreciate your interest and your later contibutions. 

Contributing to Scratch Addons is not that hard.

- If you can code on JavaScript, simply do some code, whether it's an addon or a new feature, and create to a pull request. You can do so by forking [the repository](https://github.com/ScratchAddons/ScratchAddons/), do your necessary changes, and some of us will review your pull request. If we think that it fits, we will accept your PR, and if it's an addon, it will be an addon on our extension. Read more about how to create an addon [here](https://github.com/ScratchAddons/ScratchAddons/wiki/Creating-an-addon).

- If you can't code or would just like to help with discussions and suggestions for the addon, feel free to say something on [our issues tab](https://github.com/ScratchAddons/ScratchAddons/issues) or [our Discussions tab](https://github.com/ScratchAddons/ScratchAddons/discussions). There, you can suggest new addons to be added, help with a little bit with the development, and much more!

- If you can speak a language other than English, you can help translate/localize Scratch Addons to your language. Read more about how you can do it [here](https://github.com/ScratchAddons/ScratchAddons/wiki/Localization). <!-- TODO -->

- Lastly, you can send a feedback on [our feedback page](https://scratchaddons.com/feedback). Your small feedback give us a different point-of-view in the extension development, and, in most times, help us point things that needed attention and fix problems that we didn't think of.

We're also open for contributons of other aspects than the extension. You can view our repositories on [our GitHub organization page](https://github.com/ScratchAddons) and help us build them.

### How can I put my name on the [contributors page](contributors.html)?

Please read and follow the instruction of [this issue](https://github.com/ScratchAddons/contributors/issues/{{ site.contributors_issue }}) in order to have your name on said page.

### How can I remove my name on the [contributors page](contributors.html)?

If you don't want your name to be removed on the page, please tell us by creating an issue on [our contributors repository](https://github.com/ScratchAddons/contributors/issues/), or by other means of contact. We're sorry for the inconvenience.

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

Try to turn off addons that you don't need. Also, the notice and warning could help you decide which addons that needed to be turned off for your comfort. 

### Are there any consequences for enabling everything?

If you have a mid-end computer, chances are the performance won't be dropped significantly. Feel free to go through the list again and turn off addons that you don't need.

### I got more questions!

If you have more questions that needed answers, you can create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions). Someone will try to answer it for you.
