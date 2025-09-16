import '../styles/components/overlay.css'
const Overlay = ({children, toggleFunction})=>{
    return(
        <div className="overlay" onClick={toggleFunction}>
            {children}
        </div>
    )
}

export default Overlay