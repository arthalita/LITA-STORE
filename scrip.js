function tampilkanResep() {
    const detail = document.getElementById("detail-resep");

    if (detail.classList.contains("hidden")) {
        detail.classList.remove("hidden");
    } else {
        detail.classList.add("hidden");
    }
}
