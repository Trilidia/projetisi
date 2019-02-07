import React, { Component } from 'react'
import InfoStudentComponent from "component/info-student-component"
import UploadContainer from "container/upload-container"
class ConsultContainer extends Component {
    constructor() {
        super()
        this.state=({
            infoStudent:[],
        })

    }
    componentDidMount() {
        this.setState({infoStudent:this.props.student})
        
    }



    render() {
   
   console.log("fsdgsd"+this.state.infoStudent)  //eslint-disable-line
        return (
            <div className='container'>
                <InfoStudentComponent infoStudent={this.state.infoStudent}/>
                <UploadContainer />
            </div>

        )
    }
}


export default ConsultContainer
