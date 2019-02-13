import React, { Component } from 'react'
import APIService from '../service/api-service'
import SelectComponent from "component/select-component";
import InputComponentForm from "component/inputform-component";
import TableStudentIsiComponent from "component/table-student-isi-component";
import { properties } from '../../properties';
import { imgdata } from '../utils/img-data';
import jsPDF from 'jspdf';

class AcceuilIsiContainer extends Component {
    constructor() {
        super()
        this.state = {
            students: [],
            student: [],
            studentById: null,
            idStudent: '',
            nameStudent: '',
            statuSearched: 0,
            verdictSearched: 0,
            status: [],
            verdict: [],
            statuToEdit: 0,
            verdictToEdit: 0,
            isFactured: 0,
            isBillPaid: 0,
            // phase: 0

        }

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStatut = this.onChangeStatut.bind(this);
        this.onChangeVerdict = this.onChangeVerdict.bind(this);
        this.getSelectAll = this.getSelectAll.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        //this.changePhaseToSession = this.changePhaseToSession.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    /*changePhaseToSession() {
        console.log("CHANGE STATE SESSION") // eslint-disable-line
        this.setState({ phase: 1 })
    }*/

    getSelectAll() {
        APIService.get('getstudent').then(response => {
            this.setState({ students: response.data })
        })
    }

    getAllStatus() {
        APIService.get('getallstatut').then(response => {
            this.setState({ status: response.data })
        })
    }
    getAllVerdict() {
        APIService.get('getallverdict').then(response => {
            this.setState({ verdict: response.data })
        })
    }



    componentDidMount() {
        this.getSelectAll()
        this.getAllStatus()
        this.getAllVerdict()
    }
    componentWillMount() {
        this.getSelectAll()
    }

    onChangeId(event) {
        this.setState({
            idStudent: event.target.value
        })
    }

    onChangeName(event) {
        this.setState({
            nameStudent: event.target.value
        })
    }

    onChangeStatut(event) {
        this.setState({
            statuSearched: event.target.value
        })
    }

