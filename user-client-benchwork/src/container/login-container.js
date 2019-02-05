import React, { Component } from "react";
import InputComponent from "component/input-component";
import APIService from "../service/api-service";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            login: 0
        }
        this.onChangedUsername = this.onChangedUsername.bind(this)
        this.onChangedPassword = this.onChangedPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChangedUsername(event) {
        this.setState({ username: event.target.value })
    }

    onChangedPassword(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        APIService.post('testlogin', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => this.setState({ login: response.data }))
            .then(() => this.props.login(this.state.login))


    }

    render() {
        return (
            <div>
                <form id="form-test" onSubmit={this.handleSubmit}>
                    <InputComponent
                        text="Username : "
                        type="text"
                        id="userName_id"
                        value={this.state.username}
                        onChange={this.onChangedUsername}
                        className="form-control"
                    />
                    <InputComponent
                        text="Password : "
                        type="password"
                        id="password_id"
                        value={this.state.password}
                        onChange={this.onChangedPassword}
                        className="form-control"
                    />
                    <button type="submit" >Log in</button>
                </form>
            </div>

        );
    }
}

export default LoginContainer;