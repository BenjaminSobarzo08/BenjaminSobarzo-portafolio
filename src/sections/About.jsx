
import '../styles/about.css'

const About = ()=>{
    return(
        <div className="aboutContainer">
            <div className="Title"><h1>Un poco <span className='red'>sobre mi</span></h1></div>
           <div className="Descripcion">Mi viaje en la programación comenzó en el colegio secundario, donde un taller de informática me introdujo al fascinante mundo del código a través de un programa que simulaba órdenes. Esa primera chispa de curiosidad se encendió aún más cuando, durante un curso de Excel, un profesor me habló sobre la <span className="red">Ingeniería de Sistemas</span> y el desarrollo de software. Fue en ese momento que decidí que quería dedicarme a esto. <br />

<br />Mi pasión me llevó a estudiar la <span className="red">Tecnicatura en Análisis y Programación de Aplicaciones</span>, una experiencia que no solo me dio una base sólida en conceptos clave de la programación, sino que también me enseñó el valor del <span className="red">análisis de sistemas</span> y el <span className="red">ciclo de vida del software</span>. <br />

<br />A lo largo de mi formación, he explorado distintos lenguajes, comenzando con <span className="red">Python</span> para dominar los fundamentos, y luego profundizando en <span className="red">JavaScript</span> y <span className="red">Node.js</span> para el desarrollo <span className="red">backend</span>. Mi experiencia en el <span className="red">frontend</span> con <span className="red">React</span> me permitió entender cómo crear interfaces dinámicas y gestionar componentes de manera eficiente. Esta variedad me ha dado una visión integral del desarrollo y me motiva a seguir aprendiendo y adaptándome a las tecnologías del futuro. <br />

<br />Como profesional, creo firmemente en el poder del <span className="red">trabajo en equipo</span> y la <span className="red">comunicación honesta</span>, especialmente cuando se trata de resolver problemas complejos. También valoro mucho la <span className="red">creatividad</span> y la <span className="red">innovación</span> como motores para crear soluciones que no solo funcionen, sino que también sorprendan.</div>
<div className="tools-section">
    <div className="Title"><h2><span className="red">Tecnologias</span> y Herramientas</h2></div>
    <ul className="list">
        <li>React</li>
        <li>Nodejs</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Git/Github</li>
        <li>MySql</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>VS Code</li>
        <li>API REST</li>
    </ul>
</div>
</div>
        

    )
}

export default About