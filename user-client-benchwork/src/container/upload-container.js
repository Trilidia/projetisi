import React, { Component } from 'react'
import axios from '../service/api-service'
import FileItemComponent from '../component/filelist-component'

class UploadContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedFile: '',
      fileslist: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getFilesList = this.getFilesList.bind(this)
    // this.deleteFile = this.deleteFile.bind(this)
  }

  getFilesList () {
    axios
      .get('/files', {
        params: {
          idstudent: 9
        }
      })
      .then(response => {
        this.setState({ fileslist: response.data })
      })
   
  }

  componentDidMount () {
    this.getFilesList()
  }

  onChange (e) {
    // update state when form inputs change
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] })
        break
      default:
        this.setState({ [e.target.name]: e.target.value })
    }
  }
  /* deleteFile () {
    axios
      .post('deletes')
      .then(function (response) {
        this.setState({
          fileURL: `http://localhost:8095/deletes?delete=${row.filename}`,
          uploadStatus: true
        })
      })
      .catch(function (error) {})
    this.getFilesList()
  } */
  onSubmit (e) {
    e.preventDefault()
    // event to submit the data to the server
    const FormData = require('form-data')
    var form = new FormData()

    const files = this.filesInput.files

    for (var key in files) {
      // check if this is a file:
      if (files.hasOwnProperty(key) && files[key] instanceof File) {
        form.append(key, files[key], 'multipart/form-data')
        
      }
    }

    axios
      .post('/', form)
      .then(function (response) {
        this.setState({
          fileURL: `http://192.168.0.41:8090/${body.file}`,
          uploadStatus: true
        })
      })
      .catch(function (error) {})
    this.getFilesList()
  }

  render () {
    if (this.state.fileslist.length === 0) {
      return false
    }

    return (
      <div>
        <form encType='multipart/form-data'>
          <input
            type='file'
            name='selectedFile'
            ref={input => {
              this.filesInput = input
            }}
            onChange={this.onChange}
            multiple
          />
          <button type='submit' onClick={this.onSubmit}>
            Submit
          </button>
        </form>
        <br />
        <h1>Files list</h1>
        <FileItemComponent fileslist={this.state.fileslist} />
      </div>
    )
  }
}
export default UploadContainer
