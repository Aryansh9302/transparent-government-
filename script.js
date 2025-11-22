// Smooth scroll for hero buttons and nav
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- TAB HANDLING ---------------- */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    // Toggle active class on buttons
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Toggle panels
    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === targetId);
    });
  });
});

/* ---------------- SAMPLE DATA ---------------- */

// CENTRAL PROJECTS SAMPLE
const centralProjects = [
  {
    name: "Nationwide Railway Modernisation",
    ministry: "MoR",
    ministryLabel: "Railways",
    sector: "infrastructure",
    announced: "50,000,00,00,000",
    sanctioned: "45,000,00,00,000",
    used: "28,750,00,00,000",
    provider: "Ministry of Railways, Govt. of India",
    receiver: "Various PSU & Private Contractors",
    signed: "ok",
  },
  {
    name: "Ayushman Bharat Health Mission",
    ministry: "MoHFW",
    ministryLabel: "Health & Family Welfare",
    sector: "health",
    announced: "15,000,00,00,000",
    sanctioned: "15,000,00,00,000",
    used: "10,200,00,00,000",
    provider: "Ministry of Health & Family Welfare",
    receiver: "State Health Departments & Hospitals",
    signed: "ok",
  },
  {
    name: "Digital India Rural Connectivity",
    ministry: "MoRD",
    ministryLabel: "Rural Development",
    sector: "infrastructure",
    announced: "9,000,00,00,000",
    sanctioned: "8,500,00,00,000",
    used: "3,200,00,00,000",
    provider: "Ministry of Rural Development",
    receiver: "State Rural Development Agencies",
    signed: "pending",
  },
  {
    name: "National Scholarship Scheme 2.0",
    ministry: "MoHRD",
    ministryLabel: "Education",
    sector: "education",
    announced: "2,000,00,00,000",
    sanctioned: "1,900,00,00,000",
    used: "1,100,00,00,000",
    provider: "Ministry of Education",
    receiver: "Individual Students",
    signed: "ok",
  },
];

