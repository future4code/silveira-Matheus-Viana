import express from "express";
import cors from "cors";

import {users} from './data';
import {user} from './data';
import {UserType} from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/test", (req, res) => {          
		res.send("A API está funcionando!");
})


// ***** Exercício 1 *****

/* 

a) GET

b) users

*/

/* app.get("/users", (req, res) => {          
		res.send(users);
}) */


// ***** Exercício 2 *****

/* 

a) Por QueryParams, porque se trata de uma busca dentro de um mesmo
conjunto.

b) Sim, fazendo uma validação.

*/

/* app.get("/users", (req, res) => {   
  
    const type: string = req.query.type as string;     
    
    try{

      if (!type) {
        res.statusCode = 400;
        throw new Error("É preciso passar o parâmetro type na URL.");
      } else if(!(type.toUpperCase() in UserType)){
        res.statusCode = 400;
        throw new Error("O parâmetro type deve receber como valor admin ou normal.");
      }

    }catch (error:any){
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
    }        

    const usersFilteredByType = users.filter((user) => {
      return user.type === type.toUpperCase();
    })
    
		res.status(201).send(usersFilteredByType);  
    
}) */



// ***** Exercício 3 *****

/* 

a) Por QueryParams, porque se trata de uma busca dentro de um mesmo
conjunto.

b) -

*/

app.get("/users", (req, res) => {   
  
    const name: string = req.query.name as string;     
    
    try{

      const userList:Array<string> = [];
      users.map((user) => {
        userList.push(user.name.toLowerCase());
      })

      if (!name) {
        res.statusCode = 400;
        throw new Error("É preciso passar o parâmetro name na URL.");
      }else if(!(userList.includes(name.toLowerCase()))){
        res.statusCode = 400;
        throw new Error("Usuário não encontrado na base de dados.");
      } 

    }catch (error:any){
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
    }        

    const usersFilteredByName = users.filter((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    })
    
		res.status(201).send(usersFilteredByName);  
    
})



// ***** Exercício 4 *****

/* 

a) Não aconteceu nada de diferente.

b) Não, o correto seria o POST, pois ele é utilizado para criação de novas informações e o PUT apenas para modificar as informações já criadas anteriormente.


*/

app.post("/users", (req, res) => {
    res.statusCode = 400;
  try {
    const { name, email, type, age } = req.body;

    if (!name || !email || !type || !age) {
        res.statusCode = 422;
      throw new Error("Verifique os campos informados!");
    }

    const newUser: user = {
      id: Date.now(),
      name,
      email,
      type,
      age,
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



