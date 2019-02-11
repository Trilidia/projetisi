import React, { Component } from 'react'

class HeaderContainer extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mr-auto bg-dark justify-content-center">
                    <a className="navbar-brand" href="#" onClick={this.props.clickOnSubmit}>Institut Supérieur d'Informatique(ISI)</a>
                </nav>


                <img src={require('../images/isi.png')} className='img-fluid'></img>

            </div >

        )
    }
}


export default HeaderContainer
