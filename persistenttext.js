function congrats() {
    let content = document.getElementById("formcontent");
    if (!content) {console.error("no content :("); return};
    alert("Thank you for registering to be a citizen of the Sutton Empire. Your response is recorded in the primary database, awaiting approval.");
    content.innerHTML = `<h1>Thank you / Xedžidú</h1>
        <hr>
        <p>Your response is now recorded. Under normal circumstances, an email or a Discord DM will be sent to you once your request is accepted.</p>
        <img src="/sutton_coa.png" class="topbar-img">
        <p style="padding-left: 5px;">The Sutton Empire</p>
        <br>
        <p><i>VIR IÞPAIXÁ KI MÁLAS</i></p>`;
    localStorage.setItem("savedContent", "true");
}
window.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("savedContent") === "true") {
        document.getElementById("formcontent").innerHTML = `<h1>Thank you / Xedžidú</h1>
        <hr>
        <p>Your response is now recorded. Under normal circumstances, an email or a Discord DM will be sent to you once your request is accepted.</p>
        <img src="/sutton_coa.png" class="topbar-img">
        <p style="padding-left: 5px;">The Sutton Empire</p>
        <br>
        <p><i>VIR IÞPAIXÁ KI MÁLAS</i></p>`;
    }
});