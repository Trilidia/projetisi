import React, { Component } from "react";

import TestComponent from 'component/test-component';
import jsPDF from 'jspdf';
import API_SERVICE from 'service/api-service';
import { properties } from '../../properties';
import { imgdata } from '../utils/img-data';

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            student: [],
        }
    }

    componentDidMount() {
        API_SERVICE.post('getstudentbyid', {
            idstudent: 7
        }).then(response => { this.setState({ student: response.data }) });
    }

    handleClick() {

        console.log(this.state.student); //eslint-disable-line

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
        if (this.state.student[0].lastname.length > 24) {
            doc.setFontSize(8);
            doc.text(24, 66, this.state.student[0].lastname);
        }
        doc.text(24, 66, this.state.student[0].lastname);
        if (this.state.student[0].firstname.length > 24) {
            doc.setFontSize(8);
            doc.text(106, 66, this.state.student[0].firstname);
        }
        doc.text(106, 66, this.state.student[0].firstname);
        doc.text(24, 76, this.state.student[0].birthday);
        if (this.state.student[0].hasCAQorMIDI === 0) {
            doc.text(49.1, 84.6, "x");
        } else if (this.state.student[0].hasCAQorMIDI === 1) {
            doc.text(30.3, 84.6, "x");
        }
        doc.text(106, 76, this.state.student[0].idnumber);
        if (this.state.student[0].pobox != null) {
            doc.text(24, 99, this.state.student[0].pobox);
        }
        if (this.state.student[0].apt != null) {
            doc.text(69, 99, this.state.student[0].apt);
        }
        doc.text(106, 99, this.state.student[0].streetno);
        if (this.state.student[0].streetname.length > 16) {
            doc.setFontSize(6);
            doc.text(152, 99, this.state.student[0].streetname);
        } else if (this.state.student[0].streetname.length > 20) {
            doc.setFontSize(4);
            doc.text(152, 99, this.state.student[0].streetname);
        }
        doc.text(152, 99, this.state.student[0].streetname);
        if (this.state.student[0].city.length > 18) {
            doc.setFontSize(8);
            doc.text(24, 108, this.state.student[0].city);
        } else if (this.state.student[0].city > 25) {
            doc.setFontSize(6);
            doc.text(24, 108, this.state.student[0].city);
        }
        doc.text(24, 108, this.state.student[0].city);
        if (this.state.student[0].country.length > 14) {
            doc.setFontSize(8);
            doc.text(69, 108, this.state.student[0].country);
        } else if (this.state.student[0].country > 18) {
            doc.setFontSize(6);
            doc.text(69, 108, this.state.student[0].country);
        }
        doc.text(69, 108, this.state.student[0].country);
        doc.text(106, 108, this.state.student[0].province);
        doc.text(152, 108, this.state.student[0].postalcode);

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
        } else if (this.state.student[0].city > 25) {
            doc.setFontSize(6);
            doc.text(24, 146, properties.insitutionalInfo[0].city);
        }
        doc.text(24, 146, properties.insitutionalInfo[0].city);
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
        }
        doc.text(106, 166, properties.insitutionalInfo[0].email);
        if (properties.insitutionalInfo[0].nameprimarycontact.length > 20) {
            doc.setFontSize(8);
            doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
        } else if (properties.insitutionalInfo[0].nameprimarycontact > 25) {
            doc.setFontSize(6);
            doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
        }
        doc.text(24, 176.5, properties.insitutionalInfo[0].nameprimarycontact);
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
        }
        doc.text(24, 186.5, properties.insitutionalInfo[0].namesecondarycontact);
        doc.text(69, 186.5, properties.insitutionalInfo[0].positionsecondarycontact);
        doc.setFontSize(8);
        doc.text(107, 185.15, properties.insitutionalInfo[0].telsecondarycontact);
        doc.setFontSize(10);
        doc.text(148, 186.5, properties.insitutionalInfo[0].extsecondarycontact);

        /*********************/
        /*program information*/
        /*********************/
        if (this.state.student[0].academicstatus === 1) {
            doc.text(30.4, 201.1, "x");
        } else if (this.state.student[0].academicstatus === 0) {
            doc.text(46.5, 201.1, "x");
        }
        doc.setFontSize(8);
        doc.text(106, 201.1, this.state.student[0].titleprogram + "-" + this.state.student[0].sigle);
        doc.setFontSize(10);
        doc.text(24, 209.5, this.state.student[0].level);
        if (this.state.student[0].typeoftraining === 1) {
            doc.text(111.5, 209.3, "x");
        } else if (this.state.student[0].typeoftraining === 2) {
            doc.text(128.2, 209.3, "x");
        } else if (this.state.student[0].typeoftraining === 3) {
            doc.text(142.7, 209.3, "x");
        } else if (this.state.student[0].typeoftraining === 4) {
            doc.text(160.2, 209.3, "x");
            doc.setFontSize(6);
            doc.text(170, 209, "infos test");
        }
        doc.setFontSize(10);
        if (this.state.student[0].isexchangestudent === 1) {
            doc.text(30.6, 217.8, "x");
        } else if (this.state.student[0].isexchangestudent === 0) {
            doc.text(46.4, 217.8, "x");
        }
        doc.text(117, 218.5, this.state.student[0].price);
        if (this.state.student[0].isfeesprepaid === 1) {
            doc.text(162.6, 217.75, "x");
        } else if (this.state.student[0].isfeesprepaid === 0) {
            doc.text(171.8, 217.75, "x");
        }
        doc.text(24, 231, this.state.student[0].totalduration);
        if (this.state.student[0].hasintership === 1) {
            doc.text(111.5, 227.2, "x");
        } else if (this.state.student[0].hasintership === 0) {
            doc.text(111.5, 231.7, "x");
        }
        doc.setFontSize(8);
        doc.text(133, 227, this.state.student[0].intershipduration);
        doc.setFontSize(6);
        doc.text(138, 232, this.state.student[0].titleprogram);
        doc.setFontSize(10);
        if (this.state.student[0].conditionofaccecptance !== null) {
            doc.text(24, 242.5, this.state.student[0].conditionofaccecptance);
        }
        doc.text(47, 252, this.state.student[0].timestartprogram);
        doc.text(47, 256, this.state.student[0].timeendprogram);

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
        if (this.state.student[0].lastname !== undefined && this.state.student[0].firstname !== undefined) {
            var firstNameLowerCase = this.state.student[0].firstname.toLowerCase();
            var lastNameLowerCase = this.state.student[0].lastname.toLowerCase();
            doc.save(lastNameLowerCase + "-" + firstNameLowerCase + "-loa.pdf");
        } else {
            doc.save("loa.pdf")
        }
    }

    render() {
        return (
            <TestComponent
                onClick={this.handleClick}
            />
        );
    }
}

export default FormContainer;