// Menu mobile
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu au clic sur un lien
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Année footer
document.getElementById("year").textContent = new Date().getFullYear();

// Formulaire -> mailto (simple et efficace sans backend)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const topic = data.get("topic")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    const subject = encodeURIComponent(`[Tuzo Consulting 69] ${topic || "Contact"} — ${name || ""}`);
    const body = encodeURIComponent(
`Nom: ${name}
Email: ${email}
Sujet: ${topic}

Message:
${message}

---
Envoyé depuis le site Tuzo Consulting 69`
    );

    window.location.href = `mailto:tuzoconsulting69@gmail.com?subject=\( {subject}&body= \){body}`;
  });
}
