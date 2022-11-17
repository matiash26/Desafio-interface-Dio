import './style.css'
import { Link } from "react-router-dom"
function ButtonMenu({ title, classe, to}) {
  return (
    <div className={`btn-menu ${classe}`}>
      <Link to={to}>{title}</Link>
    </div>
  )
}

export default ButtonMenu;
