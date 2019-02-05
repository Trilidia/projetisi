import React, { Component } from 'react'
import APIService from '../service/api-service'
import SelectComponent from "component/select-component";
import InputComponent from "component/input-component";
import TableStudentComponent from "component/table-student-component";

class AcceuilRecruteurContainer extends Component {
    constructor() {
        super()
        this.state = {
            students: [],
            studentById: null,
            idStudent: '',
            nameStudent: '',
            statuSearched: 0,
            verdictSearched:0,
            status: [],
            verdict: [],
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStatut = this.onChangeStatut.bind(this);
        this.onChangeVerdict = this.onChangeVerdict.bind(this);
        this.getSelectAll = this.getSelectAll.bind(this);

    }
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

    render() {
       // this.getSelectAll();
        return (
            <div className="container-fluid">
            <button type="button" className="btn btn-secondary btn-lg" onClick={()=> this.props.clickOnEdit(0)}>New Student</button>
                <div className="row">
                    <div className="form-group col-md-2 mb-2">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Search</h2>
                            <InputComponent
                                text="Id"
                                id="id"
                                type="text"
                                value={this.state.idStudent}
                                onChange={this.onChangeId}
                                className="form-control"
                            />

                            <InputComponent
                                text="Name"
                                id="name"
                                type="text"
                                value={this.state.nameStudent}
                                onChange={this.onChangeName}
                                className="form-control"
                            />

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

                            <button className="btn btn-secondary col-md-12 mb-12">Display</button>
                            
                        </form>
                        <button className="btn btn-secondary col-md-12 mb-12"  onClick={this.getSelectAll}>Display all</button>
                       
                    </div>
                    <div className="col-md-10 mb-10">
                        <TableStudentComponent
                        students={this.state.students} clickOnEdit={this.props.clickOnEdit}
                        />

                    </div>
                </div>
            </div>
        )
    }

}
export default AcceuilRecruteurContainer
