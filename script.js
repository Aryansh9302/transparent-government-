/* ============================================================
   INITIAL SETUP
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSidebar();
  initSmoothScroll();
  initTabs();
  initYear();
  loadMinistriesAndSectors();
  renderCentralProjects();
  loadStateDropdown();
  renderStateProjects();
});

/* ============================================================
   LANGUAGE SWITCHER (22 Constitutional Languages)
============================================================ */
const langToggle = document.getElementById("langToggle");
const langPanel = document.getElementById("langPanel");
const langCurrent = document.getElementById("langCurrent");

langToggle.onclick = () => langPanel.classList.toggle("open");

function initLanguageSidebar() {
  const languageButtons = document.querySelectorAll(".lang-option");

  languageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      languageButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const lang = btn.dataset.lang;
      langCurrent.textContent = lang.toUpperCase();

      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  // Minimal example: only headings change
  const translations = {
    hi: {
      brand_title: "भारतीय लोकतंत्र",
      brand_tagline: "सत्यमेव जयते",
      nav_home: "मुखपृष्ठ",
      nav_central: "केंद्रीय परियोजनाएँ",
      nav_state: "राज्य परियोजनाएँ",
      hero_title:
        "सरकारी परियोजनाओं, खर्चों और अनुबंधों में पूर्ण पारदर्शिता।",
      hero_subtitle:
        "हर रुपये का हिसाब — हर नागरिक के लिए 24/7 उपलब्ध।",
    },
    en: {
      brand_title: "Bhartiya Democracy",
      brand_tagline: "Satyameva Jayate",
      nav_home: "Home",
      nav_central: "Central Projects",
      nav_state: "State Projects",
      hero_title:
        "Complete transparency in government projects, expenditures, and contracts.",
      hero_subtitle:
        "Every rupee, every project, every transaction – visible to every citizen.",
    },
  };

  const dict = translations[lang] || translations["en"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

/* ============================================================
   SMOOTH SCROLL
============================================================ */
function initSmoothScroll() {
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.onclick = () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.onclick = (e) => {
      const id = link.getAttribute("href");
      if (id.startsWith("#")) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    };
  });
}

/* ============================================================
   TABS (Central / State)
============================================================ */
function initTabs() {
  const tabs = document.querySelectorAll(".project-tab");

  tabs.forEach((tab) => {
    tab.onclick = () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const sectionID = tab.dataset.tab;

      document
        .querySelector(sectionID)
        .scrollIntoView({ behavior: "smooth" });
    };
  });
}

/* ============================================================
   FOOTER YEAR
============================================================ */
function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ============================================================
   CENTRAL PROJECTS DATA (15 PROJECTS)
============================================================ */
const centralProjects = [
  {
    name: "National Highway 44 Expansion",
    ministry: "Ministry of Road Transport",
    sector: "Infrastructure",
    desc: "Four-lane highway expansion from Delhi to Amritsar covering 450 km",
    date: "2024-01-15",
    announced: 8500000000,
    sanctioned: 8200000000,
    used: 6150000000,
    contractor: "National Highways Authority of India",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Digital India – Rural Connectivity",
    ministry: "Ministry of Electronics & IT",
    sector: "Technology",
    desc: "Providing high-speed internet to 5000 villages across India",
    date: "2024-03-01",
    announced: 3000000000,
    sanctioned: 2850000000,
    used: 1425000000,
    contractor: "Bharat Broadband Network",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Swachh Bharat Phase 3",
    ministry: "Ministry of Jal Shakti",
    sector: "Cleanliness",
    desc: "Construction of 10,000 community toilets and waste facilities",
    date: "2025-01-01",
    announced: 4500000000,
    sanctioned: 4350000000,
    used: 0,
    contractor: "Swachh Bharat Mission",
    contractorType: "Government",
    status: "Approved",
  },
  {
    name: "National Solar Mission – Grid Integration",
    ministry: "Ministry of New & Renewable Energy",
    sector: "Energy",
    desc: "5000 MW solar power generation & national grid expansion",
    date: "2023-06-01",
    announced: 12000000000,
    sanctioned: 11500000000,
    used: 8050000000,
    contractor: "Adani Green Energy",
    contractorType: "Private",
    status: "Ongoing",
  },
  {
    name: "Ayushman Bharat – Health Infra",
    ministry: "Ministry of Health & Family Welfare",
    sector: "Health",
    desc: "Setting up 500 health & wellness centers across India",
    date: "2024-02-01",
    announced: 5500000000,
    sanctioned: 5300000000,
    used: 3180000000,
    contractor: "National Health Authority",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Railway Station Modernization Program",
    ministry: "Ministry of Railways",
    sector: "Infrastructure",
    desc: "Modernization of 50 major railway stations",
    date: "2024-04-01",
    announced: 7500000000,
    sanctioned: 7250000000,
    used: 3625000000,
    contractor: "IRSDC",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Ganga Rejuvenation Mission",
    ministry: "Ministry of Jal Shakti",
    sector: "Environment",
    desc: "Cleaning & rejuvenation of the Ganga river",
    date: "2023-01-10",
    announced: 12000000000,
    sanctioned: 11000000000,
    used: 5500000000,
    contractor: "National Mission for Clean Ganga",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Smart City India – Phase II",
    ministry: "Ministry of Urban Development",
    sector: "Urban",
    desc: "Upgrading 45 smart cities with advanced sensors and lighting",
    date: "2024-03-11",
    announced: 6500000000,
    sanctioned: 6000000000,
    used: 3100000000,
    contractor: "L&T Infra",
    contractorType: "Private",
    status: "Approved",
  },
  {
    name: "PM Awas Yojana Urban",
    ministry: "Ministry of Housing",
    sector: "Housing",
    desc: "Construction of 4 lakh affordable houses in Tier-2 cities",
    date: "2024-05-15",
    announced: 7000000000,
    sanctioned: 6800000000,
    used: 4000000000,
    contractor: "NBCC India",
    contractorType: "Government",
    status: "Ongoing",
  },
  {
    name: "Bharatmala Expressway Project",
    ministry: "Ministry of Road Transport",
    sector: "Infrastructure",
    desc: "Construction of national expressway corridors",
    date: "2024-07-10",
    announced: 15000000000,
    sanctioned: 14900000000,
    used: 9000000000,
    contractor: "Afcons Infra",
    contractorType: "Private",
    status: "Ongoing",
  },
];

