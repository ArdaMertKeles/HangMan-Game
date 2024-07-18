import React from "react";

export default function Stickman({incorrectGuesses}) {

    const parts = [
        'rope',
        'manHead',
        'manBody',
        'manLeftArm',
        'manRightArm',
        'manLeftLeg',
        'manRightLeg'
    ];

    return (
        <div className="hangerContainer">
            <div className="hangerWrapper">
                <div className="stickBasis"></div>
                <div className="stickMain"></div>
                <div className="stickTop"></div>
                {parts.map((part, index) => (
                    <div
                        key={part}
                        id={part}
                        className={part}
                        style={{ opacity: incorrectGuesses > index ? 1 : 0 }}
                    ></div>
                ))}
            </div>
        </div>
    )
}