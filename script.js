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
    name: "one",
    stack: "javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel minima culpa nisi veniam quis repellendus mollitia sapiente cumque! Veniam repellendus ipsum hic iste fugiat accusantium odit quaerat quidem ipsa!",
  },
  {
    name: "two",
    stack: "react",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel minima culpa nisi veniam quis repellendus mollitia sapiente cumque! Veniam repellendus ipsum hic iste fugiat accusantium odit quaerat quidem ipsa!",
  },
  {
    name: "three",
    stack: "css",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel minima culpa nisi veniam quis repellendus mollitia sapiente cumque! Veniam repellendus ipsum hic iste fugiat accusantium odit quaerat quidem ipsa!",
  },
];

const content = projectsList.map((project) => {
  const { name, stack, description } = project;
  return ` 
    <div class="card">
      <h3>${name}</h3>
      <p>${stack}</p>
      <p>${description}</p>
    </div>
    `;
});

projects.innerHTML = content.join("");
