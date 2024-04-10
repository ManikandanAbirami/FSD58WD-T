// const listItems = document.querySelectorAll("li");

// const p = document.createElement("p");
// p.textContent = "Guvi FSDWD58-T";

// document.body.prepend(p);

// const ele = document.getElementById("sample");
// console.log("TextContent:", ele.textContent);
// console.log("InnerHtml:", ele.innerHTML);
// console.log("InnerText:", ele.innerText);

// const p = document.createElement("p");
// p.textContent = "Testing";

// console.log("TextContent:", p.textContent);
// console.log("InnerHtml:", p.innerHTML);
// console.log("InnerText:", p.innerText);

const parent = document.getElementById("parent");
const child = document.createElement("div");
const childTwo = document.createElement("div");
child.innerText = "This is child!!";
childTwo.innerText = "This is child two!!";
// parent.appendChild(child);
parent.append(child, childTwo, "This is sibiling node.", "Additional");
