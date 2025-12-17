document.getElementById("year").textContent = new Date().getFullYear();

async function loadProjects() {
  try {
    const res = await fetch("http://13.204.43.140:4000/projects");
    const projects = await res.json();

    const container = document.getElementById("projects");
    container.innerHTML = "";

    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><strong>Tools:</strong> ${p.tools.join(", ")}</p>
      `;
      container.appendChild(div);
    });

  } catch (e) {
    document.getElementById("projects").innerHTML =
      "<p>Backend is not running. Showing fallback project.</p>";
  }
}

loadProjects();
