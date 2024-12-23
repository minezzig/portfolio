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
    <div class="card"  data-aos="fade-up">
      <a href="${live}" target="_blank">
        <div class="title-container">
          <h3>${name}</h3><i class="fa-solid fa-up-right-from-square"></i>
        </div>
      </a>
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

// --------------animations--------------

// const first = document.getElementById("first");
// const last = document.getElementById("last");

// const grow = (element, position) => {
//   position += 80;
//   element.style.fontSize = `${position}px`;
//   element.style.opacity = `${1 - position / 500}`;
// };

// const scroll = (div, element, position, direction) => {
//   const divPosition = div.offsetTop;
//   const adjPosition = position + Math.floor(window.innerHeight * 0.75);
//   const speed = window.innerWidth * 0.0009;
//   console.log(speed);
//   if (adjPosition > divPosition) {
//     element.style.transform = `translateX(${
//       (adjPosition - divPosition) * speed * direction
//     }px)`;
//   }
// };

// document.addEventListener("scroll", function (e) {
//   position = window.scrollY;
//   window.requestAnimationFrame(function () {
//     grow(first, position);
//     grow(last, position);
//     scroll(aboutDiv, about, position, 1);
//     scroll(projectsContainer, projectsTitle, position, -1);
//     scroll(contactDiv, contact, position, 1);
//   });
// });


// Contact form submission
const contactContainer = document.getElementById("contact-div");
const form = document.getElementById("form");
// on submit...
form.addEventListener("submit", onSubmit);

// action taken on submit
async function onSubmit(e) {
  e.preventDefault();

  // collect data and create object
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://submit-form.com/Bk17yuvKG", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        _email: {
          from: "MINEZZI portfolio",
          subject: "Portfolio Contact",
        },
      }),
    });

    if (response.ok) {
      contactContainer.innerHTML = `
      <div class="flex p-10 flex-col items-center justify-center bg-white rounded-3xl shadow-2xl">
          <div class="text-4xl">Thanks, ${data.name}!</div>
          <div>I'll get back to you as soon as possible!</div>
      </div>`;
    } else {
      contactContainer.innerHTML = `
        <div class="flex p-10 flex-col items-center justify-center bg-white rounded-3xl shadow-2xl">
            <div class="text-4xl">An error occured!</div>

        </div>
   `;
    }
  } catch (error) {
    contactContainer.innerHTML = `
        <div class="flex p-10 flex-col items-center justify-center bg-white rounded-3xl shadow-2xl">
            <div class="text-4xl">An error occured!</div>

        </div>
   `;
  }
}