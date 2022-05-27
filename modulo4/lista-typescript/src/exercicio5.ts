enum ROLE {
  USER = 'user',
  ADMIN = 'admin'
}

type user = {
  name:string,
  email:string,
  role:ROLE
}

const emailsAdmin = (usuarios:user[]) => {
  return usuarios.filter((usuario) => {
    return usuario.role === ROLE.ADMIN;
  }).map((usuario) => {
    return usuario.email;
  })
}

console.log(emailsAdmin(
  [
    {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
    {name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
    {name: "Aline", email: "aline@email.com", role: ROLE.USER},
    {name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
    {name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
    {name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
  ]
)) 

