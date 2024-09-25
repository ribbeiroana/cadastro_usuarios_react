import './style.css';
import Trash from '../../assets/trash.svg'


export default function Home() {
  const users = [
    {
      id: '51674987',
      name: 'Maria',
      age: '25',
      email: 'mari@gmail.com',
    },
    {
      id: '6547878',
      name: 'João',
      age: '20',
      email: 'joao@gmail.com',
    },

  ]

  return (
<div className='container' >
  <form>
    <h1>Cadastro de Usuário</h1>
    <input placeholder='Nome' name='nome' type='text'/>
    <input placeholder='Idade' name='idade' type='number' />
    <input placeholder='Email' name='email' type='email' />
    <button type="button">Cadastrar</button>
  </form>

{users.map ((user) => (
<div key={user.id} className='card' >
<div>
<p>Nome: <span>{user.name}</span></p>
<p>Idade: <span>{ user.age}</span></p>
<p>Email: <span>{user.email}</span></p>
</div>
<button>  
  <img src={Trash} alt="lixeira" />
</button>                
</div>
))}


</div>
)}
