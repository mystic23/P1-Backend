const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  let condicional = 0;

  for (let i = 0; i < estudiantes.length; i++) {
    let promedio = 0;
    let cursos = estudiantes[i].cursos;

    for (let j = 0; j < cursos.length; j++) {
      promedio += cursos[j].nota;
    }
    promedio /= cursos.length;

    if (promedio < 3.3) {
      condicional++;
    }
  }

  return condicional;
}
function puntoDos(datos) {
  let nombresCompletos = [];

  for (let i = 0; i < datos.length; i++) {
    let estudiante = datos[i];
    let nombreCompleto = `${estudiante.nombre} ${estudiante.apellido}`;
    nombresCompletos.push(nombreCompleto);
  }

  return nombresCompletos;
}
function puntoTres(estudiantes) {
 
  let idsAlturas = estudiantes.map(estudiante => ({
    id: estudiante._id,
    altura: estudiante.altura
  }));

  idsAlturas.sort((a, b) => a.altura - b.altura);

  let idsOrden = idsAlturas.map(item => item.id);

  return idsOrden;
  
}

function puntoCuatro(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  let sumaTotal = 0;  
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  return promedio = sumaTotal / numeros.length;;
}

function puntoCinco(palabra) {
  var reversed = palabra.split('').reverse().join('');
  if (palabra === reversed) {
    return 'si es ';
  } else {
    return 'no es ';
  }
}

function puntoSeis(palabra) {
  var words = [];
  words = palabra.match(/\S+/g);

  var result = "";
  for (var i = 0; i < words.length; i++) {
     result += words[i].split('').reverse().join('') + " ";
  }
  return result;

}

function puntoSiete(list,campo){
  return list.sort((a, b) => {
    if (a[campo] < b[campo]) {
      return -1;
    }
    if (a[campo] > b[campo]) {
      return 1;
    }
    return 0;
  });
}

console.log("Punto 1")
console.log(puntoUno(datos));

console.log("Punto 2")
console.log(puntoDos(datos));

console.log("Punto 3")
console.log(puntoTres(datos));

console.log("Punto 4")
const lista =[5,10,15,20];
console.log(puntoCuatro(lista))

console.log("Punto 5")
console.log(puntoCinco('hola'))

console.log("Punto 6")
console.log(puntoSeis('backend'))

console.log("Punto 7")
console.log(puntoSiete(datos, "altura"));





