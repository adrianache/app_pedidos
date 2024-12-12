const productos = [
    { nombre: 'Jarra eléctrica', codigo: '176087', descripcion: 'Jarra eléctrica 1L - modelo 2024' },
    { nombre: 'Termo de acero', codigo: '154672', descripcion: 'Termo de acero inoxidable' },
    { nombre: 'Vaso térmico', codigo: '128765', descripcion: 'Vaso térmico grande' }
];

let productosUrgentes = [];

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
        Código: item.codigo,
        Descripción: item.descripcion
    })));

    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Pedido");

    // Guardar como archivo Excel
    XLSX.writeFile(wb, "Pedido_urgente.xlsx");
}
