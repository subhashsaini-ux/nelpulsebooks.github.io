// ===============================
// NELPULSE BOOKS
// Premium Website Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    // ==========================
    // Sticky Header Shadow
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });



    // ==========================
    // Reveal Animation
    // ==========================

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(item => {

        observer.observe(item);

    });



    // ==========================
    // Book Hover Effect
    // ==========================

    const books = document.querySelectorAll(".book-card");

    books.forEach(book => {

        book.addEventListener("mouseenter", () => {

            book.classList.add("hover");

        });

        book.addEventListener("mouseleave", () => {

            book.classList.remove("hover");

        });

    });



    // ==========================
    // Button Ripple
    // ==========================

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            ripple.style.left =

                (e.clientX - this.getBoundingClientRect().left) + "px";

            ripple.style.top =

                (e.clientY - this.getBoundingClientRect().top) + "px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ==========================
// Fade-in Images
// ==========================

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("loaded");

        }

    });

});

images.forEach(img=>{

    imageObserver.observe(img);

});



// ==========================
// Book Buttons
// ==========================

document.querySelectorAll(".buy-btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});



// ==========================
// Hero Floating Animation
// ==========================

const heroBook = document.querySelector(".hero-book");

if(heroBook){

setInterval(()=>{

heroBook.classList.toggle("float");

},2500);

}



// ==========================
// Console
// ==========================

console.log("NELPULSE BOOKS Loaded Successfully.");

// ==========================
// Newsletter Form
// ==========================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input[type='email']").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing!");

        this.reset();

    });

}



// ==========================
// Back To Top Button
// ==========================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.className = "back-top";

document.body.appendChild(backTop);

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});



// ==========================
// Current Year
// ==========================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}



// ==========================
// Finished
// ==========================

console.log("Website Ready.");
