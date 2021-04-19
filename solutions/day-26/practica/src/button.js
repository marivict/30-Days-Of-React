import Reacts from 'react'

const Button = ({toggle, day}) => {
    return(
        <button onClick={toggle}>Cambiar a {day === 'day' ? 'noche 🌝' : 'dia 🌞'} </button>
    )
}

export default Button