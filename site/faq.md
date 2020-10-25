---
layout: markdown
title: Frequently Asked Questions
description: This page lists frequently asked questions related to the Scratch Addons extension and project.
---

This page lists frequently asked questions related to the Scratch Addons extension and project.

- [What is Scratch Addons?](#what-is-scratch-addons)
- [What is an "addon", exactly?](#what-is-an-addon-exactly)
- [If everything is an addon, then what does Scratch Addons do?](#if-everything-is-an-addon-then-what-does-scratch-addons-do)
- [Is Scratch Addons safe?](#is-scratch-addons-safe)
- [How can I contribute to Scratch Addons?](#how-can-i-contribute-to-scratch-addons)
- [What should I do if I find a problem?](#what-should-i-do-if-i-find-a-problem)
- [Can I tell people on Scratch about this?](#can-i-tell-people-on-scratch-about-this)
- [Where can I discuss about Scratch Addons.](#where-can-i-discuss-about-scratch-addons)
- [I think Scratch Addons slows down Scratch. What can I do?](#i-think-scratch-addons-slows-down-scratch-what-can-i-do)
- [Are there any consequences for enabling everything?](#are-there-any-consequences-for-enabling-everything)

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

### Is Scratch Addons safe?

Scratch Addons should not have any security issues in its most recent version, found in the Chrome Web Store and Firefox's Addon Library. They have been verified by reviewers on contributors of Scratch Addons and by the extension stores. If you happen to find a security vulnerability please contact World_Languages privately by emailing `worldxlanguages (at) gmail.com`. If you don't get a response within 48 hours, please create an issue [here](https://github.com/ScratchAddons/ScratchAddons/issues/).

Read our security policy [here](https://github.com/ScratchAddons/ScratchAddons/security/policy).

### How can I contribute to Scratch Addons?

Contributing to Scratch Addons is easy.

If you have an expertise in JavaScript, simply contribute some code, whether it's an addon or a new feature, and create to a pull request. You can do so by forking [the repository](https://github.com/ScratchAddons/ScratchAddons/), do your necessary changes, and some of us will review your pull request. If we think that it fits, then it will be an official addon on our extension.

If you can't code or would just like to help with discussions and suggestions for the addon, feel free to say something on [our issues tab](https://github.com/ScratchAddons/ScratchAddons/issues) or [our Discussions tab](https://github.com/ScratchAddons/ScratchAddons/discussions). There, you can suggest new addons to be added, help with a little bit with the development, and much more!

You can send a feedback on [our feedback page](https://scratchaddons.com/feedback). Your small feedback give us a different point-of-view in the extension development, and, in most times, help us point things that needed attention and fix problems that we didn't think of.

### What should I do if I find a problem?

You can tell us using these three methods.

- Send a feedback on [our feedback page](https://scratchaddons.com/feedback).
- Create an issue on [the extension repository](https://github.com/ScratchAddons/ScratchAddons/issues) (or [the website repository](https://github.com/ScratchAddons/website/issues)).
- Create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions).

### Can I tell people on Scratch about this?

You can't. There is a policy that forbids advertising browser extensions/userscripts [here](https://scratch.mit.edu/discuss/post/2907564/).

### Where can I discuss about Scratch Addons.

You can do that by doing it on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions). There, you can discuss about it and ask questions if you have difficulties.

### I think Scratch Addons slows down Scratch. What can I do?

Most times you turned on addons that utilise the so-called "traps" on the process. These addons often include a warning, so turn those off and try again. The warnings look like this.

![warning](/assets/images/faq/warning.png)

### Are there any consequences for enabling everything?

If you have a mid-end computer, chances are the performance won't be dropped significantly, unless if you turned on addons that utilise "traps". Otherwise, it will just be a major change. Feel free to go through again and turn off addons that you don't need.