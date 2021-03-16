//serve para tornar o codigo mais rubusto e impedir erros antes que aconteçam, aparece no
import PropTypes from 'prop-types'
import {useLocation} from "react-router-dom"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {
                location.pathname === "/" && <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close": "Add"} onClick={onAdd} />
            }
            
        </header>
    )
}
//é suplantando quando {title} ou props.title é preenchido
Header.defaultProps = {
    title: "Task Tracker"
}


Header.propTypes = {
    title: PropTypes.string
}

export default Header
