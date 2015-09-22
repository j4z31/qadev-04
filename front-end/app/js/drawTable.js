//TRAINNER
var drawTable = function(size, text){
	$('#button').attr("disabled", true);

	var table = $('<table border="1" style="width:100%"></table>');
	var row;

	for (var i = 0; i < size; i++) {
		row = createRow();
		
		for (var cel = 0; cel < size; cel++) {
			row.append(createCell(text));
		};

		table.append(row);
	};

	//$('body').text('');
	//$('body').append(table);

	$('#tabla').text('').append(table); // EN UNA SOLA LINEA

	attacheListeners('#');
};

var createRow = function(){
	var row = $('<tr></tr>');
	return row;
};

var createCell = function(text){
	var cell = $('<td>' + text + '</td>');
	return cell;
};

var attacheListeners = function(text){
	$('td').on('click', function(event){
		// event.target donde se realiza el evento
		//console.log('First cell clicked', event.target);
		$(this).text(text);
	});
};