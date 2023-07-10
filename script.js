const menu = document.getElementById("menu");
const projects = document.getElementById("projects-list");

fetch("projects.json")
  .then((response) => response.json())
  .then((data) => createProjectsList(data.projects));

function openMenu() {
  menu.style.right = "0";
}

function closeMenu() {
  menu.style.right = "-200px";
}

/*const projectsList = [
  {
    name: "Periodic Tables",
    tech: [
      "html5",
      "css3-alt",
      "square-js",
      "react",
      "node-js",
      "express",
      "postgresql",
    ],
    description:
      "This application, similar to OpenTable, allows restaurants to create and edit reservations as well as seat them in a configuration of tables. Parties can then be clear and marked as finished. Also allows reservations to be search by phone number",
    link: "https://github.com/minezzig/starter-restaurant-reservation",
  },
  {
    name: "Flashcard-o-matic",
    tech: ["html5", "css3-alt", "square-js", "react"],
    description:
      "Front-end capstone project that showcases a react.js application. A simple web app that allows users to create decks, containing cards, as study material. Both decks and cards can be edited and deleted.",
    link: "https://github.com/minezzig/flashcard",
  },
  {
    name: "Recipe Tracker",
    tech: ["html5", "css3-alt", "square-js", "react"],
    description:
      "A React project that focuses on the creation of a CRUD application.  Emphasis on the use of useState() hook.",
    link: "https://github.com/minezzig/recipe-tracking-app",
  },
];
*/

function createProjectsList(projectsList) {
  const content = projectsList.map((project) => {
    const { name, tech, description, link } = project;

    const logos = tech.map((logo) => {
      return `<i class="fa-brands fa-${logo}"></i>`;
    });

    return ` 
    <div class="card">
      <h3>${name}</h3>
        ${logos.join("")} 
      <p>${description}  </p>
      <i class="fa-brands fa-square-github"></i
    ><a href="${link}" target="_blank"
      >View code on Github</a>
    </div>
    `;
  });
  projects.innerHTML = content.join("");
}


