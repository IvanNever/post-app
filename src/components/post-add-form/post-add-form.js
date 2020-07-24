import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                className="form-control new-post-label"
                placeholder="What about are you thinking?"
            />
            <button
                className="btn btn-outline-secondary"
                type="submit">
            Submit
            </button>
        </form>
    )
}

export default PostAddForm;