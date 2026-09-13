const legacyProjects = [
  {
    id: "juba-lims",
    featured: true,
    title: "Juba City Land Information Management System",
    sector: "Land administration",
    category: "land",
    type: "Client project",
    role: "GIS team supervision and spatial-systems delivery",
    deliverables: "Mapped land records, PostGIS database, monitoring dashboards, QA workflows, and GeoServer services",
    image: "assets/juba-lims.webp",
    imageAlt: "Illustrative land information system showing parcel records and cadastral mapping for Juba City",
    imageWidth: 1536,
    imageHeight: 1024,
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
    featured: true,
    title: "West Kenya Sugarcane Management & NDVI Analysis",
    sector: "Agriculture",
    category: "agriculture",
    type: "Client project",
    role: "Remote-sensing workflow contributor",
    deliverables: "NDVI workflow, crop-health analysis, decision-platform outputs, and automated spatial validation",
    image: "assets/ndvi-analysis.webp",
    imageAlt: "Illustrative NDVI dashboard showing crop-health variation across mapped sugarcane fields",
    imageWidth: 1536,
    imageHeight: 1024,
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
    type: "Client project",
    role: "GIS production and quality control",
    deliverables: "3D airport features, updated spatial database, aerodrome-chart inputs, and QA outputs",
    image: "assets/entebbe-airport.webp",
    imageAlt: "Illustrative aerial airport survey showing mapped runway, taxiway, terminal, and utility infrastructure",
    imageWidth: 1607,
    imageHeight: 979,
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
    type: "Client project",
    role: "GIS mapping and data production",
    deliverables: "Terrain, infrastructure, settlement, environmental, and corridor datasets",
    image: "assets/sgr.webp",
    imageAlt: "Illustrative aerial view of a passenger train on Kenya's Standard Gauge Railway crossing savanna terrain",
    imageWidth: 1566,
    imageHeight: 1004,
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
    type: "Client project",
    role: "Field-mapping team lead",
    deliverables: "Field-collection workflow, mapped cane fields, farmer records, PostGIS database, and validation checks",
    image: "assets/kabrassugar.webp",
    imageAlt: "Illustrative field mapper collecting data with a handheld smartphone along a sugarcane field boundary",
    imageWidth: 1536,
    imageHeight: 1024,
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
    type: "Concept design",
    role: "Dashboard designer",
    deliverables: "KPI structure, spatial and tabular data model, and interactive monitoring views",
    image: "assets/dashboard.webp",
    imageAlt: "Illustrative spatial operations dashboard showing mapping progress, field teams, and quality-control indicators",
    imageWidth: 1536,
    imageHeight: 1024,
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
    tools: ["Python", "Streamlit", "Plotly Dash", "PostGIS"]
  },
  {
    id: "environmental-gis",
    title: "Environmental Monitoring & Conservation GIS",
    sector: "Environmental GIS",
    category: "digital",
    type: "Technical demonstration",
    role: "Geospatial analysis and data management",
    deliverables: "Remote-sensing analysis, spatial models, structured environmental data, metadata, and QA rules",
    image: "assets/environment.webp",
    imageAlt: "Illustrative environmental GIS showing land cover, wetlands, protected areas, and conservation monitoring",
    imageWidth: 1536,
    imageHeight: 1024,
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
    type: "Technical demonstration",
    role: "Web GIS interface designer",
    deliverables: "Responsive web-map interface, spatial-service integration, and deployable interface components",
    image: "assets/webgis.webp",
    imageAlt: "Illustrative Web GIS interface showing Kenyan spatial layers, a selected parcel, and land-cover analytics",
    imageWidth: 1536,
    imageHeight: 1024,
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

const featuredProjects = [
  {
    id: "kisarawe-monitoring",
    featured: true,
    title: "Kisarawe Ranch Land-Cover Monitoring",
    sector: "Monitoring",
    category: "remote",
    type: "Client project",
    client: "Tanzania Food Corporation · via Ramani",
    role: "Remote-sensing analysis and reporting",
    deliverables: "LULC and human-encroachment analysis data, maps, and technical report",
    image: "assets/kisarawe-monitoring.webp",
    imageAlt: "Satellite-derived land-cover and human-encroachment analysis across a large East African ranch landscape",
    imageWidth: 1254,
    imageHeight: 1254,
    metric: "8,555 ha · Mar–May 2026",
    summary: "A multi-date LULC and human-encroachment assessment identifying landscape change, sensitive areas, and priority hotspots across a large Tanzanian ranch.",
    challenge: "The client needed a clear, defensible view of recent landscape change across 8,555 hectares, including sensitive wetlands and areas requiring field attention.",
    contribution: [
      "Prepared and compared March–May 2026 satellite imagery.",
      "Applied object-based image analysis and Random Forest classification.",
      "Mapped land-use and land-cover change, human encroachment, wetland sensitivity, and priority hotspots.",
      "Delivered the analysis as structured data, clear maps, and a technical report."
    ],
    outcome: [
      "Created a consistent baseline for ongoing ranch monitoring.",
      "Focused field verification on the highest-priority change areas.",
      "Made technical land-cover evidence accessible to decision-makers."
    ],
    tools: ["Google Earth Engine", "QGIS", "OBIA", "Random Forest", "Remote sensing"]
  },
  {
    id: "nyongoro-suitability",
    featured: true,
    title: "Nyongoro Palm Oil Suitability",
    sector: "Suitability",
    category: "advisory",
    type: "Client advisory",
    client: "CPF Financial Services",
    role: "Spatial suitability analysis and advisory reporting",
    deliverables: "LULC, slope and stream-flow analyses; topographic and analytical maps; technical report",
    image: "assets/nyongoro-suitability.webp",
    imageAlt: "Coastal terrain map combining land cover, slope contours, streams, and plantation suitability areas",
    imageWidth: 1254,
    imageHeight: 1254,
    metric: "14,172 ha study · 12,283 ha net",
    summary: "A suitability assessment combining LULC, slope, stream-flow, and topographic analysis into clear maps and an investment-ready plantation report.",
    challenge: "CPF Financial Services needed to understand how much of the Nyongoro Ranch study area could realistically support palm-oil development and where the key constraints lay.",
    contribution: [
      "Structured the 14,172-hectare study area and constraint layers.",
      "Produced LULC, slope-zone, stream-flow, and topographic analyses.",
      "Estimated a net plantation area of approximately 12,283 hectares.",
      "Delivered topographic and analytical maps with a client-ready technical report."
    ],
    outcome: [
      "Provided a defensible view of the ranch's development potential.",
      "Made spatial constraints clear for investment review.",
      "Delivered both technical depth and a concise client-facing summary."
    ],
    tools: ["QGIS", "ArcGIS", "Terrain analysis", "Hydrology", "Suitability modelling"]
  },
  {
    id: "outbreak-map",
    title: "Ebola Outbreak Tracking Dashboard",
    sector: "Public-health GIS",
    category: "digital",
    type: "Interactive dashboard",
    role: "Dashboard, web-map, and data-workflow development",
    deliverables: "Interactive Ebola dashboard, live-data map, and structured outbreak tracker",
    image: "assets/ebola-dashboard.webp",
    imageAlt: "Dark public-health dashboard mapping Ebola outbreak locations with monitoring charts and indicators",
    imageWidth: 1254,
    imageHeight: 1254,
    metric: "Live outbreak data · interactive dashboard",
    summary: "An interactive dashboard created to track a recent Ebola outbreak, presenting live location data and regional context in one accessible view.",
    challenge: "Outbreak information needed to be organised and visualised clearly so that locations, patterns, and updates could be reviewed without specialist desktop GIS software.",
    contribution: [
      "Designed a responsive dashboard and Leaflet map for Ebola outbreak tracking.",
      "Connected outbreak records to a live Google Sheets data source.",
      "Combined mapped locations with clear monitoring information and regional context.",
      "Paired the dashboard with a structured Excel tracker generated in Python."
    ],
    outcome: [
      "Made outbreak locations and updates easier to review in one place.",
      "Made live updates accessible through a familiar spreadsheet workflow.",
      "Created a portable public-health monitoring dashboard suitable for static hosting."
    ],
    tools: ["Leaflet.js", "JavaScript", "Google Sheets", "Python", "openpyxl"]
  }
];

const restoredProjectIds = new Set(["mapping-dashboard", "environmental-gis", "webgis"]);
const restoredProjects = legacyProjects.filter(project => restoredProjectIds.has(project.id));
const remainingLegacyProjects = legacyProjects.filter(project => !restoredProjectIds.has(project.id));
const webDevelopmentProject = {
  id: "website-development",
  title: "Website & Web Application Development",
  sector: "Web development",
  category: "digital",
  type: "Service capability",
  role: "Front-end and full-stack web development",
  deliverables: "Responsive portfolio websites, e-commerce experiences, landing pages, and custom web applications",
  image: "assets/website-development.webp",
  imageAlt: "Responsive portfolio and e-commerce interfaces displayed across desktop, tablet, and mobile screens",
  imageWidth: 1254,
  imageHeight: 1254,
  metric: "Responsive websites and web applications",
  summary: "Responsive, accessible websites and web applications developed for portfolios, e-commerce, organisations, and custom digital needs.",
  challenge: "Businesses and professionals need fast, credible digital experiences that communicate clearly, work across devices, and can grow with their requirements.",
  contribution: [
    "Design responsive interfaces around clear user journeys and business goals.",
    "Develop semantic front ends with HTML, CSS, and JavaScript.",
    "Build Node.js functionality and connect application data where required.",
    "Test usability, accessibility, performance, and mobile behaviour before delivery."
  ],
  outcome: [
    "Create polished digital experiences that work across desktop and mobile.",
    "Provide maintainable foundations for portfolios, e-commerce, and business websites.",
    "Connect strong visual presentation with dependable web functionality."
  ],
  tools: ["HTML", "CSS", "JavaScript", "Node.js"]
};
const projects = [...featuredProjects, ...restoredProjects, ...remainingLegacyProjects, webDevelopmentProject];

const root = document.documentElement;
const header = document.getElementById("site-header");
const themeToggles = [...document.querySelectorAll("[data-theme-toggle]")];
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const projectGrid = document.getElementById("project-grid");
const filters = document.getElementById("project-filters");
const projectCount = document.getElementById("project-count");
const dialog = document.getElementById("project-dialog");
const closeDialogButton = document.getElementById("dialog-close");
const progressBar = document.getElementById("scroll-progress-bar");
const resumeDialog = document.getElementById("resume-dialog");
const resumeRequestButtons = [...document.querySelectorAll("[data-resume-request]")];
const resumeDialogClose = document.getElementById("resume-dialog-close");
const resumeRequestForm = document.getElementById("resume-request-form");
let lastResumeTrigger = null;

const savedTheme = localStorage.getItem("portfolio-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
root.dataset.theme = savedTheme || preferredTheme;

function updateThemeControls() {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  themeToggles.forEach(button => {
    const label = `Switch to ${nextTheme} theme`;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    const visibleLabel = button.querySelector(".theme-toggle-label");
    if (visibleLabel) visibleLabel.textContent = `Use ${nextTheme} theme`;
  });
}

themeToggles.forEach(button => button.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
  updateThemeControls();
}));
updateThemeControls();

const closeMenu = () => {
  navLinks?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("is-menu-open");
};

menuToggle?.addEventListener("click", () => {
  const open = !navLinks.classList.contains("is-open");
  navLinks.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("is-menu-open", open);
});

navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => { if (window.innerWidth > 1050) closeMenu(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navLinks?.classList.contains("is-open")) {
    closeMenu();
    menuToggle?.focus();
  }
});

