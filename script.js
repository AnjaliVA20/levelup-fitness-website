// Future enhancements like animations or form validation
console.log("Level Up website loaded");

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusText.textContent = "";
  button.classList.add("loading");

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbzYBkFhXfZAgIaJZUjC7NK1FXN7QT5N5FvYxnG_ku_6cIV2-XwwY_BVuNOrucpDbm7O/exec", {
    method: "POST",
    body: formData
  })
  .then(() => {
    statusText.textContent = "✅ Message sent successfully!";
    statusText.className = "form-status success";
    form.reset();

    // WhatsApp redirect after 1.5 seconds
    setTimeout(() => {
      const phoneNumber = "919074696122"; // clinic WhatsApp number
      const message = encodeURIComponent(
        "Hello, I just submitted an enquiry through your website."
      );

      window.open(
        `https://wa.me/${phoneNumber}?text=${message}`,
        "_blank"
      );
    }, 1500);
  })

    
    .catch(() => {
      statusText.textContent = "❌ Something went wrong. Please try again.";
      statusText.className = "form-status error";
    })
    .finally(() => {
      button.classList.remove("loading");
    });
});

