
const Button = ({ children, onClick }) => {

    return (
        <button className="p-2 bg-rose-300 rounded"
            onClick={onClick}>{children}</button>
    )
}

export default Button