const icons = {
  aboutMe: document.getElementById("about-me-icon"),
  projects: document.getElementById("projects-icon"),
  stack: document.getElementById("stack-icon"),
  contactMe: document.getElementById("contact-me-icon")
};

const headerContent = {
    aboutMe: {
        title: "Titulo 1",
        subtitle: "Descrição 1"
    },
    stack: {
        title: "Titulo 2",
        subtitle: "Descrição 2"
    },
    projects: {
        title: "Titulo 3",
        subtitle: "Descrição 3"
    }
}


document
  .getElementById("about-me-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSection("about-me");
  });

document
  .getElementById("projects-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSection("projects");
  });

document
  .getElementById("stack-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSection("stack");
  });

document
  .getElementById("contact-me-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSection("contact-me");
  });

  function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.style.display = "none";
    });

    const activeLink = document.querySelector(".section-link.active-view");
    if (activeLink) {
      activeLink.classList.remove("active-view");
    }

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = "block";
    }

    const clickedLink = document.getElementById(`${sectionId}-link`);
    if (clickedLink) {
      clickedLink.classList.add("active-view");
    }
  }


