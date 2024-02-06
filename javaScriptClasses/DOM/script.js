var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
headerTitle.textContent = 'BignarCode';
// console.log(headerTitle);

// headerTitle.innerText = 'Coder vikash';

// headerTitle.innerHTML = '<h1>Hello</h1>'

// headerTitle.style.borderBottom = '5px solid red';

// var header = document.getElementById('header');
// header.style.borderBottom = '10px solid green';

var item = document.getElementsByClassName('list-item');
// console.log(item[0]);
item[0].textContent = 'CSS';
item[3].textContent = 'javaScript';
item[1].style.color = 'red';
item[2].style.fontWeight = 'bold';
item[3].style.backgroundColor = 'yellow';
for(let key = 0;key < item.length;key++){
   item[key].style.backgroundColor = 'yellow';

}