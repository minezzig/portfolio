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
        <h3>${name}</h3>
      </div>
      <div class="img-container">
        <a href="${live}" target="_blank"><img src="${image}" alt="${name}" /></a>
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