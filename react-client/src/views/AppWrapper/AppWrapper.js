import React from 'react';
import './AppWrapper.css';


const AppWrapper = props => {
    return (
        <div id='app-wrapper'>
            <div id='header'>
                News Portal
            </div>
            <div id='app-main-content'>
                {props.children}
            </div>
        </div>
    );
}

export default AppWrapper;