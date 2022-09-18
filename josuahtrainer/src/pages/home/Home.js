import './Home.css'



export default function Home () {
    return(
        <div className="home">
            <header>
                <div className="cabecera">
                    <p>Aqui va la tipica frase de consigue tu cambio bla bla bla</p>
                    <p>PARA PERSONAS QUE QUIERAN PERDER HASTA 10 KG EN 87 DÍAS, BLABLABLA... :</p>
                </div>
            </header>
            <section className="flex-column" >
                <div className="caja-dark" >
                    <h2>FATLOSS87</h2>
                </div>
                <ul>
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
                    <h3><b>279€</b>/pago <br/> único</h3>
                </div>
            </section>
        </div>
    )
}