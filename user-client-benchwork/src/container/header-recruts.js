import React, { Component } from 'react'

class HeaderRecrutContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark">
                    <a className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>Home</a>
                    <a className="navbar-brand" href="#" onClick={()=> this.props.clickOnEdit(0)}>New Student</a>
                    <a className="navbar-brand" href="#" onClick={this.props.logout}>Logout</a>

                </nav>




            </div >

        )
    }
}


export default HeaderRecrutContainer
