const markdownPlaceholders = [
  {
    label: "Rocketry",
    title: "Payload Delivery For Less",
    description: "I'm currently working on an science fair project on developing novel rocket fuels that will possibly allow model rockets to enter space and deliver payloads.",
    href: "docs/payload_delivery_for_less.pdf"
  },
  {
    label: "Windows App",
    title: "SuperWin",
    description: "This is a C++ application which works as a multi-tool. It has a clipboard manager, a file converter, four different classed calculators, and more. It is built using WinUI 3.",
    href: "docs/superwin.pdf"
  },
  {
    label: "Discord Bot",
    title: "Space Odyssey",
    description: "This is a discord bot that is a text and embed-based game build on JS that has engaging space-themed gameplay and server management tools.",
    href: "docs/space_odyssey.pdf"
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
          <a href="${item.href}" aria-label="Placeholder link for ${item.title}">Download overview</a>
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
