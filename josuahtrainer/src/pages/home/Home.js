import './Home.css'
import {IoIosCalendar } from 'react-icons/io';
import { ImFilm } from "react-icons/im";
import { AiOutlineBarChart } from "react-icons/ai";
import { ImMobile } from "react-icons/im";

export default function Home () {


    return(
        <div className="home">
            <header>
                <div className="cabecera flex-column">
                    <p>Aqui va la tipica frase de consigue tu cambio bla bla bla</p>
                    <p>PARA PERSONAS QUE QUIERAN PERDER HASTA 10 KG EN 87 DÍAS, BLABLABLA... :</p>
                </div>
            </header>
            <section className="flex-column sombreado" >
                <div className="caja-dark" >
                    <h2 id="h2">FATLOSS87</h2>
                </div>
                <ul className="lista">
                    <li>Planificación entrenamientos durante <b>87 días</b>.</li>
                    <li><b>3-6</b> entrenamientos por semana.</li>
                    <li>Visualización y registro entrenamientos.</li>
                    <li>Revisión semanal y actualización planificación.</li>
                    <li>Contacto por <b>chat-Dudyfit</b>.</li>
                    <li>Grupo conjunto con otros <b>#fatloosers</b>.</li>
                    <li>Vídeos explicativos.</li>
                    <li>1 sesión <b>en directo</b> semanal <br/>(según disponibilidad horaria).</li>
                    <li>Recomendaciones nutricionales básicas.</li>
                </ul>
                <div className="caja-grey">
                    <h3 id="h3"><b>279€</b>/pago <br/> único</h3>
                </div>
            </section>
            <p className="comentarios"> --------- como te ayudare ?... --------- </p>
            <section className="">
                <div className="text-box flex-column">TEXT</div>
                <div className="text-box flex-column">TEXT</div>
                <div className="text-box flex-column">TEXT</div>
                <div className="yellow-box">
                <h2 >CONTACTA CONMIGO</h2>
                </div>
            </section>
            <p className="comentarios"> --------- otros servicios --------- </p>
            <section>
                <div>
                    <article className="flex-column sombreado">
                        <div className="caja-dark">
                            <h2 id="h2">ECONÓMICO</h2>
                        </div>
                        <ul className="lista">
                            <li>Planificación mensual.</li>
                            <li> -3 entrenamientos por semana.</li>
                            <li>Visualización entrenamientos.</li>
                            <li>Revisión a los 15 días + actualización planificación.</li>
                            <li>Contacto por chat-Dudyfit.</li>
                        </ul>
                        <div className="caja-grey">
                            <h3 id="h3"><b>49€</b>/mes</h3>
                        </div>
                    </article>
                    <article className="flex-column sombreado">
                        <div className="caja-dark">
                            <h2 id="h2">BÁSICO</h2>
                        </div>
                        <ul className="lista">
                            <li>Planificación mensual.</li>
                            <li>Entrenamientos necesarios por semana.</li>
                            <li>Visualización y registro entrenamientos.</li>
                            <li>Revisión semanal y actualización planificación.</li>
                            <li>Contacto por chat-Dudyfit.</li>
                            <li>Vídeos explicativos.</li>
                        </ul>
                        <div className="caja-grey">
                            <h3 id="h3"><b>95€</b>/mes</h3>
                        </div>
                    </article>
                    <article className="flex-column sombreado">
                        <div className="caja-dark">
                                <h2 id="h2">PREMIUM</h2>
                        </div>
                        <ul className="lista">
                        <li>Planificación mensual.</li>
                        <li>Entrenamientos necesarios por semana.</li>
                        <li>Visualización y registro entrenamientos.</li>
                        <li>Revisión y seguimiento diario.</li>
                        <li>Contacto por chat-Dudyfit.</li>
                        <li>Vídeos explicativos.</li>
                        <li>1 Videollamada semanal.</li>
                        <li>1 Sesión en directo semanal.</li>
                        <li>Recomendaciones nutricionales básicas.</li>
                        </ul>
                        <div className="caja-grey">
                            <h3 id="h3"><b>169€</b>/mes</h3>
                        </div>
                    </article>
                </div>
                <div className="black-Section flex-wrap">
                    <div className='flex-column icon-cell'>
                    <IoIosCalendar className='icon ' />
                    <b>Calendario de entrenamiento</b>
                    </div>
                    <div className='flex-column icon-cell'>
                    <ImFilm className='icon'/>
                    <b>Vídeo-Rutinas</b>
                    </div>
                    <div className='flex-column icon-cell'>
                    <AiOutlineBarChart className='icon'/>
                    <b>Para todos los niveles</b>
                    </div>
                    <div className='flex-column icon-cell'>
                    <ImMobile className='icon'/>
                    <b>Siempre en tu bolsillo</b>
                    </div>
                </div>
                <div className="yellow-box">
                <h2>Necesitas más información?</h2>
                </div>
            </section>

        </div>
    )
}