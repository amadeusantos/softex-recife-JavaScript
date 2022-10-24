function ListarArray(array) {
   for (elem of array) {
      console.log(elem)
   }
}

function ListarProps(obj) {
   for (prop in obj) {
      console.log(`${prop}: ${obj[prop]}`)
   }
}


const cidades = ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão"]

const carro = {
   nome: " Nissan GT-R",
   fabricante: "Nissan Motor Company",
   ano: 2021,
   cor: "Jet Black Pearl",
   torque: 481
}

ListarArray(cidades)

console.log("<=================================================>")

ListarProps(carro)