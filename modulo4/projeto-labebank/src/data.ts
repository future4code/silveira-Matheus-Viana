export type transacao = {
  valor:number,
  data:string,
  descricao:string
}

export type usuario = {
  nome:string,
  cpf:number,
  dataNascimento:string,
  saldo:number,
  extrato:transacao[]
}

export let users:usuario[] = [
  {nome: 'Matheus', cpf: 11111111111, dataNascimento: '1996-08-15', saldo: 3000, extrato: []},
  {nome: 'Murilo', cpf: 22222222222, dataNascimento: '1986-03-28', saldo: 35000, extrato: []},
  {nome: 'Janaylla', cpf: 33333333333, dataNascimento: '2002-01-07', saldo: 60000, extrato: []}
];

