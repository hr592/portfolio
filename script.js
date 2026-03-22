// project data //
const projects = [
  {
    title: "Explain My Way - Chrome Extension",
    description: "Developed a Chrome extension that uses the Groq LLaMA API to explain highlighted web text in one of six different learning styles with an interactive quiz mode. Features a Node.js backend, ElevenLabs text-to-speech integration, a draggable popup UI and a persistent saved explanations board with search and notes.",
    skills: ["JavaScript", "Node.js", "Chrome Extension", "Express", "REST APIs", "LLM Integration", "HTML/CSS", "Prompt Engineering", "AI", "UI Design", "Programming"],
    link: "https://github.com/hr729/explainmyway.git",
    image: "images/emw.png"
  },
  {
    title: "PCB Component Selection AI Agent",
    description: "Built an AI agent that solves a real problem I ran into while designing PCBs. Finding and selecting components from DigiKey was tedious, hard to track and time-consuming. The agent takes a plain English component request, filters a parts database using Python, and uses an AI model to recommend the best match with reasoning.",
    skills: ["Python", "Streamlit", "REST APIs", "LLM Integration", "Prompt Engineering", "pandas", "JSON", "python-docx", "AI", "Programming"],
    link: "https://drive.google.com/file/d/17N3586yOBJW55wYQ26gfMMLtuoTONO4v/view?usp=sharing",
    image: "images/ai.png"
  },
  {
    title: "3-DOF Robotic Arm",
    description: "Designed and prototyped a 3-DOF robotic arm to enable accessible gameplay of a board game for individuals with Multiple Sclerosis (MS) by applying human-centred engineering to reduce dependence on fine motor control.",
    skills: ["User-Centered Design", "Robotics", "Arduino", "Circuit Design", "Mechanical Design", "SolidWorks", "Programming", "CAD"],
    link: "https://drive.google.com/drive/folders/1c2OucIDyZ8QdvPIsnt0ghq4Nz7nzBmep?usp=sharing",
    image: "images/robot.png"
  },
  {
    title: "Custom PCB Design (Altium)",
    description: "End-to-end electrical design from schematic to manufacturable board.",
    skills: ["PCB Design", "Altium", "Custom Footprints", "Electronics", "Hardware Engineering"],
    link: "https://drive.google.com/drive/folders/1ETs00NofmW0uUmmeFeFYMFcEIPt1aP_4?usp=sharing",
    image: "images/pcb.png"
  },
  {
    title: "N-1 Starfighter (SolidWorks CAD Project)",
    description: "Multi-part assembly mechanical model built and assembled using SolidWorks.",
    skills: ["SolidWorks", "Parametric Modelling", "Assemblies", "Mechanical Design", "CAD"],
    link: "https://drive.google.com/drive/folders/1RSs-sbuL5THmyND1qptTNhTPT7Qzajql?usp=sharing",
    image: "images/cad.png"
  },
  {
    title: "Electric Car Motor Design",
    description: "A hands-on project exploring electromagnetic motor design through iterative testing.",
    skills: ["Testing", "Motor Physics", "Prototyping", "Torque", "Mechanical Design"],
    link: "https://drive.google.com/drive/folders/1KFGzTcbMczFnXOCSCN7Fbo4WjBmrLKaC?usp=sharing",
    image: "images/car.png"
  },
  {
    title: "NASA Healthy Living in Space Global Design Challenge",
    description: "Designed a sustainable agriculture module for a space settlement, focusing on efficient food production, infrastructure and life-support systems.",
    skills: ["Engineering", "Design", "CAD", "Problem Solving", "Research"],
    link: "https://drive.google.com/file/d/1DFxo42EmjfqYfuZOQmXobNqe21GexxP2/view?usp=sharing",
    image: "images/nasa.png"
  },
  {
    title: "NBA Free-Throw Statistical Analysis",
    description: "Analyzed multi-season NBA datasets to investigate differences in free-throw success rates between home and away teams. Applied formal hypothesis testing, confidence intervals and significance tests.",
    skills: ["Data Analysis", "Excel", "Research", "Problem Solving", "Report"],
    link: "https://drive.google.com/file/d/1VSzkHAnTBKPQ_wg6HLyDAvmhhHRgd7br/view?usp=sharing",
    image: "images/nba.png"
  },
  {
    title: "Pac-Man Fusion Game",
    description: "Java GUI game with event-driven logic and animations.",
    skills: ["Java", "Object-Oriented Programming", "UI"],
    link: "https://drive.google.com/drive/folders/1j2O2Z25yViaNvOWkakR_tGVjphPne2fz?usp=sharing",
    image: "images/pacman.png"
  }
];

// render projects //
const list = document.getElementById("project-list");

function renderProjects(data) {
  list.innerHTML = "";
  data.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.style.animationDelay = `${i * 0.07}s`;
    div.onclick = () => window.open(p.link, "_blank");
    div.innerHTML = `
      <div class="project-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
      <img src="${p.image}" alt="${p.title}" class="project-img" onerror="this.style.display='none'">
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="skills-wrap">${p.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

// filter projects //
function filterProjects(skill) {
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  if (skill === "all") {
    renderProjects(projects);
    return;
  }
  const filtered = projects.filter(p =>
    p.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
  renderProjects(filtered);
}

// Render on load
renderProjects(projects);

// scroll fade in //
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

// particle canvas //
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const colors = [
  'rgba(96, 165, 250,',
  'rgba(45, 212, 191,',
  'rgba(244, 114, 182,',
  'rgba(167, 243, 208,',
  'rgba(196, 181, 253,'
];

document.body.addEventListener('mousemove', (e) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  particles.push({
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 5 + 2,
    life: 70,
    color: color
  });
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * (p.life / 70), 0, Math.PI * 2);
    ctx.fillStyle = `${p.color}${(p.life / 70) * 0.6})`;
    ctx.fill();

    p.life--;
    p.y -= 0.5;
    p.x += (Math.random() - 0.5) * 0.5;

    if (p.life <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

animateParticles();
