import React from 'react';
import { useScrollIndicator } from "react-use-scroll-indicator";

function ScrollIndicator() {

    const [state] = useScrollIndicator({ initialValue: 0 });

    return (
        <div className="fixed h-[1%] w-full bg-gray-300 z-99">
            <div className="h-full transition-all duration-400" id="indicator" style={{ width: `${state.value}%` }}></div>
        </div>
    )
}

export default ScrollIndicator
