const productos = [
    { nombre: 'Pava Eléctrica', codigo: '420405'},
    { nombre: 'Mopa Giratoria', codigo: '415221'},
    { nombre: 'Set Balde + Mopa Giratoria y Palo Extensible', codigo: '401393'}
];

let productosUrgentes = [];
let productosNoUrgentes = [];

function marcarNoUrgente(index) {
    productosNoUrgentes.push(productos[index]);
    alert(`${productos[index].nombre} marcado como normal.`);
}

function marcarUrgente(index) {
    productosUrgentes.push(productos[index]);
    alert(`${productos[index].nombre} marcado como urgente.`);
}

function generarPedido() {
    if (productosUrgentes.length === 0) {
        alert('No se ha seleccionado ningún producto urgente.');
        return;
    }



    let ws = XLSX.utils.json_to_sheet(productosUrgentes.map(item => ({
        Código: item.codigo
    })));

    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Pedido");

    // Guardar como archivo Excel
    XLSX.writeFile(wb, "Pedido_urgente.xlsx");
}