/* ============================================================
   LOAD MINISTRY & SECTOR FILTERS
============================================================ */
function loadMinistriesAndSectors() {
  const minSelect = document.getElementById("centralMinistry");
  const secSelect = document.getElementById("centralSector");

  const ministries = [...new Set(centralProjects.map((p) => p.ministry))];
  const sectors = [...new Set(centralProjects.map((p) => p.sector))];

  ministries.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    minSelect.appendChild(opt);
  });

  sectors.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    secSelect.appendChild(opt);
  });

  minSelect.onchange = renderCentralProjects;
  secSelect.onchange = renderCentralProjects;
}

/* ============================================================
   RENDER CENTRAL PROJECTS
============================================================ */
function renderCentralProjects() {
  const container = document.getElementById("centralProjectsContainer");
  container.innerHTML = "";

  const minVal = document.getElementById("centralMinistry").value;
  const secVal = document.getElementById("centralSector").value;

  centralProjects
    .filter(
      (p) =>
        (minVal === "all" || p.ministry === minVal) &&
        (secVal === "all" || p.sector === secVal)
    )
    .forEach((p) => container.appendChild(projectCard(p)));
}

/* ============================================================
   STATE & UT PROJECTS (1 per state)
============================================================ */
const stateList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
  "Jammu & Kashmir",
  "Ladakh",
];

function loadStateDropdown() {
  const stateSelect = document.getElementById("stateSelect");
  stateList.forEach((state) => {
    const opt = document.createElement("option");
    opt.value = state;
    opt.textContent = state;
    stateSelect.appendChild(opt);
  });

  stateSelect.onchange = renderStateProjects;
}

function renderStateProjects() {
  const container = document.getElementById("stateProjectsContainer");
  container.innerHTML = "";

  const state = document.getElementById("stateSelect").value;

  if (!state) return;

  // Auto-generated sample
  const proj = {
    name: ${state} Water Conservation Mission,
    ministry: "State Water Resources Department",
    sector: "Water",
    desc: State-level mission to conserve water and build reservoirs in ${state}.,
    date: "2024-01-01",
    announced: 1000000000,
    sanctioned: 850000000,
    used: 420000000,
    contractor: ${state} Irrigation Authority,
    contractorType: "Government",
    status: "Ongoing",
  };

  container.appendChild(projectCard(proj));
}

/* ============================================================
   PROJECT CARD TEMPLATE
============================================================ */
function projectCard(p) {
  const card = document.createElement("div");
  card.className = "project-card";

  const remaining = p.sanctioned - p.used;
  const pct = ((p.used / p.sanctioned) * 100).toFixed(1);

  card.innerHTML = `
    <div class="project-card-header">
      <div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
      </div>
      <div class="badges-wrapper">
        <span class="status-pill ${
          p.status === "Approved" ? "approved" : "ongoing"
        }">${p.status}</span>
      </div>
    </div>

    <div class="project-meta">
      <span class="meta-item">🏛️ ${p.ministry}</span>
      <span class="meta-item">📅 ${p.date}</span>
    </div>

    <div class="metric-grid">
      <div class="metric-card metric-announced">
        <span class="metric-label">Announced</span>
        <span class="metric-value">₹${p.announced.toLocaleString()}</span>
      </div>

      <div class="metric-card metric-sanctioned">
        <span class="metric-label">Sanctioned</span>
        <span class="metric-value">₹${p.sanctioned.toLocaleString()}</span>
      </div>

      <div class="metric-card metric-used">
        <span class="metric-label">Used</span>
        <span class="metric-value">₹${p.used.toLocaleString()}</span>
      </div>

      <div class="metric-card metric-remaining">
        <span class="metric-label">Remaining</span>
        <span class="metric-value">₹${remaining.toLocaleString()}</span>
      </div>
    </div>

    <div class="utilization-row">
      <div class="utilization-header">
        <span>Utilization</span>
        <span>${pct}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar" style="width:${pct}%"></div>
      </div>
    </div>

    <div class="contractor-row">
      <span class="contractor-name">${p.contractor}</span>
      <span class="contractor-type">${p.contractorType}</span>
    </div>

    <a class="signatures-link">View Digital Signatures ⬇</a>
  `;

  return card;
}
