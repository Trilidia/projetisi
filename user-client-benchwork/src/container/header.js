import React, { Component } from 'react'

class HeaderContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark">
                    <a className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>Home</a>
                    <a className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>Home</a>

                    <div>
                        <span className="navbar-text">Navbar text with an inline element</span>
                    </div>
                </nav>



               
            </div >

        )
    }
}


export default HeaderContainer
