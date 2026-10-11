const mostrarTablaDividir = (event) => {
	event.preventDefault();
	const numero = Number(document.getElementById('numeroDivision').value);

	if (numero >= 0 && numero <= 10) {
		let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2>`;
		tablaDividir += '<ul>';
		for (let i = 1; i <= 10; i++) {
			tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
		}
		tablaDividir += '</ul>';
		document.getElementById('tablaDivision').innerHTML = tablaDividir;
	} else {
		alert('El número introducido debe estar entre 0 y 10 (ambos inclusive)');
		document.getElementById('numeroDivision').value = '';
	}
};