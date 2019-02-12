
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
    componentWillMount(){
          this.getAllProgramme()
    }

    changeisclickedit(id) {
        this.props.changeisclickedit(id)
    }
    render() {

        return (
            <div className="table-responsive-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>

                            <th scope="col">Title program</th>
                            <th scope="col">Sigle</th>
                            <th scope="col">Total duration</th>
                            <th scope="col">Has intership</th>
                            <th scope="col">Intership duration</th>
                            <th scope="col">Level</th>
                            <th scope="col">Tuitions fees</th>
                            <th scope="col">Is active</th>
                            <th scope="col">Condition of acceptance</th>
                            <th scope="col">Type of training</th>
                            <th scope="col">Time start program</th>
                            <th scope="col">Time end program</th>
                            <th scope="col">Academic status</th>
                            <th scope="col">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.programme.map((value, cle) =>
                                <tr key={cle}className={(value.isactive == 2) ? '' : 'table-active'}>


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
                                    <td><button onClick={() => this.changeisclickedit(value.idprogram)} className="btn btn-outline-warning">Edit</button></td>

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