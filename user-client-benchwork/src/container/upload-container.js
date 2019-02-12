import React, { Component } from 'react'
import axios from '../service/api-service'
import FileItemComponent from '../component/filelist-component'

class GlobalContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedFile: '',
      fileName: '',
      uploadStatus: '',
      fileslistacademic: [],
      identityfileslist: [],
      selectedOption: '',
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

  componentDidMount () {
    console.log('PD didmount') //eslint-disable-line
    this.getFilesListAcademic()
    this.getIdentityFilesList()
  }

  onRadioChange (e) {
    this.setState({
      selectedOption: e.currentTarget.value
    })
  }
  getFilesListAcademic () {
    axios
      .get('/academicfiles', {
        params: {
          studentid: 9
        }
      })
      .then(response => {
        this.setState({ fileslistacademic: response.data })
      })
  }
  getIdentityFilesList () {
    axios
      .get('/identityfiles', {
        params: {
          studentid: 9
        }
      })
      .then(response => {
        this.setState({ identityfileslist: response.data })
      })
  }

  onChange (e) {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] })
        break
      default:
        this.setState({ [e.target.name]: e.target.value })
    }
  }
  deleteFile (fileName) {
    console.log('enter1 ' + fileName) //eslint-disable-line
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
  onSubmit () {
    const FormData = require('form-data')
    var form = new FormData()
    const { selectedFile, selectedOption, fileName } = this.state
    form.append('selectedOption', selectedOption)
    form.append('selectedFile', selectedFile)
    form.append('fileName', fileName)
    axios.post('/', form).then(response => {
      this.setState({ uploadStatus: response.data })
    })
    this.getFilesListAcademic()
    this.getIdentityFilesList()
  }
  render () {
    const { fileName } = this.state
    return (
      <div>
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
        />
      </div>
    )
  }
}
export default GlobalContainer
