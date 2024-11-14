export default AppleBasket = ({basketName, apples}) => {
return (
        <div className = {basketName}>
        <p>{apples} apples</p>
        </div>
    )
}