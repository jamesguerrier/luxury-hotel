const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");
hamburger.addEventListener("click", () => {
  // console.log("button click");
  navLinks.classList.toggle("active");
  hamburger.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// ✅ Close menu when clicking any link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.textContent = "☰";
  });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
