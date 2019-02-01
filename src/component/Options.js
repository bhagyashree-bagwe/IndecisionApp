import React from 'react'
import Option from './Option'
const Options = (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button 
            className="button button--link"
            onClick={props.handleDelete}
        >
        Remove All
        </button>
        </div>
        {props.optionsArr.length === 0 && <p className="widget-message">Please add options to get started!</p>}
         {
            props.optionsArr.map((opt, index) => (
            <Option
                key={opt}
                optText={opt}
                count={index+1}
                handleDeleteOption={props.handleDeleteOption}
            />
            ))
         }
    </div>
)

export default Options;