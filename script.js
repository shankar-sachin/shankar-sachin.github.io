const markdownPlaceholders = [
  {
    label: "Coming Soon",
    title: "Project Markdown Title",
    description: "Short description for a future markdown document, project write-up, or portfolio note.",
    href: "#"
  },
  {
    label: "Coming Soon",
    title: "Research or Case Study",
    description: "Use this card for a longer explanation, technical breakdown, or professional case study.",
    href: "#"
  },
  {
    label: "Coming Soon",
    title: "Personal Notes",
    description: "A place for personal statements, reflections, learning notes, or public documentation.",
    href: "#"
  }
];

function renderMarkdownCards() {
  const container = document.querySelector("#markdownCards");

  if (!container) {
    return;
  }

  container.innerHTML = markdownPlaceholders
    .map(
      (item) => `
        <article class="project-card">
          <span class="card-label">${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.href}" aria-label="Placeholder link for ${item.title}">Add .md link</a>
        </article>
      `
    )
    .join("");
}

function setActiveTab() {
  const links = [...document.querySelectorAll("[data-tab-link]")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!links.length || !sections.length) {
    return;
  }

  const activeSection = sections.reduce((current, section) => {
    const distance = Math.abs(section.getBoundingClientRect().top - 120);
    const currentDistance = Math.abs(current.getBoundingClientRect().top - 120);
    return distance < currentDistance ? section : current;
  }, sections[0]);

  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("is-active", isActive);
  });
}

renderMarkdownCards();
setActiveTab();
window.addEventListener("scroll", setActiveTab, { passive: true });
