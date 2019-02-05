import InputComponent from "component/input-component";
import React, { Component } from "react";
import Radioform from "../component/radioform-component"
import ApiService from "../service/api-service"
class FormSessionContainer extends Component {
    constructor() {
        super();

        this.state = ({
            session: [],
            namesession: '',
            yearsession: '',
            datestartsession: '',
            dateendsession: '',
            isactive: null,
            ispdate: false,
            activer: 1,
            desactiver: 0

        })
        this.getAllSessioon = this.getAllSessioon.bind(this)
        this.addSession = this.addSession.bind(this)
        this.onChangenamesession = this.onChangenamesession.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onChangeDateEnd = this.onChangeDateEnd.bind(this)
        this.onChangeDateStart = this.onChangeDateStart.bind(this)
        this.onchangeIsActive = this.onchangeIsActive.bind(this)
        this.getSessionByid = this.getSessionByid.bind(this)
        this.updateSession = this.updateSession.bind(this)
        this.checkedSubmitOrUpdate = this.checkedSubmitOrUpdate.bind(this)


    }


    getAllSessioon() {
        ApiService.get("getsession").then(response => {
            this.setState({ session: response.data });
        })
    }

    updateSession() {

        ApiService.post('updatesession', {
            idsession: this.props.idsession,
            namesession: this.state.namesession,
            datestartsession: this.state.datestartsession,
            dateendsession: this.state.dateendsession,
            isactive: this.state.isactive,
            yearsession: this.state.yearsession,

        })

    }


    addSession() {

        ApiService.post('addsession', {
            namesession: this.state.namesession,
            datestartsession: this.state.datestartsession,
            dateendsession: this.state.dateendsession,
            isactive: this.state.isactive,
            yearsession: this.state.yearsession,

        })

    }
    checkedSubmitOrUpdate() {
        if (this.props.idsession != null) {
            this.updateSession()
            this.setState({
                ispdate: true
            })

        }
        else {
            this.addSession()
        }
    }
    onChangenamesession(event) {
        this.setState({
            namesession: event.target.value,

        })

    }
    onChangeYear(event) {
        this.setState({
            yearsession: event.target.value,

        })

    }
    onChangeDateStart(event) {
        this.setState({
            datestartsession: event.target.value,

        })

    }
    onChangeDateEnd(event) {
        this.setState({
            dateendsession: event.target.value,

        })

    }
    onchangeIsActive(event) {
        this.setState({
            isactive: event.target.value,

        })

    }
    getSessionByid() {
        ApiService.post('getsessionbyid', {
            idsession: this.props.idsession
        }).then(response => {
            this.setState({
                idsession: response.data[0].idsession,
                namesession: response.data[0].namesession,
                yearsession: response.data[0].yearsession,
                datestartsession: response.data[0].datestartsession,
                dateendsession: response.data[0].dateendsession,
                isactive: response.data[0].isactive
            })
        })

    }
    componentDidMount() {
        if (this.props.idsession != undefined) {
            this.getSessionByid()

        }


    }


    render() {

        return (
            <div>

                <form id='idfrom'>

                    <InputComponent
                        text="Name:"
                        type="text"
                        id="namession"
                        className="col-sm-2 col-form-label"
                        value={this.state.namesession}
                        onchange={this.onChangenamesession}
                    />

                    <InputComponent
                        text="year:"
                        type="text"
                        id="year"
                        className="col-sm-2 col-form-label"
                        value={this.state.yearsession}
                        onchange={this.onChangeYear}
                    />
                    <InputComponent
                        text="date start:"
                        type="text"
                        id="datestart"
                        className="col-sm-2 col-form-label"
                        value={this.state.datestartsession}
                        onchange={this.onChangeDateStart}
                    />
                    <InputComponent
                        text="date end:"
                        type="text"
                        id="dateend"
                        className="col-sm-2 col-form-label"
                        value={this.state.dateendsession}
                        onchange={this.onChangeDateEnd}
                    />

                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Activer</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="isactive"
                                        value={this.state.activer}
                                        checked={this.state.isactive == 1}
                                        onChange={this.onchangeIsActive} />

                                    <label className="form-check-label">Yes</label>
                                    </div>


                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="isactive"
                                            value={this.state.desactiver}
                                            checked={this.state.isactive == 0}
                                            onChange={this.onchangeIsActive} />

                                        <label className="form-check-label">Not</label>
                                    </div>
                                </div>
                            </div>
                        
                    </fieldset>


                        <button onClick={this.checkedSubmitOrUpdate}>{this.props.idsession != null ? 'update' : 'submit'}</button>
                </form>
            </div>
                );
            }
        }
        export default FormSessionContainer
        /*
        
<Radioform
                    name="isactive"
                    legend=''
                    id="isactive"
                    options={(this.state.isactive) ? 'true' : ''}
                    checked={}

                />
                */