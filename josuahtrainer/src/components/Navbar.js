import {Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar () {

    return (
        <div className='navbar'>
           <Link to="/" ><img href="#" alt="Foto Perfil" /></Link>
           <p>Josuah T. Entr. Online</p>
           <Link to="sobremi" >Sobre mi</Link>
        </div>
    )
}