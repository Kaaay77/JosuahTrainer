import {Link } from 'react-router-dom';
import { useState } from "react";

import './Navbar.css'

export default function Navbar () {
    
    const [flag , setFlag ] = useState(true);


    const change = () => {
       return setFlag(!flag)
    }

console.log(flag)

    return (
        <div className='navbar'>
           <p>Josuah T. Entr. Online</p>
           {flag === true ?
           (
           <Link to="sobremi" onClick={change} >Sobre mi</Link>

           ):(
            <Link to="/" onClick={change} >Home</Link>

           )}
        </div>
    )
}