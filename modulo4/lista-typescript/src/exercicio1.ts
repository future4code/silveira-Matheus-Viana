enum mesesAno {
  um = 'Janeiro',
  dois = 'Fevereiro',
  tres = 'Março',
  quatro = 'Abril',
  cinco = 'Maio',
  seis = 'Junho',
  sete = 'Julho',
  oito = 'Agosto',
  nove = 'Setembro',
  dez = 'Outubro',
  onze = 'Novembro',
  doze = 'Dezembro'
}

const separaDataNascimento = (nome:string, dataNascimento:string):string => {
  let dataSeparada = dataNascimento.split('/',3);
  let mes:string = '';
  switch (dataSeparada[1]) {
    case '01':
      mes = mesesAno.um
      break;
    case '02':
      mes = mesesAno.dois
      break;
    case '03':
      mes = mesesAno.tres
      break;
    case '04':
      mes = mesesAno.quatro
      break;
    case '05':
      mes = mesesAno.cinco
      break;
    case '06':
      mes = mesesAno.seis
      break;
    case '07':
      mes = mesesAno.sete
      break;
    case '08':
      mes = mesesAno.oito
      break;
    case '09':
      mes = mesesAno.nove
      break;
    case '10':
      mes = mesesAno.dez
      break;
    case '11':
      mes = mesesAno.onze
      break;
    case '12':
      mes = mesesAno.doze
      break;
  }
  return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${mes} do ano de ${dataSeparada[2]}`;
}

console.log(separaDataNascimento('matheus','21/02/1992'))