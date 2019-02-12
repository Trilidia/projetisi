import React, { Component } from 'react'

class HeaderIsiContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg-dark">

                    <ul className="nav w-100">

                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(0)}>Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(1)}>Session</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(2)}>Program</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(3)}>New user</a>
                        </li>

                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={this.props.logout}>Sign out</a>
                        </li>


                    </ul>
                </nav>
            </div >

        )
    }
}


export default HeaderIsiContainer
