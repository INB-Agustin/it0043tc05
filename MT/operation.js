function FlexReset() {
  document.getElementById("flexGap").value = 0; // Changed to correct ID "flexGap"

  // Resetting flex gap and box values
  document.querySelector(".boxes").style.gap = "0px";
  
  document.getElementById("Box1").value = 0;
  document.getElementById("Box2").value = 0;
  document.getElementById("Box3").value = 0;
  
  FlexGap(); // Call FlexGap to apply changes
  FlexDirection(1); // Resetting flex direction to row
  JustifyContent(1); // Resetting justify content to start
  AlignItems(1); // Resetting align items to start
  FlexGrowFunction(2); // Resetting flex grow values
}

function FlexGap() {
  const gap = document.getElementById("flexGap").value; // Corrected ID "flexGapValue" to "flexGap"
  document.querySelector(".boxes").style.gap = `${gap}px`;
}

function FlexDirection(x) {
  const boxes = document.querySelectorAll(".boxes > div");
  
  if (x === 1) {
      document.querySelector(".boxes").style.flexDirection = "row";
      boxes.forEach(box => box.style.flexDirection = "row");
  } else if (x === 2) {
      document.querySelector(".boxes").style.flexDirection = "column";
      boxes.forEach(box => box.style.flexDirection = "column");
  }
}

function JustifyContent(x) {
  switch (x) {
      case 1:
          document.querySelector(".boxes").style.justifyContent = "flex-start";
          break;
      case 2:
          document.querySelector(".boxes").style.justifyContent = "center";
          break;
      case 3:
          document.querySelector(".boxes").style.justifyContent = "flex-end";
          break;
      case 4:
          document.querySelector(".boxes").style.justifyContent = "space-between";
          break;
      case 5:
          document.querySelector(".boxes").style.justifyContent = "space-around";
          break;
      case 6:
          document.querySelector(".boxes").style.justifyContent = "space-evenly";
          break;
      default:
          break;
  }
}

function AlignItems(x) {
  switch (x) {
      case 1:
          document.querySelector(".boxes").style.alignItems = "flex-start";
          break;
      case 2:
          document.querySelector(".boxes").style.alignItems = "center";
          break;
      case 3:
          document.querySelector(".boxes").style.alignItems = "flex-end";
          break;
      default:
          break;
  }
}

function FlexGrow(number) {
  let grow;
  if (number == 1) {
      grow = document.getElementById("Box1").value;
      document.getElementById("b1").style.flexGrow = grow;
  } else if (number == 2) {
      grow = document.getElementById("Box2").value;
      document.getElementById("b2").style.flexGrow = grow;
  } else if (number == 3) {
      grow = document.getElementById("Box3").value;
      document.getElementById("b3").style.flexGrow = grow;
  }
}
function Grow(x) {
  if (x == 1) {
      document.getElementById("b1").style.flexGrow++;
      document.getElementById("b2").style.flexGrow++;
      document.getElementById("b3").style.flexGrow++;
      document.getElementById("Box1").value++;
      document.getElementById("Box2").value++;
      document.getElementById("Box3").value++;
  } else if (x == 2) {
      document.getElementById("b1").style.flexGrow = 0;
      document.getElementById("b2").style.flexGrow = 0;
      document.getElementById("b3").style.flexGrow = 0;
      document.getElementById("Box1").value = 0;
      document.getElementById("Box2").value = 0;
      document.getElementById("Box3").value = 0;
}
}
