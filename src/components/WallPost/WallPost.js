import React, { Component } from 'react';

class WallPost extends Component {

    render() {
        return (
            <div>
                {this.props.item.post}
            </div>
        );
    }
}


export default WallPost;
