/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/


// A way to solve
const employee1 = {
    codigo: 10,
    nome: "Jhon"
}


// Other
interface employee {
    cod: number,
    name: string
}

let employee2: employee = {
    cod: 200,
    name: "Jhon"
}


// Other
const employee3: {codigo: number, nome: string} = {
    codigo: 200,
    nome: "Jhon"
}