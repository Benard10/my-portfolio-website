const projects = [
  {
    id: "juba-lims",
    title: "Juba City Land Information Management System",
    sector: "Land administration",
    category: "land",
    image: "assets/juba-lims.webp",
    metric: "Centralised spatial land records",
    summary: "A mapping, database, and dashboard workflow designed to improve access to fragmented land information and support more auditable administration.",
    challenge: "Juba needed a dependable way to manage fragmented land records, limited data accessibility, and recurring boundary disputes through a central spatial system.",
    contribution: [
      "Supervised city mapping using orthorectified imagery.",
      "Integrated mapped data in QGIS and PostgreSQL/PostGIS.",
      "Designed monitoring dashboards and quality-control workflows.",
      "Supported map and service publishing through GeoServer."
    ],
    outcome: [
      "Created a central structure for spatial land records.",
      "Improved access, transparency, and evidence for dispute review.",
      "Established a foundation for urban planning and long-term land management."
    ],
    tools: ["QGIS", "PostgreSQL", "PostGIS", "Python", "GeoServer", "Dashboard design"]
  },
  {
    id: "west-kenya-ndvi",
    title: "West Kenya Sugarcane Management & NDVI Analysis",
    sector: "Agriculture",
    category: "agriculture",
    image: "assets/ndvi-analysis.webp",
    metric: "100,000+ fields",
    summary: "Using Google Earth Engine and NDVI workflows to monitor sugarcane health across vast areas, saving hundreds of hours that would otherwise be spent on manual field surveys.",
    challenge: "Kabras Sugar needed a scalable way to monitor more than 100,000 sugarcane fields and improve visibility of crop health, irrigation needs, and yield signals.",
    contribution: [
      "Contributed NDVI and satellite-image workflows in Google Earth Engine.",
      "Supported crop-presence, development, and health analysis.",
      "Integrated outputs into a decision-support platform.",
      "Applied automated validation and spatial quality checks."
    ],
    outcome: [
      "Supported near-real-time crop-health monitoring.",
      "Improved evidence for irrigation, fertiliser, and pest-control decisions.",
      "Strengthened yield forecasting and agricultural resource allocation."
    ],
    tools: ["Google Earth Engine", "NDVI", "Remote sensing", "Python", "PostGIS", "GeoServer"]
  },
  {
    id: "entebbe-airport",
    title: "Entebbe International Airport GIS Database Update",
    sector: "Aviation",
    category: "aviation",
    image: "assets/entebbe-airport.webp",
    metric: "3D airport GIS and aerodrome charting",
    summary: "A complete overhaul of the airport's spatial records, mapping out 3D infrastructure to improve operational safety, update aerodrome charts, and streamline future planning.",
    challenge: "The airport required current, detailed infrastructure data and aeronautical mapping to strengthen operations, safety management, navigation support, and expansion planning.",
    contribution: [
      "Compiled field and mapped infrastructure data.",
      "Produced detailed 3D representations of airport features.",
      "Integrated ArcGIS, AutoCAD, and PostGIS workflows.",
      "Supported aerodrome chart production and database quality control."
    ],
    outcome: [
      "Improved the reliability of the airport's spatial reference data.",
      "Supported planning, safety, charting, and operational decision-making.",
      "Created a stronger foundation for future GIS maintenance and updates."
    ],
    tools: ["ArcGIS", "AutoCAD", "PostGIS", "3D mapping", "Aerodrome charts", "Quality control"]
  },
  {
    id: "sgr",
    title: "Kenyan Standard Gauge Railway GIS Foundation",
    sector: "Infrastructure",
    category: "infrastructure",
    image: "assets/aerial.webp",
    metric: "National infrastructure corridor",
    summary: "Foundational terrain, network, settlement, and environmental datasets prepared for engineering and planning decisions along a major transport corridor.",
    challenge: "The railway programme needed dependable corridor intelligence to support route planning, engineering review, environmental assessment, and construction decisions.",
    contribution: [
      "Mapped physical infrastructure, settlements, and natural features.",
      "Developed terrain information for engineering planning.",
      "Supported ecosystem mapping and spatial review.",
      "Organised project data in ArcGIS and PostGIS with quality checks."
    ],
    outcome: [
      "Provided a consistent spatial reference for engineering teams.",
      "Supported environmental mitigation and route-planning decisions.",
      "Established a reusable GIS base for corridor management."
    ],
    tools: ["ArcGIS", "AutoCAD", "PostGIS", "Terrain modelling", "Environmental mapping", "Python"]
  },
  {
    id: "kabras-field-mapping",
    title: "Kabras Sugar Cane Field Mapping",
    sector: "Agriculture",
    category: "agriculture",
    image: "assets/kabrassugar.webp",
    metric: "70-person mapping team",
    summary: "Led a 70-person field team to map out sugarcane fields, organizing the raw data into a structured database that improved supply estimations and resource planning.",
    challenge: "Outdated and incomplete field records made it difficult to maintain farmer information, estimate cane supply, and plan operational resources.",
    contribution: [
      "Led a team of 70 mappers using GPS-enabled smartphones.",
      "Designed the field data-collection and documentation process.",
      "Supervised quality control and PostGIS database updates.",
      "Applied Python validation to identify overlaps and gaps."
    ],
    outcome: [
      "Created more reliable agricultural and farmer records.",
      "Supported supply estimation and field-operation planning.",
      "Improved data transparency and repeatable quality control."
    ],
    tools: ["GPS field mapping", "QGIS", "PostGIS", "Python", "Web mapping", "Team leadership"]
  },
  {
    id: "mapping-dashboard",
    title: "Spatial Operations & Mapping Dashboard",
    sector: "Digital GIS",
    category: "digital",
    image: "assets/dashboard.webp",
    metric: "Progress, quality, and completion KPIs",
    summary: "A dashboard concept that connects spatial and tabular project data to operational reporting for field mapping teams and managers.",
    challenge: "Field programmes need a clear view of coverage, quality status, activity, completion, and resource use without manually assembling repeated reports.",
    contribution: [
      "Structured project indicators for operational monitoring.",
      "Connected spatial and tabular data for reporting.",
      "Designed interactive views for progress and quality status.",
      "Defined pathways for PostGIS, Power BI, Streamlit, or Dash delivery."
    ],
    outcome: [
      "Made project progress and quality easier to review.",
      "Supported more timely resource-allocation decisions.",
      "Reduced reliance on disconnected static status reports."
    ],
    tools: ["Power BI", "Python", "Streamlit", "Plotly Dash", "PostGIS", "Excel"]
  },
  {
    id: "environmental-gis",
    title: "Environmental Monitoring & Conservation GIS",
    sector: "Environmental GIS",
    category: "digital",
    image: "assets/environment.webp",
    metric: "Remote sensing + spatial modelling",
    summary: "Environmental data, remote sensing, and spatial modelling combined to support monitoring, conservation planning, and sustainable resource decisions.",
    challenge: "Environmental programmes require consistent, documented spatial evidence to understand change, assess resource distribution, and prioritise conservation action.",
    contribution: [
      "Integrated remote sensing and environmental datasets.",
      "Supported change analysis and spatial modelling.",
      "Maintained structured environmental data in PostGIS.",
      "Applied automation, metadata, and quality-control rules."
    ],
    outcome: [
      "Produced analytical evidence for monitoring and conservation planning.",
      "Supported repeatable resource-management decisions.",
      "Improved the readiness of environmental data for publishing and reporting."
    ],
    tools: ["Remote sensing", "Spatial modelling", "PostGIS", "Python", "GeoServer", "Metadata"]
  },
  {
    id: "webgis",
    title: "Interactive Web GIS Applications",
    sector: "Digital GIS",
    category: "digital",
    image: "assets/webgis.webp",
    metric: "Responsive spatial decision interfaces",
    summary: "Custom web maps and responsive interfaces built to take spatial data out of complex desktop software and put it directly into the hands of everyday users.",
    challenge: "Many valuable GIS datasets remain difficult for project teams and decision-makers to access when they are limited to specialist desktop environments.",
    contribution: [
      "Designed responsive web GIS interfaces and dashboards.",
      "Connected interfaces to spatial services and database outputs.",
      "Structured map interactions around operational questions.",
      "Prepared deployable components for cloud-hosted environments."
    ],
    outcome: [
      "Expanded access to spatial information beyond GIS specialists.",
      "Supported interactive querying and clearer project communication.",
      "Created a path from analysis outputs to practical digital products."
    ],
    tools: ["HTML", "CSS", "JavaScript", "Leaflet", "PostGIS", "GeoServer"]
  }
];

