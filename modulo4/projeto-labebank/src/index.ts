import express from "express";
import cors from "cors";

import {users} from './data';
import {usuario} from './data';
import {transacao} from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/teste", (req, res) => {          
		res.send("A API está funcionando!");
})

/* ***** Criar Conta ***** */
app.post("/users", (req, res) => {
    res.statusCode = 400;
  try {
    const { nome, cpf, dataNascimento } = req.body;

    // Calcula Idade
    function calculaIdade(dataNascimento:string) { 

      let [year,month,day] = dataNascimento.split('-')
      let formattedDate = new Date(+year, +month, +day);

      let diff_ms = Date.now() - formattedDate.getTime();
      let age_dt = new Date(diff_ms); 
    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    const idadeUsuario = calculaIdade(dataNascimento);


    // Valida se CPF já existe    
    const cpfList = users.map((user) => {
      return user.cpf
    });    


    if (!nome || !cpf || !dataNascimento) {
      res.statusCode = 422;
      throw new Error("Verifique os campos informados!");
    } else if(idadeUsuario < 18){
      res.statusCode = 403;
      throw new Error("O usuário deve ter pelo menos 18 anos!");
    } else if(cpfList.includes(cpf)){
      res.statusCode = 400;
      throw new Error("Já existe um usuário cadastrado com o CPF informado!");
    }

    const newUser: usuario = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      saldo: 0,
      extrato: []
    };

    users.push(newUser);

    res.status(201).send("Usuário criado com sucesso");

  } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
  }
});


/* ***** Pegar Todos Usuários ***** */
app.get("/users", (req, res) => {
    res.statusCode = 400;
  try {
    
    res.status(201).send(users);
    
  } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
  }
});


/* ***** Pegar Saldo  ***** */
app.get("/users/:cpf", (req, res) => {
    res.statusCode = 400;
  try {
        
    const cpf = Number(req.params.cpf);

    // Valida se CPF já existe    
    const cpfList = users.map((user) => {
      return user.cpf
    }); 

    if(!(cpfList.includes(cpf))){
      res.statusCode = 400;
      throw new Error("Não existe usuário cadastrado com o CPF informado!");
    }

    const saldoPorCpf = users.filter((user) => {
      return user.cpf === cpf
    }).map((user) => {
      return user.saldo
    }); 

    res.status(201).send(saldoPorCpf);
    
  } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
  }
});


/* ***** Adicionar Saldo ***** */
app.put("/users", (req, res) => {
    res.statusCode = 400;
  try {

    const { nome, cpf, valor } = req.body;

    // Valida se nome existe
    const nomeList = users.map((user) => {
      return user.nome
    }); 

    if(!(nomeList.includes(nome))){
      res.statusCode = 400;
      throw new Error("Não existe usuário cadastrado com o nome informado!");
    }

    // Valida se CPF existe    
    const cpfList = users.map((user) => {
      return user.cpf
    }); 

    if(!(cpfList.includes(cpf))){
      res.statusCode = 400;
      throw new Error("Não existe usuário cadastrado com o CPF informado!");
    }

    // Verifica se o cpf e o nome estão vinculados na mesma conta
    const userInfo = users.filter((user) => {
      return user.cpf === cpf && user.nome === nome
    })

    if(userInfo.length === 0){
      res.statusCode = 400;
      throw new Error("Não existe usuário cadastrado com o nome e CPF informados!");
    }

    userInfo.map((user) => {
      return (user.saldo += valor) && 
        user.extrato.push({
          valor: valor,
          data: new Date().toISOString().split('T')[0],
          descricao: "Depósito de dinheiro"
        });
    })

    res.status(201).send(userInfo);
    
  } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
  }
});
