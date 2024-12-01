
const body = document.querySelector("body");


body.style.padding = "20px";
body.style.maxWidth = "700px";
body.style.margin = "20px auto";
body.style.backgroundColor = "purple";
body.style.fontFamily = "'Trebuchet MS', sans-serif";
body.style.color = "black";


const h1 = document.createElement("h1");
h1.textContent = "Który kraj ma większą populację?";
h1.style.fontSize = "36px";
h1.style.marginBottom = "20px";
h1.style.textAlign = "center";
h1.style.color = "red";
h1.style.textShadow = "1px 1px 2px";


const divFlags = document.createElement("div");
divFlags.style.display = "flex";
divFlags.style.justifyContent = "space-between";
divFlags.style.gap = "30px";
divFlags.style.marginBottom = "20px";


const divLeft = document.createElement("div");
divLeft.style.display = "flex";
divLeft.style.flexDirection = "column";
divLeft.style.alignItems = "center";
divLeft.style.border = "3px solid red";
divLeft.style.borderRadius = "12px";
divLeft.style.padding = "15px";
divLeft.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
divLeft.style.width = "200px";
divLeft.style.height = "220px";
divLeft.style.backgroundColor = "violet";

const imgLeft = document.createElement("img");
imgLeft.style.width = "100%";
imgLeft.style.height = "100px";
imgLeft.style.cursor = "pointer";
imgLeft.style.borderRadius = "8px";

let h2Left = document.createElement("h2");
h2Left.style.fontSize = "18px";
h2Left.style.marginTop = "10px";
h2Left.style.textAlign = "center";
h2Left.style.color = "black";

let populationLeft = document.createElement("p");
populationLeft.style.display = "none";
populationLeft.style.fontSize = "14px";
populationLeft.style.marginTop = "5px";
populationLeft.style.color = "black";


const divRight = document.createElement("div");
divRight.style.display = "flex";
divRight.style.flexDirection = "column";
divRight.style.alignItems = "center";
divRight.style.border = "3px solid red";
divRight.style.borderRadius = "12px";
divRight.style.padding = "15px";
divRight.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
divRight.style.width = "200px";
divRight.style.height = "220px";
divRight.style.backgroundColor = "violet";

const imgRight = document.createElement("img");
imgRight.style.width = "100%";
imgRight.style.height = "100px";
imgRight.style.cursor = "pointer";
imgRight.style.borderRadius = "8px";

let h2Right = document.createElement("h2");
h2Right.style.fontSize = "18px";
h2Right.style.marginTop = "10px";
h2Right.style.textAlign = "center";
h2Right.style.color = "black";

let populationRight = document.createElement("p");
populationRight.style.display = "none";
populationRight.style.fontSize = "14px";
populationRight.style.marginTop = "5px";
populationRight.style.color = "black";


const controlsDiv = document.createElement("div");
controlsDiv.style.display = "flex";
controlsDiv.style.flexDirection = "column";
controlsDiv.style.alignItems = "center";
controlsDiv.style.marginTop = "30px";

const nextButton = document.createElement("button");
nextButton.textContent = "Następne kraje";
nextButton.style.display = "none";
nextButton.style.padding = "10px 20px";
nextButton.style.fontSize = "16px";
nextButton.style.color = "black";
nextButton.style.backgroundColor = "violet";
nextButton.style.border = "none";
nextButton.style.borderRadius = "5px";
nextButton.style.cursor = "pointer";
nextButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
nextButton.onmouseover = () => (nextButton.style.backgroundColor = "white");
nextButton.onmouseout = () => (nextButton.style.backgroundColor = "white");
nextButton.onclick = () => {
  resetUI();
  losujKraje();
};

const scoreBox = document.createElement("div");
scoreBox.style.borderRadius = "10px";
scoreBox.style.padding = "10px";
scoreBox.style.width = "100%";
scoreBox.style.marginBottom = "20px";
scoreBox.style.backgroundColor = "violet";
scoreBox.style.textAlign = "center";
scoreBox.style.border = "3px solid red";

let correct = 0;
let incorrect = 0;
const correctDisplay = document.createElement("p");
correctDisplay.textContent = `Poprawne: ${correct}`;
correctDisplay.style.fontSize = "18px";
correctDisplay.style.marginBottom = "10px";

const incorrectDisplay = document.createElement("p");
incorrectDisplay.textContent = `Niepoprawne: ${incorrect}`;
incorrectDisplay.style.fontSize = "18px";

