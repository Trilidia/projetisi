import TableSessionContainer from "../container/table_session-container";
import FormSessionContainer from "../container/form_session-container";
import React, { Component } from "react";
import ApiService from "../service/api-service"
class GlobalSessionContainer extends Component {
    constructor() {
        super();

        this.state = ({
            session: [],
            showFormIsClick: false,
            idsession: null,


        })
        this.getAllSessioon = this.getAllSessioon.bind(this)
        this.changeisclickedit = this.changeisclickedit.bind(this)
        this.setidsession = this.setidsession.bind(this)

    }

    getAllSessioon() {
        ApiService.get("getsession").then(response => {
            this.setState({ session: response.data });
        })
    }

    setidsession(id) {
        if (id)
            this.setState({
                idsession: id
            })
    }
    changeisclickedit(id) {
        if (id >= 0) {
            this.setidsession(id);
        }

        this.setState(function (prevState) {
            return { showFormIsClick: !prevState.showFormIsClick };
        });
        if (this.state.showFormIsClick) {
            this.setState({ idsession: null })
        }


    }
    componentDidMount() {
        this.getAllSessioon()

    }
    render() {

        return (
            <div>
                <br />
                <br />

                <div className="row justify-content-center">
                    <h1>Sessions</h1>
                </div>
                <br />
                <br />

                <div className='mx-auto justify-content-center'>
                    <button onClick={this.changeisclickedit} className="btn btn-dark btn-lg">
                        {this.state.showFormIsClick ? 'Show the list of sessions' : 'Add session'}
                    </button>
                    <br />
                    <br />

                    {this.state.showFormIsClick ? <FormSessionContainer changeisclickedit={this.changeisclickedit} idsession={this.state.idsession} /> : <TableSessionContainer changeisclickedit={this.changeisclickedit} />}
                </div>
            </div >
        );
    }
}
export default GlobalSessionContainer


/*changeStateValue(event) {

    const stateObject = function () {
        const returnObj = {};
        returnObj[this.target.id] = this.target.value;
        return returnObj;
    }.bind(event)();

    this.setState(stateObject);
}
---------------------------------------
important pour mes debug
  //pour vider le former quand on click sur showlist apres avoir voulu faire un edite
        if (this.state.showFormIsClick) {
            this.setState({
                idsession: null
            })
        }








*/