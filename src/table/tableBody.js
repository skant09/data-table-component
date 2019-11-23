import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const TableBody = ({data, columns}) => {
  return (
    <tbody>
      {data.length && data.map((datum, rowIndex) => {
        return (<tr key={rowIndex}>
          {columns.length && columns.map((column, columnIndex) => {
            return (<td key={rowIndex+''+columnIndex}>{rowIndex+''+columnIndex}</td>)
          })}
        </tr>)
      })}
    </tbody>
  )
}

export default TableBody;