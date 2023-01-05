const categoriesElems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesElems.length}`);

categoriesElems.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
})
