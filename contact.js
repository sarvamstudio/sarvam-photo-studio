// WhatsApp form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const text =
    `Hello Sarvam Digital Studio,%0A%0A` +
    `Name: ${name}%0A` +
    `Mobile: ${phone}%0A` +
    `Service: ${service}%0A` +
    `Message: ${message}`;

  window.open(`https://wa.me/919925417991?text=${text}`, "_blank");
});

// Reveal animation
document.querySelectorAll('.info-box, .contact-form').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.info-box, .contact-form').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = '0.6s ease';
    }
  });
});
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navlinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


console.log("Premium Contact Page Loaded");
