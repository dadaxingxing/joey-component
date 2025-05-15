import './Joey_component.css'
import { useState } from 'react'

function Joey_component( { title }) {
    const handleClose = () => {
        console.log('dialog close called!');
    };

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div className='dialogStyle col-6 position-relative '> 
                <div className='headerStyle d-flex justify-content-center align-items-center'>
                    {title}
                </div>

                <div className='footerStyle d-flex justify-content-center'>
                    <button className='dialogButton position-absolute bottom-0 start-50 translate-middle-x mb-3' onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default Joey_component;