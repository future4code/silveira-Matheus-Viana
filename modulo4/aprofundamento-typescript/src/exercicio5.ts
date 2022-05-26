type consulta = {
  nome:string, idade:number, dataDaConsulta:string
}

const agendaConsultas:consulta[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

const ordenaConsultas = (agendaConsultas:consulta[]) => {
  return agendaConsultas.sort((x,y) => {
    let a = x.nome.toUpperCase(),
        b = y.nome.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  })
}

console.log(ordenaConsultas(agendaConsultas))