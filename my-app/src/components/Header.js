import PropTypes from 'prop-types'
import Button from '../components/Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" color="green" />
        </header>
    )
}

Header.defaultProps = {
    title: "Note Taker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
