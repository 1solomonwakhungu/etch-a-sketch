let container = document.querySelector(".container");

for (let x = 0; x < 256; x++) {
  let cells = document.createElement("div");
  cells.innerText = "A";
  cells.classList.add("cell");

  container.append(cells);
}