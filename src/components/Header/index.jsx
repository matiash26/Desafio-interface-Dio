import { FiAlignJustify, FiXCircle } from "react-icons/fi"
import ButtonMenu from "../../components/ButtonMenu"
import Logo from "../../assets/logo.png"
import br from "../../assets/brasil.svg"
import es from "../../assets/spain.svg"
import en from "../../assets/eua.svg"
import './style.css'
import { useEffect } from "react"
function Header() {
  const menuModal = () => {
    let btnMobile = document.querySelector(".mobileMenu")
    let menu = document.querySelector(".menu")
    btnMobile.addEventListener("click", () => {
      alert("Apenas botão visual")

    })
  }
  useEffect(()=>{
    menuModal()
  },[])
  return (
    <header>
      <nav>
        <a href="/"><img className="logo" src={Logo} alt="logo" /></a>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Para Empresas</a></li>
          <div className="btn">
            <div className="menu-btn"><ButtonMenu title="ENTRAR" classe="topo" to="/login" /></div>
            <div className="menu-btn"><ButtonMenu title="CADASTRAR" classe="topo" to="/sign-up" /></div>
          </div>
          <div className="flags">
            <img src={br} alt="Brazil" />
            <img src={en} alt="EUA" />
            <img src={es} alt="Spain" />
          </div>
        </ul>
        <div className="exit">
          <FiXCircle />
        </div>
      </nav>
      <div className="mobileMenu">
        <FiAlignJustify />
      </div>
    </header>
  )
}

export default Header;
