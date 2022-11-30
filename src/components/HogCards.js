import React, { useState } from 'react'
import HogInformation from "./HogInformation"
function HogCards({ hogs }) {

    const [showInfo, setShowInfo] = useState(false)
    function handleShowInfo() {


        setShowInfo(showInfo => !showInfo)

    }
    return (
        <div className='ui grid container' >
            {
                hogs.map((hog) => (
                    <div key={hog.name} className='ui four wide column pigTile '  >

                        <img src={hog.image} alt={hog.name} />
                        <p>{hog.name}</p>
                        <hr />
                        {showInfo ? (< HogInformation specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog["highest medal achieved"]} />
                        ) : null}
                        <button onClick={handleShowInfo} name={hog.name}>{!showInfo ? "showInfo" : "hideInfo"}</button>
                    </ div>

                ))



            }



        </div>
    )
}

export default HogCards;
