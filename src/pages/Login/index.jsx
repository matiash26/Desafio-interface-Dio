import ButtonMenu from "../../components/ButtonMenu"
import { FaEnvelope ,FaLock } from "react-icons/fa"
import Input from "../../components/Input"
import { Link } from "react-router-dom"
import "./style.css"
const Login = () => {
    return (
        <div className="mainContainer">
            <main className="mainLogin">
                <div className="description-login">
                    <p>
                        A plataforma para você aprender com experts, dominar as principais
                        tecnologias e <br/> entrar mais rápido nas empresas mais desejadas.
                    </p>
                </div>
                <div className="login">
                    <h1>Já tem cadastro?</h1>
                    <p>Faça seu login e make the change._</p>
                    <form >
                        <Input icon={<FaEnvelope/>} title="E-mail" />
                        <Input icon={<FaLock/>} title="Senha" />
                        <ButtonMenu title="ENTRAR" classe="btn-pink"/>
                    </form>
                    <div className="links">
                        <Link to="#" id="green">Esqueci minha Senha</Link>
                        <Link to="/sign-up" id="yellow">Criar conta</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Login;