// === Grunddaten ===
let player = {
  money: 1000,
  age: 18,
  happiness: 70,
  health: 85
};

// === UI-Elemente ===
const moneyEl = document.getElementById("money");
const ageEl = document.getElementById("age");
const happinessEl = document.getElementById("happiness");
const healthEl = document.getElementById("health");
const eventLog = document.getElementById("eventLog");

// === Buttons ===
const workBtn = document.getElementById("workBtn");
const buyBtn = document.getElementById("buyBtn");
const ageBtn = document.getElementById("ageBtn");

// === Hilfsfunktionen ===
function updateUI() {
  moneyEl.textContent = player.money;
  ageEl.textContent = player.age;
  happinessEl.textContent = player.happiness;
  healthEl.textContent = player.health;
}

function addEvent(text) {
  const p = document.createElement("p");
  p.textContent = "• " + text;
  eventLog.prepend(p);
}

// === Aktionen ===
workBtn.addEventListener("click", () => {
  const income = Math.floor(Math.random() * 201) + 100; // 100–300€
  player.money += income;
  player.happiness += Math.floor(Math.random() * 3) - 1; // ±2 Glück
  addEvent(`Du hast gearbeitet und ${income}€ verdient.`);
  updateUI();
  saveGame();
});

buyBtn.addEventListener("click", () => {
  if (player.money >= 50) {
    player.money -= 50;
    player.happiness += 5;
    addEvent("Du hast dir etwas Schönes gegönnt. 😊");
  } else {
    addEvent("Du hast nicht genug Geld zum Kaufen! 💸");
    player.happiness -= 3;
  }
  updateUI();
  saveGame();
});

ageBtn.addEventListener("click", () => {
  player.age++;
  player.health -= Math.floor(Math.random() * 5);
  player.happiness -= Math.floor(Math.random() * 3);
  randomEvent();
  updateUI();
  saveGame();
});

// === Zufällige Lebensereignisse ===
function randomEvent() {
  const events = [
    "Du findest 10€ auf der Straße! 💰",
    "Du hast dich erkältet 🤧 (-5 Gesundheit)",
    "Du hast neue Freunde gefunden! (+5 Glück)",
    "Ein Vogel hat dich getroffen... 🤦 (-2 Glück)",
    "Du hast im Lotto 100€ gewonnen! 🍀",
    "Du hattest einen stressigen Tag. (-3 Glück)"
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  addEvent(event);

  if (event.includes("10€")) player.money += 10;
  if (event.includes("100€")) player.money += 100;
  if (event.includes("erkältet")) player.health -= 5;
  if (event.includes("Freunde")) player.happiness += 5;
  if (event.includes("Vogel")) player.happiness -= 2;
  if (event.includes("stressigen")) player.happiness -= 3;
}

// === Spiel speichern & laden ===
function saveGame() {
  localStorage.setItem("reaLifePlayer", JSON.stringify(player));
}

function loadGame() {
  const data = localStorage.getItem("reaLifePlayer");
  if (data) player = JSON.parse(data);
  updateUI();
}

loadGame();
