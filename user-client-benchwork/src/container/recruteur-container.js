import React, { Component } from 'react'
import AcceuilRecruteurContainer from "container/acceuil-recruteur-container";
import HeaderRecrutContainer from "container/header-recruts";
import EtuformContainer from "container/etu-form";



class RecruteurContainer extends Component {
    constructor() {
        super()
        this.state = {
            isediting:false,
            idstudentedit:0
         }
         this.clickOnEdit=this.clickOnEdit.bind(this);
         this.clickOnSubmit=this.clickOnSubmit.bind(this);
    }

    clickOnEdit(idstudent){
        this.setState({isediting:true,idstudentedit:idstudent})
    }

    clickOnSubmit(){
        this.setState({isediting:false})
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderRecrutContainer clickOnSubmit={this.clickOnSubmit} clickOnEdit={this.clickOnEdit} logout={this.props.logout} />
                </div>
                <div>
                 {(this.state.isediting)?<EtuformContainer clickOnSubmit={this.clickOnSubmit} idstudent={this.state.idstudentedit}/>:<AcceuilRecruteurContainer clickOnEdit={this.clickOnEdit}/>}
                </div>
            </div>
        )
    }

}
export default RecruteurContainer
