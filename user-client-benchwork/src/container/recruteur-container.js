import React, { Component } from 'react'
import AcceuilRecruteurContainer from "container/acceuil-recruteur-container";
import HeaderContainer from "container/header";
import EtuformContainer from "container/etu-form";



class RecruteurContainer extends Component {
    constructor() {
        super()
        this.state = {
            isediting:false,
            idstudentedit:0
         }
         this.clickOnEdit=this.clickOnEdit.bind(this)
         this.clickOnSubmit=this.clickOnSubmit.bind(this)
    }

    clickOnEdit(idstudent){
        this.setState({isediting:true,idstudentedit:idstudent})
        console.log(idstudent) // eslint-disable-line
    }

    clickOnSubmit(){
        this.setState({isediting:false})
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderContainer clickOnSubmit={this.clickOnSubmit}/>
                </div>
                <div>
                 {(this.state.isediting)?<EtuformContainer clickOnSubmit={this.clickOnSubmit} idstudent={this.state.idstudentedit}/>:<AcceuilRecruteurContainer clickOnEdit={this.clickOnEdit}/>}
                </div>
                <button onClick={this.props.logoff}>Logout</button>
            </div>
        )
    }

}
export default RecruteurContainer
