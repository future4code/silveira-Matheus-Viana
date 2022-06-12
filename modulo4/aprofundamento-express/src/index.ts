import express,{ Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


// ***** Exercício 1 *****

app.get("/ping", (req, res) => {          
		res.send("Pong! 🏓")
})


// ***** Exercício 2 *****

type afazer = {
  userId:number,
  id:number,
  title:string,
  completed:boolean
}


// ***** Exercício 3 *****

const listaAfazeres:afazer[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": true
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
  {
    "userId": 2,
    "id": 23,
    "title": "et itaque necessitatibus maxime molestiae qui quas velit",
    "completed": true
  },
  {
    "userId": 2,
    "id": 24,
    "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
    "completed": false
  },
  {
    "userId": 3,
    "id": 41,
    "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    "completed": true
  },
  {
    "userId": 3,
    "id": 42,
    "title": "rerum perferendis error quia ut eveniet",
    "completed": false
  },
  {
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
  }
]


// ***** Exercício 4 *****

app.get('/todos/:status', (req: Request, res:Response) => {

  let listaAfazeresFiltrada:afazer[];

  if(req.params.status === 'true'){
    listaAfazeresFiltrada = listaAfazeres.filter((afazer) => {
      return afazer.completed === true;
    })
    res.status(200).send(listaAfazeresFiltrada)
  }else if(req.params.status === 'false'){
    listaAfazeresFiltrada = listaAfazeres.filter((afazer) => {
      return afazer.completed === false;
    })
    res.status(200).send(listaAfazeresFiltrada)
  }else{
    res.status(400).send('Informe um status válido.')
  }
  
})


// ***** Exercício 5 *****

app.post('/todos', (req: Request, res:Response) => {
  
  const userAuthorization = req.headers.authorization;

  // Verficia se o ID está preenchido
  if(!userAuthorization){
    return res.status(400).send("Error - Insira o ID do usuário");
  }

  // Filtra o array com todos afazeres de acordo com o ID do usuário
  const listaAfazeresPorUsuario = listaAfazeres.filter(afazer =>{
    return afazer.userId === Number(userAuthorization)
    })

  const nomeDaTarefa = req.body.title 

  const novoAfazer = {
      userId: Number(userAuthorization),
      id: Number(Date.now().toString()),
      title:nomeDaTarefa,
      completed: false
    }

    listaAfazeresPorUsuario.push(novoAfazer);
    res.send(listaAfazeresPorUsuario)  

})


// ***** Exercício 6 *****

app.put('/todos/change/:id', (req: Request, res:Response) => {
  
  const userAuthorization = req.headers.authorization;
  const afazerId = req.params.id

  // Verficia se o ID está preenchido
  if(!userAuthorization){
    return res.status(400).send("Error - Insira o ID do usuário");
  }

  // Filtra o array com todos afazeres de acordo com o ID do usuário
  const listaAfazeresPorUsuario = listaAfazeres.filter(afazer =>{
    return afazer.userId === Number(userAuthorization)
    })

  const listaAfazerEscolhido = listaAfazeresPorUsuario.filter(afazer => {
    return afazer.id === Number(afazerId)
  })
  
  listaAfazerEscolhido[0].completed = !listaAfazerEscolhido[0].completed;

  res.send('Status modificado com sucesso!')

})


// ***** Exercício 7 *****

app.delete('/todos/delete/:id', (req: Request, res:Response) => {
  
  const userAuthorization = req.headers.authorization;
  const afazerId = req.params.id

  // Verficia se o ID está preenchido
  if(!userAuthorization){
    return res.status(400).send("Error - Insira o ID do usuário");
  }

  // Filtra o array com todos afazeres de acordo com o ID do usuário
  const listaAfazeresPorUsuario = listaAfazeres.filter(afazer =>{
    return afazer.userId === Number(userAuthorization)
    })

  const indexAfazer = listaAfazeresPorUsuario.findIndex(afazer => {
    return afazer.id === Number(afazerId);
  });

  listaAfazeresPorUsuario.splice(indexAfazer, 1);  

  res.send('Afazer deletado com sucesso!')

})


// ***** Exercício 8 *****

app.get('/todos/user/:id', (req: Request, res:Response) => {
  
  const userAuthorization = req.headers.authorization;
  const userId = req.params.id;

  // Verficia se o ID está preenchido
  if(!userAuthorization){
    return res.status(400).send("Error - Insira o ID do usuário");
  }

  // Filtra o array com todos afazeres de acordo com o ID do usuário
  const listaAfazeresPorUsuario = listaAfazeres.filter(afazer =>{
    return afazer.userId === Number(userId)
    })
  
  res.status(200).send(listaAfazeresPorUsuario)
  
})









