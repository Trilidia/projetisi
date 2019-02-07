import React from 'react'

const FileItemComponent = ({ fileslist }) => (
  <table>
    <thead>
      <tr>
        <th>File Name</th>
      </tr>
    </thead>
    <tbody>
      {fileslist.map((row, index) => (
        <tr key={index}>
          <td>
            <a
              href={`http://192.168.0.41:8090/downloads?test=${row.filename}`}
              download
            >
              {row.filename}
            </a>
          </td>
          <td>
            <a href={`http://192.168.0.41:8090/deletes?delete=${row.filename}`}>
              DELETE
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default FileItemComponent
