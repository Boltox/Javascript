
function modifyHeading() {
  const heading = document.querySelector("h1");
  if (heading) heading.textContent = "Modified Heading!";
}

function modifyExercise2Heading() {
  const heading2 = document.querySelector("h2");
  if (heading2) {
    heading2.style.fontSize = "28px";
    heading2.style.color = "#3498db";
    heading2.style.backgroundColor = "#f4f4f4";
    heading2.style.padding = "10px";
  }
}

function appendParagraph() {
  const paras = document.querySelectorAll("p");
  if (paras.length >= 4) {
    const newPara = document.createElement("p");
    newPara.innerHTML =
      '<em>"Lorem ipsum"</em> dolor sit amet, consectetur adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetur et venenatis eget velit. <br><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="80">';
    paras[3].after(newPara);
  }
  document.body.style.backgroundColor = "#f0f9ff";
}

function hideMe() {
  const el = document.getElementById("me");
  if (el) el.style.display = "none";
}

function showMe() {
  const el = document.getElementById("me");
  if (el) el.style.display = "block";
}

function surprise() {
  const elements = document.querySelectorAll(".surprise");
  elements.forEach(el => (el.style.fontSize = "20px"));
}

function changeImage(select) {
  const choice = select.value;
  alert("You selected: " + choice);
  const image = document.getElementById("carimage");
  if (image) {
    if (choice === "car1") image.src = "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80";
    else if (choice === "car2") image.src = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";
    else image.src = "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80";
  }
}

function addBorder(img) {
  img.style.border = "4px solid #4caf50";
}

function removeBorder(img) {
  img.style.border = "none";
}

function moveImage() {
  const car = document.getElementById("carimage");
  if (car) {
    car.style.position = "relative";
    car.style.left = "200px";
    car.style.top = "500px";
  }
}

let pos = 0;
let direction = 1;
let moveInterval;

function doMove() {
  const car = document.getElementById("carimage");
  if (!car) return;

  clearInterval(moveInterval);
  car.style.position = "relative";
  moveInterval = setInterval(() => {
    pos += 5 * direction;
    if (pos > 500 || pos < 0) direction *= -1;
    car.style.left = pos + "px";
  }, 30);
}

function fadeOut() {
  const car = document.getElementById("carimage");
  if (!car) return;
  let opacity = 1;
  const fadeInterval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fadeInterval);
    } else {
      opacity -= 0.05;
      car.style.opacity = opacity;
    }
  }, 100);
}

function disappear() {
  const car = document.getElementById("carimage");
  if (car) car.remove();
}

function addRow() {
  const name = document.getElementById("nameField").value;
  const position = document.getElementById("positionField").value;
  const salary = document.getElementById("salaryField").value;

  const table = document.querySelector("table");
  if (!table) return;

  const row = table.insertRow(-1);
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = position;
  row.insertCell(2).textContent = "$" + salary;
}
