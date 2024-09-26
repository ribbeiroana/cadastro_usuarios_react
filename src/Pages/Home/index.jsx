import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../service/api';

export default function Home() {
  const [ users, setUsers ] = useState( [] )

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

useEffect(() => {
 getUsers()
  }, [])

  return (
<div className='container' >
  <form>
    <h1>Cadastro de Usuário</h1>
    <input placeholder='Nome' name='nome' type='text' ref={inputName}/>
    <input placeholder='Idade' name='idade' type='number' ref={inputAge} />
    <input placeholder='Email' name='email' type='email' ref={inputEmail} />
    <button type="button" onClick={createUsers} >Cadastrar</button>
  </form>

{users.map ((user) => (
<div key={user.id} className='card' >
<div>
<p>Nome: <span>{user.name}</span></p>
<p>Idade: <span>{ user.age}</span></p>
<p>Email: <span>{user.email}</span></p>
</div>
<button>  
  <img src={Trash} alt="lixeira" onClick={() => deleteUsers(user.id)} />
</button>                
</div>
))}


</div>
)}
