import { useState } from "react"
import { Button } from "./Button";
import AppleBasket from "./AppleBasket";
export const AppleCounter = () => {
    const totalCount = 10;
    const [rightAppleCount, setRightAppleCount ] = useState(0);
    const [leftAppleCount, setLeftAppleCount ] = useState(totalCount - rightAppleCount); 
    const rightButtonhandler = () => {
        if(leftAppleCount > 0){
            setRightAppleCount(rightAppleCount + 1);
            setLeftAppleCount(leftAppleCount - 1);
        }
    }
    const leftButtonhandler = () => {
        if(rightAppleCount > 0){
            setRightAppleCount(rightAppleCount - 1);
            setLeftAppleCount(leftAppleCount + 1);
        }
    }

    return (
        <section>
            <AppleBasket apples = { leftAppleCount } basketName= "leftBasket"/>
            <Button type = "left" clickHandler = {leftButtonhandler}/>
            <Button type = "right" clickHandler = {rightButtonhandler}/>
            <AppleBasket apples = { rightAppleCount } basketName= "rightBasket"/>
        </section>
    )
}