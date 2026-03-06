const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  image: "images/character.webp",

  attacked: function() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert("This page says\nCharacter has died");
    }
    updateStats();
  },

  levelUp: function() {
    this.level += 1;
    updateStats();
  }
};

const charName = document.getElementById("charName");
const charClass = document.getElementById("charClass");
const charLevel = document.getElementById("charLevel");
const charHealth = document.getElementById("charHealth");
const charImage = document.getElementById("charImage");

const attackBtn = document.getElementById("attackBtn");
const levelUpBtn = document.getElementById("levelUpBtn");

function updateStats() {
  charName.textContent = character.name;
  charClass.textContent = character.class;
  charLevel.textContent = character.level;
  charHealth.textContent = character.health;
  charImage.src = character.image;
}

updateStats();

attackBtn.addEventListener("click", () => {
  character.attacked();
});

levelUpBtn.addEventListener("click", () => {
  character.levelUp();
});
