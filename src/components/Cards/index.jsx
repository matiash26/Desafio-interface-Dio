import "./style.css"
import { BsPersonCircle } from "react-icons/bs"
import { FiTrello } from "react-icons/fi"
const Cards = ({title}) => {
    return (
        <div className="backSlide">
            <div className="cards">
                <div className="atividades">
                    <h1>{title}</h1>
                    <ul>
                        <li>Formação Android Developer</li>
                        <li>Formação Flutter Specialist</li>
                        <li>Formação Swift & iOS Experience</li>
                        <li>Formação Android Developer</li>
                        <li>Formação Flutter Specialist</li>
                        <li>Formação Swift & iOS Experience</li>
                    </ul>
                    <div className="atividade-projetos">
                        <div><BsPersonCircle /><span>80 atividades</span></div>
                        <div><FiTrello /><span>16 projetos</span></div>
                    </div>
                </div>
                <a href="#">Ver carreira</a>
            </div>
        </div>
    )
}
export default Cards;