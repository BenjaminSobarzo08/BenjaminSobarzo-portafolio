import '../styles/components/footer.css'
const Footer = ()=>{
    return(
        <footer>
                <div className="body">
              <a href="https://drive.google.com/file/d/1kCFiqsRk1BW74GUECsUVgcAZXxwM_KNL/view?usp=sharing"><span className='linkCard'><img src="icons\curriculum.png" alt="Curriculum" /><p>CV</p></span></a>
               <a href="https://www.linkedin.com/in/benjamin-sobarzo-5532a331a/"> <span className='linkCard'><img src="icons/logotipo-de-linkedin.png" alt="Linkedin" /><p>Linkedin</p></span></a>
               <a href="https://github.com/BenjaminSobarzo08"><span className='linkCard'><img src="icons\github.png" alt="GitHub" /><p>GitHub</p></span></a>
                </div>
        </footer>
    )
}

export default Footer