    onChangeVerdict(event) {
        this.setState({
            verdictSearched: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        APIService.post('getstudentbyallfilter', {
            idnumber: this.state.idStudent,
            lastname: this.state.nameStudent,
            statut: this.state.statuSearched,
            verdict: this.state.verdictSearched
        }).then(response => {
            this.setState({ students: response.data })
        })
    }

    saveChanges(idstudent, verdict, status, isfactured, isbillpaid) {
        APIService.post('savechanges', {
            idstudent: idstudent,
            verdictid: verdict,
            statutid: status,
            isfactured: isfactured,
            isbillpaid: isbillpaid
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleClick(student) {

        let studentSelect = student;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //janvier est 0
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '/' + mm + '/' + dd;

        var doc = new jsPDF();
        doc.addImage(imgdata.data.imgData, 'JPEG', 0, 0, 210, 297);
        doc.setFont("Helvetica");
        doc.setFontSize(10);
        doc.text(163, 52.5, today);

        /***********************/
        /*personnal information*/
        /***********************/
        if (studentSelect.lastname.length > 25) {
            doc.setFontSize(8);
            doc.text(24, 66, this.capitalizeFirstLetter(studentSelect.lastname));
        } else {
            doc.text(24, 66, this.capitalizeFirstLetter(studentSelect.lastname));
        }
        doc.setFontSize(10);
        if (studentSelect.firstname.length > 25) {
            doc.setFontSize(8);
            doc.text(106, 66, this.capitalizeFirstLetter(studentSelect.firstname));
        } else {
            doc.text(106, 66, this.capitalizeFirstLetter(studentSelect.firstname));
        }
        doc.setFontSize(10);
        doc.text(24, 76, studentSelect.birthday);
        if (studentSelect.hasCAQorMIDI === 0) {
            doc.text(49.1, 84.6, "x");
        } else if (studentSelect.hasCAQorMIDI === 1) {
            doc.text(30.3, 84.6, "x");
        }
        doc.text(106, 76, studentSelect.idnumber);
        if (studentSelect.pobox != null) {
            doc.text(24, 99, studentSelect.pobox);
        }
        if (studentSelect.apt != null) {
            doc.text(69, 99, studentSelect.apt);
        }
        doc.setFontSize(10);
        doc.text(106, 99, studentSelect.streetno);
        if (studentSelect.streetname.length > 16 && studentSelect.streetname.length <= 20) {
            doc.setFontSize(8);
            doc.text(152, 99, studentSelect.streetname);
        } else if (studentSelect.streetname.length > 20) {
            doc.setFontSize(6);
            doc.text(152, 99, studentSelect.streetname);
        } else {
            doc.setFontSize(10);
            doc.text(152, 99, studentSelect.streetname);
        }
        doc.setFontSize(10);
        if (studentSelect.city.length > 18) {
            doc.setFontSize(8);
            doc.text(24, 108, studentSelect.city);
        } else if (studentSelect.city > 25) {
            doc.setFontSize(6);
            doc.text(24, 108, studentSelect.city);
        } else {
            doc.setFontSize(10);
            doc.text(24, 108, studentSelect.city);
        }
        doc.setFontSize(10);
        if (studentSelect.country.length > 14) {
            doc.setFontSize(8);
            doc.text(69, 108, studentSelect.country);
        } else if (studentSelect.country > 18) {
            doc.setFontSize(6);
            doc.text(69, 108, studentSelect.country);
        } else {
            doc.setFontSize(10);
            doc.text(69, 108, studentSelect.country);
        }
        doc.setFontSize(10);
        doc.text(106, 108, studentSelect.province);
        doc.text(152, 108, studentSelect.postalcode);

        /***************************/
        /*institutional information*/
        /***************************/
        doc.text(24, 124, properties.insitutionalInfo[0].name);
        doc.text(106, 124, properties.insitutionalInfo[0].institutionnumber);
        doc.text(24, 137, properties.insitutionalInfo[0].pobox);
        doc.text(69, 137, properties.insitutionalInfo[0].streetno);
        doc.text(106, 137, properties.insitutionalInfo[0].streetname);
        if (properties.insitutionalInfo[0].city.length > 18) {
            doc.setFontSize(8);
            doc.text(24, 146, properties.insitutionalInfo[0].city);
        } else if (properties.insitutionalInfo[0].city > 25) {
            doc.setFontSize(6);
            doc.text(24, 146, properties.insitutionalInfo[0].city);
        } else {
            doc.setFontSize(10);
            doc.text(24, 146, properties.insitutionalInfo[0].city);
        }
        doc.setFontSize(10);
        doc.text(69, 146, properties.insitutionalInfo[0].province);
        doc.text(106, 146, properties.insitutionalInfo[0].postalcode);
        doc.text(24, 156.5, properties.insitutionalInfo[0].phone);
        doc.text(76.5, 156.5, properties.insitutionalInfo[0].fax);
        doc.text(130.3, 154.7, "x");
        doc.text(24, 166, properties.insitutionalInfo[0].website);
        if (properties.insitutionalInfo[0].email.length > 25) {
            doc.setFontSize(8);
            doc.text(106, 166, properties.insitutionalInfo[0].email);
        } else if (properties.insitutionalInfo[0].email.length > 30) {
            doc.setFontSize(6);
            doc.text(106, 166, properties.insitutionalInfo[0].email);
        } else {
            doc.setFontSize(10);
            doc.text(106, 166, properties.insitutionalInfo[0].email);
        }
        doc.setFontSize(10);
        if (properties.insitutionalInfo[0].nameprimarycontact.length > 20) {
            doc.setFontSize(8);
            doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
        } else if (properties.insitutionalInfo[0].nameprimarycontact > 25) {
            doc.setFontSize(6);
            doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
        } else {
            doc.setFontSize(10);
            doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
        }
        doc.setFontSize(10);
        doc.text(69, 176.5, properties.insitutionalInfo[0].positionprimarycontact);
        doc.setFontSize(8);
        doc.text(107, 175.15, properties.insitutionalInfo[0].telprimarycontact);
        doc.setFontSize(10);
        doc.text(148, 176.5, properties.insitutionalInfo[0].extprimarycontact);
        if (properties.insitutionalInfo[0].namesecondarycontact.length > 20) {
            doc.setFontSize(8);
            doc.text(24, 186.5, properties.insitutionalInfo[0].namesecondarycontact);
        } else if (properties.insitutionalInfo[0].namesecondarycontact > 25) {
            doc.setFontSize(6);
            doc.text(24, 186.5, properties.insitutionalInfo[0].namesecondarycontact);
        } else {
            doc.setFontSize(10);
            doc.text(24, 186.5, properties.insitutionalInfo[0].namesecondarycontact);
        }
        doc.setFontSize(10);
        doc.text(69, 186.5, properties.insitutionalInfo[0].positionsecondarycontact);
        doc.setFontSize(8);
        doc.text(107, 185.15, properties.insitutionalInfo[0].telsecondarycontact);
        doc.setFontSize(10);
        doc.text(148, 186.5, properties.insitutionalInfo[0].extsecondarycontact);

        /*********************/
        /*program information*/
        /*********************/
        if (studentSelect.academicstatus === 1) {
            doc.text(30.4, 201.1, "x");
        } else if (studentSelect.academicstatus === 2) {
            doc.text(46.5, 201.1, "x");
        }
        doc.setFontSize(8);
        doc.text(106, 201.1, studentSelect.titleprogram + "-" + studentSelect.sigle);
        doc.setFontSize(10);
        doc.text(24, 209.5, studentSelect.level);
        if (studentSelect.typeoftraining === 1) {
            doc.text(111.5, 209.3, "x");
        } else if (studentSelect.typeoftraining === 2) {
            doc.text(128.2, 209.3, "x");
        } else if (studentSelect.typeoftraining === 3) {
            doc.text(142.7, 209.3, "x");
        } else if (studentSelect.typeoftraining === 4) {
            doc.text(160.2, 209.3, "x");
            doc.setFontSize(6);
            doc.text(170, 209, "infos test");
        }
        doc.setFontSize(10);
        if (studentSelect.isexchangestudent === 1) {
            doc.text(30.6, 217.8, "x");
        } else if (studentSelect.isexchangestudent === 0) {
            doc.text(46.4, 217.8, "x");
        }
        doc.setFontSize(10);
        doc.text(117, 218.5, studentSelect.price);
        if (studentSelect.isfeesprepaid === 1) {
            doc.text(162.6, 217.75, "x");
        } else if (studentSelect.isfeesprepaid === 0) {
            doc.text(171.8, 217.75, "x");
        }
        doc.setFontSize(10);
        doc.text(24, 231, studentSelect.totalduration);
        if (studentSelect.hasintership === 1) {
            doc.text(111.5, 227.2, "x");
            doc.setFontSize(8);
            doc.text(133, 227, studentSelect.intershipduration);
            doc.setFontSize(6);
            doc.text(138, 232, studentSelect.titleprogram);
            doc.setFontSize(10);
        } else if (studentSelect.hasintership === 0) {
            doc.text(111.5, 231.7, "x");
        }
        if (studentSelect.conditionofaccecptance !== null) {
            doc.text(24, 242.5, studentSelect.conditionofaccecptance);
        }
        doc.text(47, 252, studentSelect.timestartprogram);
        doc.text(47, 256, studentSelect.timeendprogram);

        //date expiration
        var todayPlusMonths = new Date();
        var day = todayPlusMonths.getDate();
        var month = todayPlusMonths.getMonth() + properties.monthsToAdd;
        var year = todayPlusMonths.getFullYear();
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        todayPlusMonths = year + "/" + month + "/" + day;
        doc.setFontSize(12);
        doc.text(134, 255, todayPlusMonths);

        //met le nom du fichier en lowercase avec le nom du student choisit
        if (studentSelect.lastname !== undefined && studentSelect.firstname !== undefined) {
            var firstNameLowerCase = studentSelect.firstname.toLowerCase();
            var lastNameLowerCase = studentSelect.lastname.toLowerCase();
            doc.save(lastNameLowerCase + "-" + firstNameLowerCase + "-loa.pdf");
        } else {
            doc.save("loa.pdf")
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group col-md-2 mb-2">
                        <img src={require('../images/isi.png')} />
                        <form onSubmit={this.handleSubmit}>
                            <h2>Search</h2>
                            <InputComponentForm
                                id="id"
                                type="text"
                                value={this.state.idStudent}
                                onChange={this.onChangeId}
                                classesinput="form-control"
                                placeholder="Id"

                            />
                            <InputComponentForm
                                id="name"
                                type="text"
                                value={this.state.nameStudent}
                                onChange={this.onChangeName}
                                classesinput="form-control"
                                placeholder="Name"
                            />
                            <br />
                            <SelectComponent
                                name="statut"
                                className="form-control"
                                text="Status"
                                id="status"
                                type="text"
                                options={this.state.status}
                                onChange={this.onChangeStatut}
                            />
                            <SelectComponent
                                name="verdict"
                                className="form-control"
                                text="Verdict"
                                id="verdict"
                                type="text"
                                options={this.state.verdict}
                                onChange={this.onChangeVerdict}
                            />
                            <br />
                            <button className="btn btn-secondary col-md-12 mb-12 mt-100">Display</button>
                            <br />
                        </form>
                        <br />
                        <button className="btn btn-secondary col-md-12 mb-12" onClick={this.getSelectAll}>Display all</button>
                    </div>
                    <div className="col-md-10 mb-10">
                        <TableStudentIsiComponent
                            students={this.state.students}
                            verdict={this.state.verdict}
                            status={this.state.status}
                            createpdf={this.handleClick}
                            writeComment={this.props.setIdStudentComment}
                            consultstudent={this.props.setStudentInfo}
                            setStudentEdit={this.props.setStudentEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }

}
export default AcceuilIsiContainer
