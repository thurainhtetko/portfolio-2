document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");

  var projects = [
    {
      id: "01",
      name: "IT Star CRM",
      desc: "Internal tool for ticket management at IT Star",
      stack: ["Blazor", "C#", "FastAPI"],
      status: "stable",
      link: "https://crm.itstar.io",
    },
    {
      id: "02",
      name: "aiPOS",
      desc: "POS for small to medium businesses at IT Star",
      stack: ["Blazor", "C#", "gRPC"],
      status: "active",
      link: "https://aipos.app",
    },
    {
      id: "03",
      name: "foodfusion",
      desc: "Social media like web app to share recipes",
      stack: ["PHP", "Tailwind", "OAuth2"],
      status: "stable",
      link: "https://foodfusion.infinityfreeapp.com",
    },
    {
      id: "04",
      name: "smart quiz",
      desc: "AI quiz generator",
      stack: ["PHP", "JavaScript", "OpenAI", "OAuth2"],
      status: "stable",
      link: "https://smartquiz.infinityfree.io",
    },
  ];

  var skills = [
    {
      category: "Languages",
      items: ["PHP", "C#", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["Blazor", "Flutter", "Tailwind", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: [".NET", "Firebase", "Supabase"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
  ];

  var experience = [
    {
      period: "2025 — now",
      role: "Full Stack Developer",
      org: "IT Star",
      detail: "Built internal ticket management and POS systems",
    },
  ];

  var aboutInfo = [
    { label: "Location", value: "Mandalay, MM" },
    { label: "Education", value: "Strategy First" },
    { label: "Currently", value: "IT Star" },
    { label: "Status", value: "Open to offers" },
  ];

  var contactLinks = [
    { label: "email", value: "thurainhtetko123@gmail.com", href: "mailto:thurainhtetko123@gmail.com" },
    { label: "github", value: "thurainhtetko", href: "https://github.com/thurainhtetko" },
  ];

  var downloadSvg =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>';

  function getDoodleImg(name, alt, cls) {
    return (
      '<img alt="' +
      alt +
      '" class="' +
      cls +
      '" src="https://opendoodles.s3-us-west-1.amazonaws.com/' +
      name +
      '.svg"/>'
    );
  }

  var html = "";

  html += '<nav><div class="nav-inner">';
  html += '<span class="nav-logo">thurainhtetko<span class="accent">_</span></span>';
  html += '<div class="nav-links">';
  html += '<button class="nav-btn" data-target="work">work</button>';
  html += '<button class="nav-btn" data-target="stack">stack</button>';
  html += '<button class="nav-btn" data-target="experience">experience</button>';
  html += '<button class="nav-btn" data-target="about">about</button>';
  html += '<button class="nav-btn" data-target="contact">contact</button>';
  html += "</div>";
  html += '<button class="nav-toggle" aria-label="toggle menu" aria-expanded="false">';
  html += "<span></span><span></span><span></span>";
  html += "</button>";
  html += "</div></nav>";

  html += '<section class="hero">';
  html += '<div class="hero-grid">';
  html += '<div class="hero-left">';
  html += '<p class="tagline">[software engineer]</p>';
  html += '<h1 class="hero-name">THURAIN</h1>';
  html += '<div class="hero-bio">';
  html +=
    "<p>I build scalable mobile and web applications and occasional games. Based in Mandalay, Myanmar.</p>";
  html += '<a href="./cv.pdf" target="_blank" download class="cv-btn">' + downloadSvg + "Download CV</a>";
  html += "</div></div>";
  html += '<div class="hero-right">';
  html += getDoodleImg("sitting-reading", "illustrated figure sitting and reading", "doodle");
  html += "</div></div>";

  // html += '<div class="stats-grid">';
  // html += '<div class="stat"><span class="stat-num">9</span><span class="stat-label">years writing code</span></div>';
  // html += '<div class="stat"><span class="stat-num">47k</span><span class="stat-label">commits pushed</span></div>';
  // html += '<div class="stat"><span class="stat-num">6</span><span class="stat-label">open source projects</span></div>';
  // html += '<div class="stat"><span class="stat-num">38M</span><span class="stat-label">npm downloads</span></div>';
  // html += "</div></section>";
  html += "</section>";

  html += '<section id="work" class="section">';
  html += '<div class="section-head"><span class="section-num">[01]</span><h2>Selected Work</h2></div>';
  html += '<div class="work-grid">';
  projects.forEach(function (p) {
    html += '<a href="' + p.link + '" class="project-card" target="_blank" rel="noopener">';
    html += '<div class="project-top"><span class="project-id">' + p.id + '</span><span class="project-name">' + p.name + "</span></div>";
    html += '<p class="project-desc">' + p.desc + "</p>";
    html += '<div class="project-bottom"><div class="project-stack">';
    p.stack.forEach(function (s) {
      html += '<span class="stack-tag">' + s + "</span>";
    });
    html += '</div><span class="status status-' + p.status + '">' + p.status + "</span>";
    html += "</div></a>";
  });
  html += "</div></section>";

  html += '<section id="stack" class="section">';
  html += '<div class="section-head"><span class="section-num">[02]</span><h2>Technical Stack</h2></div>';
  html += '<div class="stack-grid">';
  html += '<div class="stack-categories">';
  skills.forEach(function (cat) {
    html += '<div class="stack-cat"><p class="stack-cat-name">' + cat.category + "</p>";
    html += '<div class="stack-items">';
    cat.items.forEach(function (item) {
      html += '<span class="stack-item">' + item + "</span>";
    });
    html += "</div></div>";
  });
  html += "</div>";
  html += "</div></section>";

  html += '<section id="experience" class="section">';
  html += '<div class="section-head"><span class="section-num">[03]</span><h2>Experience</h2></div>';
  html += '<div class="experience">';
  experience.forEach(function (e) {
    html += '<div class="exp-row">';
    html += '<span class="exp-period">' + e.period + "</span>";
    html += '<span class="exp-role">' + e.role + "</span>";
    html += '<span class="exp-org">' + e.org + "</span>";
    html += '<span class="exp-detail">' + e.detail + "</span>";
    html += "</div>";
  });
  html += "</div></section>";

  html += '<section id="about" class="section">';
  html += '<div class="section-head"><span class="section-num">[04]</span><h2>About</h2></div>';
  html += '<div class="about-grid">';
  html += '<div class="about-text">';
  html += "<p>I've been studying and building software with experience in web and mobile development. I work with technologies such as PHP, C#, Flutter, Blazor, Firebase, MySQL, and JavaScript. I enjoy building practical applications and learning how different technologies work together.</p>";
  html += "<p>I have worked on projects involving AI quiz generation, real-time chat applications, and finance tools. Outside of development, I continue learning new technologies and working on personal projects.</p>";
  html += "<p>I'm currently exploring opportunities where I can improve my skills and gain more experience in software development.</p>";
  html += "</div>";
  html += '<div class="about-sidebar">';
  aboutInfo.forEach(function (info) {
    html += '<div class="info-item"><span class="info-label">' + info.label + '</span><span class="info-value">' + info.value + "</span></div>";
  });
  html += "</div></div></section>";

  html += '<section id="contact" class="section">';
  html += '<div class="section-head"><span class="section-num">[05]</span><h2>Contact</h2></div>';
  html += '<div class="contact-grid">';
  html += '<div class="contact-left">';
  html += '<h3 class="contact-heading">LET\'S BUILD<br/>SOMETHING.</h3>';
  html += "<p>Reach out for collaboration, job opportunities, or just to talk.</p>";
  html += "</div>";
  html += '<div class="contact-links">';
  contactLinks.forEach(function (link) {
    html += '<a href="' + link.href + '" class="contact-link"><span class="cl-label">' + link.label + '</span><span class="cl-value">' + link.value + "</span></a>";
  });
  html += "</div></div></section>";

  html += "<footer>";
  html += '<span>Ac 2026 thurain htet ko</span>';
  html += '<span>works on my machine</span>';
  html += "</footer>";

  root.innerHTML = html;

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  function closeMenu() {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("nav") && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });

  document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeMenu();
      var target = document.getElementById(this.getAttribute("data-target"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
