function Button (props) {
    const { title, handleClick, type } = props

    return (
        <button onClick={event => handleClick(event)} type={type} className="border border-solid bg-indigo-300 rounded px-6 font-semibold">{title}</button>
    )
}

export default Button

