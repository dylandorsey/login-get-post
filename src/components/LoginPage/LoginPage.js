import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    login = event => {
        event.preventDefault();

        console.log('init login');
        console.log(this.state.username);
        console.log(this.state.password);
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

    render() {
        const { classes } = this.props
        return (
            <div>
                <h1>Test LoginPage</h1>
                <form onSubmit={this.login}>
                    <div>
                        <h1>Log in here</h1>
                    </div>
                    <label htmlFor="username">
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.handleInputChange}
                    >
                    </input>
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={this.handleInputChange}
                    >
                    </input>
                </form>
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}


export default LoginPage;
