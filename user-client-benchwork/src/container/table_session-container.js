import TableComponent from "component/table-component";
import React, { Component } from "react";
import ApiService from "../service/api-service"
class TableSessionContainer extends Component {
    constructor() {
        super();

        this.state = ({
            session: [],


        })
        this.getAllSessioon = this.getAllSessioon.bind(this)


    }

    getAllSessioon() {
        ApiService.get("getsession").then(response => {
            this.setState({ session: response.data });
        })
    }


    componentDidMount() {
        this.getAllSessioon()
    }

    changeisclickedit(id) {
        this.props.changeisclickedit(id)
    }
    render() {

        return (

            <div className="table-responsive-sm">

                <table className="table">
                    <thead>
                        <tr>

                            <th>name</th>
                            <th>year</th>
                            <th>datestart</th>
                            <th>dateend</th>
                            <th>isactive</th>
                            <th>editer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.session.map((value, cle) =>
                                <tr key={cle}>


                                    <td >{value.namesession}</td>
                                    <td >{value.yearsession}</td>
                                    <td >{value.datestartsession}</td>
                                    <td >{value.dateendsession}</td>
                                    <td >{(value.isactive == 1) ? 'true' : 'false'}</td>
                                    <td><button onClick={() => this.changeisclickedit(value.idsession)} >edit</button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table >

            </div>
        );
    }
}
export default TableSessionContainer