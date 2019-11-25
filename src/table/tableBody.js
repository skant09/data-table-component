import React from 'react';
import TableRow from './tableRow'
// import './table.css'

const TableBody = ({data, columns, onRowClick, selectRows}) => {
  return (
    <tbody>
      {data.length ? data.map((datum, rowIndex) => {
        return (<TableRow key={rowIndex} {...{datum, rowIndex, onRowClick, columns, selectRows}} />)
      }): null}
    </tbody>
  )
}

export default TableBody;