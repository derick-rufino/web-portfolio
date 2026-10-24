const headerContent = {
  "about-me": {
    title: "Sobre mim",
    subtitle: "Desenvolvedor full-stack, web designer, freelancer e estudante",
  },
  stack: {
    title: "Stack",
    subtitle:
      "Tecnologias que uso para construir interfaces e integrar sistemas",
  },
  projects: {
    title: "Projetos",
    subtitle:
      "Uma breve seleção de soluções de software e interfaces que desenvolvi",
  },
  "contact-me": {
    title: "Entre em contato",
    subtitle: "Vamos conversar sobre projetos, oportunidades e colaboração",
  },
};

const headerTitle = document.querySelector(".header-title");
const headerSubtitle = document.querySelector(".header-subtitle");

const navigation = {
  "about-me-link": "about-me",
  "stack-link": "stack",
  "projects-link": "projects",
  "contact-me-link": "contact-me",
};

function showSection(sectionId) {
  // Atualiza o conteúdo do cabeçalho.
  const content = headerContent[sectionId];

  if (content) {
    headerTitle.textContent = content.title;
    headerSubtitle.textContent = content.subtitle;
  }

  // Atualiza o link ativo.
  document.querySelectorAll(".section-link").forEach((link) => {
    link.classList.remove("active-view");
  });

  const activeLink = document.getElementById(`${sectionId}-link`);

  activeLink?.classList.add("active-view");

  // Alterna as seções existentes no documento.
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  const sectionToShow = document.getElementById(sectionId);

  if (sectionToShow) {
    sectionToShow.style.display = "block";
  }
}

// Registra os eventos de navegação.
Object.entries(navigation).forEach(([linkId, sectionId]) => {
  const link = document.getElementById(linkId);

  link?.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(sectionId);
  });
});

// Inicializa a página na seção Sobre mim.
showSection("about-me");
