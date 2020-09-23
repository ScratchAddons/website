fetch("https://scratchaddons-feedback.glitch.me/", {mode:'no-cors'})
const version = new URL(location.href).searchParams.get("version");
let sent = false;

document.getElementById("send-feedback").onclick = async function() {
    if (sent || document.querySelector("textarea").value.length <= 2) return;
    sent = true;
    this.style.display = "none";
    document.getElementById("sending").style.display = "block";
    const body = `Version: ${version ? version : "unknown"}\nUser agent: ${navigator.userAgent}\n\`\`\`${document.querySelector("textarea").value}\`\`\``;
    try {
        const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {method:"POST", body});
        if (!res.ok) throw "";
        document.getElementById("thanks").style.display = "block";
    } catch(err) {
        alert("Error sending feedback! Try again?");
        sent = false;
        this.style.display = "block";
    }
    document.getElementById("sending").style.display = "none";
};

window.addEventListener("load", () => document.querySelector("textarea").focus());
