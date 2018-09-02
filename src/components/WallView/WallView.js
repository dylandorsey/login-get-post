import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxState => ({

})

class WallView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newWallPost: '',
            newComment: '',
        }
    }

    handleInputChange = event => {
        // get the event target
        const { target } = event;
        // get the name of the target
        const { name } = target
        // get the value of the target
        const value = target.value;
        // set state with the target's new value
        this.setState({
            [name]: value,
        });
    }

    postComment = event => {
        event.preventDefault();

        console.log('init post comment')
        console.log(this.state.newComment);

    }

    postPost = event => {
        event.preventDefault();

        console.log('init postPost')
        console.log(this.state.newWallPost);
    }

    render() {
        return (
            <div>
                <h1>Wall</h1>
                <form onSubmit={this.newPost}>
                    <div>
                        <h2>Create a new post</h2>
                    </div>
                    <textarea
                        type="text"
                        name="newWallPost"
                        placeholder="Compose your post here!"
                        onChange={this.handleInputChange}
                    >
                    </textarea>
                    <button onClick={this.postPost}>Post</button>
                </form>

                <form onSubmit={this.newComment}>
                <div>
                <h2>Comment</h2>
                </div>
                <textarea
                        type="text"
                        name="newComment"
                        placeholder="Comment here!"
                        onChange={this.handleInputChange}
                    >
                    </textarea>   
                <button onClick={this.postComment}>Comment</button>
                </form>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(WallView);
