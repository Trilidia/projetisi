
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
    componentWillMount(){
        this.getAllSessioon()
    }

    changeisclickedit(id) {
        this.props.changeisclickedit(id)
    }
    render() {

        return (

            <div className="w-75 container">

                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col" className="text-center">Name</th>
                            <th scope="col" className="text-center">Year</th>
                            <th scope="col" className="text-center">Start date</th>
                            <th scope="col" className="text-center">Completion date</th>
                            <th scope="col" className="text-center">Is active</th>
                            <th scope="col" className="text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.session.map((value, cle) =>
                                <tr key={cle}>
                                    <td className="text-center">{value.namesession}</td>
                                    <td className="text-center">{value.yearsession}</td>
                                    <td className="text-center">{value.datestartsession}</td>
                                    <td className="text-center">{value.dateendsession}</td>
                                    <td className="text-center">{(value.isactive == 1) ? 'true' : 'false'}</td>
                                    <td className="text-center"><button onClick={() => this.changeisclickedit(value.idsession)} className="btn btn-outline-warning" >Edit</button></td>
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