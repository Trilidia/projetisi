import React, { Component } from 'react'
import AcceuilRecruteurContainer from "container/acceuil-recruteur-container";
import HeaderRecrutContainer from "container/header-recruts";
import EtuformContainer from "container/etu-form";
import ConsultRecrutContainer from "container/consult-recrut-container";
import CommentRecrutContainer from "container/comment-recrut-container.js";

class RecruteurContainer extends Component {
    constructor() {
        super()
        this.state = {
            phase: 0,
            idstudent: 0,
            username: ''

        }
        this.changePhase = this.changePhase.bind(this);
        this.setidstudent = this.setidstudent.bind(this);
        this.goBackHome = this.goBackHome.bind(this);


    }
    componentDidMount() {
        this.changePhase(0)
        this.setState({ username: this.props.username })
    }

    changePhase(nbPhase) {
        this.setState({ phase: nbPhase })
    }

    setidstudent(idstudent, nbPhase) {
        this.setState({ idstudent: idstudent })
        this.setState({ phase: nbPhase })

    }
    goBackHome(){
        this.setState({ phase: 0 })
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
                        <EtuformContainer changePhase={this.changePhase} idstudent={this.state.idstudent} goBackHome={this.goBackHome} />
                    </div>
                </div>
            )
        }

        else if (this.state.phase == 2) {
            return (
                <div>
                    <div>
                        <HeaderRecrutContainer changePhase={this.changePhase} logout={this.props.logout} />
                        <h4>hello {this.state.username}</h4>
                    </div>
                    <div>
                        <ConsultRecrutContainer changePhase={this.changePhase} idstudent={this.state.idstudent} />
                    </div>
                </div>
            )
        }

        else if (this.state.phase == 3) {
            return (
                <div>
                    <div>
                        <HeaderRecrutContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>

                        <CommentRecrutContainer changePhase={this.changePhase} idstudent={this.state.idstudent} username={this.state.username} />

                    </div>
                </div>
            )
        }

    }

}
export default RecruteurContainer
