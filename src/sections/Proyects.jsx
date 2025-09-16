import '../styles/proyectos.css'
import Card from '../components/card'

const Proyectos = ()=>{
    return(
        <div className="projects-container">
            <div className="Title"><h1>Proyectos <span className='red'>Destacados</span></h1></div>
            <Card titulo="Biblioteca Áulica (proyecto de carrera)" imagen="/projects/Biblioteca Aulica vista.png" descripcion="Un sistema de gestión de bibliotecas diseñado para facilitar la usabilidad tanto para estudiantes jóvenes como adultos." rol="Colaboré en el análisis de requerimientos, enfocándome en la usabilidad del sistema. En el desarrollo del backend, trabajé en el equipo que construyó la API REST usando Node.js y Express. También me encargué de la integración con Cloudinary para el almacenamiento de las portadas de los libros." linkGit="https://github.com/TurcoDev/biblioteca-back" linkPage="https://biblioteca-front.web.app/"/>
            <Card titulo="Inmobiliaria (Proyecto Independiente)" imagen="/projects/Cecilia-Gómez-Inmobiliaria vista.png" descripcion="Una página web para una inmobiliaria que permite a los usuarios buscar propiedades, visualizar detalles y contactar a la empresa." rol="Fui responsable del frontend y del diseño de la UI, enfocándome en crear una interfaz atractiva y fácil de usar. En el backend, desarrollé la API de búsqueda con Node.js y configuré la funcionalidad de envío de correos electrónicos a través de Nodemailer. Este proyecto me ayudó a desarrollar habilidades de comunicación y coordinación con mi compañero y el cliente." linkGit="https://github.com/AdrianC89/InmobiliariaCecilia" linkPage="https://inmobiliariacecilia.onrender.com/"/>
            <Card titulo="Tienda Online (Proyecto de Carrera)" imagen="/projects/Vite-React-11-18-2024_09_44_AM.png" descripcion="Un sistema de comercio electrónico que simulaba una tienda online, con roles de administrador y usuario, carrito de compras y proceso de compra ficticio." rol="Me enfoqué principalmente en el desarrollo del frontend con React, creando componentes reutilizables y asegurando la conectividad con el backend. También contribuí en la documentación del sistema para un desarrollo más limpio y organizado." linkGit="https://github.com/BenjaminSobarzo08/Tienda-Online"/>
            <Card titulo="Music Service (Proyecto Grupal)" imagen="/projects/Music-Service capture.png" descripcion="Un sistema que simulaba una biblioteca musical, permitiendo a los usuarios crear y gestionar listas de canciones, con la opción de hacerlas públicas para usuarios premium." rol="Trabajé con un compañero en la implementación del proyecto, utilizando la arquitectura MVC con PHP. Usé el motor de plantillas Smarty para la interfaz y PostgreSQL para la base de datos." linkGit="https://github.com/BenjaminSobarzo08/MusicServiceWeb"/>
        </div>
    )
}

export default Proyectos