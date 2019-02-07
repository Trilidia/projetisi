import React, { Component } from 'react'
import HeaderIsiContainer from "container/header-isi";
import AcceuilIsiContainer from "container/acceuil-isi-container";
import GlobalSessionContainer from "container/global_session-container";
import CreateUserContainer from "container/createuser-container";
import GlobalProgrammeContainer from "container/global-programme-container";
import CommentContainer from "container/comment-container";
import EtuformContainer from "container/etu-form";
import ConsultContainer from "container/consult-container";
class IsiContainer extends Component {
    constructor() {
        super()
        this.state = {
            phase: 0,
            idstudentcomment: 0,
            student:[],
            username:''
        }
        this.changePhase = this.changePhase.bind(this);
        this.setIdStudentComment = this.setIdStudentComment.bind(this);
        this.setStudent = this.setStudent.bind(this);
    }

    changePhase(nbPhase) {
        this.setState({ phase: nbPhase })
    }

    setIdStudentComment(idstudent, nbPahese) {

        this.setState({ idstudentcomment: idstudent })
        this.setState({ phase: nbPahese })

    }
    componentDidMount() {
        this.changePhase(0)
        this.setState({username:this.props.username})
    }

    setStudent(row){
        this.setState({student: row})
    }



    render() {

        if (this.state.phase == 0) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                        <h2>hello {this.state.username}</h2>
                    </div>
                    <div>
                        <AcceuilIsiContainer changePhase={this.changePhase} setIdStudentComment={this.setIdStudentComment} setStudent={this.setStudent} />
                    </div>
                </div>
            )
        }

        else if (this.state.phase == 1) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />

                    </div>
                    <div>
                        <GlobalSessionContainer changePhase={this.changePhase} />
                    </div>
                </div>

            )
        }

        else if (this.state.phase == 2) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                        <GlobalProgrammeContainer changePhase={this.changePhase} />
                    </div>
                </div>

            )
        }

        else if (this.state.phase == 3) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                        <CreateUserContainer changePhase={this.changePhase} />
                    </div>
                </div>

            )
        }

        else if (this.state.phase == 4) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                        <CommentContainer changePhase={this.changePhase} username={this.state.username} idstudentcomment={this.state.idstudentcomment} />
                    </div>
                </div>

            )
        }

        else if (this.state.phase == 5) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                        <ConsultContainer changePhase={this.changePhase} student={this.state.student} />
                    </div>
                </div>

            )
        }
    }

}
export default IsiContainer
