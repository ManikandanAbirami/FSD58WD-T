function changeFruit(newFruit) {
  window.fruit = newFruit;
  updateDescription();
}

function changeColor(newColor) {
  const tree = document.getElementById("tree");
  tree.style.color = newColor;
  updateDescription();
}

function updateDescription() {
  const descritpion = document.getElementById("treeDescription");
  const color = document.getElementById("tree").style.color;
  const fruit = window.fruit || "apples";
  descritpion.innerText = `This tree is ${color} and has ${fruit}`;
}
