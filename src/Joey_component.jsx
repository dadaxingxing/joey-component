import './Joey_component.css'
import { useState } from 'react'

function Joey_component() {
    const handleClose = () => {
        console.log('dialog close called!');
    };

    return (
        <div className='dialogStyle'>
            <div className='headerStyle'>

            </div>

            <div className='footerStyle'>
                <button className='dialogButton' onClick={handleClose}>Close</button>
            </div>
        </div>
    )
};

export default Joey_component;