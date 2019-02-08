import React, { Component } from 'react'
import InfoStudentComponent from "component/info-student-component"
import UploadContainer from "container/upload-container"
import APIService from '../service/api-service'

class ConsultRecrutContainer extends Component {
    constructor() {
        super()
        this.state = ({

            infoStudent: 0,

        })
        this.getstudentbyid = this.getstudentbyid.bind(this);
    }
    componentDidMount() {
    
            this.getstudentbyid(this.props.idstudent)
    }

    getstudentbyid(id) {

        APIService.post('getstudentwithparamsbyid', {
            idstudent: id

        }).then(response => {
            this.setState({ infoStudent: response.data })
        })

    }



    render() {


        return (
            <div className='container'>

                {(this.state.infoStudent) == 0 ? null : <InfoStudentComponent infoStudent={this.state.infoStudent} />}
                <UploadContainer />
            </div>

        )
    }
}


export default ConsultRecrutContainer
