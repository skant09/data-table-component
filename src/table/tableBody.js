import React from 'react';
import TableRow from './tableRow'
// import './table.css'

const TableBody = ({data, columns, onRowClick}) => {
  return (
    <tbody>
      {data.length ? data.map((datum, rowIndex) => {
        return (<TableRow key={rowIndex} {...{datum, rowIndex, onRowClick, columns}} />)
      }): null}
    </tbody>
  )
}

export default TableBody;