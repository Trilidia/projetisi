import React, { Component } from 'react'
import AcceuilRecruteurContainer from "container/acceuil-recruteur-container";
import HeaderRecrutContainer from "container/header-recruts";
import EtuformContainer from "container/etu-form";
import ConsultRecrutContainer from "container/consult-recrut-container";


class RecruteurContainer extends Component {
    constructor() {
        super()
        this.state = {
            phase: 0,
            idstudent: 0,

        }
        this.changePhase = this.changePhase.bind(this);
        this.setidstudent = this.setidstudent.bind(this);

    }


    changePhase(nbPhase) {
        this.setState({ phase: nbPhase })
    }

    setidstudent(idstudent, nbPhase) {
        this.setState({ idstudent: idstudent })
        this.setState({ phase: nbPhase })

    }


    render() {
        if (this.state.phase == 0) {
            return (
                <div>
                    <div>
                        <HeaderRecrutContainer changePhase={this.changePhase} logout={this.props.logout} setidstudent={this.setidstudent} />
                    </div>
                    <div>
                        <AcceuilRecruteurContainer changePhase={this.changePhase} setidstudent={this.setidstudent} />

                    </div>
                </div>
            )
        }

        else if (this.state.phase == 1) {
            return (
                <div>
                    <div>
                        <HeaderRecrutContainer changePhase={this.changePhase} logout={this.props.logout} setidstudent={this.setidstudent} />
                    </div>
                    <div>
                        <EtuformContainer changePhase={this.changePhase} idstudent={this.state.idstudent} />

                    </div>
                </div>
            )
        }

        else if (this.state.phase == 2) {
            return (
                <div>
                    <div>
                        <HeaderRecrutContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                       
                        <ConsultRecrutContainer changePhase={this.changePhase} idstudent={this.state.idstudent} />

                    </div>
                </div>
            )
        }

    }

}
export default RecruteurContainer
