
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
  //idstudent  <input type='text' name='idstudent' value={idstudent} />
}) => (
    <form encType='multipart/form-data'>
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
      <br />
      <h1>Academic Files list</h1>
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
                <button
                  type='button'
                  onClick={() => deleteFile(`${row.filename}`)}
                >
                  DELETE
              </button>
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
                <button
                  type='button'
                  onClick={() => deleteFile(`${row.filename}`)}
                >
                  DELETE
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  )

export default FileItemComponent
