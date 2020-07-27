import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                className="form-control new-post-label"
                placeholder="What are you thinking about?"
            />
            <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={() => onAdd('Hello')}>
            Submit
            </button>
        </div>
    )
}

export default PostAddForm;