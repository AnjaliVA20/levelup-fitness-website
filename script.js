// Future enhancements like animations or form validation
console.log("Level Up website loaded");

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

<script>
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919074696122"; // YOUR NUMBER

    const text =
      `New Contact Request:%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  });
</script>
