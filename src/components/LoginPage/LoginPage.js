import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }

    login = event => {
        event.preventDefault();

        console.log('init login');

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
                    >
                    </input>
                </form>
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}


export default LoginPage;
