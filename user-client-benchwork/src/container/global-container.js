import React, { Component } from 'react'
import RecruteurContainer from "container/recruteur-container";
import LoginContainer from "container/login-container";
import AcceuilIsiContainer from "container/acceuil-isi-container";



class GlobalContainer extends Component {
    constructor() {
        super()
        this.state = {
            login: 0
        }
        this.login = this.login.bind(this)
        this.logoff = this.logoff.bind(this)
    }

    login(returnlogin) {
        this.setState({ login: returnlogin })

    }

    logoff() {
        this.setState({ login: 0 })
    }

    render() {
        if (this.state.login == 2) { return (<div><AcceuilIsiContainer /></div>) }
        else if (this.state.login == 1) { return (<div><RecruteurContainer logoff={this.logoff} /></div>) }
        else { return (<div><LoginContainer login={this.login} /></div>) }

    }

}
export default GlobalContainer
