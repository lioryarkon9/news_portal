import React from 'react';


const NewsModal = props => {
    return (
        <div>
            <div>
                {props.fullArticle}
            </div>
        </div>
    );
}

NewsModal.defaultProps = {
    fullArticle: ''
}

export default NewsModal;