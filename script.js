const menu = document.getElementById("menu");
const projects = document.getElementById("projects-list");

function openMenu() {
  menu.style.right = "0";
}

function closeMenu() {
  menu.style.right = "-200px";
}

const projectsList = [
  {
    name: "tic tac toe",
    stack: "javascript",
    description: "This is an applicatoin that show how i can do something",
  },
  {
    name: "hangman",
    stack: "react",
    description: "Another applicatoin that shows something",
  },
  {
    name: "hangman",
    stack: "react",
    description: "Another applicatoin that shows something",
  },
];

const content = projectsList.map((project) => {
  const { name, stack, description } = project;
  return ` 
    <div class="card">
      <h2>${name}</h2>
      <h3>${stack}</h3>
      <p>${description}</p>
    </div>
    `;
});

projects.innerHTML = content.join("");
