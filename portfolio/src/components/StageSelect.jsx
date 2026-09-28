import { Link } from "react-router-dom"
import "./StageSelect.css"

const StageSelect = () =>{
    return(
        <nav className="stage-select-container">
    <h2 className="stage-select-title">SELECT STAGE</h2>
    
    <div className="stage-grid">
        <div className="stage-item">
            <Link to="/projetos" className="stage-card buster-icon"></Link>
            <span className="stage-name">PROJETOS</span>
        </div>

        <div className="stage-item">
            <Link to="/" href="#codigos" className="stage-card code-icon"></Link>
            <span className="stage-name">CÓDIGOS</span>
        </div>

        <div className="stage-item">
            <Link to="/fotos" href="#fotos" className="stage-card photo-icon"></Link>
            <span className="stage-name">FOTOS</span>
        </div>

        <div className="stage-item">
            <Link to="/videos" href="#videos" className="stage-card video-icon"></Link>
            <span className="stage-name">VÍDEOS</span>
        </div>
        
        <div className="stage-item">
            <div className="stage-player-center"></div>
        </div>
        
        <div className="stage-item">
            <Link to="/relatorios" href="#relatorios" className="stage-card report-icon"></Link>
            <span className="stage-name">RELATÓRIOS</span>
        </div>

        <div className="stage-item">
            <Link to="/aprendizados" href="#aprendizagens" className="stage-card learning-icon"></Link>
            <span className="stage-name">APRENDIZADOS</span>
        </div>

        <div className="stage-item">
            <Link to="/competencias" href="#competencias" className="stage-card skill-icon"></Link>
            <span className="stage-name">COMPETÊNCIAS</span>
        </div>

        <div className="stage-item">
            <Link to="/autoavaliacao" href="#autoavaliacao" className="stage-card review-icon"></Link>
            <span className="stage-name">AUTOVALIAÇÃO</span>
        </div>
    </div>
    </nav>
    )
}
export default StageSelect