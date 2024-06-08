import React, { useEffect, useState, memo } from 'react';

const LandingCount = memo(({ count }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < count) {
            const interval = setInterval(() => {
                setCounter(prevCounter => {
                    if (prevCounter < count) {
                        return prevCounter + 1;
                    } else {
                        clearInterval(interval);
                        return prevCounter;
                    }
                });
            }, 1); // Set an appropriate delay time
            return () => clearInterval(interval);
        }
    }, [counter, count]);

    return (
        <span className="landing-status__count">{counter}</span>
    );
});

export default LandingCount;

