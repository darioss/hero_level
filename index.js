let heroName;
let heroLevel;
let xp;

const level = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante"
];

let hero = [
  ["William Wallace", 1300], //bronze
  ["Superman", 11000], //Radiante
  ["Spiderman", 8000], //Platina
  ["He-man", 3500],//Prata
  ["Jaspion", 7500],//Platina
  ["Jiraya", 6000],//Ouro
  ["John Wick", 800],//Ferro
  ["Thor", 9000],//Ascendente
  ["Chuck Norris", 9500]//Imortal
];

for (let i = 0; i < hero.length; i++) {
  switch (hero[i][0]) {
    case "William Wallace":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Superman":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Spiderman":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "He-man":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Jaspion":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Jiraya":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "John Wick":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Thor":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
    case "Chuck Norris":
      heroName = hero[i][0];
      xp = hero[i][1];
      break;
  }

  if (xp <= 1000) {
    heroLevel = level[0];
  } else if (xp > 1000 && xp <= 2000) {
    heroLevel = level[1];
  } else if (xp > 2000 && xp <= 5000) {
    heroLevel = level[2];
  } else if (xp > 5000 && xp <= 7000) {
    heroLevel = level[3];
  } else if (xp > 7000 && xp <= 8000) {
    heroLevel = level[4];
  } else if (xp > 8000 && xp <= 9000) {
    heroLevel = level[5];
  } else if (xp > 9000 && xp <= 10000) {
    heroLevel = level[6];
  } else if (xp > 10000) {
    heroLevel = level[7];
  }
  console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel + ".");
}