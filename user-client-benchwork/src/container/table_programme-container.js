
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
    componentWillMount() {
        this.getAllProgramme()
    }

    changeisclickedit(id) {
        this.props.changeisclickedit(id)
    }
    render() {

        return (
            <div className="table-responsive-sm-12">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Sigle</th>
                            <th scope="col" className="text-center">Title program</th>
                            <th scope="col" className="text-center">Total duration</th>
                            <th scope="col" className="text-center">Has intership</th>
                            <th scope="col" className="text-center">Intership duration</th>
                            <th scope="col" className="text-center">Level</th>
                            <th scope="col" className="text-center">Tuitions fees</th>
                            <th scope="col" className="text-center">Admission requirements</th>
                            <th scope="col" className="text-center">Type of training</th>
                            <th scope="col" className="text-center">Start date</th>
                            <th scope="col" className="text-center">Completion date</th>
                            <th scope="col" className="text-center">Academic status</th>
                            <th scope="col" className="text-center">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.programme.map((value, cle) =>
                                <tr key={cle} className={(value.isactive == 1) ? 'table' : 'table-active'}>

                                    <td className="text-center">{value.sigle}</td>
                                    <td className="text-center">{value.titleprogram}</td>
                                    <td className="text-center">{value.totalduration}</td>
                                    <td className="text-center" >{(value.hasintership == 1) ? 'yes' : 'no'}</td>
                                    <td className="text-center">{value.intershipduration}</td>
                                    <td className="text-center">{value.level}</td>
                                    <td className="text-center">{value.price}</td>
                                    <td className="text-center">{value.conditionofaccecptance}</td>
                                    <td className="text-center">{value.nametraining}</td>
                                    <td className="text-center">{value.timestartprogram}</td>
                                    <td className="text-center">{value.timeendprogram}</td>
                                    <td className="text-center">{value.nameacademicstatus}</td>
                                    <td className="align-middle"><button onClick={() => this.changeisclickedit(value.idprogram)} className="btn btn-outline-warning">Edit</button></td>

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