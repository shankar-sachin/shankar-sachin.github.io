const markdownPlaceholders = [
  {
    label: "Rocketry",
    title: "Payload Delivery For Less",
    description: "I'm currently working on an science fair project on developing novel rocket fuels that will possibly allow model rockets to enter space and deliver payloads.",
    href: "docs/payload_delivery_for_less.pdf"
  },
  {
    label: "iPhone",
    title: "Eighty4",
    description: "This is an iPhone app. It combines popular Texas Instruments graphing calculators and scientific calculators and replicates them stored completely on your iPhone. Zero ROM necessary.",
    href: "docs/superwin.pdf"
  },
  {
    label: "SciBowl",
    title: "Atom Bowl",
    description: "This is a Science Bowl training website on which you can practice from a library of over 25,000 questions and practice them buzzer-style with voice. It also has moderator controls and buzzer rooms.",
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
