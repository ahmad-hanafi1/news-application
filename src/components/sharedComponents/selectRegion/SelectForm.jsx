import React from 'react';
import "./selectRegion.css"

const SelectForm = () => {
    return (
        <div className='select'>
            <select>
                <option value="">International</option>
                <option value="" >USA</option>
                <option value="" >Turkey</option>
                <option value="" >Russia</option>
                <option value="" >Australia</option>

            </select>
        </div>
    );
}

export default SelectForm;
