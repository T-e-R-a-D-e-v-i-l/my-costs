function Button (props) {
    const { title, handleClick, type } = props

    return (
        <button onClick={event => handleClick(event)} type={type} className="border border-solid bg-indigo-300 px-6">{title}</button>
    )
}

export default Button

