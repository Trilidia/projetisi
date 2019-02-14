import React, { Component } from 'react'

class HeaderContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark justify-content-center">
                    <a id="titleisi" className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>Institut supérieur d&apos;informatique</a>
                    
                </nav>

                <div className="container">
                    <img src={require('../images/isi.png')} className='img-fluid'></img>
                </div>
            </div >

        )
    }
}


export default HeaderContainer
