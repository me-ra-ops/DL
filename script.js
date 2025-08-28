// Dummy login (replace with real later)
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "student" && pass === "1234") {
    alert("Login successful!");
    showSection("dashboard");
    document.getElementById("loginPage").style.display = "none";
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  alert("Logged out!");
  location.reload();
}

function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function toggleList(header) {
  const list = header.nextElementSibling; // the <ul> after <h3>

  if (list.style.height && list.style.height !== "0px") {
    // Slide up
    list.style.height = "0px";
  } else {
    // Slide down to content height
    list.style.height = list.scrollHeight + "px";
  }
}



// Example requests
let requested = ["Leave for 02/09/2025", "Duty leave for seminar"];
let approved = ["Leave for 25/08/2025"];

function renderLists() {
  const reqList = document.getElementById("requestedList");
  const appList = document.getElementById("approvedList");

  reqList.innerHTML = "";
  appList.innerHTML = "";

  requested.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    reqList.appendChild(li);
  });

  approved.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    appList.appendChild(li);
  });
}

renderLists();
