import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/* Exercício 1 */

/* app.get("/", (req, res) => {          
		res.send("Hello from Express")
}); */

/* Exercício 2 */

type users = {
  id:number,
  name:string,
  phone:number,
  email:string,
  website:string
};

/* Exercício 3 */

const users:users[] = 
[
  {id:1, name:'Matheus', phone:31998989898, email:'matheus@gmail.com', website:'www.matheus.com.br'},
  {id:2, name:'Murilo', phone:31997979797, email:'murilo@gmail.com', website:'www.murilo.com.br'},
  {id:3, name:'Mina', phone:31996969696, email:'mina@gmail.com', website:'www.mina.com.br'},
  {id:4, name:'Jana', phone:31995959595, email:'jana@gmail.com', website:'www.jana.com.br'}
];

/* Exercício 4 */

/* Endpoint 1 - Buscar todos os usuários cadastrados */

app.get("/users", (req, res) => {          
		res.status(200).send(users)
}); 

/* Exercício 5 */

type posts = {
  id:number,
  title:string,
  body:string,
  userId:number
}

/* Exercício 6 */

/* Acho melhor criar um array de posts fora do array de usuários, pois facilita a organização dos dados e a criação da requisição. */


const posts:posts[] = 
[
  {id:1, title:'Lorem ipsum dolor sit amet', body:'Nam facilisis dolor turpis, sed porttitor est venenatis sit amet. Sed condimentum urna a justo rhoncus accumsan. In rhoncus metus non erat bibendum, ut dictum turpis auctor.', userId: 1},
  {id:1, title:'Suspendisse ornare libero vel venenatis vehicula', body:'Pellentesque suscipit feugiat enim non dictum. Vivamus est dolor, ultrices et ultrices at, pharetra sed ipsum. Integer dignissim, orci a laoreet viverra, arcu arcu lobortis tellus, quis pharetra est mauris sollicitudin enim.', userId: 1},
  {id:1, title:'Nulla ullamcorper elit sed elit semper', body:'Duis sit amet facilisis nisl, non tempus elit. Aliquam ac sapien arcu. Pellentesque dictum at nunc vel aliquet. Phasellus mollis, velit id auctor tincidunt, eros nibh accumsan sapien, luctus tincidunt felis orci sed mauris.', userId: 2},
  {id:1, title:'Mauris bibendum a lacus id sagittis', body:'Pellentesque nisl elit, gravida eu pellentesque vel, pulvinar vitae lacus. Nam rhoncus turpis et nunc malesuada efficitur. Donec id neque et diam malesuada placerat. Phasellus sem dolor, ullamcorper et ullamcorper ac, fringilla eu metus.', userId: 3},
  {id:1, title:'Nam felis dui, laoreet aliquet dignissim', body:'Sed hendrerit lectus metus, at tempor lacus maximus ut. Phasellus sit amet maximus purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.', userId: 4},
];


/* Exercício 7 */

/* Endpoint 2 - Buscar todos os usuários cadastrados */

app.get("/posts", (req, res) => { 
  res.status(200).send(posts) 
}); 


/* Exercício 8 */

/* Endpoint 3 - Buscar todos os posts de um usuário em particular */

app.get("/posts", (req, res) => {          
	
  const id = Number(req.query.userId);
  
  const postsFiltrados = posts.filter((post) => {
    return post.userId === id
  })
  
  res.status(200).send(postsFiltrados); 

}); 





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});