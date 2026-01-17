// Future enhancements like animations or form validation
console.log("Level Up website loaded");

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}


const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending...";
  status.style.color = "#555";

  try {
    const res = await fetch("YOUR_NEW_SCRIPT_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
      })
    });

    const text = await res.text();

    if (text === "Success") {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    status.textContent = "❌ Something went wrong. Please try again.";
    status.style.color = "red";
  }
});

