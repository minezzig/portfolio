const menu = document.getElementById("menu");
const projectsDiv = document.getElementById("projects-list");

// --------------open/close menu fnctions--------------
function openMenu() {
  menu.style.right = "0";
}

function closeMenu() {
  menu.style.right = "-200px";
}

// --------------render projects--------------

createProjectsList(projects);
function createProjectsList(projectsList) {
  const content = projectsList.map((project) => {
    const { name, tech, description, image, github, live } = project;

    // const logos = tech.map((logo) => {
    //   return `<i class="fa-brands fa-${logo}"></i>`;
    // });

    return ` 
    <div class="card">
      <div class="title-container">
        <h3>${name}</h3> <a href="${live}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
      </div>
      <div class="img-container">
        <img src="${image}" alt="${name}" />
      </div>
      <div class="description">
        <div>${description}</div>
        <div class="links-container">
          <a href="${github}" target="_blank"><i class="fa-brands fa-square-github"/></i> View code</a>
        </div>
      </div>
      
    </div>
    `;
  });
  projectsDiv.innerHTML = content.join("");
}

// --------------animations--------------

const first = document.getElementById("first");
const last = document.getElementById("last");
const roles = document.getElementById("roles");
const aboutDiv = document.getElementById("about");
const about = document.getElementById("about-title");
const projectsContainer = document.getElementById("projects");
const projectsTitle = document.getElementById("projects-title");
const contactDiv = document.getElementById("contact");
const contact = document.getElementById("contact-title");

const grow = (element, position) => {
  position += 80;
  element.style.fontSize = `${position}px`;
  element.style.opacity = `${1 - position / 500}`;
};

const scroll = (div, element, position, direction) => {
  const divPosition = div.offsetTop;
  const adjPosition = position + Math.floor(window.innerHeight * 0.75);
  const speed = window.innerWidth * 0.0009;
  console.log(speed)
  if (adjPosition > divPosition) {
    element.style.transform = `translateX(${
      (adjPosition - divPosition) * speed * direction
    }px)`;
  }
};

document.addEventListener("scroll", function (e) {
  position = window.scrollY;
  window.requestAnimationFrame(function () {
    grow(first, position);
    grow(last, position);
    scroll(aboutDiv, about, position, 1);
    scroll(projectsContainer, projectsTitle, position, -1);
    scroll(contactDiv, contact, position, 1);
  });
});
