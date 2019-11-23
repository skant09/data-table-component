import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const TableHeader = ({data, columns}) => {
  return (
    <tbody>
      {data.map((datum, rowIndex) => {
        return (<tr key={rowIndex}>
          {columns.map((column, columnIndex) => {
            return (<td>{rowIndex+''+columnIndex}</td>)
          })}
        </tr>)
      })}
    </tbody>
  )
}

export default TableHeader;