// STATE & DISTRICT DATA SAMPLE
const stateDistricts = {
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Uttar Pradesh": ["Lucknow", "Varanasi", "Kanpur"],
  "Delhi (NCT)": ["New Delhi", "South Delhi", "North Delhi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

const stateProjects = [
  {
    name: "Smart City Roads Upgrade",
    state: "Madhya Pradesh",
    district: "Bhopal",
    announced: "500,00,00,000",
    sanctioned: "450,00,00,000",
    used: "210,00,00,000",
    provider: "Urban Development Dept., MP Govt.",
    receiver: "XYZ Infra Pvt. Ltd.",
    signed: "ok",
  },
  {
    name: "Solar Rooftop Scheme",
    state: "Madhya Pradesh",
    district: "Indore",
    announced: "120,00,00,000",
    sanctioned: "100,00,00,000",
    used: "65,00,00,000",
    provider: "Energy Dept., MP Govt.",
    receiver: "Individual Households",
    signed: "pending",
  },
  {
    name: "Mumbai Coastal Protection",
    state: "Maharashtra",
    district: "Mumbai",
    announced: "800,00,00,000",
    sanctioned: "780,00,00,000",
    used: "700,00,00,000",
    provider: "Environment Dept., Maha Govt.",
    receiver: "ABC Coastal Projects Ltd.",
    signed: "ok",
  },
  {
    name: "Ganga Cleanup Local Phase",
    state: "Uttar Pradesh",
    district: "Varanasi",
    announced: "200,00,00,000",
    sanctioned: "170,00,00,000",
    used: "60,00,00,000",
    provider: "UP Pollution Control Board",
    receiver: "Local Municipal Corporation",
    signed: "ok",
  },
  {
    name: "Chennai Metro Extension - Phase II",
    state: "Tamil Nadu",
    district: "Chennai",
    announced: "900,00,00,000",
    sanctioned: "850,00,00,000",
    used: "300,00,00,000",
    provider: "Transport Dept., TN Govt.",
    receiver: "Metro Rail Corporation",
    signed: "pending",
  },
];

/* ---------------- RENDER FUNCTIONS ---------------- */

function renderCentralTable() {
  const tbody = document.querySelector("#central-table tbody");
  const ministryFilter = document.getElementById("central-ministry").value;
  const sectorFilter = document.getElementById("central-sector").value;

  tbody.innerHTML = "";

  centralProjects
    .filter((project) => {
      const ministryMatch =
        ministryFilter === "all" || project.ministry === ministryFilter;
      const sectorMatch =
        sectorFilter === "all" || project.sector === sectorFilter;
      return ministryMatch && sectorMatch;
    })
    .forEach((project) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${project.name}</td>
        <td>${project.ministryLabel || project.ministry}</td>
        <td>${project.sector.charAt(0).toUpperCase() + project.sector.slice(1)}</td>
        <td>₹ ${project.announced}</td>
        <td>₹ ${project.sanctioned}</td>
        <td>₹ ${project.used}</td>
        <td>${project.provider}</td>
        <td>${project.receiver}</td>
        <td>${renderSignatureTag(project.signed)}</td>
      `;

      tbody.appendChild(tr);
    });
}

function renderSignatureTag(status) {
  const isOk = status === "ok";
  const tagClass = isOk ? "ok" : "pending";
  const dotColor = isOk ? "var(--green)" : "var(--saffron)";
  const text = isOk ? "Signed by both" : "Awaiting one party";

  return `
    <span class="tag-sign ${tagClass}">
      <span class="tag-dot" style="background:${dotColor}"></span>
      ${text}
    </span>
  `;
}

function populateStateSelect() {
  const stateSelect = document.getElementById("state-select");
  stateSelect.innerHTML = <option value="">Select State / UT</option>;

  Object.keys(stateDistricts)
    .sort()
    .forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
}

function populateDistrictSelect(state) {
  const districtSelect = document.getElementById("district-select");
  districtSelect.innerHTML = "";

  if (!state || !stateDistricts[state]) {
    districtSelect.innerHTML = <option value="">Select a state first</option>;
    return;
  }

  const districts = stateDistricts[state];
  districtSelect.innerHTML = <option value="">All Districts</option>;

  districts.forEach((d) => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    districtSelect.appendChild(option);
  });
}

function renderStateTable() {
  const tbody = document.querySelector("#state-table tbody");
  const stateSelect = document.getElementById("state-select");
  const districtSelect = document.getElementById("district-select");

  const selectedState = stateSelect.value;
  const selectedDistrict = districtSelect.value;

  tbody.innerHTML = "";

  stateProjects
    .filter((project) => {
      if (selectedState && project.state !== selectedState) return false;
      if (selectedDistrict && project.district !== selectedDistrict)
        return false;
      return true;
    })
    .forEach((project) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${project.name}</td>
        <td>${project.state}</td>
        <td>${project.district}</td>
        <td>₹ ${project.announced}</td>
        <td>₹ ${project.sanctioned}</td>
        <td>₹ ${project.used}</td>
        <td>${project.provider}</td>
        <td>${project.receiver}</td>
        <td>${renderSignatureTag(project.signed)}</td>
      `;

      tbody.appendChild(tr);
    });
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Central filters
  document
    .getElementById("central-ministry")
    .addEventListener("change", renderCentralTable);
  document
    .getElementById("central-sector")
    .addEventListener("change", renderCentralTable);

  // State filters
  populateStateSelect();
  document
    .getElementById("state-select")
    .addEventListener("change", (e) => {
      populateDistrictSelect(e.target.value);
      renderStateTable();
    });
  document
    .getElementById("district-select")
    .addEventListener("change", renderStateTable);

  // Initial renders
  renderCentralTable();
  renderStateTable();
});
