import React, { Component } from 'react'
import axios from '../service/api-service'
import FileItemComponent from '../component/filelist-component'

class UploadContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedFile: '',
      fileName: '',
      uploadStatus: '',
      fileslistacademic: [],
      identityfileslist: [],
      selectedOption: '',
      idstudent: '',
      studentid: '',
      identityacademicfile: [
        { value: 0, label: 'Identity file' },
        { value: 1, label: 'Academic file' }
      ]
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getFilesListAcademic = this.getFilesListAcademic.bind(this)
    this.getIdentityFilesList = this.getIdentityFilesList.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
    this.onRadioChange = this.onRadioChange.bind(this)
  }

  componentDidMount() {
    console.log('PD didmount') //eslint-disable-line
    this.getFilesListAcademic()
    this.getIdentityFilesList()
    this.forceUpdate()
  }

  onRadioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    })
  }
  getFilesListAcademic() {
    //console.log("TEST PROPS INFOSTUDENT" + this.props.infoStudent) // eslint-disable-line
    axios
      .get('/academicfiles', {
        params: {
          studentid: this.props.infoStudent
        }
      })
      .then(response => {
        this.setState({ fileslistacademic: response.data })
      })
  }
  getIdentityFilesList() {
    //console.log("TEST PROPS INFOSTUDENT" + this.props.infoStudent) // eslint-disable-line
    axios
      .get('/identityfiles', {
        params: {
          studentid: this.props.infoStudent
        }
      })
      .then(response => {
        this.setState({ identityfileslist: response.data })
      })
  }

  onChange(e) {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] })
        break
      default:
        this.setState({ [e.target.name]: e.target.value })
    }
  }
  deleteFile(fileName) {
    // console.log('enter1 ' + fileName) //eslint-disable-line
    axios
      .post('deletes', {
        fileURL: fileName
      })
      .then(response => {
        this.setState({ uploadStatus: response.data })
      })
    this.getFilesListAcademic()
    this.getIdentityFilesList()
  }

  onSubmit() {
    console.log("ppppppppppp" + this.props.infoStudent) //eslint-disable-line
    let studentid = this.props.infoStudent
    console.log(studentid)//eslint-disable-line
    const FormData = require('form-data')
    let form = new FormData()

    const { selectedFile, selectedOption, fileName } = this.state
    form.append('selectedOption', selectedOption)
    form.append('selectedFile', selectedFile)
    form.append('fileName', fileName)
    form.append('studentid', studentid)
    axios.post('/', form)

      .then(response => {
        console.log("retour de la requete upload serveur" + response.data) //eslint-disable-line
        this.setState({ uploadStatus: response.data })
        this.getFilesListAcademic()
        this.getIdentityFilesList()
      })


  }
  render() {
    const { fileName } = this.state
    console.log("TEST VALUE IDSTUDENT" + this.props.infoStudent) //eslint-disable-line
    return (
      <div>
        {this.state.uploadStatus}
        <FileItemComponent
          fileslistacademic={this.state.fileslistacademic}
          identityfileslist={this.state.identityfileslist}
          deleteFile={this.deleteFile}
          fileName={fileName}
          onChange={this.onChange}
          radioValue1={this.state.identityacademicfile[1].value}
          radioValue2={this.state.identityacademicfile[0].value}
          onRadioChange={this.onRadioChange}
          selectedOption={this.state.selectedOption}
          submitFile={this.onSubmit}
          idstudent={this.props.infoStudent}
        />
      </div>
    )
  }
}
export default UploadContainer
