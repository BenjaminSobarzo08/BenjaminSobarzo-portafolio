import '../styles/components/card.css'
const Card = ({titulo, imagen, descripcion, rol, linkGit, linkPage })=>{
    return (
        <div className="cardContainer">
            <div className="cardBody">
                <div className="imgSection"><img src={imagen} alt="portada" /></div>
             <div className="textArea">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <p>Mi rol: {rol}</p>
             </div>
            </div>
            <div className="cardFooter">
              <div className="link"><a href={linkGit}><img src="/icons/github.png" alt="linkGithub" /></a></div>
              {linkPage && (
                <div className="link"><a href={linkPage}><img src="/icons/linkPage.png" alt="linkPage" /></a></div>
              )}
            </div>
        </div>
    )
}

export default Card