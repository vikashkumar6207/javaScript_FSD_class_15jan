// let container = document.getElementById("container");
// const h1 = document.createElement("h1");
// h1.textContent = "hello this is new headding";
// container.appendChild(h1);
// const p = document.createElement("p");
// // container.appendChild(p);
// p.textContent = "this is new p tag";
// h1.id = "try";
// h1.className = "introclass";
// p.id = "intro";
// const body = document.body;
// body.appendChild(p);


// const ullist = document.getElementById("list");
// let list1 = document.createElement("li");
// list1.textContent = "this is list one";
// ullist.appendChild(list1);
// list1.className = "Li_1";

// const lis_1 = document.getElementsByClassName("Li_1");

// let list2 = document.createElement("li");
// list2.textContent = "this is sibling list";
// lis_1.

const ul = document.getElementById("list");
let newElm = document.createElement("li");
newElm.textContent = "this is new list";
// ul.appendChild(newElm);
let pos = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
ul.insertBefore(newElm,pos);

const container = document.body;
let h1 = document.createElement("h1");
h1.textContent = "this is h1 tag";
let divContaner = document.getElementById("container");
container.insertBefore(h1,divContaner);

let p = document.createElement("p");
p.textContent = "this is new p element";
divContaner.appendChild(p);

let pos2 = ul.firstElementChild.nextElementSibling;
let h2 = document.createElement("h2");
pos2.before(h2);
h2.textContent = "this is new h2 element";