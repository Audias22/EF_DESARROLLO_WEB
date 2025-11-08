interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    categoria?: string;
}

class Inventario {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`Producto agregado: ${producto.nombre}`);
    }

    eliminarProducto(id: number): void {
        const index = this.productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const productoEliminado = this.productos.splice(index, 1)[0];
            console.log(`Producto eliminado: ${productoEliminado?.nombre}`);
        } else {
            console.log(`Producto con ID ${id} no encontrado`);
        }
    }

    actualizarCantidad(id: number, nuevaCantidad: number): void {
        const producto = this.productos.find(p => p.id === id);
        if (producto) {
            producto.cantidad = nuevaCantidad;
            console.log(`Cantidad actualizada para ${producto.nombre}: ${nuevaCantidad}`);
        } else {
            console.log(`Producto con ID ${id} no encontrado`);
        }
    }

    mostrarInventario(): void {
        console.log("\n--- INVENTARIO ACTUAL ---");
        if (this.productos.length === 0) {
            console.log("El inventario está vacío");
            return;
        }
        
        this.productos.forEach(producto => {
            console.log(`ID: ${producto.id} | ${producto.nombre} | $${producto.precio} | Cantidad: ${producto.cantidad}${producto.categoria ? ` | Categoría: ${producto.categoria}` : ''}`);
        });
    }
}

const inventario = new Inventario();

console.log("--- GESTIÓN DE INVENTARIO ---");

inventario.agregarProducto({
    id: 1,
    nombre: "Laptop HP",
    precio: 800,
    cantidad: 5,
    categoria: "Electrónicos"
});

inventario.agregarProducto({
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 25,
    cantidad: 20,
    categoria: "Accesorios"
});

inventario.agregarProducto({
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 120,
    cantidad: 10
});

inventario.mostrarInventario();

console.log("\n--- ACTUALIZANDO CANTIDADES ---");
inventario.actualizarCantidad(1, 3);
inventario.actualizarCantidad(2, 15);

inventario.mostrarInventario();

console.log("\n--- ELIMINANDO PRODUCTO ---");
inventario.eliminarProducto(2);

inventario.mostrarInventario();

console.log("\n--- PROBANDO OPERACIONES CON ID INEXISTENTE ---");
inventario.actualizarCantidad(99, 10);
inventario.eliminarProducto(99);