import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const Table = (props) => {
  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}}>
      <table style={{width: '100%'}}>
        <thead style={{background: '#ccc', border: 'none'}}>
          <tr>
            <th>#</th>
            <th>AlbumId</th>
            <th>Thumbnail</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1}>
            <td>1</td>
            <td>1</td>
            <td>Thumbnail</td>
            <td>Title</td>
          </tr>
          <tr key={2}>
            <td>1</td>
            <td>1</td>
            <td>Thumbnail</td>
            <td>Title</td>
          </tr>
          <tr key={3}>
            <td>1</td>
            <td>1</td>
            <td>Thumbnail</td>
            <td>Title</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;