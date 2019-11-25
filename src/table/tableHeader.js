import React from 'react';
// import './table.css'

const TableHeader = ({columns}) => {
  return (
    <thead style={{background: '#ccc', border: 'none', position: 'sticky', top: '0px'}}>
      <tr>
        {columns && columns.length && columns.map(column => {
          return (<th key={column.id}>
            { typeof column.label === 'string' ? column.label : null }
            { typeof column.label === 'function' ? column.label(column) : null }
          </th>)
        })}
      </tr>
    </thead>
  )
}

export default TableHeader;