window.congrats = function() {
    let content = document.getElementById("formcontent");
    if (!content) {console.error("no content :("); return};
    alert("Thank you for registering to be a citizen of the Sutton Empire. Your response is recorded in the primary database, awaiting approval.");
    content.innerHTML = `<div style="flexmain"><div class="rightbox"><h1>Thank you / Xedžidú</h1>
        <hr>
        <p>Your response is now recorded. Under normal circumstances, an email or a Discord DM will be sent to you once your request is accepted.</p>
        <img src="/sutton_coa.png" class="topbar-img">
        <p style="padding-left: 5px;">The Sutton Empire</p>
        <br>
        <p><i>VIR IÞPAIXÁ KI MÁLAS</i></p></div></div>`;
    localStorage.setItem("savedContent", "true");
}
window.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("savedContent") === "true") {
        document.getElementById("formcontent").innerHTML = `<div class="flexmain"><div class="rightbox"><h1>Thank you / Xedžidú</h1>
        <hr>
        <p>Your response is now recorded. Under normal circumstances,
        an email or a Discord DM will be sent to you once your request is accepted by any of the verifiers.
        During this time, you may remain a visitor of the Sutton Empire. Take note that all verification is done manually,
        so requests may take some time to be processed. Thank you for cooperation.</p>
        <div class="signature">
        <img src="/sutton_coa.png" class="topbar-img">
        <div class="topbar-stack">
        <p>The Sutton Empire</p>
        <p><i>- Iþas Aster I</i></p>
        </div>
        </div>
        <p><i>VIR IÞPAIXÁ KI MÁLAS</i></p></div></div>`;
    }
});

window.loading = function(show = true) {
    let gif = document.getElementById("loading");

    if (!gif) return;

    gif.style.display = show ? "flex" : "none";
};