
import React from 'react'

const FileItemComponent = ({
  fileslistacademic,
  identityfileslist,
  deleteFile,
  fileName,
  onChange,
  radioValue1,
  radioValue2,
  onRadioChange,
  selectedOption,
  submitFile,
  displayErrors
  //idstudent  <input type='text' name='idstudent' value={idstudent} />
}) => (
  <div className="container">
    <form encType='multipart/form-data'  className={displayErrors ? 'was-validated' : ''} noValidate>
     <div className="container">
        <h4>Step 1</h4>
        <label>Chose the name of file</label>
    <input type='text' name='fileName' value={fileName} onChange={onChange} form-control className="form-control col-md-3" required/>
    <br/>
    <h4>Step 2</h4>
        <input type='file' name='selectedFile' onChange={onChange} required />
        <br/>
        <br/>
    <h4>Step 3</h4>
        <div className="custom-control custom-radio">
          <input className="custom-control-input" type="radio" name='filetype' id="academicfile" value={radioValue1} onChange={onRadioChange} required/>
          <label className="custom-control-label" htmlFor="academicfile">
            Academic File
  </label>
        </div>
        <div className="custom-control custom-radio">
          <input className="custom-control-input" type="radio" name='filetype' id="identityfile" value={radioValue2} onChange={onRadioChange} required/>
          <label className="custom-control-label" htmlFor="identityfile">
            Identity File
  </label>
        </div>
        <br/>
        <button type='button'className="btn btn-danger btn-lg" onClick={() => submitFile()}>Submit</button>
        </div>
      <br />
      <h3>Files list</h3>
      <table>
        <thead>
          <tr>
            <th>Academic documents</th>
          </tr>
        </thead>
        <tbody>
          {fileslistacademic.map((row, index) => (
            <tr key={index}>
              <td>
                <a
                  href={`http://192.168.0.41:8090/downloads?test=${row.filename}`}
                  download
                >
                  {row.filenameshowedtouser}.{row.extensionfile}
                </a>
              </td>
              <td>
                <button className="btn btn-secondary btn-sm" type='button'
                  onClick={() => deleteFile(`${row.filename}`)}>DELETE</button>

              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>Identity documents</th>
          </tr>
        </thead>
        <tbody>
          {identityfileslist.map((row, index) => (
            <tr key={index}>
              <td>
                <a
                  href={`http://192.168.0.41:8090/downloads?test=${row.filename}`}
                  download
                >
                  {row.filenameshowedtouser}.{row.extensionfile}
                </a>
              </td>
              <td>
                <button className="btn btn-secondary btn-sm" type='button'
                  onClick={() => deleteFile(`${row.filename}`)}>DELETE</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
    </div>
  )

export default FileItemComponent


/*
 Please enter the name of your file
    <input type='text' name='fileName' value={fileName} onChange={onChange} />
      <input type='file' name='selectedFile' onChange={onChange} />
      <input
        type='radio'
        value={radioValue1}
        name='filetype'
        onChange={onRadioChange}
      />
      Academic File
    <input
        type='radio'
        value={radioValue2}
        name='filetype'
        onChange={onRadioChange}
      />
      Identity File
    <h3>Selected Option: {selectedOption}</h3>
      <button type='button' onClick={() => submitFile()}>
        Submit
    </button>
*/