"use strict";
/*
let productos = [
  {
    id: 1,
    tipo: "camiseta"
  },
  {
    id: 2,
    tipo: "pantalon"
  },
  {
    id: 3,
    tipo: "camiseta"
  },
  {
    id: 4,
    tipo: "zapatos"
  },
]


let precios = [
  {
    id: 1,
    precio: 10
  },
  {
    id: 2,
    precio: 15
  },
  {
    id: 3,
    precio: 5
  },
  {
    id: 4,
    precio: 20
  },
]


let soloCamisetas = productos.filter(producto => producto.tipo === "camiseta")



function mapper(camiseta){
  console.log(camiseta.id)

  let precioCami = precios.find(precio => precio.id === camiseta.id)

  console.log(precioCami)
  console.log(camiseta)

  return {...camiseta, precio: precioCami.precio}
}



let camisetasMap = soloCamisetas.map(mapper)

console.log(camisetasMap)
*/

/////////////////////////////////


const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];



/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 * 
 * ! A partir de aquí es útil usar find, pero se puede con filter
 * 
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */


console.log("1. Obtén la suma total de todas las edades de las personas");
function sumarEdades(array){
  let sumaEdades=0;
  for (let i=0; i<array.length; i++){
    sumaEdades= sumaEdades+array[i].age;
    //console.log(sumaEdades);
  }
  console.log(sumaEdades);
}
sumarEdades(persons);


// Realizado por Zoe, utilizando reduce
console.log("");
console.log("Realizado por Zoe, utilizando reduce");

let edadTotal = persons.reduce(((acc, current) => acc + current.age),0)
console.log(edadTotal);


console.log("");
console.log("2. Obtén la suma total de todas las edades de las personas francesas.");
//Obtenemos solos los objetos donde country coincide con FR
let soloFranceses = persons.filter(persons => persons.country === "FR")

//Podemos sumar las edades utilizando la funcion anterior sumarEdades();
sumarEdades(soloFranceses);

//Tambien podemos utilizar un nuevo reduce para obtener la 
//suma de las edades utilizando reduce
let edadFranceses = soloFranceses.reduce(((acc, current)=> acc + current.age),0);
console.log(edadFranceses)

//Se puede dejar en una sola linea
console.log(persons.filter(persons => persons.country === "FR").reduce(((acc, current)=> acc + current.age),0));

console.log("");
console.log("3. Obtén un array con el nombre de todas las mascotas.");

let nombreMascotas = persons.map((persons)=>persons.pet.name);

console.log(nombreMascotas);  


console.log("");
console.log("4. Obtén un array con las personas que tengan gato");

let conGato = persons.filter(person => person.pet.type === "gato")
console.log(conGato);


console.log("");
console.log("5.Obtén un array con los coches de los españoles.");

// Saco solo a los españoles, country = ES
let espanoles = persons.filter(person => person.country === "ES");

// Saco solo la matricula de cada uno
let matriculasEspanolas = espanoles.map(espanol => espanol.car)

console.log(matriculasEspanolas);

// Busco el coche que corresponde cada matricula de antes
let cochesEspanoles = matriculasEspanolas.map(matricula => cars.find(car => car.id === matricula));

console.log(cochesEspanoles);


console.log("");
console.log("6. Obtén un array con las personas que tengan un coche de la marca Ford.");

//Obtener de coches los que son de marca FORD
let cochesFord = cars.filter(coche => coche.brand === "Ford");
console.log(cochesFord);

// Saco solo las matriculas del filtro anterior
let matriculasFord = cochesFord.map(coche => coche.id);
console.log(matriculasFord);

// Busco en el array de personas las personas con coche que coincidan con las matriculas anteriores
let personasConFord = matriculasFord.map(id => persons.find(persona => persona.car === id));
console.log(personasConFord);


console.log("");
console.log("7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda la info de su coche");
let todasLasPersonas = persons.map(person => person);
