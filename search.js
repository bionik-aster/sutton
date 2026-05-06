function search() {
    let searchValue = document.getElementById("searchbar").value.toLowerCase();
    let pages = document.querySelectorAll(".pages li");
    let noResults = document.getElementById("noResults");

    let matches = 0;

    if (searchValue.trim() === "") {
        pages.forEach(item => {
            item.innerHTML = item.dataset.originalText || item.textContent;
            item.style.display = "";
        });

        noResults.style.display = "none";
        return;
    }

    pages.forEach(function(item) {
        let originalText = item.dataset.originalText || item.textContent;
        let lowerText = originalText.toLowerCase();

        item.innerHTML = originalText;

        if (lowerText.includes(searchValue)) {
            matches++;

            let regex = new RegExp(searchValue, "gi");
            item.innerHTML = originalText.replace(regex, match => `<mark>${match}</mark>`);

            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    noResults.style.display = matches === 0 ? "block" : "none";
}