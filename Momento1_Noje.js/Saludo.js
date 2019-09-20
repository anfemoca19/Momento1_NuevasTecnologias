
const fs = require('fs');

console.log("Ingrese su nombre (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

//variables
let saludoEspanol = 'Hola';
let saludoIngles = 'Hello';
let saludoFrances= 'salut';
let saludoPortugues= 'Óla';
let saludoAleman= 'Hallo';

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log( 'Hola' + dato);
    console.log('Hello' + dato );
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    var base = dato;

    if(base.toString().trim() != "NaN"){
        console.log("Procederé a crear el archivo");
        var tabla = "";
        
        //Crear texto dentro del archivo
        
           tabla = `${saludoEspanol}  ${base} -  ${saludoIngles}  ${base} - ${saludoFrances}  ${base} - ${saludoPortugues}  ${base} - ${saludoAleman}  ${base} ` + "\n";
   
    
        fs.writeFile(
            `Nombre ${ base }.txt`, 
            tabla, 
            (err) => {
                if (err) 
                    throw err;
                console.log(`El archivo  ${ base }  fue creada con éxito.`);
            }
        );
    }else{
        console.log("No ingresaste un nombre val");
    }


});
/*stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log( 'Hola' + dato);
    console.log('Hello' + dato );
    
  
    if(dato == 'salir'){
        return process.stdin.destroy();
    }

////Crear Archivo
var base = dato;

if(base.toString().trim() != "NaN"){
    console.log("Procederé a crear el archivo");
    var tabla = "";
    
    //Crear texto dentro del archivo
    
       tabla = `${saludoEspanol}  ${base} -  ${saludoIngles}  ${base} ` + "\n";
 addListener

    fs.writeFile(
        `Nombre ${ base }.txt`, 
        tabla, 
        (err) => {
            if (err) 
                throw err;
            console.log(`El archivo  ${ base }  fue creada con éxito.`);
        }
    );
}else{
    console.log("No ingresaste un nombre val");
}


});*/