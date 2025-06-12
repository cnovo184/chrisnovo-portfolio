gsap.registerPlugin(TextPlugin);

function toggleMenu() {
    const navItems = document.getElementById("nav-items");
    const burger = document.querySelector(".hamburger");

    // Toggle between hidden and visible
    navItems.style.display = navItems.style.display === "none" || navItems.style.display === "" ? "flex" : "none";

    // Animate hamburger icon
    burger.classList.toggle("is-active");
}

    // Typewriter effect homepage
gsap.registerPlugin(TextPlugin);

const nameText = "Hi I'm Christopher Novo | Designer & Developer";
const bioText = document.querySelector(".display-bio");
const buttons = document.querySelector(".buttons");

gsap.to(".display-name", {
    text: nameText,
    duration: 3,
    ease: "power1.inOut",
    onComplete: () => {
        gsap.to(bioText, { opacity: 1, duration: 1, delay: 0.5 }); // Bio stays visible
        gsap.to(buttons, { opacity: 1, duration: 1, delay: 1.5 }); // Buttons fade in smoothly
    }
});