document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

const sections = document.querySelectorAll(".page-section");
let currentSection = 0;
let isScrolling = false; // Blokada, żeby nie przewijało za dużo na raz

document.addEventListener("wheel", (event) => {
    if (isScrolling) return; // Jeśli już trwa przewijanie, ignoruj kolejne scrollowanie
    isScrolling = true;

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll w dół
        currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
        // Scroll w górę
        currentSection--;
    }

    window.scrollTo({
        top: sections[currentSection].offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => {
        isScrolling = false; // Odblokuj scroll po zakończeniu animacji
    }, 1500);
});

