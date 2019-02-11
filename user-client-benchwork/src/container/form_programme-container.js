
import React, { Component } from "react";
import ApiService from "../service/api-service";
import InputComponentForm from "component/inputform-component";
import RadioFormComponent from "component/radioform-component";
class FormProgrammeContainer extends Component {
    constructor() {
        super();

        this.state = ({
            programme: [{
                idprogram: 0,
                titleprogram: '',
                sigle: '',
                totalduration: '',
                intershipduration: '',
                hasintership: "",
                level: '',
                price: "",
                isactive: "",
                conditionofaccecptance: '',
                academicstatus: "",
                typeoftraining: "",
                timestartprogram: '',
                timeendprogram: '',
            }],
            isupdate: false,
            typeoftrainingValue: [
                { label: "vocational", value: 1 },
                { label: "academic", value: 2 },
                { label: "professional", value: 3 },
                { label: "other", value: 4 }
            ],
            academicstatusValue: [
                { label: "fullTime", value: 1 },
                { label: "partTime", value: 2 }
            ],
            yesno: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 }
            ],
            enableValidation: true,
            displayErrors: false
        })
        this.onChangetitleprogram = this.onChangetitleprogram.bind(this)
        this.onchangeSigle = this.onchangeSigle.bind(this)
        this.onchangeTotalDuration = this.onchangeTotalDuration.bind(this)
        this.onchangeIntershipDuration = this.onchangeIntershipDuration.bind(this)
        this.onchangeLevel = this.onchangeLevel.bind(this)
        this.onchangePrice = this.onchangePrice.bind(this)
        this.onchangeconditionofaccecptance = this.onchangeconditionofaccecptance.bind(this)
        this.onchangetimeendprogram = this.onchangetimeendprogram.bind(this)
        this.onchangetimestartprogram = this.onchangetimestartprogram.bind(this)
        //


        this.getProgrammeById = this.getProgrammeById.bind(this)
        this.getAllProgramme = this.getAllProgramme.bind(this)
        this.addProgramme = this.addProgramme.bind(this)
        this.updateProgramme = this.updateProgramme.bind(this)
        this.checkedSubmitOrUpdate = this.checkedSubmitOrUpdate.bind(this)

        this.applyValueOfRadio = this.applyValueOfRadio.bind(this);

    }


    getAllProgramme() {
        ApiService.get("getprogram").then(response => {
            this.setState({ programme: response.data });
        })
    }

    updateProgramme() {

        ApiService.post('updateprogram', {
            idprogram: this.state.programme[0].idprogram,
            titleprogram: this.state.programme[0].titleprogram,
            sigle: this.state.programme[0].sigle,
            totalduration: this.state.programme[0].totalduration,
            intershipduration: this.state.programme[0].intershipduration,
            hasintership: this.state.programme[0].hasintership,
            level: this.state.programme[0].level,
            price: this.state.programme[0].price,
            conditionofaccecptance: this.state.programme[0].conditionofaccecptance,
            typeoftraining: this.state.programme[0].typeoftraining,
            timestartprogram: this.state.programme[0].timestartprogram,
            timeendprogram: this.state.programme[0].timeendprogram,
            academicstatus: this.state.programme[0].academicstatus,
            isactive: this.state.programme[0].isactive,

        })

    }
    checkedSubmitOrUpdate(event) {
        this.applyValueOfRadio();

        event.preventDefault();

        if (!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        } else {
            if (this.state.programme[0].idprogram != 0) {
                this.updateProgramme()
                this.setState({
                    ispdate: true
                })

            }
            else {
                this.addProgramme()
            }
        }
    }

    addProgramme() {

        ApiService.post('addProgram', {
            titleprogram: this.state.programme[0].titleprogram,
            sigle: this.state.programme[0].sigle,
            totalduration: this.state.programme[0].totalduration,
            intershipduration: this.state.programme[0].intershipduration,
            hasintership: this.state.programme[0].hasintership,
            level: this.state.programme[0].level,
            price: this.state.programme[0].price,
            conditionofaccecptance: this.state.programme[0].conditionofaccecptance,
            typeoftraining: this.state.programme[0].typeoftraining,
            timestartprogram: this.state.programme[0].timestartprogram,
            timeendprogram: this.state.programme[0].timeendprogram,
            academicstatus: this.state.programme[0].academicstatus,
            isactive: this.state.programme[0].isactive,
        })

    }

    onChangetitleprogram(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].titleprogram = value;
        this.setState({ statename })
    }


    onchangeSigle(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].sigle = value;
        this.setState({ statename })

    }
    onchangeTotalDuration(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].totalduration = value;
        this.setState({ statename })

    }

    onchangeIntershipDuration(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].intershipduration = value;
        this.setState({ statename })

    }
    onchangeLevel(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].level = value;
        this.setState({ statename })

    }
    onchangePrice(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].price = value;
        this.setState({ statename })

    }
    onchangeconditionofaccecptance(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].conditionofaccecptance = value;
        this.setState({ statename })

    }

    onchangetimestartprogram(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].timestartprogram = value;
        this.setState({ statename })

    }
    onchangetimeendprogram(event) {
        var statename = { ...this.state.programme }
        const value = function () {
            return this.target.value;
        }.bind(event)();
        statename[0].timeendprogram = value;
        this.setState({ statename })

    }

    getProgrammeById() {
        ApiService.post('getprogrambyid', {
            idprogram: this.props.idprogram
        }).then(response => {
            this.setState({
                programme: response.data
            })
        })

    }
    componentDidMount() {
        if (this.props.idprogram != undefined) {
            this.getProgrammeById()
        }


    }
    getRadioValue(theRadioGroup) {
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }
    applyValueOfRadio() {

        let hasintershipValue = this.getRadioValue('hasintership');
        let isactiveValue = this.getRadioValue('isactive');
        let academicstatusValue = this.getRadioValue('academicstatus');
        let typeoftrainingValue = this.getRadioValue('typeoftraining');

        var statename = { ...this.state.programme }

        statename[0].hasintership = hasintershipValue;
        this.setState({ statename })
        statename[0].isactive = isactiveValue;
        this.setState({ statename })
        statename[0].academicstatus = academicstatusValue;
        this.setState({ statename })
        statename[0].typeoftraining = typeoftrainingValue;
        this.setState({ statename })
    }
    returnInput(text, type, id, value, placeholder, onChange, pattern, classesdiv, classesinput, errorMessage, enableValidation, required) {
        return <InputComponentForm text={text} type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} pattern={enableValidation ? pattern : ""} classesdiv={classesdiv} classesinput={classesinput} required={required != undefined ? "required" : ""} errorMessage={errorMessage} spantext={required != undefined ? "*" : ""} />
    }
    render() {
        const { displayErrors } = this.state;
        return (
            <div className='container'>

                <form onSubmit={this.checkedSubmitOrUpdate} className={displayErrors ? 'was-validated' : ''} id='idfrom' noValidate>
                    <div className="form-group row justify-content-center">
                        {this.returnInput("Title of program :", "text", "namession", this.state.programme[0].titleprogram, "", this.onChangetitleprogram, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">
                        {this.returnInput("Sigle :", "text", "year", this.state.programme[0].sigle, "", this.onchangeSigle, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Total duration :", "text", "totalduration", this.state.programme[0].totalduration, "", this.onchangeTotalDuration, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-group row">
                            <RadioFormComponent legend="Program has a intership ?" id="hasintership" name="hasintership" options={this.state.yesno} checked={this.state.programme[0].hasintership} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Intership duration :", "text", "intershipduration", this.state.programme[0].intershipduration, "", this.onchangeIntershipDuration, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Level of study :", "text", "level", this.state.programme[0].level, "", this.onchangeLevel, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Price of program :", "text", "price", this.state.programme[0].price, "", this.onchangePrice, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Condition of acceptance :", "text", "conditition", this.state.programme[0].conditionofaccecptance, "", this.onchangeconditionofaccecptance, ".*", "col-md-4", "form-control", "Can't be empty", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">
                        {this.returnInput("Time start program :", "text", "datestartprogram", this.state.programme[0].timestartprogram, "YYYY/MM/DD", this.onchangetimestartprogram, "\\d{4}\\/\\d{2}/\\d{2}", "col-md-4", "form-control", "Invalide format, YYYY/MM/DD", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">

                        {this.returnInput("Time end program :", "text", "dateendprogram", this.state.programme[0].timeendprogram, "YYYY/MM/DD", this.onchangetimeendprogram, "\\d{4}\\/\\d{2}/\\d{2}", "col-md-4", "form-control", "Invalide format, YYYY/MM/DD", this.state.enableValidation, "required")}
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-group row">
                            <RadioFormComponent legend="Program is active ?" id="isactive" name="isactive" options={this.state.yesno} checked={this.state.programme[0].isactive} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">

                        <div className="form-group row">
                            <RadioFormComponent legend="Academic status ?" id="academicstatus" name="academicstatus" options={this.state.academicstatusValue} checked={this.state.programme[0].academicstatus} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">

                        <div className="form-group row">
                            <RadioFormComponent legend="Type of trainning ?" id="typeoftraining" name="typeoftraining" options={this.state.typeoftrainingValue} checked={this.state.programme[0].typeoftraining} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">

                        <button className="btn btn-success"> {this.props.idprogram != null ? 'update' : 'submit'}</button>
                    </div>
                </form>
            </div >
        );
    }
}
export default FormProgrammeContainer