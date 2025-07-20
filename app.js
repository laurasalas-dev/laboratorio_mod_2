//poo
function Movimiento(tipo, descripcion, monto) {
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.monto = monto;
}


Movimiento.prototype.mostrar = function () {
    return `${this.tipo.toUpperCase()}: ${this.descripcion} - S/ ${this.monto}`;
};


function Ingreso(descripcion, monto) {
    Movimiento.call(this, 'ingreso', descripcion, monto);
}
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

function Egreso(descripcion, monto) {
    Movimiento.call(this, 'egreso', descripcion, monto);
}
Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;

//imperativo

let movimientos = [];

function agregarMovimiento(tipo, descripcion, monto) {
    if (!descripcion || monto <= 0 || isNaN(monto)) {

        console.log("Descripción o monto inválidos!");
        return;

    }

    let nuevo;
    if (tipo === "ingreso") {

        nuevo = new Ingreso(descripcion, monto);

    } else if (tipo === "egreso") {

        nuevo = new Egreso(descripcion, monto);

    } else {

        console.log("Tipo no válido!");
        return;

    }

    movimientos.push(nuevo);
    console.log(`Movimiento agregado: ${nuevo.mostrar()}`);
}

//funcional

function mostrarResumen() {
    const totalIngresos = movimientos.
        filter(m => m instanceof Ingreso).
        reduce((sum, m) => sum + m.monto, 0);

    const totalEgresos = movimientos.
        filter(m => m instanceof Egreso).
        reduce((sum, m) => sum + m.monto, 0);

    console.log("\nRESUMEN FINANCIERO");
    console.log(`Total Ingresos: S/ ${totalIngresos}`);
    console.log(`Total Egresos : S/ ${totalEgresos}`);
    console.log(`Balance: S/ ${totalIngresos - totalEgresos}`);
}

function filtrarEgresosPorMonto(montoMinimo) {
    console.log(`\nEgresos mayores a S/ ${montoMinimo}:`);
    movimientos
        .filter(m => m instanceof Egreso && m.monto > montoMinimo)
        .forEach(m => console.log(m.mostrar()));
}

function agruparPorTipo() {
    const ingresos = movimientos.filter(m => m instanceof Ingreso);
    const egresos = movimientos.filter(m => m instanceof Egreso);

    console.log("\nINGRESOS:");
    ingresos.forEach(m => console.log(m.mostrar()));

    console.log("\nEGRESOS:");
    egresos.forEach(m => console.log(m.mostrar()));
}



console.log("Bienvenido al Gestor de Presupuesto Personal\n");

let continuar = true;

while (continuar) {

    let tipo = prompt("¿Qué deseas registrar? (ingreso / egreso / salir)").toLowerCase();

    if (tipo === "salir") {
        continuar = false;
        break;
    }

    if (tipo !== "ingreso" && tipo !== "egreso") {
        console.log("Tipo inválido!");
        continue;
    }

    let descripcion = prompt("Descripción del movimiento:");
    let monto = parseFloat(prompt("Monto (en soles):"));

    agregarMovimiento(tipo, descripcion, monto);
}



mostrarResumen();
agruparPorTipo();
filtrarEgresosPorMonto(200);



console.log("\n🧬 Validaciones prototipales:");
const demo = new Ingreso("Bono", 500);
console.log(demo instanceof Ingreso);      
console.log(demo instanceof Movimiento);   
console.log(Object.getPrototypeOf(demo) === Ingreso.prototype); 
console.log(Object.getPrototypeOf(Object.getPrototypeOf(demo)) === Movimiento.prototype); 