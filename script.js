const projects = [
  {
    title: "Robotic Hand Dexterity Game System",
    description: "Designed and prototyped a 3-DOF robotic arm to enable accessible gameplay of a board game for individuals with Multiple Sclerosis (MS) by applying human-centred engineering to reduce dependence on fine motor control.",
    skills: ["User-Centered Design", "Robotics", "Arduino", "Circuit Design", "Mechanical Design", "CAD", "Iterative Prototyping", "Testing"],
    link: "https://docs.google.com/document/d/1ttZQP6sHqXK6con2ng9tKnrHsVZSTOUxWLxn9s3xRuw/edit?usp=sharing",
    image: "images/robot.png"
  },
  {
    title: "N-1 Starfighter (SolidWorks CAD Project)",
    description: "Multi-part assembly mechanical model built and assembled using SolidWorks.",
    skills: ["SolidWorks", "Parametric Modelling", "Assemblies", "Mechanical Design", "CAD"],
    link: "projects/cad/index.html",
    image: "images/cad.png"
  },
  {
    title: "Custom PCB Design (Altium)",
    description: "End-to-end electrical design from schematic to manufacturable board.",
    skills: ["PCB Design", "Altium", "Custom Footprints", "Electronics", "Hardware Engineering", "Manufacturing Constraints"],
    link: "projects/nasa/index.html",
    image: "images/pcb.png"
  },
  {
    title: "NASA Healthy Living in Space Global Design Challenge",
    description: "Designed a sustainable agriculture module for a space settlement, focusing on efficient food production, infrastructure and life-support systems.",
    skills: ["Engineering", "Sustainable Design", "CAD", "Problem Solving", "Research"],
    link: "https://docs.google.com/document/d/1XwqRRzBdbUdwB_-pIAIF82OEw0ODrDl0tsZ3ZfNI-5g/edit?usp=sharing",
    image: "images/nasa.png"
  },
  {
    title: "Pac-Man Fusion Game",
    description: "Java GUI game with event-driven logic and animations.",
    skills: ["Java", "Object-Oriented Programming", "UI"],
    link: "projects/pacman/index.html",
    image: "images/pacman.png"
  }
];

const list = document.getElementById("project-list");

function renderProjects(data) {
  list.innerHTML = "";
  data.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.onclick = () => window.open(p.link, "_blank");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="project-img">
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><strong>Skills:</strong> ${p.skills.join(", ")}</p>
      </div>
    `;
    list.appendChild(div);
  });
}

function filterProjects(skill) {
  if (skill === "all") {
    renderProjects(projects);
    return;
  }
  const filtered = projects.filter(p =>
    p.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
  renderProjects(filtered);
}

renderProjects(projects);

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let particles = [];

document.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();

  particles.push({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    size: Math.random() * 4 + 2,
    life: 60
  });
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(127, 255, 212, ${p.life/60})`;
    ctx.fill();

    p.life--;
    p.y -= 0.3;
    if (p.life <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

animateParticles();
