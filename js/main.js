function changeColor(element) {
	element.className = 'form-input' + ' ' +  element.options[element.selectedIndex].className;	
}

function addRow() {
	document.getElementsByClassName("no_entries_row")[0].style.display = "none";

	var x = document.getElementById('tbody');
    var new_row = x.rows[0].cloneNode(true);
    new_row.style.display = "table-row";
    var len = x.rows.length - 1;
    new_row.id += len;
    x.appendChild(new_row);	
}

function removeRow(o) {
	var myrow = document.getElementsByClassName("template_row")[1];
	var lastrow = document.getElementById("tbody").lastChild;
	var mlr = myrow.isEqualNode(lastrow);

	var p = o.parentNode.parentNode;

	if ( mlr === true ) {
		location.reload();
	} else {
		p.parentNode.removeChild(p);
	}	
}

function mySubmit() {
	document.getElementsByClassName("popup")[0].style.display = "block";
}

function myCancel() {
	document.getElementsByClassName("popup")[0].style.display = "none";
}