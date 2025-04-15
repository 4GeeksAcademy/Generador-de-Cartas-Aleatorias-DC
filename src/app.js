document.addEventListener("DOMContentLoaded", Card); // Cuando el DOM esté listo, ejecuta este código

function Card() {
  const simbol = ["♦", "♥", "♠", "♣"];
  const number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Seleccionamos aleatoriamente un simbolo o un numero //

  let randomSimbol = simbol[Math.floor(Math.random() * simbol.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  // Agrega los valores de los numeros y simbolos //

  document.querySelector("#simbol-left").textContent = randomSimbol;
  document.querySelector("#simbol-right").textContent = randomSimbol;
  document.querySelector("#number-center").textContent = randomNumber;

  // Cambia el color de los simbolos //

  if (randomSimbol === "♥" || randomSimbol === "♦") {
    document
      .querySelectorAll("#simbol-left, #simbol-right")
      .forEach((rojo) => (rojo.style.color = "red"));
  } else {
    document
      .querySelectorAll("#simbol-left, #simbol-right")
      .forEach((negro) => (negro.style.color = "black"));
  }
}

