const com = document.querySelector("#combine");

let isDragging = false;
let startX, scrollLeft;

com.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - com.offsetLeft;
    scrollLeft = com.scrollLeft;
});

com.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - com.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed here
    const newScrollLeft = scrollLeft - walk;
    if (newScrollLeft < 0) {
        com.scrollLeft = 0; // Ensure scrolling doesn't go beyond left boundary
    } else if (newScrollLeft > com.scrollWidth - com.clientWidth) {
        com.scrollLeft = com.scrollWidth - com.clientWidth; // Ensure scrolling doesn't go beyond right boundary
    } else {
        com.scrollLeft = newScrollLeft;
    }
});

com.addEventListener("mouseup", () => {
    isDragging = false;
});

com.addEventListener("mouseleave", () => {
    isDragging = false;
});
