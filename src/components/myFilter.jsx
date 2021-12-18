import React from 'react';

const MyFilter = () => {
    return (
        <select>
            <option disabled={true}>Wanna look for..</option>
            <option value="Select1">Select_1</option>
            <option value="Select2">Select_2</option>
            <option value="Select3">Select_3</option>
        </select>
    );
};

export default MyFilter;