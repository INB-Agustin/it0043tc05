let containers = document.querySelectorAll(".boxes");

function FlexReset() {
  containers.forEach(container => {
    container.style.flexDirection = "row";
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "stretch";
    container.style.gap = "0px";
    container.querySelectorAll(".b1, .b2, .b3").forEach(box => {
      box.style.flexGrow = "0";
    });
  });
  document.getElementById("flexGap").value = 0;
  document.querySelectorAll(".flexGrowInput input").forEach(input => input.value = 0);
}

function FlexGap() {
  const gap = document.getElementById("flexGap").value;
  containers.forEach(container => {
    container.style.gap = `${gap}px`;
  });
}

function FlexDirection(direction) {
  containers.forEach(container => {
    container.style.flexDirection = direction === 1 ? "row" : "column";
  });
}

function JustifyContent(justify) {
  containers.forEach(container => {
    switch (justify) {
      case 1:
        container.style.justifyContent = "flex-start";
        break;
      case 2:
        container.style.justifyContent = "center";
        break;
      case 3:
        container.style.justifyContent = "flex-end";
        break;
      case 4:
        container.style.justifyContent = "space-between";
        break;
      case 5:
        container.style.justifyContent = "space-around";
        break;
      case 6:
        container.style.justifyContent = "space-evenly";
        break;
    }
  });
}

function AlignItems(align) {
  containers.forEach(container => {
    switch (align) {
      case 1:
        container.style.alignItems = "start";
        break;
      case 2:
        container.style.alignItems = "center";
        break;
      case 3:
        container.style.alignItems = "end";
        break;
    }
  });
}

resetGrowButton.addEventListener('click', function () {
  flexGrowInputs.forEach(input => input.value = 0);
  updateFlexGrow();
});

growAllButton.addEventListener('click', function () {
  flexGrowInputs.forEach(input => input.value = 1);
  updateFlexGrow();
});

flexGrowInputs.forEach(input => {
  input.addEventListener('input', updateFlexGrow);
});

document.addEventListener("DOMContentLoaded", function () {
  FlexReset();
});
