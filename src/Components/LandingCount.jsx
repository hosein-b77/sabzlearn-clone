import React, { useEffect, useState } from 'react'

export default function LandingCount({ count }) {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(preval => preval + 1)
        }, 0.0001)
        if (counter === count) {
            clearInterval(interval)
        }
        return () => clearInterval(interval) //this line is for cleanUp in React and prevent memory leak because in every render,new interval created and old one still remained 
    }, [counter])
    return (
        <span className="landing-status__count">{counter}</span>
    )
}
