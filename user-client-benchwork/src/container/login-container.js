import React, { Component } from "react";
import InputComponentForm from "component/inputform-component";
import APIService from "../service/api-service";
import HeaderContainer from "container/header";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            login: -1,
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

        this.props.setUserName(this.state.username);

    }



    render() {
        return (
            <div className="align-middle">

                <HeaderContainer />
                {(this.state.login == 0) ? <div className="alert alert-danger" role="alert">{this.state.userNameCreate} Username or Password Invalid </div> : <div></div>}
                <div className="row justify-content-center">
                    <h1>Login</h1>
                </div>
                <br />
                <br />
                <form id="form-test" onSubmit={this.handleSubmit}>
                    <div className="form-group row justify-content-center">
                        <InputComponentForm
                            placeholder="Username"
                            type="text"
                            id="userName_id"
                            value={this.state.username}
                            onChange={this.onChangedUsername}
                            classesinput="form-control"
                            classesdiv="col-md-2"
                        />
                    </div>

                    <div className="form-group row justify-content-center">
                        <InputComponentForm
                            placeholder="Password"
                            type="password"
                            id="password_id"
                            value={this.state.password}
                            onChange={this.onChangedPassword}
                            classesinput="form-control"
                            classesdiv="col-md-2"
                        />
                    </div>
                    <br />

                    <div className="form-group row justify-content-center">

                        <button type="submit" className="btn btn-dark btn-lg">Sign in</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default LoginContainer;

