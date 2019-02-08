import React, { Component } from 'react'
import RecruteurContainer from "container/recruteur-container";
import IsiContainer from "container/isi-container";
import LoginContainer from "container/login-container";




class GlobalContainer extends Component {
    constructor() {
        super()
        this.state = {
            login: 0,
            userName:''
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.setUserName = this.setUserName.bind(this);
    }

    login(returnlogin) {
        this.setState({ login: returnlogin })

    }

    logout() {
        this.setState({ login: 0 })
    }

    setUserName(userName){
        this.setState({userName:userName})
    }


    render() {
        if (this.state.login == 2) { return (<div><IsiContainer logout={this.logout} username={this.state.userName}/></div>) }
        else if (this.state.login == 1) { return (<div><RecruteurContainer logout={this.logout} username={this.state.userName}/></div>) }
        else { return (<div><LoginContainer login={this.login} setUserName={this.setUserName}/></div>) }

    }

}
export default GlobalContainer
