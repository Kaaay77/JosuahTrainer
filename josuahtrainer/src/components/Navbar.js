import {Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar () {

    return (
        <div className='navbar'>
           <p>Josuah T. Entr. Online</p>
           <Link to="sobremi" >Sobre mi</Link>
        </div>
    )
}