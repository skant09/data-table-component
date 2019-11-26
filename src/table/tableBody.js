import React from 'react';
import TableRow from './tableRow'
// import './table.css'

const TableBody = props => {
  const { rows } = props;
  return (
    <tbody>
      {rows && rows.length ? rows.map((datum, rowIndex) => {
        return (<TableRow key={rowIndex} rowIndex={rowIndex}  datum={datum} {...props} />)
      }): null}
    </tbody>
  )
}

export default TableBody;