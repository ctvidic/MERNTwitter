// src/components/tweets/tweet_box.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class TweetBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default withRouter(TweetBox);