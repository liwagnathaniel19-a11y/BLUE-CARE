// BlueCare demo website interactions.
// Replace these sample contact details with the store's real details before publishing.
const STORE_EMAIL = "hello@example.com";
const STORE_PHONE = "+630000000000";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Open navigation");
    });
  });

  const filterButtons = document.querySelectorAll(".filter-button");
  const products = document.querySelectorAll(".product-card");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      products.forEach((product) => {
        product.hidden = filter !== "all" && product.dataset.category !== filter;
      });
    });
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  });

  const emailLink = document.getElementById("email-link");
  const phoneLink = document.getElementById("phone-link");
  if (emailLink) emailLink.href = `mailto:${STORE_EMAIL}`;
  if (phoneLink) phoneLink.href = `tel:${STORE_PHONE.replace(/[^\d+]/g, "")}`;
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
