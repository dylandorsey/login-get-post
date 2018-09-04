import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WALL_ACTIONS } from '../../redux/actions/wallActions';

const mapReduxStateToProps = reduxState => ({
    wall: reduxState.wall,
})

class WallPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommenting: false,
        }
    }


    handleClick = (postID) => {
        this.toggleCommenting();
        this.setPostID(postID);
    }

    toggleCommenting = () => {
        this.setState({
            isCommenting: !this.state.isCommenting,
        });
    }

    setPostID = (postID) => {
        this.props.dispatch({
            type: WALL_ACTIONS.SET_COMMENT_POST_ID,
            payload: postID
        })
    }

    render() {
        return (
            <div>
                {this.props.item.post}
                <div>
                    <div>
                        <button onClick={() => this.handleClick(this.props.item.id) }>comment</button>
                    </div>
                    {this.state.isCommenting ?
                        <form onSubmit={this.props.postComment}>
                            <textarea
                                type="text"
                                name="newComment"
                                placeholder="Comment here!"
                                onChange={this.props.handleInputChange}
                            >
                            </textarea>
                            <button onClick={this.props.postComment}>Submit comment</button>
                        </form>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(WallPost);
