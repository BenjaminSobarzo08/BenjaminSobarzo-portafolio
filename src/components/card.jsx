import '../styles/components/card.css'

const Card = ({ titulo, imagen, tecnologias = [], descripcion, rol, linkGit, linkPage }) => {
    return (
        <div className="cardContainer">
            <div className="cardBody">
                <div className="imgSection">
                    <div className="imgFrame">
                        <img
                            src={imagen}
                            alt={`Vista previa de ${titulo}`}
                            className="projectImage"
                        />
                    </div>
                </div>

                <div className="textArea">
                    <h2>{titulo}</h2>

                    <div className="techList">
                        {tecnologias.map((tecnologia) => (
                            <span key={tecnologia} className="techItem">{tecnologia}</span>
                        ))}
                    </div>

                    <p className="projectDescription">{descripcion}</p>

                    <div className="roleBlock">
                        <h3 className="rol">Mi rol</h3>
                        <p>{rol}</p>
                    </div>

                    <div className="cardFooter">
                        <a className="link linkButton linkButtonSecondary" href={linkGit}>
                            <img src="/icons/github.png" alt="linkGithub" />
                            <span>GitHub</span>
                        </a>
                        {linkPage && (
                            <a className="link linkButton linkButtonPrimary" href={linkPage}>
                                <img src="/icons/linkPage.png" alt="linkPage" />
                                <span>Ver proyecto</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
