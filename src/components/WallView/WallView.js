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
            postID: 'testTextB',
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

    postComment = (event) => {
        event.preventDefault();
        console.log('init post comment')
        console.log(this.state.newComment);
        console.log('this is the post ID:');
        console.log(this.props.wall.commentPostID);

        const accessToken = this.props.login.loginData.access_token;
        const payload = {
            commentBody: this.state.newComment,
            accessToken: accessToken,
            arrayOfExistingCommentIDs: this.props.wall.existingCommentIDs,
            postID: this.props.wall.commentPostID,
        }

        this.props.dispatch({
            type: WALL_ACTIONS.POST_NEW_COMMENT,
            payload
        })

        // this.props.dispatch({
        //     type: WALL_ACTIONS.SET_NEW_COMMENT_TEXT,
        //     payload
        // })
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
                <h1>Your Wall</h1>
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

                <div>
                    <h2>Your Posts</h2>
                    {this.props.wall.arrayOfPosts.length > 0 ?
                        this.props.wall.arrayOfPosts.map(item =>
                            <WallPost   
                                key={item.id}
                                item={item}
                                postComment={this.postComment}
                                handleInputChange={this.handleInputChange}
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
