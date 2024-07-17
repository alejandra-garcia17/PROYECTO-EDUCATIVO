
function convertir() {
    let binario = document.getElementById("binario").value;

    // Verificar que el input sea un string binario válido
    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultado").textContent = "El input debe ser un string binario.";
        console.error("El input debe ser un string binario.");
    } else {
        // Asegurarse de que el número de bits sea múltiplo de 4 añadiendo ceros a la izquierda si es necesario
        while (binario.length % 4 !== 0) {
            binario = '0' + binario;
        }

        let hexadecimal = '';
        for (let i = 0; i < binario.length; i += 4) {
            // Tomar grupos de 4 bits
            let grupoBinario = binario.substring(i, i + 4);
            // Convertir el grupo binario a decimal
            let decimal = parseInt(grupoBinario, 2);
            // Convertir el decimal a hexadecimal y añadir al resultado
            hexadecimal += decimal.toString(16).toUpperCase();
        }

        document.getElementById("resultado").textContent = `El número binario ${binario} en hexadecimal es ${hexadecimal}`;
        console.log(`El número binario ${binario} en hexadecimal es ${hexadecimal}`);
    }
}