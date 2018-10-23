const _ = require("lodash");
function component() {
	let element = document.createElement('div');
	var name = "O";
	fetch("/api/greeting/" + name)
	.then((resp) => resp.json())
	.then((resp) => {
		console.log(resp);
		element.innerHTML = resp;
	})

	//element.innerHTML = _.join(['Hello', 'there!'], ' ');
	return element;
}
document.body.appendChild(component());

