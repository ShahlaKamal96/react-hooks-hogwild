import React from 'react'

function sort({ handleSorting }) {
    return (
        <div>
            <select onChange={handleSorting}>
                <option value="none">none</option>
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
        </div>
    )
}
export default sort;