const endMessage = document.createElement("h2");
endMessage.style.display = "none";
endMessage.style.marginTop = "20px";
endMessage.style.color = "red";

const replayButton = document.createElement("button");
replayButton.textContent = "Zagraj ponownie";
replayButton.style.display = "none";
replayButton.style.padding = "10px 20px";
replayButton.style.fontSize = "16px";
replayButton.style.color = "#ffffff";
replayButton.style.backgroundColor = "violet";
replayButton.style.border = "none";
replayButton.style.borderRadius = "5px";
replayButton.style.cursor = "pointer";
replayButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
replayButton.onmouseover = () => (replayButton.style.backgroundColor = "#3d405b");
replayButton.onmouseout = () => (replayButton.style.backgroundColor = "#e07a5f");
replayButton.onclick = () => {
  correct = 0;
  incorrect = 0;
  correctDisplay.textContent = `Poprawne: ${correct}`;
  incorrectDisplay.textContent = `Niepoprawne: ${incorrect}`;
  endMessage.style.display = "none";
  replayButton.style.display = "none";
  resetUI();
  losujKraje();
};


function resetUI() {
  populationLeft.style.display = "none";
  populationRight.style.display = "none";
  nextButton.style.display = "none";
}


async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/region/europe");
  const data = await response.json();
  return data;
}

async function losujKraj() {
  const data = await getData();
  const remainingCountries = data.filter(
    (country) => !usedCountries.includes(country.name.common)
  );
  if (remainingCountries.length === 0) {
    return null;
  }
  const rand = Math.floor(Math.random() * remainingCountries.length);
  const country = remainingCountries[rand];
  usedCountries.push(country.name.common);
  return country;
}

async function losujKraje() {
  const countryLeft = await losujKraj();
  const countryRight = await losujKraj();

  if (!countryLeft || !countryRight) {
    endMessage.textContent = "Brak krajów do losowania! Gra zakończona.";
    endMessage.style.display = "block";
    replayButton.style.display = "block";
    return;
  }

  currentCountries.left = countryLeft;
  currentCountries.right = countryRight;

  imgLeft.setAttribute("src", countryLeft.flags.png);
  imgRight.setAttribute("src", countryRight.flags.png);

  h2Left.textContent = countryLeft.name.common;
  h2Right.textContent = countryRight.name.common;

  resetUI();

  imgLeft.onclick = () => handleGuess("left");
  imgRight.onclick = () => handleGuess("right");
}

function handleGuess(selected) {
  const selectedCountry = currentCountries[selected];
  const otherCountry =
    selected === "left" ? currentCountries.right : currentCountries.left;

  populationLeft.textContent = `Populacja: ${currentCountries.left.population.toLocaleString()} osób`;
  populationRight.textContent = `Populacja: ${currentCountries.right.population.toLocaleString()} osób`;

  populationLeft.style.display = "block";
  populationRight.style.display = "block";

  if (
    (selected === "left" &&
      currentCountries.left.population > currentCountries.right.population) ||
    (selected === "right" &&
      currentCountries.right.population > currentCountries.left.population)
  ) {
    correct++;
    correctDisplay.textContent = `Poprawne: ${correct}`;
  } else {
    incorrect++;
    incorrectDisplay.textContent = `Niepoprawne: ${incorrect}`;
  }

  if (correct >= 5) {
    endMessage.textContent = "Gratulacje, wygrałeś grę!";
    endMessage.style.display = "block";
    replayButton.style.display = "block";
  } else if (incorrect >= 5) {
    endMessage.textContent = "Niestety, przegrałeś grę!";
    endMessage.style.display = "block";
    replayButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
  }
}


divLeft.appendChild(imgLeft);
divLeft.appendChild(h2Left);
divLeft.appendChild(populationLeft);

divRight.appendChild(imgRight);
divRight.appendChild(h2Right);
divRight.appendChild(populationRight);

divFlags.appendChild(divLeft);
divFlags.appendChild(divRight);

scoreBox.appendChild(correctDisplay);
scoreBox.appendChild(incorrectDisplay);

controlsDiv.appendChild(scoreBox);
controlsDiv.appendChild(nextButton);
controlsDiv.appendChild(endMessage);
controlsDiv.appendChild(replayButton);

body.appendChild(h1);
body.appendChild(divFlags);
body.appendChild(controlsDiv);


const currentCountries = {};
const usedCountries = [];
losujKraje();








