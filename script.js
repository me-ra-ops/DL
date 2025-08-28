// Login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "student" && pass === "1234") {
    showSection("dashboard");
    document.getElementById("loginPage").style.display = "none";
    renderLists(); // render after login
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  location.reload();
}

function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Example requests
let requested = ["Leave for 02/09/2025", "Duty leave for seminar"];
let approved = ["Leave for 25/08/2025"];

// Render lists dynamically
function renderLists() {
  const reqList = document.getElementById("requestedList");
  const appList = document.getElementById("approvedList");

  reqList.innerHTML = "";
  appList.innerHTML = "";

  requested.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    reqList.appendChild(li);
  });

  approved.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    appList.appendChild(li);
  });

  // Set initial height = 0 for all lists
  document.querySelectorAll(".collapsible").forEach(ul => ul.style.height = "0px");
}

// Slide toggle function
function toggleList(header) {
  const list = header.nextElementSibling;

  // Get the real height of the content
  const fullHeight = list.scrollHeight + "px";

  if (list.style.height === "0px" || !list.style.height) {
    list.style.height = fullHeight; // slide down
  } else {
    list.style.height = "0px"; // slide up
  }
}
