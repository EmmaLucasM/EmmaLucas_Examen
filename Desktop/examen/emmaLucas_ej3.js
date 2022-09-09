


let frase = "Hola Soy Emma";
let fin = "";
let pfinal= " a ";
let contador= 2;


for (let index = frase.length -1 ; index >= 0; index--) {
    fin  += frase.charAt(index);
}




console.log("El resultado " + frase + " es " + fin );

for (let index2 = 0; index2 < frase.length; index2++) {
    let newCharacter= frase.charAt(index2);
    if (pfinal==newCharacter) {
        contador++;
    }
}

console.log("La presentacion " + frase + " tiene " + contador + " vocales" + pfinal );


