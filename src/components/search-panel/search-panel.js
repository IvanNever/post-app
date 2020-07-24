import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Find post"
        />
    )
}

export default SearchPanel;