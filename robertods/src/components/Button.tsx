import {PropsWithChildren} from "react";
import './Buttom.css'
interface ButtonProps {
    variant:string
}

export function Button({variant='primary',children,...rest}: PropsWithChildren<ButtonProps>) {

    return <button className={`button ${variant}` }{...rest}></button>;
}