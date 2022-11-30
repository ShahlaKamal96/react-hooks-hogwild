import React from 'react'

function HogInformation({ specialty, greased, weight, medal }) {
    return (
        <div>
            <div>
                <p>specialty: {specialty}</p>
                <p>greased: {greased}</p>
                <p>weight: {weight}</p>
                <p>highest medal achieved: {medal}</p>
            </div>
        </div>
    )
}

export default HogInformation;