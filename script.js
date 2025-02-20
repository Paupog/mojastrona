document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

const sections = document.querySelectorAll(".page-section");
let currentSection = 0;
let isScrolling = false; 

document.addEventListener("wheel", (event) => {
    if (isScrolling) return; 
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
        isScrolling = false; 
    }, 1500);
});



document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".projects-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: 350, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        container.scrollBy({ left: -350, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".projects-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    const projectWidth = 340; 

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < dots.length - 1) {
            currentIndex++;
            container.scrollBy({ left: projectWidth, behavior: "smooth" });
            updateDots();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            container.scrollBy({ left: -projectWidth, behavior: "smooth" });
            updateDots();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            container.scrollTo({ left: projectWidth * currentIndex, behavior: "smooth" });
            updateDots();
        });
    });

    updateDots();
});


