import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const TableBody = ({data, columns}) => {
  return (
    <tbody>
      {data.length ? data.map((datum, rowIndex) => {
        return (<tr key={rowIndex}>
          {columns.length && columns.map((column, columnIndex) => {
            return (<td key={rowIndex+''+columnIndex} style={{textAlign: column.textAlign}}>{column.element(datum)}</td>)
          })}
        </tr>)
      }): null}
    </tbody>
  )
}

export default TableBody;