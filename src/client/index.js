const _ = require("lodash");
function component() {
 let element = document.createElement('div');
 /*fetch("/api/greeting/" + name)
 .then((resp) => resp.json())
 .then((data) => {
 	console.log(data);
 })*/

 element.innerHTML = _.join(['Hello', 'there!'], ' ');
 return element;
}
document.body.appendChild(component());

