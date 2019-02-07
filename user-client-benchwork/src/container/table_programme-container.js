
import React, { Component } from "react";
import ApiService from "../service/api-service"
class TableProgrammeContainer extends Component {
    constructor() {
        super();

        this.state = ({
            programme: [],

        })
        this.getAllProgramme = this.getAllProgramme.bind(this)

    }

    getAllProgramme() {
        ApiService.get("getprogram").then(response => {
            this.setState({ programme: response.data });
        })
    }

    componentDidMount() {
        this.getAllProgramme()
    }

    changeisclickedit(id) {
        this.props.changeisclickedit(id)
    }
    render() {

        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>

                            <th>title program</th>
                            <th>sigle</th>
                            <th>total duration</th>
                            <th>has intership</th>
                            <th>intership duration</th>
                            <th>level</th>
                            <th>price</th>
                            <th>is active</th>
                            <th>condition of acceptance</th>
                            <th>type of training</th>
                            <th>time start program</th>
                            <th>time end program</th>
                            <th>academic status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.programme.map((value, cle) =>
                                <tr key={cle}>


                                    <td >{value.titleprogram}</td>
                                    <td >{value.sigle}</td>
                                    <td >{value.totalduration}</td>
                                    <td >{(value.hasintership == 2) ? 'yes' : 'no'}</td>
                                    <td >{value.intershipduration}</td>
                                    <td >{value.level}</td>
                                    <td >{value.price}</td>
                                    <td >{(value.isactive == 2) ? 'yes' : 'no'}</td>
                                    <td >{value.conditionofaccecptance}</td>
                                    <td >{value.nametraining}</td>
                                    <td >{value.timestartprogram}</td>
                                    <td >{value.timeendprogram}</td>
                                    <td >{value.nameacademicstatus}</td>
                                    <td><button onClick={() => this.changeisclickedit(value.idprogram)} className="btn btn-warning">edit</button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table >

            </div>
        );
    }
}
export default TableProgrammeContainer