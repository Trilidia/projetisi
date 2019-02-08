import React, { Component } from 'react'

class HeaderIsiContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg-dark">

                    <ul className="nav d-flex">


                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(0)}>Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(1)}>Session</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(2)}>Pogram</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(3)}>New User</a>
                        </li>


                        <li className="nav-item ml-auto p-2">
                            <a className="navbar-brand" href="#" onClick={this.props.logout}>Logout</a>
                        </li>


                    </ul>
                </nav>
            </div >

        )
    }
}


export default HeaderIsiContainer
