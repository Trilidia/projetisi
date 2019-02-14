import React, { Component } from 'react'
import HeaderIsiContainer from "container/header-isi";
import AcceuilIsiContainer from "container/acceuil-isi-container";
import GlobalSessionContainer from "container/global_session-container";
import CreateUserContainer from "container/createuser-container";
import GlobalProgrammeContainer from "container/global-programme-container";
import CommentContainer from "container/comment-container";
import ConsultContainer from "container/consult-container";
import EtuformIsiContainer from "container/etu-form-isi-container";

class IsiContainer extends Component {
    constructor() {
        super()
        this.state = {
            phase: 0,
            idstudentcomment: 0,
            idstudentEdit: 0,
            studentInfo: 0,
            username: ''
        }
        this.changePhase = this.changePhase.bind(this);
        this.setIdStudentComment = this.setIdStudentComment.bind(this);
        this.setStudentInfo = this.setStudentInfo.bind(this);
        this.setStudentEdit = this.setStudentEdit.bind(this);
        this.setBackToHome = this.setBackToHome.bind(this)
    }

    changePhase(nbPhase) {

        this.setState({ phase: nbPhase })
        this.forceUpdate()
    }

    setIdStudentComment(idstudent, nbPahese) {

        this.setState({ idstudentcomment: idstudent })
        this.setState({ phase: nbPahese })

    }
    componentDidMount() {
        this.changePhase(0)
        this.setState({ username: this.props.username })
    }

    setStudentInfo(studentid) {

        this.setState({ studentInfo: studentid })
        this.setState({ phase: 5 })
    }

    setBackToHome() {
        this.setState({ phase: 0 })
    }

    setStudentEdit(studentid) {
        this.setState({ idstudentEdit: studentid })
        this.setState({ phase: 6 })
    }


    render() {

        if (this.state.phase == 0) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} username={this.state.username} />
                        <br />

                        <br />
                    </div>
                    <div>
                        <AcceuilIsiContainer changePhase={this.changePhase} setIdStudentComment={this.setIdStudentComment} setStudentInfo={this.setStudentInfo} setStudentEdit={this.setStudentEdit} />
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
                        <ConsultContainer changePhase={this.changePhase} studentInfo={this.state.studentInfo} />
                    </div>
                </div>

            )
        }

        else if (this.state.phase == 6) {
            return (
                <div>
                    <div>
                        <HeaderIsiContainer changePhase={this.changePhase} logout={this.props.logout} />
                    </div>
                    <div>
                        <EtuformIsiContainer changePhase={this.changePhase} idstudentEdit={this.state.idstudentEdit} setBackToHome={this.setBackToHome} />
                    </div>
                </div>

            )
        }
    }

}
export default IsiContainer
