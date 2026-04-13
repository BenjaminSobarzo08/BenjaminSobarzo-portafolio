import '../styles/proyectos.css'
import Card from '../components/card'

const Proyectos = () => {
    return (
        <div className="projects-container">
            <div className="Title"><h1>Proyectos <span className='red'>Destacados</span></h1></div>

            <Card
                titulo="Tienda Online (Proyecto de Carrera)"
                imagen="/projects/Vite-React-11-18-2024_09_44_AM.png"
                tecnologias={["React", "Node.js", "Express", "JWT", "Cloudinary"]}
                descripcion="E-commerce con autenticacion, carrito, gestion de productos y flujo de compra ficticio."
                rol="Desarrolle el frontend en React y luego amplie el proyecto trabajando tambien en backend, base de datos, seguridad con JWT, control de stock y deploy."
                linkGit="https://github.com/BenjaminSobarzo08/Tienda-Online"
                linkPage="https://tienda-online-eight-red.vercel.app/"
            />

            <Card
                titulo="Biblioteca Aulica (Proyecto de Carrera)"
                imagen="/projects/Biblioteca Aulica vista.png"
                tecnologias={["React", "Node.js", "Express", "Cloudinary", "PostgreSQL"]}
                descripcion="Sistema de gestion de bibliotecas pensado para una experiencia clara y accesible para distintos perfiles de usuario."
                rol="Participe en el analisis funcional, colabore en el desarrollo de la API REST y me encargue de integrar Cloudinary para las portadas de los libros."
                linkGit="https://github.com/TurcoDev/biblioteca-back"
                linkPage="https://biblioteca-front.web.app/"
            />

            <Card
                titulo="Inmobiliaria (Proyecto Independiente)"
                imagen="/projects/Cecilia-Gómez-Inmobiliaria vista.png"
                tecnologias={[ "Node.js", "Express", "Nodemailer", "MongoDB"]}
                descripcion="Sitio web inmobiliario con buscador de propiedades, fichas detalladas y contacto directo con la empresa."
                rol="Me ocupe del frontend, del diseño de interfaz y de la API de busqueda. Tambien implemente el envio de correos y coordine el trabajo con cliente y compañero."
                linkGit="https://github.com/AdrianC89/InmobiliariaCecilia"
                linkPage="https://inmobiliariacecilia.onrender.com/"
            />

            <Card
                titulo="Music Service (Proyecto Grupal)"
                imagen="/projects/Music-Service capture.png"
                tecnologias={["PHP", "Smarty", "PostgreSQL", "MVC"]}
                descripcion="Aplicacion web para gestionar listas musicales y compartirlas segun el tipo de usuario."
                rol="Trabaje junto a un compañero implementando la arquitectura MVC, la interfaz con Smarty y la persistencia de datos con PostgreSQL."
                linkGit="https://github.com/BenjaminSobarzo08/MusicServiceWeb"
            />
        </div>
    )
}

export default Proyectos
