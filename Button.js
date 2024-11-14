export const Button = ({type, clickHandler}) => {
    return (
        <button onClick = { clickHandler } title = {type}>
            { type }
        </button>
    )
}