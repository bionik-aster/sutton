function search() {
    let searchValue = document.getElementById("searchbar").value.toLowerCase();
    let pages = document.querySelectorAll(".pages li");
    let noResults = document.getElementById("noResults");

    let matches = 0;

    if (searchValue.trim() === "") {
        pages.forEach(item => {
            item.innerHTML = item.dataset.originalHtml || item.innerHTML;
            item.style.display = "";
        });

        noResults.style.display = "none";
        return;
    }

    pages.forEach(function(item) {

        // Store original HTML once
        if (!item.dataset.originalHtml) {
            item.dataset.originalHtml = item.innerHTML;
        }

        let originalHtml = item.dataset.originalHtml;

        // Use textContent only for searching
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = originalHtml;

        let originalText = tempDiv.textContent;
        let lowerText = originalText.toLowerCase();

        // Reset HTML
        item.innerHTML = originalHtml;

        if (lowerText.includes(searchValue)) {
            matches++;

            // Highlight matches while preserving links
            let escaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let regex = new RegExp(`(${escaped})`, "gi");

            item.innerHTML = originalHtml.replace(regex, `<mark>$1</mark>`);

            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    noResults.style.display = matches === 0 ? "block" : "none";
}