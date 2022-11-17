import ButtonMenu from "../../components/ButtonMenu"
import { Link } from "react-router-dom"
import { FaEnvelope, FaLock, FaUserAlt, FaPhoneSquareAlt } from "react-icons/fa"
import Input from "../../components/Input"
import "./style.css"
const Sign = () => {
    return (
        <div className="mainContainer">
            <main className="mainSign">
                <div className="description-sign">
                    <p>
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias e entrar mais rápido 
                    nas empresas mais desejadas.
                    </p>
                </div>
                <div className="sign">
                    <h1>Comece agora grátis</h1>
                    <p>Crie sua conta e make the change._</p>
                    <form className="form-sign">
                        <Input icon={<FaUserAlt />} title="Nome completo" />
                        <Input icon={<FaEnvelope />} title="seu melhor @e-mail" />
                        <Input icon={<FaPhoneSquareAlt />} title="Celular ex: (11) 96123-4567" />
                        <Input icon={<FaLock />} title="Senha" />
                        <ButtonMenu title="CRIAR MINHA CONTA GRÁTIS" classe="btn-pink" />
                    </form>
                    <div className="links">
                        <p>Já tenho conta. <Link to="/login">Fazer login</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Sign;