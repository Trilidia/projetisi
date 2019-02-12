import React, { Component } from 'react'

class HeaderContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark justify-content-center">
                    <a className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>INSTITUT SUPERIEUR D&apos;INFORMATIQUE </a>
                </nav>

                <div className="container">
                    <img src={require('../images/isi.png')} className='img-fluid'></img>
                </div>
            </div >

        )
    }
}


export default HeaderContainer
