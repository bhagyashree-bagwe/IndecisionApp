import React from 'react';

const option = (props) => {
    return (
        <div className="option">
            <p>{props.count}. {props.optText}</p>
           <button
            className="button button--link"
            onClick={(e)=>{
            props.handleDeleteOption(props.optText);
            }}
           >
            Remove
           </button>
        </div>
    )
};

export default option;