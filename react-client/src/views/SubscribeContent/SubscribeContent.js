import React from 'react';
import {handleFetchErr} from '../../utils';


class SubscribeContent extends React.Component {
    handleOnclickSend (e) {
        if (!window.localStorage.getItem('subscribedEmail')) {
            const EMAIL_VALUE = document.getElementById('email-input').value;
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
                    window.localStorage.setItem('subscribedEmail', jsonRes.emailReceived)
                })
            })
            .catch(err => console.error(err));
        } else {
            window.alert('You have already subscribed');
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
            </div>
        );
    }
    
}

export default SubscribeContent;