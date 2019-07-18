import React from 'react';
import {handleFetchErr, isValidEmail} from '../../utils';


class SubscribeContent extends React.Component {
    handleOnclickSend (e) {
        document.getElementById('subscribe-err-div').innerHTML = ''; //reset
        const EMAIL_VALUE = document.getElementById('email-input').value; 
        if (!isValidEmail(EMAIL_VALUE)) {
            document.getElementById('subscribe-err-div').innerHTML = `
                <span style="color: red">Invalid email</span>
            `
            return;
        }
        if (!window.sessionStorage.getItem('subscribedEmail')) {
            fetch ('./subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({emailValue: EMAIL_VALUE})
            })
            .then(handleFetchErr)
            .then(resp => {
                resp.json()
                .then(jsonRes => {
                    window.sessionStorage.setItem('subscribedEmail', jsonRes.emailReceived);
                    document.getElementById('subscribe-err-div').innerHTML = `
                        <span style="color: green">Got it!</span>
                    `
                })
            })
            .catch(err => console.error(err));
        } else {
            document.getElementById('subscribe-err-div').innerHTML = `
                <span style="color: red">You have already subscribed</span>
            `
        }
    }
    render () {
        console.info('subscribe props: ', this.props);
        return (
            <div id='subscribe-content'>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email-input" 
                        placeholder="your.email.com"
                    />
                </div>
                <div className='text-right'>
                    <button onClick={this.handleOnclickSend} className='btn btn-primary'>SEND</button>
                </div>
                <div id='subscribe-err-div'></div>
            </div>
        );
    }
    
}

export default SubscribeContent;