function responsiveWidths(project) {
  return [...new Set([480, 960, project.imageWidth].filter(width => width <= project.imageWidth))].sort((a, b) => a - b);
}

function projectSrcset(project, format) {
  const base = project.image.replace(/\.webp$/, "");
  return responsiveWidths(project).map(width => {
    const source = format === "avif"
      ? `${base}-${width}.avif`
      : width === project.imageWidth ? project.image : `${base}-${width}.webp`;
    return `${source} ${width}w`;
  }).join(", ");
}

function renderProjects(filter = "all") {
  const visible = filter === "all" ? projects : projects.filter(project => project.category === filter);
  projectGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card${project.featured ? " project-card--featured" : ""} reveal" data-delay-step="${Math.min(index, 4)}">
      <picture>
        <source type="image/avif" srcset="${projectSrcset(project, "avif")}" sizes="(max-width: 820px) calc(100vw - 28px), (max-width: 1050px) calc(50vw - 32px), 45vw">
        <img class="project-image" src="${project.image}" srcset="${projectSrcset(project, "webp")}" sizes="(max-width: 820px) calc(100vw - 28px), (max-width: 1050px) calc(50vw - 32px), 45vw" alt="${project.imageAlt}" loading="lazy" decoding="async" width="${project.imageWidth}" height="${project.imageHeight}">
      </picture>
      <div class="project-overlay"></div>
      <div class="project-topline">
        <span class="project-sector">${project.sector}</span>
        <span class="project-type">${project.type}</span>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <dl class="project-facts">
          ${project.client ? `
            <div><dt>Client</dt><dd>${project.client}</dd></div>
            <div><dt>Scale</dt><dd>${project.metric}</dd></div>
            <div><dt>Output</dt><dd>${project.deliverables}</dd></div>
          ` : `
            <div><dt>Role</dt><dd>${project.role}</dd></div>
            <div><dt>Scope</dt><dd>${project.metric}</dd></div>
          `}
        </dl>
        <div class="project-footer">
          <span class="project-tools">${project.tools.slice(0, 3).join(" · ")}</span>
          <a class="project-open" href="#work/${project.id}" data-project-id="${project.id}" aria-label="Open ${project.title} case study">↗</a>
        </div>
      </div>
    </article>
  `).join("");
  if (projectCount) {
    projectCount.textContent = `${visible.length} ${visible.length === 1 ? "project" : "projects"} displayed`;
  }
  observeReveals(projectGrid);
}

filters?.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  filters.querySelectorAll("button").forEach(item => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderProjects(button.dataset.filter);
});

function setList(elementId, items) {
  const list = document.getElementById(elementId);
  list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

let lastProjectTrigger = null;
let closingDialogFromUrl = false;

function openProject(project, trigger, updateUrl = true) {
  lastProjectTrigger = trigger;
  document.getElementById("dialog-image").src = project.image;
  document.getElementById("dialog-image").srcset = projectSrcset(project, "webp");
  document.getElementById("dialog-image").alt = project.imageAlt;
  document.getElementById("dialog-image").width = project.imageWidth;
  document.getElementById("dialog-image").height = project.imageHeight;
  document.getElementById("dialog-source-avif").srcset = projectSrcset(project, "avif");
  document.getElementById("dialog-sector").textContent = project.sector;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-summary").textContent = project.summary;
  document.getElementById("dialog-metric").textContent = project.metric;
  document.getElementById("dialog-type").textContent = project.type;
  document.getElementById("dialog-role").textContent = project.role;
  document.getElementById("dialog-deliverables").textContent = project.deliverables;
  document.getElementById("dialog-challenge").textContent = project.challenge;
  setList("dialog-contribution", project.contribution);
  setList("dialog-outcome", project.outcome);
  document.getElementById("dialog-tools").innerHTML = project.tools.map(tool => `<b>${tool}</b>`).join("");
  dialog.dataset.projectId = project.id;
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = "hidden";
  if (updateUrl && window.location.hash !== `#work/${project.id}`) {
    history.pushState(null, "", `#work/${project.id}`);
  }
}

