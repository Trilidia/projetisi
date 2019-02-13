import React, { Component } from 'react'

class HeaderIsiContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg-dark avbar-expand-lg mr-auto">

                    <ul className="nav">

                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(0)}>Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(1)}>Sessions</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(2)}>Programs</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(3)}>New user</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right ">
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={this.props.logout}><span className="glyphicon glyphicon-user"></span> Logout</a>
                        </li>
                    </ul>
                </nav>
            </div >

        )
    }
}


export default HeaderIsiContainer
