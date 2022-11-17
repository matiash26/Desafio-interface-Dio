import "./style.css"
const Input = ({ title, icon }) => {
    return (
        <div className="input">
            {icon}
            <input type="text" placeholder={title} />
        </div>
    )
}
export default Input;