import React from 'react';
import { connect } from 'react-redux'
// import './table.css'

const TableHeader = ({columns}) => {
  return (
    <thead style={{background: '#ccc', border: 'none'}}>
      <tr>
        {columns.length && columns.map(column => {
          return (<th key={column.id}>{column.label}</th>)
        })}
      </tr>
    </thead>
  )
}

export default TableHeader;