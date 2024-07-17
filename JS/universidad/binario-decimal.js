
function convertir() {
    let binario = document.getElementById("binario").value;

    // Verificar que el input sea un string binario válido
    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultado").textContent = "El input debe ser un string binario.";
        console.error("El input debe ser un string binario.");
    } else {
        // Convertir el binario a decimal
        let decimal = 0;
        for (let i = 0; i < binario.length; i++) {
            decimal += parseInt(binario[i]) * Math.pow(2, binario.length - 1 - i);
        }

        document.getElementById("resultado").textContent = `El número binario ${binario} en decimal es ${decimal}`;
        console.log(`El número binario ${binario} en decimal es ${decimal}`);
    }
}