projectGrid?.addEventListener("click", event => {
  const link = event.target.closest("a[data-project-id]");
  if (!link) return;
  event.preventDefault();
  const project = projects.find(item => item.id === link.dataset.projectId);
  if (project) openProject(project, link);
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
dialog?.addEventListener("close", () => {
  document.body.style.overflow = "";
  delete dialog.dataset.projectId;
  if (!closingDialogFromUrl && window.location.hash.startsWith("#work/")) {
    history.replaceState(null, "", "#work");
  }
  closingDialogFromUrl = false;
  if (lastProjectTrigger?.isConnected) lastProjectTrigger.focus();
  lastProjectTrigger = null;
});

function projectFromHash() {
  const match = window.location.hash.match(/^#work\/([^/]+)$/);
  if (!match) return null;
  let projectId;
  try {
    projectId = decodeURIComponent(match[1]);
  } catch {
    return null;
  }
  return projects.find(project => project.id === projectId) || null;
}

function syncProjectWithUrl() {
  const project = projectFromHash();
  if (project) {
    const trigger = projectGrid?.querySelector(`[data-project-id="${project.id}"]`) || null;
    if (dialog.dataset.projectId !== project.id) openProject(project, trigger, false);
  } else if (dialog.open) {
    closingDialogFromUrl = true;
    dialog.close();
  }
}

window.addEventListener("hashchange", syncProjectWithUrl);

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" })
  : null;

if (revealObserver) root.classList.add("reveal-capable");

function observeReveals(scope = document) {
  scope.querySelectorAll(".reveal:not(.is-visible)").forEach(element => {
    if (revealObserver && element.closest(".hero")) revealObserver.observe(element);
    else element.classList.add("is-visible");
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(link => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-32% 0px -58%", threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
}

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${percent}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });

resumeRequestButtons.forEach(button => button.addEventListener("click", () => {
  lastResumeTrigger = button;
  resumeDialog?.showModal();
  document.body.style.overflow = "hidden";
  window.setTimeout(() => document.getElementById("resume-name")?.focus(), 0);
}));

function closeResumeDialog() {
  resumeDialog?.close();
}

resumeDialogClose?.addEventListener("click", closeResumeDialog);
resumeDialog?.addEventListener("click", event => {
  const bounds = resumeDialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeResumeDialog();
});
resumeDialog?.addEventListener("close", () => {
  document.body.style.overflow = "";
  if (lastResumeTrigger?.isConnected) lastResumeTrigger.focus();
  lastResumeTrigger = null;
});

resumeRequestForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!resumeRequestForm.reportValidity()) return;
  const name = document.getElementById("resume-name").value.trim();
  const organisation = document.getElementById("resume-organisation").value.trim();
  const context = document.getElementById("resume-context").value;
  const message = document.getElementById("resume-message").value.trim();
  const body = `Hello Benard, I viewed your portfolio and would like to request your résumé.\n\nName: ${name}\nOrganisation: ${organisation || "Not provided"}\nContext: ${context}\n\nDetails:\n${message}`;
  document.getElementById("resume-form-status").textContent = "Opening WhatsApp with your request ready for review…";
  window.open(`https://wa.me/254729482189?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
});

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const messageCounter = document.getElementById("message-counter");

function updateMessageCounter() {
  if (contactMessage && messageCounter) {
    messageCounter.textContent = `${contactMessage.value.length} / ${contactMessage.maxLength}`;
  }
}

contactMessage?.addEventListener("input", updateMessageCounter);
updateMessageCounter();

contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const type = document.getElementById("contact-type").value;
  const message = contactMessage.value.trim();
  const body = `Hello Benard, I viewed your portfolio and would like to discuss a project.\n\nName: ${name}\nEmail: ${email || "Not provided"}\nProject type: ${type}\n\nProject brief:\n${message}`;
  const url = `https://wa.me/254729482189?text=${encodeURIComponent(body)}`;
  document.getElementById("form-status").textContent = "Opening WhatsApp with your message ready for review…";
  window.open(url, "_blank", "noopener,noreferrer");
});

document.getElementById("current-year").textContent = new Date().getFullYear();
renderProjects();
observeReveals();
updateScrollUI();
syncProjectWithUrl();
