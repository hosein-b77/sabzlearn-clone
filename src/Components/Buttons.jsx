import React from 'react'
import { Link } from 'react-router-dom'
export default function Buttons(props) {
    if (props.to) {
        return (<Link to={props.to} className={props.className}>
            {props.children}
        </Link>)
    }
    else if (props.href) {
        return (<a href={props.href} className={props.className}>
            {props.children}

        </a>)
    }
    else {
        return (
            <button onClick={props.onClick} disabled={props.disabled} type={props.type} className={props.className}>{props.children}</button>
        )
    }

}
