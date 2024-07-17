
function convertir() {
    let decimal = parseInt(document.getElementById("decimal").value);

    // Verificar que el input sea un número decimal válido
    if (isNaN(decimal) || decimal < 0) {
        document.getElementById("resultado").textContent = "El input debe ser un número decimal válido.";
        console.error("El input debe ser un número decimal válido.");
    } else {
        let binario = '';
        while (decimal > 0) {
            binario = (decimal % 2) + binario;
            decimal = Math.floor(decimal / 2);
        }

        // Si el número es 0
        if (binario === '') {
            binario = '0';
        }

        document.getElementById("resultado").textContent = `El número decimal ${decimal} en binario es ${binario}`;
        console.log(`El número decimal ${decimal} en binario es ${binario}`);
    }
}