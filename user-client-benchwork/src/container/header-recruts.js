import React, { Component } from 'react'

class HeaderRecrutContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark">

                    <a className="navbar-brand" href="#" onClick={() => this.props.changePhase(0)}>Home</a>
                    <a className="navbar-brand" href="#" onClick={() => this.props.setidstudent(0, 1)}>New student</a>
                    <a className="navbar-brand" href="#" onClick={this.props.logout}>Sign out</a>

                </nav>
            </div >

        )
    }
}


export default HeaderRecrutContainer