const root = document.documentElement;
const header = document.getElementById("site-header");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const projectGrid = document.getElementById("project-grid");
const filters = document.getElementById("project-filters");
const dialog = document.getElementById("project-dialog");
const closeDialogButton = document.getElementById("dialog-close");
const progressBar = document.getElementById("scroll-progress-bar");

const savedTheme = localStorage.getItem("portfolio-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
root.dataset.theme = savedTheme || preferredTheme;

themeToggle?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
});

const closeMenu = () => {
  navLinks?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("is-menu-open");
};

menuToggle?.addEventListener("click", () => {
  const open = !navLinks.classList.contains("is-open");
  navLinks.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("is-menu-open", open);
});

navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => { if (window.innerWidth > 1050) closeMenu(); });

function renderProjects(filter = "all") {
  const visible = filter === "all" ? projects : projects.filter(project => project.category === filter);
  projectGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal" style="--delay:${Math.min(index * 55, 220)}ms">
      <img class="project-image" src="${project.image}" alt="${project.title} project visual" loading="lazy" width="1400" height="900">
      <div class="project-overlay"></div>
      <div class="project-topline">
        <span class="project-sector">${project.sector}</span>
        <span class="project-metric">${project.metric}</span>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-footer">
          <span class="project-tools">${project.tools.slice(0, 3).join(" · ")}</span>
          <button class="project-open" type="button" data-project-id="${project.id}" aria-label="Open ${project.title} case study">↗</button>
        </div>
      </div>
    </article>
  `).join("");
  observeReveals(projectGrid);
}

filters?.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  filters.querySelectorAll("button").forEach(item => item.classList.toggle("is-active", item === button));
  renderProjects(button.dataset.filter);
});

function setList(elementId, items) {
  const list = document.getElementById(elementId);
  list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function openProject(project) {
  document.getElementById("dialog-image").src = project.image;
  document.getElementById("dialog-image").alt = `${project.title} project visual`;
  document.getElementById("dialog-sector").textContent = project.sector;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-summary").textContent = project.summary;
  document.getElementById("dialog-metric").textContent = project.metric;
  document.getElementById("dialog-challenge").textContent = project.challenge;
  setList("dialog-contribution", project.contribution);
  setList("dialog-outcome", project.outcome);
  document.getElementById("dialog-tools").innerHTML = project.tools.map(tool => `<b>${tool}</b>`).join("");
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

projectGrid?.addEventListener("click", event => {
  const button = event.target.closest("button[data-project-id]");
  if (!button) return;
  const project = projects.find(item => item.id === button.dataset.projectId);
  if (project) openProject(project);
});

function closeDialog() {
  dialog.close();
  document.body.style.overflow = "";
}
closeDialogButton?.addEventListener("click", closeDialog);
dialog?.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeDialog();
});
dialog?.addEventListener("close", () => { document.body.style.overflow = ""; });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -45px" });

function observeReveals(scope = document) {
  scope.querySelectorAll(".reveal:not(.is-visible)").forEach(element => {
    const delay = element.dataset.delay;
    if (delay) element.style.setProperty("--delay", `${delay}ms`);
    revealObserver.observe(element);
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-32% 0px -58%", threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${percent}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });

const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const type = document.getElementById("contact-type").value;
  const message = document.getElementById("contact-message").value.trim();
  const body = `Hello Benard, I viewed your portfolio and would like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nProject type: ${type}\n\nProject brief:\n${message}`;
  const url = `https://wa.me/254729482189?text=${encodeURIComponent(body)}`;
  document.getElementById("form-note").textContent = "Opening WhatsApp with your message ready for review…";
  window.open(url, "_blank", "noopener,noreferrer");
});

document.getElementById("current-year").textContent = new Date().getFullYear();
renderProjects();
observeReveals();
updateScrollUI();
