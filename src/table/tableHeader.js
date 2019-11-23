import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const Table = ({data, filter, removeCar}) => {
  return (
    <thead style={{background: '#ccc', border: 'none'}}>
      <tr>
        <th>#</th>
        <th>AlbumId</th>
        <th>Thumbnail</th>
        <th>Title</th>
      </tr>
    </thead>
  )
}

export default Table;