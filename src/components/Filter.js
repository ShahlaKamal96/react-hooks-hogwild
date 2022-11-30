import React from 'react'

export default function Filter({ handleFilter }) {

    return (
        <div>
            <label>Grease pigs</label>
            <input type="checkbox" onClick={(e) => handleFilter(e.target.checked)} />
        </div>
    )
}
