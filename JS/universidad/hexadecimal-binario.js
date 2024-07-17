
function convertir() {
    let hexadecimal = document.getElementById("hexadecimal").value.toUpperCase();

    // Verificar que el input sea un string hexadecimal válido
    if (!/^[0-9A-F]+$/.test(hexadecimal)) {
        document.getElementById("resultado").textContent = "El input debe ser un string hexadecimal válido.";
        console.error("El input debe ser un string hexadecimal válido.");
    } else {
        let binario = '';
        for (let i = 0; i < hexadecimal.length; i++) {
            // Tomar cada dígito hexadecimal
            let digitoHexadecimal = hexadecimal[i];
            // Convertir el dígito hexadecimal a decimal
            let decimal = parseInt(digitoHexadecimal, 16);
            // Convertir el decimal a binario de 4 bits y añadir al resultado
            let binario4Bits = decimal.toString(2).padStart(4, '0');
            binario += binario4Bits;
        }

        document.getElementById("resultado").textContent = `El número hexadecimal ${hexadecimal} en binario es ${binario}`;
        console.log(`El número hexadecimal ${hexadecimal} en binario es ${binario}`);
    }
}