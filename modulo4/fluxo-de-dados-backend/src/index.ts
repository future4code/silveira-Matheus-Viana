import express, {Request, Response} from "express";
import cors from "cors";

// Exercício 2
import {produtos} from './data';
import {produto} from './data';

const app = express();

app.use(express.json());
app.use(cors());


// Exercício 1
app.get("/test", (req, res) => {          
		res.send("A API está funcionando!");
})


// Exercício 3
app.post("/produto", (req:Request, res:Response) => {

    try{

      const {name, price} = req.body

      if (!name || !price) {
          res.statusCode = 400;
          throw new Error("É preciso passar os parâmetros de name e price.");
      } else if (typeof(name) !== "string"){
          res.statusCode = 400;
          throw new Error("O parâmetro name deve ser do tipo string.");
      } else if (typeof(price) !== "number"){
          res.statusCode = 400;
          throw new Error("O parâmetro price deve ser do tipo number");
      } else if (price <= 0){
          res.statusCode = 400;
          throw new Error("O parâmetro price deve ser maior que 0");
      }

      const novoProduto: produto = {
          id: Date.now().toString(),
          name: name,
          price: price
      }

      produtos.push(novoProduto)

      res.status(201).send(produtos)

    }catch (error:any){ 
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
    }

    
})


// Exercício 4
app.get("/produtos", (req, res) => {      
    res.status(201).send(produtos)
})


// Exercício 5
app.put("/produto/edit/:id", (req, res) => {  


  try{
      
    const idProduto = Number(req.params.id)
    const {price} = req.body

      if (!price) {
          res.statusCode = 400;
          throw new Error("É preciso passar o parâmetro price.");
      } else if (typeof(price) !== "number"){
          res.statusCode = 400;
          throw new Error("O parâmetro price deve ser do tipo number");
      } else if (price <= 0){
          res.statusCode = 400;
          throw new Error("O parâmetro price deve ser maior que 0");
      }

      const listaProdutos = produtos.map((produto) => {
          if (Number(produto.id) === idProduto) {
              produto.price = price;
          }else{
            res.statusCode = 400;
            throw new Error("Não foi encontrado nenhum produto com o ID informado.");
          }

          return produto
      })

      res.status(201).send(listaProdutos)

    }catch (error:any){ 
      if(res.statusCode === 200){
        res.status(500).send("Algo insperado aconteceu!")
      }else{
        res.send(error.message);
      }
    }
})


// Exercício 6
app.delete("/produto/delete/:id", (req: Request, res:Response) => {   
  
  try{

    const idProduto = Number(req.params.id)

    const idsExistentes =  produtos.map((produto) => {
      return produto.id
    })

    if(idsExistentes.indexOf(idProduto.toString()) === -1){
      res.statusCode = 400;
      throw new Error("Não foi encontrado nenhum produto com o ID informado.");
    }

    for (let i = 0; i < produtos.length; i++) {
      if (Number(produtos[i].id) === idProduto) {
        produtos.splice(i, 1)
      }
    }

    res.status(201).send(produtos)

  }catch (error:any){ 
    if(res.statusCode === 200){
      res.status(500).send("Algo insperado aconteceu!")
    }else{
      res.send(error.message);
    }
  }
  
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});