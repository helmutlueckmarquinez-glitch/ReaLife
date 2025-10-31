document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const realLifeBtn = document.getElementById("realLifeBtn");
  const friendsBtn = document.getElementById("friendsBtn");
  const settingsBtn = document.getElementById("settingsBtn");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  startBtn.addEventListener("click", () => {
    window.location.href = "spiel.html";
});

  realLifeBtn.addEventListener("click", () => {
    alert("Echtes Leben wird geladen...");
  });

  friendsBtn.addEventListener("click", () => {
    alert("Freunde werden verbunden...");
  });

  settingsBtn.addEventListener("click", () => {
    window.location.href = "settings.html";
  });

  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
  });
});
