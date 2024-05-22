import React, { useReducer } from 'react'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': {
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        }
        default: {
            return state
        }
    }
}
export default function Input(props) {
    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false
    })
    const onChangeHandler = (event) => {
        console.log(event.target.value)
        dispatch({ type: 'CHANGE', value: event.target.value, isValid: true })
    }
    const element = props.element === 'input' ? (
        <input value={mainInput.value} onChange={onChangeHandler} className={`${props.className} ${mainInput.isValid ? 'border bottom-2 !border-green-sabzlearn' : 'border bottom-2 !border-red-600' }`} type={props.type} placeholder={props.placeholder} />
    ) : (
        <textarea value={mainInput.value} onChange={onChangeHandler} className={props.className} placeholder={props.placeholder} />
    );

    return (
        <div>{element}</div>
    )
}
