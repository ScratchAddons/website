fetch("https://scratchaddons-feedback.glitch.me/", {mode:'no-cors'})
const version = new URL(location.href).searchParams.get("version");
let sent = false;

document.getElementById("send-feedback").onclick = async function() {
    if (sent || document.querySelector("textarea").value.length <= 2) return;
    sent = true;
    this.style.display = "none";
    document.getElementById("sending").style.display = "block";

    const body = {version, userAgent: navigator.userAgent, language: navigator.language, content: document.getElementById('mainfeedback').value, username: document.getElementById('username').value };
    try {
        const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {method:"POST", body: JSON.stringify(body)});
        if (!res.ok) throw "";
        document.getElementById("thanks").style.display = "block";
        document.getElementsByTagName("textarea")[0].setAttribute("readonly", "true"); 
        document.getElementById("username")[0].setAttribute("readonly", "true"); 

    } catch(err) {
        alert("Error sending feedback! Try again?");
        sent = false;
        this.style.display = "block";
    }
    document.getElementById("sending").style.display = "none";
};

window.addEventListener("load", () => document.querySelector("textarea").focus());
