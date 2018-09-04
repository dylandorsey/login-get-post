import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WALL_ACTIONS } from '../../redux/actions/wallActions';
import WallPost from '../WallPost/WallPost';

const mapReduxStateToProps = reduxState => ({
    login: reduxState.login,
    wall: reduxState.wall,
})

class WallView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newWallPost: '',
            newComment: '',
        }
    }

    componentDidMount = () => {
        console.log('component mounted');
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

        const payload = this.state.newComment;

        this.props.dispatch({
            type: WALL_ACTIONS.SET_NEW_COMMENT_TEXT,
            payload
        })
    }

    postPost = event => {
        event.preventDefault();

        console.log('init postPost')
        console.log(this.state.newWallPost);

        const accessToken = this.props.login.loginData.access_token;
        const payload = {
            postBody: this.state.newWallPost,
            accessToken: accessToken,
            arrayOfExistingPostIDs: this.props.wall.existingPostIDs,
        }
        this.props.dispatch({
            type: WALL_ACTIONS.POST_NEW_POST,
            payload
        })
    }

    render() {
        return (
            <div>
                <h1>Wall</h1>
                <form onSubmit={this.newPost}>
                    <div>
                        <h3>Create a new post</h3>
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
                        <h3>Comment</h3>
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

                <div>
                    <h2>Your Posts</h2>
                    {this.props.wall.arrayOfPosts.length > 0 ?
                        this.props.wall.arrayOfPosts.map(item =>
                            <WallPost
                                key={item.id}
                                item={item}
                            />
                        )
                        :
                        <p>Nothing here!</p>
                    }

                </div>

            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(WallView);
