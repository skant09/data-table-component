import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const TableHeader = ({data, filter}) => {
  return (
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
  )
}

export default TableHeader;