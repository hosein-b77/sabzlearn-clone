import React from 'react'

export default function Input(props) {
    const onChangeHandler = (event) => {
        console.log(event.target.value)
    }
    const element = props.element === 'input' ? (
        <input onChange={onChangeHandler} className={props.className} type={props.type} placeholder={props.placeholder} />
    ) : (
        <textarea onChange={onChangeHandler} className={props.className} placeholder={props.placeholder} />
    );

    return (
        <div>{element}</div>
    )
}
